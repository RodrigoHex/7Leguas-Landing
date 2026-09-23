# 7Leguas Landing

Landing page responsiva de Grupo Llantero Siete Leguas, construida con Astro y preparada para generación estática. Incluye hero con video, categorías de vehículos, paquetes de llantas, bloque institucional Pirelli, enlaces de cotización por WhatsApp y navegación adaptable a desktop, tablet y móvil.

## Stack utilizado

- [Astro 5](https://astro.build/) como framework principal y generador de sitio estático.
- TypeScript con configuración estricta.
- CSS nativo con variables de diseño y estilos encapsulados por componente.
- [Tailwind CSS 4](https://tailwindcss.com/) integrado mediante Vite.
- Montserrat Variable mediante `@fontsource-variable/montserrat`.
- `astro:assets` para optimización y generación responsiva de imágenes.
- JavaScript/TypeScript nativo para carruseles, drag, autoplay y controles multimedia.
- Playwright para comprobaciones visuales en diferentes resoluciones.
- Lighthouse para auditorías de rendimiento, accesibilidad, buenas prácticas y SEO.
- `@astrojs/sitemap` para generar el sitemap durante el build.

## Requisitos

- Node.js `18.20.8`, una versión `20.3.0+` dentro de la rama 20, o cualquier versión `22+`.
- npm `9.6.5` o superior.

## Instalación y ejecución

```bash
npm install
```

Crea el archivo local de variables de entorno a partir del ejemplo:

```bash
# macOS / Linux
cp .env.example .env

# PowerShell
Copy-Item .env.example .env
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4321
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Astro en modo desarrollo con recarga automática. |
| `npm run check` | Ejecuta las validaciones de Astro y TypeScript. |
| `npm run build` | Genera el sitio estático de producción dentro de `dist/`. |
| `npm run preview` | Sirve localmente el contenido generado en `dist/`. |
| `npm run visual` | Ejecuta la comparación visual configurada en `scripts/visual-reference.mjs`. |
| `npm run lighthouse` | Genera una auditoría Lighthouse contra `http://localhost:4321`. El servidor de desarrollo debe estar activo. |

Flujo recomendado antes de publicar:

```bash
npm run check
npm run build
npm run preview
```

## Variables de entorno

El archivo `.env.example` contiene las variables disponibles actualmente:

```dotenv
REFERENCE_ASSETS_MODE=placeholder
SITE_URL=https://reference-automotive.example
```

| Variable | Uso |
| --- | --- |
| `REFERENCE_ASSETS_MODE` | Selecciona el modo de recursos visuales. Actualmente el modo `licensed` conserva los placeholders hasta que existan archivos autorizados. |
| `SITE_URL` | Dominio canónico usado por Astro y por la generación del sitemap. Debe reemplazarse con el dominio final antes del despliegue. |

## Estructura del proyecto

```text
7Leguas Landing/
├── public/
│   ├── reference-assets/packages/  # Imágenes públicas de paquetes
│   ├── favicon.svg
│   ├── favicon.webp
│   ├── robots.txt
│   └── site.webmanifest
├── scripts/
│   ├── visual-reference.mjs        # Capturas y comprobación visual
│   └── visual-report.mjs
├── src/
│   ├── assets/
│   │   ├── brand/                  # Logotipos
│   │   ├── categories/             # Imágenes de categorías
│   │   ├── featured/               # Recursos del bloque Pirelli
│   │   └── placeholders/           # Imágenes de respaldo
│   ├── components/
│   │   ├── finder/CategoryRail.astro
│   │   ├── footer/SiteFooter.astro
│   │   ├── global/GlobalHeader.astro
│   │   ├── global/WhatsAppQuote.astro
│   │   ├── hero/Hero.astro
│   │   ├── products/FeaturedTyres.astro
│   │   └── promotions/PromotionSection.astro
│   ├── data/
│   │   ├── assets.ts               # Mapa central de imágenes
│   │   ├── contact.ts              # WhatsApp y ubicación del distribuidor
│   │   ├── home.ts                 # Textos y colecciones de la landing
│   │   └── packages.ts             # Productos, precios e imágenes
│   ├── layouts/BaseLayout.astro     # Documento HTML, metadatos y <head> global
│   ├── pages/index.astro            # Composición de la página principal
│   ├── scripts/carousels.ts         # Interacciones de los carruseles
│   └── styles/
│       ├── global.css
│       ├── tokens.css
│       └── typography.css
├── .env.example
├── astro.config.mjs
├── banner.mp4                       # Video utilizado por el hero
├── DESIGN.md                        # Criterios visuales del proyecto
├── PRODUCT.md                       # Contexto funcional
├── package.json
└── tsconfig.json
```

## Dónde modificar cada parte

- Hero, video y llamadas a la acción: `src/components/hero/Hero.astro`.
- Categorías y tarjetas de vehículos: datos en `src/data/home.ts`; presentación en `src/components/finder/CategoryRail.astro`.
- Paquetes, nombres y precios: `src/data/packages.ts`.
- Diseño del carrusel de paquetes: `src/components/promotions/PromotionSection.astro`.
- Número de WhatsApp, generador de mensajes y mapa: `src/data/contact.ts`.
- Bloque institucional y servicios Pirelli: `src/components/products/FeaturedTyres.astro` y `src/data/home.ts`.
- Encabezado visual: `src/components/global/GlobalHeader.astro`.
- Metadatos, favicon y scripts globales del `<head>`: `src/layouts/BaseLayout.astro`.
- Escala tipográfica, colores, gutters y espaciados: `src/styles/tokens.css`.

## Añadir Google Analytics 4 al encabezado

> El `<head>` HTML global no se encuentra en `GlobalHeader.astro`. Ese componente representa únicamente la barra visual. Los scripts que deben aparecer en todas las páginas se agregan en `src/layouts/BaseLayout.astro`.

Google indica que la etiqueta debe aparecer una sola vez por página, inmediatamente después de la apertura de `<head>`. Consulta la [documentación oficial de instalación de Google Analytics](https://support.google.com/analytics/answer/15756615) y la [referencia de Google tag con gtag.js](https://developers.google.com/tag-platform/gtagjs).

### 1. Obtener el identificador

En Google Analytics crea o selecciona un flujo de datos web y copia el identificador de medición. Tiene un formato similar a:

```text
G-XXXXXXXXXX
```

### 2. Configurar la variable de entorno

Añade lo siguiente a tu archivo `.env` local y a las variables de entorno de producción:

```dotenv
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

El prefijo `PUBLIC_` permite que Astro exponga el identificador al HTML generado. El identificador de medición no es una contraseña, pero mantenerlo en una variable permite usar propiedades distintas en desarrollo y producción.

Opcionalmente, documenta también la variable en `.env.example` sin colocar un identificador real:

```dotenv
PUBLIC_GA_MEASUREMENT_ID=
```

### 3. Leer la variable en `BaseLayout.astro`

Dentro del bloque de frontmatter, antes del segundo separador `---`, añade:

```astro
const gaMeasurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
```

El inicio del archivo quedaría conceptualmente así:

```astro
---
import '../styles/global.css';

// Resto de la configuración del layout...
const gaMeasurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
---
```

### 4. Insertar la etiqueta dentro de `<head>`

En el mismo archivo, coloca este bloque inmediatamente después de `<head>`:

```astro
<head>
  {
    gaMeasurementId && (
      <>
        <script
          is:inline
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        ></script>
        <script is:inline define:vars={{ gaMeasurementId }}>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', gaMeasurementId);
        </script>
      </>
    )
  }

  <meta charset="UTF-8" />
  <!-- Resto del encabezado existente -->
</head>
```

La condición evita generar scripts incompletos cuando la variable no está configurada. Al estar dentro de `BaseLayout.astro`, la etiqueta se incluirá automáticamente en todas las páginas que utilicen ese layout.

### 5. Validar la integración

Después de añadir la etiqueta:

```bash
npm run check
npm run build
npm run preview
```

Comprueba posteriormente:

1. Que el HTML generado contenga una sola referencia a `gtag/js`.
2. Que el identificador coincida con el flujo web de Google Analytics.
3. Que la visita aparezca en el informe **Tiempo real** de GA4.
4. Que Google Tag Assistant no reporte una etiqueta duplicada.

Si el proyecto requiere consentimiento de cookies, no cargues la etiqueta hasta obtener la autorización correspondiente. El ejemplo anterior comienza a cargar Google Analytics inmediatamente.

## Build y despliegue

El proyecto utiliza `output: 'static'`. Al ejecutar:

```bash
npm run build
```

Astro genera los archivos publicables en:

```text
dist/
```

Publica el contenido completo de esa carpeta en el hosting elegido. Configura `SITE_URL` con el dominio de producción antes de generar el build definitivo para obtener metadatos canónicos y sitemap correctos.

## Comprobación responsive

La landing está preparada para los siguientes rangos principales:

- Móvil: `320px–767px`.
- Tablet: `768px–1023px`.
- Desktop: `1024px` en adelante.

Antes de entregar cambios visuales, comprueba al menos `320px`, `390px`, `768px`, `1024px` y `1440px`, además de ejecutar `npm run check` y `npm run build`.
