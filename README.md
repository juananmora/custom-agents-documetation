# GitHub Copilot - Guía de Agentes e Instrucciones Personalizadas / Custom Agents and Instructions Guide

[![Built with React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

> 🌍 **Bilingual Website** | Sitio Web Bilingüe: This documentation is available in both **English** and **Spanish** | Esta documentación está disponible en **inglés** y **español**

## 📖 Descripción / Description

### Español
Sitio web educativo completo sobre GitHub Copilot que explica cómo transformar el asistente de IA en un equipo de especialistas virtuales mediante **Agentes Personalizados** e **Instrucciones a Medida**. La guía incluye ejemplos prácticos, mejores prácticas y configuraciones para maximizar la productividad del desarrollo.

### English
Comprehensive educational website about GitHub Copilot explaining how to transform the AI assistant into a team of virtual specialists using **Custom Agents** and **Tailored Instructions**. The guide includes practical examples, best practices, and configurations to maximize development productivity.

## ✨ Características / Features

### 🌐 Sitio Bilingüe / Bilingual Site
- ✅ **Spanish (Español)** - Versión completa en español
- ✅ **English** - Complete English version
- 🔄 **Cambio de idioma instantáneo** / Instant language switching
- 💾 **Preferencia guardada** en localStorage / Saved preference in localStorage
- 🌍 **Detección automática** del idioma del navegador / Automatic browser language detection

### 🎨 Diseño y UX / Design & UX
- 🎭 **Animaciones fluidas** con Framer Motion / Smooth animations with Framer Motion
- 📱 **Responsive design** - Optimizado para móviles, tablets y desktop
- 🎨 **Estilo Accenture** - Diseño profesional con gradientes y elementos diagonales
- ⚡ **Scroll progress bar** - Barra de progreso de desplazamiento
- 🔘 **Botón flotante** de cambio de idioma / Floating language switcher button

### 📚 Contenido Educativo / Educational Content
1. **Fundamentos** / Fundamentals
   - Comparación entre Copilot estándar vs. personalizado
   - Transformación visual del asistente genérico a experto

2. **Instrucciones Personalizadas** / Custom Instructions
   - Jerarquía de instrucciones (Personal → Repositorio → Organización)
   - Tipos de instrucciones por alcance y ruta
   - Mejores prácticas con ejemplos

3. **Agentes Personalizados** / Custom Agents
   - Anatomía de un agente con ejemplos de código
   - Casos de uso y especialistas recomendados
   - Gestión y alcance (Repositorio → Organización → Empresa)

4. **Sinergia** / Synergy
   - Cómo trabajan juntos agentes e instrucciones
   - Flujo de contexto y prioridades

5. **Configuración** / Configuration
   - Guías paso a paso para cada nivel
   - Ubicación de archivos y rutas
   - Ideas para tus primeros agentes

## 🛠️ Tecnologías / Tech Stack

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| **React** | 19.2.0 | Framework UI principal |
| **TypeScript** | 5.9.3 | Tipado estático |
| **Vite** | 7.2.4 | Build tool y dev server |
| **Tailwind CSS** | 3.4.17 | Estilos y diseño |
| **Framer Motion** | 12.23.24 | Animaciones |
| **Lucide React** | 0.554.0 | Iconos |
| **ESLint** | 9.39.1 | Linting |

## 🚀 Inicio Rápido / Quick Start

### Prerrequisitos / Prerequisites
- Node.js 18+ 
- npm o yarn

### Instalación / Installation

```bash
# Clonar el repositorio / Clone the repository
git clone https://github.com/juananmora/custom-agents-documetation.git
cd custom-agents-documetation

# Instalar dependencias / Install dependencies
npm install

# Ejecutar en modo desarrollo / Run in development mode
npm run dev

# Compilar para producción / Build for production
npm run build

# Vista previa de la build / Preview the build
npm run preview

# Ejecutar linter / Run linter
npm run lint
```

El sitio estará disponible en `http://localhost:5173` / The site will be available at `http://localhost:5173`

## 📁 Estructura del Proyecto / Project Structure

```
custom-agents-documetation/
├── public/                      # Archivos estáticos / Static files
│   ├── copilot-icon.png        # Logo de GitHub Copilot
│   ├── copilot-transformation.png
│   ├── agent.png
│   └── workflow2.mp4           # Video demostrativo
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── ContentComponents.tsx    # Tarjetas y comparaciones
│   │   ├── PriorityVisualizer.tsx   # Visualizador (ES)
│   │   └── PriorityVisualizer_en.tsx # Visualizador (EN)
│   ├── LandingPage.tsx         # Página principal (Español)
│   ├── LandingPage_en.tsx      # Página principal (English)
│   ├── App.tsx                 # Lógica de cambio de idioma
│   ├── App.css                 # Estilos globales
│   ├── index.css               # Estilos base y Tailwind
│   └── main.tsx                # Punto de entrada
├── index.html                  # HTML principal
├── vite.config.ts              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
├── eslint.config.js            # Configuración de ESLint
├── package.json                # Dependencias
├── BILINGUAL.md               # Documentación bilingüe
└── README.md                   # Este archivo
```

## 🌍 Cambio de Idioma / Language Switching

### Para Usuarios / For Users
1. Busca el **botón flotante con un globo** 🌍 en la esquina inferior derecha
2. Haz clic para cambiar entre **ES** (Español) y **EN** (English)
3. Tu preferencia se guardará automáticamente

### Para Desarrolladores / For Developers

El cambio de idioma se implementa en `src/App.tsx`:

```typescript
// Detección automática del idioma del navegador
const getInitialLanguage = (): 'es' | 'en' => {
  const savedLang = localStorage.getItem('language');
  if (savedLang) return savedLang;
  
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('en') ? 'en' : 'es';
};

// Estado y persistencia
const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);

// Cambio de idioma
const toggleLanguage = () => {
  const newLang = language === 'es' ? 'en' : 'es';
  setLanguage(newLang);
  localStorage.setItem('language', newLang);
};
```

## 🎨 Personalización / Customization

### Colores / Colors
El diseño usa la paleta de colores de GitHub Copilot:

```css
/* Tailwind config - tailwind.config.js */
colors: {
  primary: '#A100FF',    /* Purple principal */
  secondary: '#7000B8',  /* Purple oscuro */
  tertiary: '#C866FF',   /* Purple claro */
}
```

### Agregar Nuevo Contenido / Adding New Content

Para agregar una nueva sección:

1. Edita `src/LandingPage.tsx` (español) o `src/LandingPage_en.tsx` (inglés)
2. Añade un nuevo item en `navItems`:
```typescript
{ href: '#nueva-seccion', label: 'Nueva Sección' }
```
3. Crea la sección en el JSX con el id correspondiente:
```tsx
<section id="nueva-seccion">
  {/* Tu contenido aquí */}
</section>
```

## 📦 Build y Deployment / Build and Deployment

### Build Local / Local Build
```bash
npm run build
```

Los archivos optimizados se generan en `/dist` con:
- HTML minificado
- CSS optimizado y con PurgeCSS
- JavaScript bundled y comprimido
- Imágenes y videos optimizados

### Deployment en GitHub Pages

El proyecto está configurado con `base: '/custom-agents-documetation/'` en `vite.config.ts` para GitHub Pages.

```bash
# Compilar
npm run build

# Desplegar (si tienes gh-pages configurado)
npm run deploy
```

### Otras Plataformas / Other Platforms
- **Vercel**: Conecta el repositorio y despliega automáticamente
- **Netlify**: Similar a Vercel, detección automática de Vite
- **Azure Static Web Apps**: Compatible con GitHub Actions

## 🧪 Testing y Calidad / Testing and Quality

### Linting
```bash
npm run lint
```

El proyecto usa ESLint con:
- `@eslint/js` - Reglas base de JavaScript
- `typescript-eslint` - Reglas de TypeScript
- `eslint-plugin-react-hooks` - Validación de hooks
- `eslint-plugin-react-refresh` - Validación de Fast Refresh

### Type Checking
```bash
npm run build  # Incluye type checking con tsc
```

## 🤝 Contribuir / Contributing

### Español
Las contribuciones son bienvenidas! Para contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica increíble'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### English
Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add: some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Guías de Contribución / Contribution Guidelines
- Mantén el código limpio y legible
- Sigue las convenciones de código existentes
- Actualiza tanto la versión en español como en inglés
- Añade comentarios donde sea necesario
- Ejecuta el linter antes de hacer commit

## 📄 Licencia / License

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🔗 Enlaces Útiles / Useful Links

### Documentación Oficial / Official Documentation
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [Custom Agents](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)
- [Customizing Copilot](https://docs.github.com/en/copilot/customizing-copilot)

### Tecnologías / Technologies
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 👥 Autor / Author

**Juan Antonio Mora** - [@juananmora](https://github.com/juananmora)

## 🙏 Agradecimientos / Acknowledgments

- GitHub Copilot team por la increíble herramienta
- Accenture por la inspiración del diseño
- La comunidad de React y TypeScript

---

⭐ Si este proyecto te resulta útil, considera darle una estrella en GitHub / If you find this project useful, consider giving it a star on GitHub

📧 Para preguntas o sugerencias, abre un issue en el repositorio / For questions or suggestions, open an issue in the repository
