# Bilingual Website - Sitio Web Bilingüe

This website is now available in both Spanish and English / Este sitio web ahora está disponible en español e inglés.

## Features / Características

### Language Switching / Cambio de Idioma
- **Floating Button**: Click the globe button in the bottom-right corner to switch between Spanish (ES) and English (EN)
- **Botón Flotante**: Haz clic en el botón del globo en la esquina inferior derecha para cambiar entre español (ES) e inglés (EN)

### Language Detection / Detección de Idioma
- **Auto-detect**: The website automatically detects your browser's language on first visit
- **Detección automática**: El sitio web detecta automáticamente el idioma de tu navegador en la primera visita

### Persistent Preference / Preferencia Persistente
- **LocalStorage**: Your language preference is saved and persists across sessions
- **LocalStorage**: Tu preferencia de idioma se guarda y persiste entre sesiones

## Files / Archivos

### Spanish Version / Versión en Español
- `src/LandingPage.tsx` - Main Spanish landing page
- `src/components/PriorityVisualizer.tsx` - Spanish priority visualizer component

### English Version / Versión en Inglés
- `src/LandingPage_en.tsx` - Main English landing page
- `src/components/PriorityVisualizer_en.tsx` - English priority visualizer component

### Shared / Compartido
- `src/App.tsx` - Language switcher logic and routing
- `src/components/ContentComponents.tsx` - Reusable UI components (language-agnostic)

## Development / Desarrollo

```bash
# Install dependencies / Instalar dependencias
npm install

# Run development server / Ejecutar servidor de desarrollo
npm run dev

# Build for production / Construir para producción
npm run build

# Lint code / Revisar código
npm run lint
```

## Technology Stack / Stack Tecnológico

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
