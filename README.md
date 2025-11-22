<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# GitHub Copilot Mastery Presentation

Una presentación interactiva sobre GitHub Copilot, instrucciones personalizadas y agentes personalizados.

## 🚀 Ver en Vivo

La aplicación está desplegada automáticamente en GitHub Pages:
**[Ver Presentación](https://juananmora.github.io/custom-agents-documetation/)**

## 🏃 Ejecutar Localmente

**Prerequisitos:** Node.js 20+

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## 🏗️ Construir para Producción

```bash
npm run build
```

Los archivos de producción se generarán en el directorio `dist/`.

## 🚢 Despliegue Automático

El proyecto está configurado para desplegarse automáticamente a GitHub Pages cuando se hace push a la rama `main`:

1. Los cambios se pushean a `main`
2. GitHub Actions ejecuta el workflow de build
3. Los archivos se despliegan automáticamente a GitHub Pages
4. La aplicación estará disponible en: `https://juananmora.github.io/custom-agents-documetation/`

### Configuración de GitHub Pages

Para habilitar GitHub Pages en tu repositorio:

1. Ve a **Settings** > **Pages**
2. En **Source**, selecciona **GitHub Actions**
3. El workflow `.github/workflows/deploy.yml` se encargará del resto

## 📋 Contenido de la Presentación

La presentación cubre:
- Instrucciones personalizadas de GitHub Copilot
- Creación y configuración de agentes personalizados
- Mejores prácticas y ejemplos prácticos
- Guías paso a paso para implementación

## 🛠️ Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS (integrado)
- GitHub Actions para CI/CD
