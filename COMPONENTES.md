# Estructura de Componentes - MVP Donaciones

## 📋 Overview

Proyecto construido con **React** + **Atomic Design** + **Tailwind CSS**.

La arquitectura separa componentes en tres capas:
- **Atoms**: Elementos UI básicos y reutilizables
- **Molecules**: Combinaciones de atoms con lógica simple
- **Organisms**: Secciones completas de la página

---

## 🧬 ATOMS (Elementos básicos)

Componentes pequeños, sin lógica, 100% reutilizables.

### 1. **Button.jsx**
- **Función**: Botón genérico reutilizable
- **Props**: `type`, `disabled`, `className`, `children`
- **Estilos por defecto**: Azul con hover/focus/disabled
- **Zona de cambio**: Colores, variantes (primary, secondary, danger), tamaños

### 2. **Input.jsx**
- **Función**: Campo de texto base para formularios
- **Props**: `type`, `placeholder`, `value`, `onChange`, etc
- **Estilos**: Ancho completo, focus visible, disabled states
- **Zona de cambio**: Bordes, focus rings, validación visual

### 3. **Label.jsx**
- **Función**: Etiqueta de formulario
- **Props**: `children`, `className`, `htmlFor` (para accesibilidad)
- **Estilos**: Negrita, gris oscuro
- **Zona de cambio**: Tamaño de fuente, peso

### 4. **Text.jsx**
- **Función**: Texto genérico con etiqueta configurable (p, span, h5, etc)
- **Props**: `as` (etiqueta HTML), `children`, `className`
- **Estilos**: Gris base, personalizable
- **Zona de cambio**: Colores, variantes de tamaño

### 5. **Banner.jsx**
- **Función**: Contenedor destacado para alerts/noticias
- **Props**: `children`, `className`
- **Estilos**: Fondo gris claro, padding, esquinas redondeadas
- **Zona de cambio**: Variantes de color (success, warning, error), icono

### 6. **Heading.jsx**
- **Función**: Títulos (h1-h6) con estilos consistentes
- **Props**: `level` (1-6), `children`, `className`
- **Estilos**: Tamaños automáticos por nivel, negrita, color oscuro
- **Zona de cambio**: Mapping de tamaños, colores, weight

### 7. **Progress.jsx**
- **Función**: Barra de progreso
- **Props**: `value`, `max`, `variant` (primary/success/warning)
- **Estilos**: Animación suave, variantes de color
- **Zona de cambio**: Altura, velocidad de animación, colores

### 8. **Badge.jsx**
- **Función**: Etiquetas/badges para estados o categorías
- **Props**: `variant`, `size`, `children`
- **Estilos**: Colores según variante, forma redondeada
- **Zona de cambio**: Variantes, tamaños, icono

### 9. **Card.jsx**
- **Función**: Contenedor base para tarjetas
- **Props**: `children`, `className`
- **Estilos**: Borde, sombra, padding
- **Zona de cambio**: Sombra, borde, padding, esquinas

### 10. **Divider.jsx**
- **Función**: Línea separadora (horizontal/vertical)
- **Props**: `orientation` (horizontal/vertical)
- **Estilos**: Gris claro
- **Zona de cambio**: Color, grosor, espaciado

---

## 🧩 MOLECULES (Componentes compuestos)

Combinan atoms + lógica simple. Pensados para reutilización.

### 1. **FormField.jsx**
- **Función**: Campo de formulario completo (Label + Input + Error/Hint)
- **Props**: `label`, `error`, `hint`, `type`, todo lo demás pasa a Input
- **Incluye**: Validación visual, mensajes de error, texto de ayuda
- **Zona de cambio**: Validaciones, estilos de error, icono ⚠

### 2. **DonationAmountSelector.jsx**
- **Función**: Selector de monto de donación con presets + custom
- **Props**: `amount`, `onChange`
- **Incluye**: Botones preestablecidos (100, 500, 1000, 2500) + input custom
- **Zona de cambio**: Montos, moneda, textos (si usas otra divisa)

### 3. **CampaignStats.jsx**
- **Función**: Tarjeta de estadística con icono
- **Props**: `icon`, `label`, `value`, `description`
- **Uso**: Mostrar recaudado, donantes, meta, etc
- **Zona de cambio**: Icono, tamaño, color de valor

### 4. **TestimonialCard.jsx**
- **Función**: Tarjeta de testimonio con avatar, nombre, rol, rating
- **Props**: `name`, `role`, `message`, `avatar`, `rating`
- **Incluye**: Estrellas dinámicas, avatar emoji
- **Zona de cambio**: Avatar (imagen vs emoji), estrellas (SVG), layout

### 5. **FAQItem.jsx**
- **Función**: Pregunta-Respuesta expandible
- **Props**: `question`, `answer`, `defaultOpen`
- **Incluye**: Toggle, animación de icono, divider
- **Zona de cambio**: Icono expand, animación, colores

---

## 🏗️ ORGANISMS (Secciones completas)

Páginas o secciones grandes. Contienen molecules + estado.

### 1. **Header.jsx**
- **Función**: Navegación principal + logo + CTA
- **Includes**: Logo, nav links, botón "Donar", menú móvil
- **Estado**: Menu open/close para mobile
- **Zona de cambio**: Logo real, nav links con routing, responsive tweaks

### 2. **HeroDonationSection.jsx**
- **Función**: Sección hero con call-to-action
- **Includes**: Título, descripción, 2 botones, stats rápidas
- **Zona de cambio**: Imagen background, gradiente, textos, stats

### 3. **ProgressSection.jsx**
- **Función**: Barra de progreso + estadísticas de campaña
- **Includes**: Progress bar, recaudado vs meta, grid de stats (CampaignStats)
- **Zona de cambio**: Formato de moneda, textos, datos dinámicos

### 4. **DonationFormPanel.jsx**
- **Función**: Formulario completo de donación
- **Includes**: DonationAmountSelector + FormField (nombre, email, mensaje) + validación
- **Estado**: Form data, errors, isLoading
- **Zona de cambio**: Validaciones, integración API, métodos de pago, textarea custom

### 5. **TrustSection.jsx**
- **Función**: Testimonios + credibilidad
- **Includes**: Grid de TestimonialCard, badges de confianza
- **Zona de cambio**: Testimonios reales, logos de socios, certificaciones

### 6. **FAQSection.jsx**
- **Función**: Sección de preguntas frecuentes
- **Includes**: Grid de FAQItem, CTA de contacto
- **Zona de cambio**: Preguntas/respuestas reales, email de contacto

### 7. **Footer.jsx**
- **Función**: Pie de página
- **Includes**: Logo, 3 secciones de links, newsletter, copyright, badges
- **Zona de cambio**: Links reales, redes sociales, newsletter funcional, datos legales

---

## 🎯 APP.jsx (Orquestador)

Integra todos los organisms en orden:
1. Header (sticky)
2. HeroDonationSection
3. ProgressSection + DonationFormPanel (lado a lado, responsive)
4. TrustSection
5. FAQSection
6. Footer

**Zona de cambio**: Integrar React Router para múltiples páginas, conectar con backend

---

## 🎨 Guía de Cambios Rápidos

### Cambiar Colores
- **Primary**: Busca `bg-blue-600` en todos los archivos
- **Atoms**: Button, Progress, Badge
- **Molecules**: DonationAmountSelector (botones seleccionados)
- **Organisms**: Header, Hero, Form

### Cambiar Textos
- Busca comentarios `/* ZONA DE CAMBIO: */` en cada archivo
- Textos hard-coded con TODO para reemplazar

### Cambiar Layouts
- Responsivos con `sm:`, `md:`, `lg:` breakpoints
- Main layout: `grid-cols-1 gap-12 lg:grid-cols-3`

### Integrar Backend
- `DonationFormPanel.jsx`: reemplazar `console.log` con API call
- `App.jsx`: agregar rutas y estado global
- `Header.jsx`: navLinks con routing real

---

## 📦 Estructura de Carpetas

```
src/
├── App.jsx (orquestador)
├── index.css (Tailwind)
├── main.jsx
├── components/
│   ├── atoms/
│   │   ├── Badge.jsx
│   │   ├── Banner.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Divider.jsx
│   │   ├── Heading.jsx
│   │   ├── Input.jsx
│   │   ├── Label.jsx
│   │   ├── Progress.jsx
│   │   └── Text.jsx
│   ├── molecule/
│   │   ├── CampaignStats.jsx
│   │   ├── DonationAmountSelector.jsx
│   │   ├── FAQItem.jsx
│   │   ├── FormField.jsx
│   │   └── TestimonialCard.jsx
│   └── organism/
│       ├── DonationFormPanel.jsx
│       ├── FAQSection.jsx
│       ├── Footer.jsx
│       ├── Header.jsx
│       ├── HeroDonationSection.jsx
│       ├── ProgressSection.jsx
│       └── TrustSection.jsx
└── pages/ (para rutas futuras)
```

---

## 🚀 Próximos Pasos

1. **Validar en navegador**: `npm run dev`
2. **Actualizar datos mock** en cada component (textos, montos, testimonios)
3. **Integrar API real** en DonationFormPanel
4. **Agregar React Router** para múltiples páginas
5. **Agregar estado global** (Zustand/Context) si crece
6. **Crear sistema de design tokens** para colores/tipografía

---

## 📝 Notas de Implementación

- Todos los componentes documentados con comentarios `ZONA DE CAMBIO`
- Uso consistente de Tailwind (sin CSS custom necesario)
- Responsive por defecto (mobile-first)
- Accesibilidad básica (labels, buttons, semantic HTML)
- Sin dependencias externas (solo React + Tailwind)
