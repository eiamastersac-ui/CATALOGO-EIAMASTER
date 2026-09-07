#!/usr/bin/env node
/**
 * Crea una plantilla nueva a partir de src/plantillas/_boilerplate/.
 *
 * Uso:
 *   npm run nueva-plantilla -- --id barberia-clasica --titulo "Barberia Clasica" --categoria servicios
 *
 * Opciones:
 *   --id         (obligatorio) kebab-case. Es el nombre de la carpeta y la URL.
 *   --titulo     (obligatorio) Titulo visible en la tarjeta.
 *   --categoria  (obligatorio) kebab-case. Agrupa en los filtros.
 *   --descripcion / --desc   Texto de la tarjeta. Default generico.
 *   --destacada              Marca la plantilla como "Popular".
 *
 * No toca ningun index.html ni src/pages/. Al terminar, `npm run dev`
 * ya muestra la tarjeta y la pagina /plantillas/<id>/.
 */
import { existsSync } from 'node:fs';
import { cp, readFile, writeFile, readdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const dirPlantillas = path.join(raiz, 'src', 'plantillas');
const dirBoilerplate = path.join(dirPlantillas, '_boilerplate');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const clave = a.slice(2);
    const sig = argv[i + 1];
    if (!sig || sig.startsWith('--')) {
      args[clave] = true;
    } else {
      args[clave] = sig;
      i++;
    }
  }
  return args;
}

function abortar(msg) {
  console.error(`\n  x ${msg}\n`);
  process.exit(1);
}

const args = parseArgs(process.argv.slice(2));
const id = args.id;
const titulo = args.titulo;
const categoria = args.categoria;
const descripcion =
  args.descripcion || args.desc || 'Plantilla nueva lista para personalizar.';
const destacada = Boolean(args.destacada);

if (!id || !titulo || !categoria) {
  abortar(
    'Faltan datos. Ej: npm run nueva-plantilla -- --id mi-plantilla --titulo "Mi Plantilla" --categoria servicios',
  );
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) {
  abortar(`El --id "${id}" debe ser kebab-case (letras minusculas, numeros y guiones).`);
}

const destino = path.join(dirPlantillas, id);
if (existsSync(destino)) abortar(`Ya existe src/plantillas/${id}/`);
if (!existsSync(dirBoilerplate)) abortar('No se encontro src/plantillas/_boilerplate/');

// 1. Copiar el boilerplate.
await cp(dirBoilerplate, destino, { recursive: true });

// 2. Quitar archivos que no van en una plantilla real.
for (const f of ['LEEME.md', 'ficha.example.json']) {
  const p = path.join(destino, f);
  if (existsSync(p)) await rm(p);
}

// 3. Escribir la ficha.json.
const ficha = {
  titulo,
  categoria,
  descripcion,
  thumbnail: `/previews/${id}.webp`,
  tags: [],
  paleta: [],
  destacada,
  orden: 100,
};
await writeFile(
  path.join(destino, 'ficha.json'),
  JSON.stringify(ficha, null, 2) + '\n',
  'utf8',
);

// 4. Renombrar la clase wrapper .tpl-base -> .tpl-<id> en estilos.css y Plantilla.astro.
for (const archivo of ['estilos.css', 'Plantilla.astro']) {
  const p = path.join(destino, archivo);
  const original = await readFile(p, 'utf8');
  await writeFile(p, original.replaceAll('tpl-base', `tpl-${id}`), 'utf8');
}

// 5. Aviso sobre previews.
const previews = await readdir(path.join(raiz, 'public', 'previews')).catch(() => []);
const faltaPreview = !previews.includes(`${id}.webp`);

console.log(`\n  ok  Plantilla creada en src/plantillas/${id}/`);
console.log(`      - ficha.json lista (categoria: ${categoria})`);
console.log(`      - wrapper CSS: .tpl-${id}`);
console.log('      - secciones en secciones/ (edita libremente)');
if (faltaPreview) {
  console.log(`\n  !   Falta public/previews/${id}.webp (la tarjeta usara el placeholder).`);
}
console.log('\n  Siguiente:  npm run dev   ->  aparece la tarjeta y /plantillas/' + id + '/\n');
