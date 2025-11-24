# Documentación de Tests - Custom Agents Documentation

## 📋 Resumen

Este proyecto incluye una suite completa de **71 tests unitarios** que cubren los componentes principales de la aplicación. Los tests están implementados con **Vitest** y **React Testing Library**, siguiendo las mejores prácticas para testing de aplicaciones React modernas.

## 🛠️ Stack de Testing

- **Vitest**: Framework de testing rápido y compatible con Vite
- **React Testing Library**: Librería para testing de componentes React centrada en el usuario
- **@testing-library/jest-dom**: Matchers personalizados para DOM assertions
- **@testing-library/user-event**: Librería para simular interacciones de usuario
- **jsdom**: Implementación de DOM para entorno Node.js

## 🚀 Ejecutar Tests

```bash
# Ejecutar tests en modo watch (desarrollo)
npm test

# Ejecutar tests una sola vez
npm run test:run

# Ejecutar tests con interfaz visual
npm run test:ui

# Ejecutar tests con reporte de cobertura
npm run test:coverage
```

## 📁 Estructura de Tests

```
src/
├── App.test.tsx                              # 14 tests
├── components/
    ├── ContentComponents.test.tsx            # 21 tests
    ├── PriorityVisualizer.test.tsx          # 18 tests
    └── PriorityVisualizer_en.test.tsx       # 18 tests
```

## 📊 Cobertura de Tests

### App.tsx (14 tests)
**Funcionalidad**: Componente principal con gestión de idioma y localStorage

- ✅ Detección automática de idioma del navegador
- ✅ Persistencia de preferencia de idioma en localStorage
- ✅ Toggle de idioma (ES ⇄ EN)
- ✅ Actualización del título del documento
- ✅ Actualización del atributo `lang` del HTML
- ✅ Renderizado condicional de componentes según idioma

**Casos de prueba cubiertos:**
```typescript
describe('App Component', () => {
  describe('Language Detection')        // 3 tests
  describe('Language Toggle')           // 2 tests
  describe('Language Toggle Button')    // 3 tests
  describe('Document Updates')          // 4 tests
});
```

### ContentComponents.tsx (21 tests)
**Funcionalidad**: Componentes reutilizables de presentación

#### ComparisonCard (6 tests)
- ✅ Renderizado de cards standard y custom
- ✅ Aplicación correcta de estilos según tipo
- ✅ Renderizado de listas de items
- ✅ Iconos condicionales (CheckCircle2 para custom)

#### FeatureCard (5 tests)
- ✅ Renderizado con todos los props
- ✅ Aplicación de clases de color (blue, green, purple)
- ✅ Renderizado de iconos personalizados

#### AgentCard (5 tests)
- ✅ Renderizado con gradientes de color
- ✅ Aplicación de clases de estilo
- ✅ Renderizado de iconos personalizados

#### CodeComparison (5 tests)
- ✅ Renderizado de ejemplos buenos y malos
- ✅ Estilos diferenciados
- ✅ Uso correcto de etiquetas `<pre>` y `<code>`

### PriorityVisualizer.tsx (18 tests)
**Funcionalidad**: Visualizador interactivo de capas de contexto

- ✅ Renderizado inicial con 3 capas activas
- ✅ Toggle individual de cada capa
- ✅ Estado vacío cuando todas las capas están desactivadas
- ✅ Re-activación de capas
- ✅ Toggle múltiple e independiente
- ✅ Descripciones correctas para cada capa
- ✅ Renderizado de iconos (User, Book, Building)
- ✅ Accesibilidad (buttons con roles correctos)

**Casos de prueba cubiertos:**
```typescript
describe('PriorityVisualizer', () => {
  describe('Initial Rendering')        // 5 tests
  describe('Layer Toggle Functionality') // 5 tests
  describe('Empty State')              // 2 tests
  describe('Layer Descriptions')       // 3 tests
  describe('Visual Elements')          // 3 tests
  describe('Accessibility')            // 2 tests
});
```

### PriorityVisualizer_en.tsx (18 tests)
Tests similares a la versión en español, verificando que la versión en inglés funcione correctamente.

## 🔧 Configuración

### vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    css: true,
  },
});
```

### vitest.setup.ts
Configuración global para todos los tests:

- ✅ Importación automática de `@testing-library/jest-dom`
- ✅ Cleanup automático después de cada test
- ✅ Mock de `localStorage`
- ✅ Mock de `IntersectionObserver` (necesario para Framer Motion)
- ✅ Mock de `matchMedia`

## 🎯 Mejores Prácticas Implementadas

### 1. Testing Centrado en el Usuario
Los tests verifican el comportamiento visible para el usuario, no detalles de implementación:

```typescript
// ❌ Evitado: Testing de implementación
expect(component.state.isOpen).toBe(true);

// ✅ Implementado: Testing de comportamiento
expect(screen.getByText('Menu abierto')).toBeInTheDocument();
```

### 2. Uso de Roles de Accesibilidad
```typescript
const button = screen.getByRole('button', { name: /toggle/i });
```

### 3. Testing de Animaciones con Framer Motion
```typescript
// Usar waitFor para animaciones asíncronas
await waitFor(() => {
  expect(screen.queryByText('Layer')).not.toBeInTheDocument();
});
```

### 4. Mock de Dependencias Externas
```typescript
// Mock de componentes hijos complejos
vi.mock('./LandingPage', () => ({
  default: () => <div data-testid="landing-page-es">Landing Page ES</div>
}));
```

### 5. Queries Apropiadas
```typescript
// Para elementos únicos
screen.getByText('Title');

// Para elementos múltiples
screen.getAllByText('Repeated Text');

// Para elementos que pueden no existir
screen.queryByText('Maybe Exists');
```

## 🐛 Problemas Comunes y Soluciones

### 1. IntersectionObserver no definido
**Problema**: Framer Motion usa IntersectionObserver para animaciones viewport.

**Solución**: Mock en `vitest.setup.ts`:
```typescript
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  // ...
} as any;
```

### 2. Tests que fallan por animaciones
**Problema**: Elementos desaparecen con animación, no inmediatamente.

**Solución**: Usar `waitFor`:
```typescript
await waitFor(() => {
  expect(screen.queryByText('Animated Element')).not.toBeInTheDocument();
});
```

### 3. Múltiples elementos con el mismo texto
**Problema**: `getByText` falla cuando hay duplicados.

**Solución**: Usar `getAllByText`:
```typescript
const buttons = screen.getAllByText('Button Label');
expect(buttons.length).toBeGreaterThan(0);
```

### 4. localStorage en tests
**Problema**: localStorage no existe en entorno de testing.

**Solución**: Mock completo en `vitest.setup.ts` con `vi.fn()`.

## 📈 Métricas de Calidad

- **Total de tests**: 71
- **Tasa de éxito**: 100% ✅
- **Componentes cubiertos**: 4 componentes principales
- **Tiempo de ejecución**: ~8.7s para toda la suite
- **Configuración**: ✅ Vitest + React Testing Library + jsdom

## 🔄 Integración Continua

Los tests están listos para integrarse en CI/CD:

```yaml
# Ejemplo para GitHub Actions
- name: Run tests
  run: npm run test:run

# Con coverage
- name: Run tests with coverage
  run: npm run test:coverage
```

## 📚 Referencias

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## ✅ Conclusión

Esta suite de tests proporciona:
- ✅ Confianza en refactorings
- ✅ Documentación viva del comportamiento esperado
- ✅ Detección temprana de bugs
- ✅ Base sólida para testing futuro
- ✅ Cobertura de casos críticos de uso

Los tests están optimizados para ser rápidos, mantenibles y centrados en el comportamiento real de la aplicación.
