# Catálogo de Plantillas Web (Showroom) — Astro

Showroom interactivo y modular desarrollado 100% en **Astro**, diseñado para exhibir, explorar y desplegar plantillas web independientes y de alto rendimiento.

![Catálogo de Plantillas](./assets/preview.png)

---

## 🚀 Características Principales

- **Arquitectura Basada en Astro**: Todo el catálogo y las plantillas se ensamblan en **tiempo de compilación (SSG)**. El contenido se entrega como HTML estático puro, ultra rápido, accesible y sin dependencia de llamadas asíncronas (`fetch`) en tiempo de ejecución.
- **27 Plantillas Web Profesionales**: Diseños completos adaptados a diversos sectores comerciales, de servicios y retail.
- **Aislamiento Total de Estilos (Zero CSS Collisions)**:
  - Los estilos de cada sección están protegidos por el scoping automático de Astro.
  - Las variables y tokens de diseño de cada plantilla viven encapsulados bajo su propio contenedor `.tpl-<id>`.
  - El diseño del portal del catálogo está completamente separado del diseño de cada plantilla individual.
- **Auto-registro Inteligente**: Cada plantilla contiene su archivo de configuración `ficha.json`. Astro detecta y registra automáticamente las nuevas plantillas en el catálogo principal y en la barra de filtros por categoría.

---

## 📦 Colección de Plantillas (27 Disponibles)

El catálogo incluye 27 soluciones web listas para usar:

| # | Plantilla | Categoría / Nicho |
|---|---|---|
| 1 | **Corporativo Abogados** | Servicios Legales / Consultoría |
| 2 | **E-Commerce Falabella** | Retail / Gran Tienda Online |
| 3 | **Gimnasio SmartFit** | Fitness / Centros Deportivos |
| 4 | **Inmobiliaria Luxury** | Bienes Raíces / Propiedades de Lujo |
| 5 | **Restaurante Gourmet** | Gastronomía / Restaurantes |
| 6 | **Tienda Barbería** | Belleza Masculina / Servicios |
| 7 | **Tienda Cosmética** | Cosmética / Cuidado Personal |
| 8 | **Tienda Departamental** | Tiendas por Departamento / Retail |
| 9 | **Tienda Deportiva** | Ropa y Accesorios Deportivos |
| 10 | **Tienda Flores** | Floristería / Detalles y Regalos |
| 11 | **Tienda Juguetes** | Juguetería / Infantil |
| 12 | **Tienda Marketplace** | Comercio Electrónico Multi-categoría |
| 13 | **Tienda Mascotas** | Pet Shop / Cuidado Animal |
| 14 | **Tienda Mecánico** | Talleres Automotrices / Repuestos |
| 15 | **Tienda Metro** | Supermercado / Retail |
| 16 | **Tienda Moixx** | Moda / Indumentaria Femenina |
| 17 | **Tienda Motors** | Concesionaria / Vehículos y Motos |
| 18 | **Tienda Orgánica** | Alimentos Saludables y Orgánicos |
| 19 | **Tienda Platanitos** | Calzado, Moda y Accesorios |
| 20 | **Tienda Revolve** | Moda y Tendencias Internacionales |
| 21 | **Tienda Supermercado** | Abarrotes y Consumo Masivo |
| 22 | **Tienda Sydney** | Moda y Estilo Urbano |
| 23 | **Tienda Tecno** | Tecnología, Gadgets y Electrónica |
| 24 | **Tienda Transporte** | Logística, Envíos y Carga |
| 25 | **Tienda Ventas Free** | Comercio General / Ofertas |
| 26 | **Tienda Wong** | Supermercado / Gourmet |
| 27 | **Tu Tienda Moda** | Colecciones, Moda y Tendencias |

---

## 🛠️ Comandos de Desarrollo

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor local de desarrollo (http://localhost:4321)
npm run dev

# 3. Compilar el proyecto para producción (Genera HTML estático en dist/)
npm run build

# 4. Previsualizar la compilación de producción localmente
npm run preview
```

---

## 📂 Estructura del Proyecto

```text
proyecto/
├── public/
│   ├── favicon.svg
│   └── previews/                     # Miniaturas (.webp / .jpg) de cada plantilla
├── src/
│   ├── content.config.ts             # Esquema y auto-registro de fichas con glob loader
│   ├── layouts/
│   │   ├── CatalogoLayout.astro       # Layout general del portal del catálogo
│   │   └── PlantillaLayout.astro      # Layout limpio para el render de cada plantilla
│   ├── styles/                        # Estilos del portal (tokens, grilla, filtros)
│   │   ├── tokens.css
│   │   ├── catalogo.css
│   │   └── filtros.css
│   ├── components/
│   │   └── catalogo/                  # Componentes exclusivos del portal
│   │       ├── CabeceraSitio.astro
│   │       ├── BarraFiltros.astro     # Filtros generados dinámicamente según categorías
│   │       └── TarjetaPlantilla.astro # Tarjetas interactivas con preview
│   ├── pages/
│   │   ├── index.astro               # Portal principal del catálogo
│   │   └── plantillas/
│   │       └── [id].astro            # Rutas estáticas generadas automáticamente
│   └── plantillas/                    # Módulos independientes por plantilla
│       ├── _boilerplate/              # Plantilla base para clonar
│       │   ├── ficha.example.json
│       │   ├── Plantilla.astro
│       │   ├── estilos.css
│       │   └── secciones/*.astro
│       └── <id-plantilla>/
│           ├── ficha.json            # Metadatos (título, categoría, tags, preview)
│           ├── Plantilla.astro       # Composición de secciones
│           ├── estilos.css           # Tokens y variables locales (.tpl-<id>)
│           └── secciones/            # Componentes modulares (Hero, Catalogo, etc.)
├── scripts/
│   └── nueva-plantilla.mjs           # Script interactivo para crear nuevas plantillas
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## ➕ Crear una Nueva Plantilla

Para agregar una nueva plantilla al catálogo a partir del boilerplate base, ejecuta:

```bash
npm run nueva-plantilla -- --id nombre-plantilla --titulo "Título de la Plantilla" --categoria "Categoría"
```

### ¿Qué hace este comando automáticamente?
1. Crea la carpeta `src/plantillas/<nombre-plantilla>/`.
2. Genera el archivo `ficha.json` con la configuración inicial.
3. Configura el contenedor CSS `.tpl-<nombre-plantilla>` para garantizar el aislamiento.
4. Genera las secciones `.astro` básicas listas para editar.
5. **Aparece de forma automática en el catálogo** sin necesidad de tocar `src/pages/index.astro`.

---

## 🛡️ Aislamiento y Buenas Prácticas

1. **Scoping de Astro**: Todo bloque `<style>` en un archivo `.astro` es procesado con un identificador único, evitando que los estilos de una sección afecten a otra.
2. **Espacios de nombres (Namespaces)**: Los archivos `estilos.css` de cada plantilla se declaran dentro de la clase contenedora `.tpl-<id>` y nunca en `:root`.
3. **Desacoplamiento total**: El portal del catálogo no inyecta estilos sobre las plantillas, y las plantillas no dependen de dependencias globales externas.

---

## 📋 Requisitos del Sistema

- **Node.js**: `18.20+`, `20.3+` o `22+`
- **Gestor de paquetes**: `npm`
