import React from 'react';
import { SlideDefinition } from '../types';
import SlideFrame from '../components/SlideFrame';
import { IconBrain, IconMessage, IconFile, IconGitBranch, IconShield, IconGlobe, IconBuilding, IconCode, IconBBVA } from '../components/Icons';

const TitleSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={1} layout="cover">
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 text-bbva-aqua mb-6 font-bold tracking-wider uppercase text-sm">
        <IconCode className="w-5 h-5" /> GitHub Copilot Mastery
      </div>
      <h1 className="text-6xl font-bold leading-tight mb-8 text-white">
        Más Allá de las Sugerencias
      </h1>
      <p className="text-2xl text-gray-200 font-light leading-relaxed border-l-4 border-bbva-aqua pl-6">
        Domina GitHub Copilot con <strong className="text-bbva-aqua">Agentes</strong> e <strong className="text-bbva-aqua">Instrucciones a Medida</strong>.
      </p>
      <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
         <span>BBVA Engineering</span>
         <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
         <span>2024</span>
      </div>
    </div>
  </SlideFrame>
);

const ComparisonSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={2} title="De Asistente Genérico a Experto" subtitle="Transformando la experiencia de desarrollo">
    <div className="flex h-full gap-8 mt-4">
      {/* Standard Card */}
      <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-200 flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gray-200 rounded-lg text-gray-600">
             <IconMessage className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-700">Copilot Estándar</h3>
        </div>
        <ul className="space-y-4 text-gray-600 flex-1">
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">✕</span>
            <span>Desconoce estándares internos.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">✕</span>
            <span>Ignora la arquitectura del proyecto.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold">✕</span>
            <span>Requiere contexto repetitivo.</span>
          </li>
        </ul>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-4">Generic AI</p>
      </div>

      {/* Customized Card */}
      <div className="flex-1 bg-white rounded-xl p-8 border border-bbva-blue shadow-lg flex flex-col relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-bbva-aqua"></div>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-bbva-blue rounded-lg text-white">
             <IconBrain className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-bbva-navy">Copilot Personalizado</h3>
            <span className="text-xs font-bold text-bbva-aqua uppercase">Optimizado</span>
          </div>
        </div>
        <ul className="space-y-4 text-bbva-navy flex-1">
          <li className="flex gap-3">
            <span className="text-bbva-aqua font-bold">✓</span>
            <span>Conoce tus librerías y guías.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-bbva-aqua font-bold">✓</span>
            <span>Automatiza flujos complejos.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-bbva-aqua font-bold">✓</span>
            <span>Actúa como un miembro Senior.</span>
          </li>
        </ul>
        <div className="mt-6 p-3 bg-bbva-navy/5 rounded border border-bbva-blue/10">
           <code className="text-xs text-bbva-blue font-mono">@workspace /fix using ProjectStandards</code>
        </div>
      </div>
    </div>
  </SlideFrame>
);

const RoadmapSlide: React.FC<{isActive: boolean}> = () => {
  const steps = [
    { id: 1, title: "La Visión", desc: "Más allá de la IA genérica" },
    { id: 2, title: "La Base", desc: "Contexto Persistente & Instrucciones" },
    { id: 3, title: "El Especialista", desc: "Agentes Personalizados" },
    { id: 4, title: "La Sinergia", desc: "Combinando Potencial" },
    { id: 5, title: "Implementación", desc: "Manual de Configuración" },
    { id: 6, title: "Próximos Pasos", desc: "Mejores Prácticas" },
  ];

  return (
    <SlideFrame pageNumber={3} title="Hoja de Ruta" subtitle="Agenda de la sesión">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {steps.map((step) => (
          <div key={step.id} className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-bbva-aqua hover:shadow-lg transition-all duration-300">
             <div className="text-5xl font-bold text-gray-100 group-hover:text-bbva-blue/10 mb-2 absolute top-4 right-4 transition-colors">0{step.id}</div>
             <div className="relative z-10">
               <div className="w-10 h-1 bg-bbva-aqua mb-4 group-hover:w-16 transition-all"></div>
               <h4 className="text-lg font-bold text-bbva-navy mb-2">{step.title}</h4>
               <p className="text-sm text-gray-500">{step.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
};

const DNASlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={4} title="Instrucciones Personalizadas" subtitle="El ADN de tu Proyecto">
     <div className="flex gap-12 h-full items-center">
       <div className="flex-1">
          <p className="text-xl text-bbva-navy font-light mb-8 leading-relaxed">
            Las <span className="font-bold text-bbva-blue">Custom Instructions</span> inyectan conocimiento corporativo directamente en el cerebro del modelo.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-bbva-aqua/20 flex items-center justify-center text-bbva-blue shrink-0">1</div>
              <div>
                <h4 className="font-bold text-bbva-navy">Elimina la Repetición</h4>
                <p className="text-sm text-gray-600">No necesitas repetir "Usa TypeScript" en cada prompt.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-bbva-aqua/20 flex items-center justify-center text-bbva-blue shrink-0">2</div>
              <div>
                <h4 className="font-bold text-bbva-navy">Conocimiento Integrado</h4>
                <p className="text-sm text-gray-600">Copilot entiende la arquitectura hexagonal de BBVA por defecto.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-bbva-aqua/20 flex items-center justify-center text-bbva-blue shrink-0">3</div>
              <div>
                <h4 className="font-bold text-bbva-navy">Alta Precisión</h4>
                <p className="text-sm text-gray-600">Menos alucinaciones, código más alineado con producción.</p>
              </div>
            </div>
          </div>
       </div>
       
       <div className="flex-1 h-full bg-bbva-navy rounded-2xl p-8 relative overflow-hidden text-white font-mono text-sm shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <IconCode className="w-32 h-32" />
          </div>
          <div className="text-bbva-aqua mb-4">.github/copilot-instructions.md</div>
          <div className="space-y-2 opacity-80">
             <p><span className="text-purple-400"># Tech Stack</span></p>
             <p>- Language: <span className="text-yellow-300">TypeScript</span></p>
             <p>- Framework: <span className="text-yellow-300">Angular + BBVA Cells</span></p>
             <p>- Testing: <span className="text-yellow-300">Jest</span></p>
             <br/>
             <p><span className="text-purple-400"># Security Rules</span></p>
             <p>- Never hardcode credentials.</p>
             <p>- Validate all inputs.</p>
             <p className="text-green-400 font-bold mt-4">// Copilot now knows this forever.</p>
          </div>
       </div>
     </div>
  </SlideFrame>
);

const HierarchySlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={5} title="Jerarquía de Influencia" subtitle="Cómo decide Copilot qué regla seguir">
    <div className="flex items-center justify-center h-full gap-12">
       
       <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          {/* Circles */}
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-gray-300 flex items-start justify-center pt-6">
             <span className="bg-white px-2 text-gray-400 font-bold text-sm uppercase">Organización</span>
          </div>
          
          <div className="absolute w-3/4 h-3/4 rounded-full bg-blue-50 border border-bbva-blue/30 flex items-start justify-center pt-8 shadow-sm">
             <span className="font-bold text-bbva-blue text-lg">Repositorio</span>
          </div>
          
          <div className="absolute w-1/2 h-1/2 rounded-full bg-bbva-blue shadow-xl flex items-center justify-center text-white z-10 animate-pulse-slow">
             <div className="text-center">
               <IconGitBranch className="w-8 h-8 mx-auto mb-2" />
               <div className="font-bold">Específicas (Ruta)</div>
               <div className="text-xs opacity-80 text-bbva-aqua mt-1">Máxima Prioridad</div>
             </div>
          </div>
       </div>

       <div className="w-1/3 space-y-4">
          <div className="p-4 bg-bbva-navy text-white rounded-lg shadow-lg border-l-4 border-bbva-aqua">
             <h4 className="font-bold mb-1">1. Reglas de Archivo/Ruta</h4>
             <p className="text-xs opacity-80">Gana sobre todo lo demás.</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg opacity-75">
             <h4 className="font-bold text-bbva-navy mb-1">2. Repositorio Global</h4>
             <p className="text-xs text-gray-500">Estándares del proyecto.</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-lg opacity-50">
             <h4 className="font-bold text-bbva-navy mb-1">3. Organización</h4>
             <p className="text-xs text-gray-500">Políticas corporativas.</p>
          </div>
       </div>
    </div>
  </SlideFrame>
);

const AnatomySlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={6} title="Arquitectura de Archivos" subtitle="Dónde definir las reglas">
    <div className="grid grid-cols-2 gap-12 mt-8">
      {/* Tree View */}
      <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm shadow-2xl">
         <div className="text-gray-500 pb-4 border-b border-gray-700 mb-4 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
         </div>
         <div className="text-gray-300 space-y-3">
           <div>📁 root</div>
           <div className="pl-6 text-gray-400">📁 src</div>
           <div className="pl-6">📁 .github</div>
           <div className="pl-12 flex items-center gap-2 bg-white/10 p-1 rounded">
              <IconFile className="w-4 h-4 text-bbva-aqua" />
              <span className="text-white font-bold">copilot-instructions.md</span>
              <span className="text-xs text-gray-400 ml-auto">(Global)</span>
           </div>
           <div className="pl-12">📁 instructions</div>
           <div className="pl-20 flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
              <IconFile className="w-4 h-4 text-yellow-400" />
              <span>api-standards.md</span>
           </div>
           <div className="pl-20 flex items-center gap-2 hover:bg-white/5 p-1 rounded transition-colors">
              <IconFile className="w-4 h-4 text-yellow-400" />
              <span>react-components.md</span>
           </div>
         </div>
      </div>

      {/* Explainer */}
      <div className="space-y-6">
        <div className="border-l-4 border-bbva-aqua pl-6 py-2">
           <h3 className="text-xl font-bold text-bbva-navy">Global</h3>
           <code className="text-xs text-bbva-medium-blue">.github/copilot-instructions.md</code>
           <p className="text-gray-600 mt-2">Aplica a <strong>todo</strong> el contexto. Úsalo para reglas universales (Linter, Estilo base).</p>
        </div>

        <div className="border-l-4 border-yellow-400 pl-6 py-2">
           <h3 className="text-xl font-bold text-bbva-navy">Específico</h3>
           <code className="text-xs text-bbva-medium-blue">.github/instructions/*.md</code>
           <p className="text-gray-600 mt-2">Se activan solo cuando editas archivos que coinciden con el patrón definido (ej. <code>**/*.api.ts</code>).</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-sm text-bbva-blue">
           <strong>💡 Pro Tip:</strong> Usa instrucciones específicas para no saturar la ventana de contexto de Copilot con reglas irrelevantes.
        </div>
      </div>
    </div>
  </SlideFrame>
);

const BestPracticesSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={7} title="Buenas Prácticas" subtitle="Escribiendo instrucciones efectivas">
    <div className="grid grid-cols-2 gap-8 mt-4">
      {/* Bad */}
      <div className="bg-red-50 rounded-xl p-6 border border-red-100">
        <div className="flex items-center justify-between mb-4">
           <h4 className="font-bold text-red-800">PROHIBIDO</h4>
           <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded font-bold">Vago</span>
        </div>
        <p className="text-red-900/70 italic mb-4">"Escribe buen código que sea seguro y rápido."</p>
        <div className="h-px bg-red-200 my-4"></div>
        <ul className="text-sm text-red-800 space-y-2">
           <li>• Subjetivo ("bueno", "rápido").</li>
           <li>• Sin contexto técnico.</li>
           <li>• Difícil de verificar.</li>
        </ul>
      </div>

      {/* Good */}
      <div className="bg-green-50 rounded-xl p-6 border border-green-100 shadow-md">
        <div className="flex items-center justify-between mb-4">
           <h4 className="font-bold text-green-800">RECOMENDADO</h4>
           <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded font-bold">Accionable</span>
        </div>
        <div className="bg-white p-3 rounded border border-green-100 font-mono text-xs text-gray-700 mb-4">
           # Error Handling<br/>
           - Usa bloques try/catch en llamadas a API.<br/>
           - Loggea errores usando `Logger.error()`.<br/>
           - Retorna siempre tipos `Result&lt;T&gt;`.
        </div>
        <div className="h-px bg-green-200 my-4"></div>
        <ul className="text-sm text-green-800 space-y-2">
           <li>• Específico y técnico.</li>
           <li>• Menciona herramientas concretas.</li>
           <li>• Fácil de validar en Code Review.</li>
        </ul>
      </div>
    </div>
  </SlideFrame>
);

const AgentsIntroSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={8} title="Agentes Personalizados" subtitle="Especialistas bajo demanda con contexto y expertise" layout="cover">
    <div className="flex flex-col items-center justify-center text-center h-full">
       <div className="grid grid-cols-3 gap-8 w-full max-w-5xl mb-12">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
             <IconShield className="w-12 h-12 text-bbva-aqua mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">Seguridad</h3>
             <p className="text-sm text-gray-300">Auditor experto en OWASP Top 10 2021, sanitización de inputs y mejores prácticas de seguridad.</p>
             <div className="mt-4 text-xs text-bbva-aqua font-mono">@SecurityAuditor</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors transform scale-110 shadow-2xl relative z-10 bg-bbva-blue">
             <IconBuilding className="w-12 h-12 text-white mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">Arquitectura</h3>
             <p className="text-sm text-gray-200">Especialista en arquitectura hexagonal, DDD, SOLID y patrones de diseño enterprise.</p>
             <div className="mt-4 text-xs text-white font-mono">@ArchitectGuru</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
             <IconFile className="w-12 h-12 text-bbva-aqua mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">Testing</h3>
             <p className="text-sm text-gray-300">Experto en TDD, generación de tests unitarios, mocks e integración con Jest/Playwright.</p>
             <div className="mt-4 text-xs text-bbva-aqua font-mono">@QAGuru</div>
          </div>
       </div>
       
       <p className="text-2xl text-white font-light max-w-3xl leading-relaxed">
         Los Agentes son <span className="text-bbva-aqua font-bold">versiones especializadas de Copilot</span> que actúan como miembros senior del equipo, cada uno con <span className="text-bbva-aqua font-bold">rol definido</span>, <span className="text-bbva-aqua font-bold">conocimiento experto</span> y <span className="text-bbva-aqua font-bold">herramientas específicas</span>.
       </p>
       <p className="text-lg text-gray-300 mt-6 max-w-2xl">
         A diferencia de las instrucciones (contexto pasivo), los agentes son <strong className="text-white">activos e interactivos</strong>, respondiendo a menciones directas.
       </p>
    </div>
  </SlideFrame>
);

const AgentAnatomySlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={9} title="Anatomía de un Agente" subtitle="Estructura completa de definición en Markdown">
    <div className="flex gap-8 mt-4 h-full">
      <div className="w-2/3 h-full">
         <div className="bg-bbva-navy rounded-lg shadow-xl overflow-hidden h-full flex flex-col border border-gray-700">
            <div className="bg-black/30 px-4 py-2 flex justify-between items-center border-b border-gray-700">
               <span className="text-xs text-gray-400 font-mono">.github/agents/qa-guru.md</span>
               <span className="text-xs text-green-400">✓ Activo</span>
            </div>
            <div className="p-6 font-mono text-sm text-gray-300 overflow-y-auto">
               <span className="text-gray-500">---</span><br/>
               <span className="text-bbva-light-blue">name:</span> <span className="text-white">QA Guru</span><br/>
               <span className="text-bbva-light-blue">description:</span> <span className="text-white">Experto en pruebas unitarias y de integración con Jest y Playwright.</span><br/>
               <span className="text-gray-500">---</span><br/><br/>
               
               <span className="text-bbva-aqua"># Role</span><br/>
               <span className="text-white">Eres un ingeniero QA Senior con 10+ años de experiencia.</span><br/>
               <span className="text-white">Tu misión: garantizar 100% de coverage y tests confiables.</span><br/><br/>
               
               <span className="text-bbva-aqua"># Context</span><br/>
               <span className="text-white">Trabajas en proyectos TypeScript con arquitectura hexagonal.</span><br/>
               <span className="text-white">El equipo valora: AAA pattern, mocks limpios, tests legibles.</span><br/><br/>
               
               <span className="text-bbva-aqua"># Skills</span><br/>
               <span className="text-white">- Jest: Unit testing, mocking, spies</span><br/>
               <span className="text-white">- Playwright: E2E testing, visual regression</span><br/>
               <span className="text-white">- MSW: API mocking</span><br/>
               <span className="text-white">- Istanbul: Coverage analysis</span><br/><br/>
               
               <span className="text-bbva-aqua"># Rules</span><br/>
               <span className="text-white">1. Cada función debe tener al menos 1 test</span><br/>
               <span className="text-white">2. Usa siempre `describe`, `it`, `expect`</span><br/>
               <span className="text-white">3. Mock dependencias externas (APIs, DB)</span><br/>
               <span className="text-white">4. Tests deben ser independientes</span><br/><br/>
               
               <span className="text-bbva-aqua"># Examples</span><br/>
               <span className="text-white">```typescript</span><br/>
               <span className="text-white">describe('UserService', () =&gt; {'{'}</span><br/>
               <span className="text-white">  it('should create user', async () =&gt; {'{'}</span><br/>
               <span className="text-white">    // Arrange, Act, Assert</span><br/>
               <span className="text-white">  {'}'});</span><br/>
               <span className="text-white">{'}'});</span><br/>
               <span className="text-white">```</span>
            </div>
         </div>
      </div>
      
      <div className="w-1/3 flex flex-col justify-center gap-4">
         <div className="p-4 border-l-4 border-bbva-light-blue bg-gray-50 rounded">
            <h4 className="font-bold text-bbva-navy mb-1">1. Frontmatter</h4>
            <p className="text-xs text-gray-600">Metadatos YAML: nombre visible y descripción breve para el selector de agentes.</p>
         </div>
         <div className="p-4 border-l-4 border-purple-400 bg-gray-50 rounded">
            <h4 className="font-bold text-bbva-navy mb-1">2. Role & Context</h4>
            <p className="text-xs text-gray-600">Define la "personalidad" y experiencia del agente. Cuanto más específico, mejor.</p>
         </div>
         <div className="p-4 border-l-4 border-bbva-aqua bg-gray-50 rounded">
            <h4 className="font-bold text-bbva-navy mb-1">3. Skills & Tools</h4>
            <p className="text-xs text-gray-600">Lista herramientas y tecnologías que el agente domina. Limita el scope.</p>
         </div>
         <div className="p-4 border-l-4 border-bbva-blue bg-gray-50 rounded">
            <h4 className="font-bold text-bbva-navy mb-1">4. Rules</h4>
            <p className="text-xs text-gray-600">Reglas específicas y accionables. Usa imperativos claros.</p>
         </div>
         <div className="p-4 border-l-4 border-green-500 bg-gray-50 rounded">
            <h4 className="font-bold text-bbva-navy mb-1">5. Examples (Opcional)</h4>
            <p className="text-xs text-gray-600">Ejemplos de código que el agente debe generar. Muy útil para consistencia.</p>
         </div>
      </div>
    </div>
  </SlideFrame>
);

const AgentScopeSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={10} title="Alcance de Distribución" subtitle="¿Quién puede usar tus agentes?">
    <div className="grid grid-cols-3 gap-6 mt-12">
      {/* Repo Level */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-purple-500 transition-colors group">
         <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
            <IconGitBranch className="w-6 h-6" />
         </div>
         <h3 className="font-bold text-lg text-bbva-navy mb-2">Nivel Repositorio</h3>
         <p className="text-sm text-gray-500 mb-4">Disponible solo en el repo actual.</p>
         <code className="text-xs bg-gray-100 p-1 rounded text-purple-700">.github/agents/*.md</code>
      </div>

      {/* Org Level */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-bbva-blue transition-colors group relative">
         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-bbva-blue text-white text-xs px-3 py-1 rounded-full">Más Común</div>
         <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-bbva-blue mb-4 group-hover:scale-110 transition-transform">
            <IconBuilding className="w-6 h-6" />
         </div>
         <h3 className="font-bold text-lg text-bbva-navy mb-2">Nivel Organización</h3>
         <p className="text-sm text-gray-500 mb-4">Compartido por todos los equipos.</p>
         <code className="text-xs bg-gray-100 p-1 rounded text-bbva-blue">.github repo -&gt; agents/</code>
      </div>

      {/* Enterprise Level */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-green-500 transition-colors group">
         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
            <IconGlobe className="w-6 h-6" />
         </div>
         <h3 className="font-bold text-lg text-bbva-navy mb-2">Nivel Enterprise</h3>
         <p className="text-sm text-gray-500 mb-4">Gobernanza global.</p>
         <code className="text-xs bg-gray-100 p-1 rounded text-green-700">.github-private -&gt; agents/</code>
      </div>
    </div>
  </SlideFrame>
);

const SynergySlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={11} title="Sinergia Total" subtitle="Instrucciones + Agentes">
    <div className="flex flex-col items-center justify-center h-full relative">
       
       {/* Visual Flow */}
       <div className="w-full max-w-4xl relative">
          {/* Top: User Input */}
          <div className="flex justify-center mb-8">
             <div className="bg-white border border-gray-300 px-6 py-3 rounded-full shadow-sm text-gray-600 italic">
               User: "@QAGuru genera tests para este módulo de pagos"
             </div>
          </div>

          {/* Middle: The Mix */}
          <div className="bg-bbva-navy/5 rounded-3xl p-8 border border-bbva-navy/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-bbva-gradient"></div>
             <div className="grid grid-cols-2 gap-8 items-center">
                <div className="text-right space-y-2">
                   <h4 className="font-bold text-bbva-blue">Contexto (Instrucciones)</h4>
                   <div className="flex flex-wrap justify-end gap-2">
                      <span className="bg-white border px-2 py-1 rounded text-xs">Usa Jest</span>
                      <span className="bg-white border px-2 py-1 rounded text-xs">Arquitectura Hexagonal</span>
                   </div>
                </div>
                <div className="text-5xl text-bbva-aqua font-thin text-center">+</div>
                <div className="text-left space-y-2">
                   <h4 className="font-bold text-bbva-blue">Expertise (Agente)</h4>
                   <div className="flex flex-wrap gap-2">
                      <span className="bg-bbva-blue text-white px-2 py-1 rounded text-xs">Estrategia Testing</span>
                      <span className="bg-bbva-blue text-white px-2 py-1 rounded text-xs">Mocks Avanzados</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Bottom: Output */}
          <div className="flex justify-center mt-8">
             <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-lg max-w-2xl w-full">
                <div className="flex items-center gap-2 mb-2">
                   <IconBrain className="w-5 h-5 text-green-600" />
                   <span className="font-bold text-green-800">Respuesta Perfecta</span>
                </div>
                <p className="text-sm text-gray-600">
                   Genera un test suite en Jest (Regla Repo), usando mocks hexagonales (Regla Org), con una cobertura del 100% (Regla Agente).
                </p>
             </div>
          </div>
       </div>
    </div>
  </SlideFrame>
);

const PlaybookIntro: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={12} layout="section" title="El Manual de Juego">
     <p className="text-xl text-bbva-aqua mt-4 font-light">Guía paso a paso para la implementación</p>
     <div className="flex justify-center gap-4 mt-8 opacity-60">
        <div className="w-16 h-1 bg-white rounded-full"></div>
        <div className="w-4 h-1 bg-white rounded-full"></div>
        <div className="w-4 h-1 bg-white rounded-full"></div>
     </div>
  </SlideFrame>
);

const ConfigGithubSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={13} title="Configuración en GitHub" subtitle="Instrucciones Personales y de Organización">
    <div className="flex gap-8 h-full mt-6">
       {/* Personal */}
       <div className="flex-1">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="w-8 h-8 bg-bbva-navy rounded-full"></div>
                <div>
                   <h4 className="font-bold text-bbva-navy">Personal Instructions</h4>
                   <p className="text-xs text-gray-500">github.com/settings/copilot</p>
                </div>
             </div>
             <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded border border-gray-100">
                   <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Preferencias</label>
                   <p className="text-sm text-gray-700 italic">"Prefiero explicaciones concisas."</p>
                   <p className="text-sm text-gray-700 italic">"Siempre dame ejemplos en TypeScript."</p>
                </div>
                <p className="text-sm text-bbva-blue bg-blue-50 p-3 rounded">
                   Esto te sigue a ti, no al proyecto.
                </p>
             </div>
          </div>
       </div>

       {/* Org */}
       <div className="flex-1">
          <div className="bg-bbva-navy p-6 rounded-xl shadow-lg border border-bbva-blue h-full text-white">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-600">
                <IconBuilding className="w-8 h-8 text-bbva-aqua" />
                <div>
                   <h4 className="font-bold text-white">Organization Settings</h4>
                   <p className="text-xs text-gray-400">Solo Admins</p>
                </div>
             </div>
             <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded border border-white/20">
                   <label className="text-xs font-bold text-bbva-aqua uppercase block mb-2">Políticas</label>
                   <p className="text-sm text-gray-300">Configura reglas que aplican a TODOS los desarrolladores de BBVA.</p>
                </div>
             </div>
          </div>
       </div>
    </div>
  </SlideFrame>
);

const ConfigRepoSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={14} title="Configuración de Repositorio" subtitle="Estructura de archivos recomendada">
    <div className="flex gap-12 mt-8">
       <div className="w-1/2 space-y-8">
          <div className="relative pl-8 before:content-['1'] before:absolute before:left-0 before:top-0 before:w-6 before:h-6 before:bg-bbva-blue before:text-white before:text-center before:rounded-full before:text-sm before:font-bold">
             <h4 className="text-lg font-bold text-bbva-navy">Crear Directorio .github</h4>
             <p className="text-sm text-gray-600 mt-1">En la raíz de tu repositorio.</p>
          </div>
          <div className="relative pl-8 before:content-['2'] before:absolute before:left-0 before:top-0 before:w-6 before:h-6 before:bg-bbva-blue before:text-white before:text-center before:rounded-full before:text-sm before:font-bold">
             <h4 className="text-lg font-bold text-bbva-navy">Definir Instrucciones Globales</h4>
             <p className="text-sm text-gray-600 mt-1">Crea <code>copilot-instructions.md</code> con el stack tecnológico.</p>
          </div>
          <div className="relative pl-8 before:content-['3'] before:absolute before:left-0 before:top-0 before:w-6 before:h-6 before:bg-bbva-blue before:text-white before:text-center before:rounded-full before:text-sm before:font-bold">
             <h4 className="text-lg font-bold text-bbva-navy">Añadir Específicas</h4>
             <p className="text-sm text-gray-600 mt-1">Usa carpetas <code>instructions/</code> para modularizar.</p>
          </div>
       </div>

       <div className="w-1/2 bg-gray-100 rounded-lg p-6 border border-gray-300 shadow-inner">
          <div className="flex gap-2 mb-4">
             <div className="w-3 h-3 rounded-full bg-gray-300"></div>
             <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
          <pre className="font-mono text-xs text-gray-700 whitespace-pre-wrap">
{`# Project Standards

## Language
- TypeScript 5.0+ strictly typed.

## Styling
- Tailwind CSS for all components.
- Follow BBVA Design System tokens.

## State Management
- Use React Context for simple state.
- Use Redux Toolkit for complex flows.`}
          </pre>
       </div>
    </div>
  </SlideFrame>
);

const ConfigAgentRepoSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={15} title="Desplegando Agentes" subtitle="Guía paso a paso para crear tu primer agente">
    <div className="bg-white rounded-xl border border-bbva-blue/20 overflow-hidden shadow-lg mt-6 flex">
       <div className="w-1/3 bg-bbva-navy p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Checklist Detallado</h3>
          <ul className="space-y-5 text-sm">
             <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-bbva-aqua flex items-center justify-center text-xs shrink-0 mt-1">1</span>
                <div>
                   <p className="font-bold mb-1">Crear carpeta `.github/agents/`</p>
                   <p className="text-xs text-gray-400">En la raíz del repositorio</p>
                </div>
             </li>
             <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-bbva-aqua flex items-center justify-center text-xs shrink-0 mt-1">2</span>
                <div>
                   <p className="font-bold mb-1">Crear archivo `.md` descriptivo</p>
                   <p className="text-xs text-gray-400">Ej: security-auditor.md</p>
                </div>
             </li>
             <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-bbva-aqua flex items-center justify-center text-xs shrink-0 mt-1">3</span>
                <div>
                   <p className="font-bold mb-1">Definir Frontmatter YAML</p>
                   <p className="text-xs text-gray-400">name + description obligatorios</p>
                </div>
             </li>
             <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full border-2 border-bbva-aqua flex items-center justify-center text-xs shrink-0 mt-1">4</span>
                <div>
                   <p className="font-bold mb-1">Escribir Role, Skills, Rules</p>
                   <p className="text-xs text-gray-400">Secciones en Markdown</p>
                </div>
             </li>
             <li className="flex items-start gap-3 font-bold text-bbva-aqua">
                <span className="w-6 h-6 rounded-full bg-bbva-aqua text-bbva-navy flex items-center justify-center text-xs shrink-0 mt-1">5</span>
                <div>
                   <p>Commit & Push al repo</p>
                   <p className="text-xs text-gray-400 font-normal">Disponible en ~30 segundos</p>
                </div>
             </li>
          </ul>
          <div className="mt-6 pt-6 border-t border-gray-600">
             <p className="text-xs text-gray-400">
                💡 Los agentes se activan automáticamente tras el push. No requiere configuración adicional.
             </p>
          </div>
       </div>
       <div className="w-2/3 p-8 bg-gray-50">
          <div className="bg-bbva-navy border border-gray-700 rounded shadow-xl p-5 mb-4">
             <div className="flex items-center justify-between mb-3">
                <code className="text-sm text-bbva-aqua font-bold">.github/agents/security-auditor.md</code>
                <span className="text-xs text-green-400 flex items-center gap-1">
                   <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Live
                </span>
             </div>
             <pre className="text-xs font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
{`---
name: Security Auditor
description: Experto en OWASP Top 10 2021 y seguridad web
---

# Role
Eres un Security Engineer especializado en vulnerabilidades web.

# Context
Auditas código TypeScript/Node.js en aplicaciones bancarias.

# Skills
- OWASP Top 10 (2021)
- SQL Injection detection
- XSS prevention
- Authentication flows
- Cryptography best practices

# Rules
1. Señala hardcoded credentials inmediatamente
2. Valida sanitización de inputs del usuario
3. Revisa configuraciones de CORS y CSP
4. Recomienda librerías seguras y actualizadas

# Examples
\`\`\`typescript
// ❌ INSEGURO
const query = "SELECT * FROM users WHERE id=" + userId;

// ✅ SEGURO
const query = db.prepare("SELECT * FROM users WHERE id=?");
\`\`\`
`}
             </pre>
          </div>
          <div className="flex gap-3">
             <div className="flex-1 bg-green-50 p-3 rounded border border-green-200 text-sm text-green-800">
                <strong>✓ Ventajas:</strong> Especialización profunda, respuestas consistentes
             </div>
             <div className="flex-1 bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
                <strong>🎯 Uso:</strong> @SecurityAuditor revisa LoginController.ts
             </div>
          </div>
       </div>
    </div>
  </SlideFrame>
);

const CentralizeAgentsSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={16} title="Estrategia Centralizada" subtitle="Escalando a nivel Enterprise">
    <div className="relative h-full mt-8">
       <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-48 bg-gray-300 border-l border-dashed border-gray-400"></div>
       
       <div className="flex justify-center relative z-10">
          <div className="bg-bbva-navy text-white p-6 rounded-xl shadow-xl text-center w-64 border-2 border-bbva-aqua">
             <IconGlobe className="w-8 h-8 mx-auto mb-2 text-bbva-aqua" />
             <h3 className="font-bold">Enterprise Repo</h3>
             <code className="text-xs block mt-2 opacity-60">.github-private</code>
             <p className="text-xs mt-2 text-bbva-aqua">Agentes Globales</p>
          </div>
       </div>

       <div className="flex justify-between max-w-4xl mx-auto mt-12 relative z-10 px-12">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200 text-center w-48">
             <IconBuilding className="w-6 h-6 mx-auto mb-2 text-gray-400" />
             <h4 className="font-bold text-bbva-navy">Org A</h4>
             <p className="text-xs text-gray-500">Hereda Agentes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200 text-center w-48">
             <IconBuilding className="w-6 h-6 mx-auto mb-2 text-gray-400" />
             <h4 className="font-bold text-bbva-navy">Org B</h4>
             <p className="text-xs text-gray-500">Hereda Agentes</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200 text-center w-48">
             <IconBuilding className="w-6 h-6 mx-auto mb-2 text-gray-400" />
             <h4 className="font-bold text-bbva-navy">Org C</h4>
             <p className="text-xs text-gray-500">Hereda Agentes</p>
          </div>
       </div>
    </div>
  </SlideFrame>
);

const UsingAgentsSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={17} title="Usando los Agentes" subtitle="Integración práctica en el flujo de trabajo">
     <div className="flex gap-12 h-full items-center">
        <div className="flex-1">
           <h3 className="text-2xl font-bold text-bbva-navy mb-6">Formas de Invocación</h3>
           
           <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                 <div className="flex items-start gap-4 mb-3">
                    <div className="bg-bbva-blue text-white px-3 py-1 rounded font-mono text-sm">@mentions</div>
                    <div className="flex-1">
                       <h4 className="font-bold text-gray-800">En GitHub Copilot Chat</h4>
                       <p className="text-sm text-gray-600">Mención directa en conversación</p>
                    </div>
                 </div>
                 <div className="bg-gray-50 p-3 rounded border border-gray-100 font-mono text-sm text-gray-700">
                    "@SecurityAuditor revisa esta función para vulnerabilidades SQL"
                 </div>
                 <p className="text-xs text-gray-500 mt-2">El agente responderá con contexto específico de seguridad</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                 <div className="flex items-start gap-4 mb-3">
                    <div className="bg-bbva-blue text-white px-3 py-1 rounded font-mono text-sm">UI Picker</div>
                    <div className="flex-1">
                       <h4 className="font-bold text-gray-800">Selector de Agentes</h4>
                       <p className="text-sm text-gray-600">Menú desplegable en Copilot</p>
                    </div>
                 </div>
                 <div className="bg-gray-50 p-3 rounded border border-gray-100">
                    <p className="text-sm text-gray-700">1. Abre el panel de Copilot</p>
                    <p className="text-sm text-gray-700">2. Haz clic en el selector superior</p>
                    <p className="text-sm text-gray-700">3. Elige el agente apropiado</p>
                    <p className="text-sm text-gray-700">4. Escribe tu pregunta normalmente</p>
                 </div>
              </div>

              <div className="bg-bbva-navy/5 border border-bbva-blue/20 rounded-lg p-4">
                 <p className="text-sm text-bbva-blue">
                    <strong>💡 Pro Tip:</strong> Los agentes heredan instrucciones del repositorio automáticamente, combinando contexto general con expertise específico.
                 </p>
              </div>
           </div>
        </div>

        <div className="flex-1 bg-white border-2 border-gray-200 rounded-xl shadow-2xl p-2 rotate-2 transform hover:rotate-0 transition-transform duration-500">
           <div className="bg-gray-800 border-b p-3 rounded-t flex items-center gap-2">
              <div className="flex gap-1">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-white text-xs font-mono ml-2">GitHub Copilot Chat</span>
           </div>
           <div className="p-4 space-y-4 bg-gray-50 min-h-[300px]">
              <div className="flex gap-2 items-end justify-end">
                 <div className="bg-bbva-blue text-white p-3 rounded-l-lg rounded-tr-lg text-sm max-w-[80%] shadow">
                    @QAGuru genera tests para PaymentService.ts con mocks de las APIs externas
                 </div>
                 <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs">👤</div>
              </div>
              <div className="flex gap-2 items-start">
                 <div className="w-8 h-8 bg-bbva-aqua rounded-full flex items-center justify-center text-white font-bold text-xs">QA</div>
                 <div className="bg-white text-gray-800 p-3 rounded-r-lg rounded-tl-lg text-sm max-w-[80%] border-2 border-bbva-aqua/20 shadow">
                    <p className="font-bold text-bbva-blue mb-2 flex items-center gap-1">
                       <IconFile className="w-4 h-4"/> QA Guru está escribiendo...
                    </p>
                    <div className="space-y-1 text-xs text-gray-600">
                       <p>✓ Analizando PaymentService.ts</p>
                       <p>✓ Detectando dependencias externas</p>
                       <p>✓ Generando suite con Jest + MSW</p>
                       <p>✓ Aplicando pattern AAA</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
  </SlideFrame>
);

const SummarySlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={18} title="Resumen Ejecutivo" subtitle="Takeaways clave de la sesión">
    <div className="grid grid-cols-2 gap-8 mt-6">
       <div className="bg-white p-8 rounded-xl border-t-4 border-bbva-blue shadow-md">
          <h3 className="text-xl font-bold text-bbva-navy mb-4 flex items-center gap-2">
             <IconCode /> Instrucciones Personalizadas
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
             Son el <strong>contexto pasivo</strong> que Copilot siempre conoce. Úsalas para reglas universales: estilo de código, arquitectura, librerías permitidas, prohibiciones.
          </p>
          <ul className="text-xs text-gray-500 space-y-2">
             <li>✓ Aplican automáticamente a todo el código</li>
             <li>✓ Ideales para estándares y convenciones</li>
             <li>✓ Se pueden hacer específicas por ruta</li>
          </ul>
       </div>

       <div className="bg-white p-8 rounded-xl border-t-4 border-bbva-aqua shadow-md">
          <h3 className="text-xl font-bold text-bbva-navy mb-4 flex items-center gap-2">
             <IconBrain /> Agentes Personalizados
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
             Son <strong>expertos activos</strong> que se invocan bajo demanda. Úsalos para tareas específicas que requieren expertise: migraciones, testing, security audits, documentación técnica.
          </p>
          <ul className="text-xs text-gray-500 space-y-2">
             <li>✓ Se activan con @mention o selector</li>
             <li>✓ Combinan contexto + especialización</li>
             <li>✓ Ideales para flujos complejos</li>
          </ul>
       </div>

       <div className="col-span-2 bg-gradient-to-r from-bbva-navy to-bbva-blue text-white p-8 rounded-xl shadow-xl">
          <div className="flex items-start justify-between">
             <div className="flex-1">
                <h4 className="font-bold text-2xl mb-3 flex items-center gap-3">
                   <span className="text-3xl">💎</span> Principios de Oro
                </h4>
                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <p className="text-sm font-semibold text-bbva-aqua mb-1">1. Empieza Simple</p>
                      <p className="text-xs opacity-90">2-3 agentes bien definidos &gt; 10 agentes genéricos</p>
                   </div>
                   <div>
                      <p className="text-sm font-semibold text-bbva-aqua mb-1">2. Itera Basándote en Uso Real</p>
                      <p className="text-xs opacity-90">Observa qué preguntas se repiten en el equipo</p>
                   </div>
                   <div>
                      <p className="text-sm font-semibold text-bbva-aqua mb-1">3. Sé Específico, No Vago</p>
                      <p className="text-xs opacity-90">"Usa Jest con AAA pattern" &gt; "Escribe buenos tests"</p>
                   </div>
                   <div>
                      <p className="text-sm font-semibold text-bbva-aqua mb-1">4. Combina Ambos Sistemas</p>
                      <p className="text-xs opacity-90">Instrucciones (contexto) + Agentes (expertise) = Máxima potencia</p>
                   </div>
                </div>
             </div>
             <IconBBVA className="w-20 h-auto text-white opacity-20 ml-8" />
          </div>
       </div>
    </div>
  </SlideFrame>
);

const IdeasSlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={19} title="Ideas para Empezar" subtitle="Catálogo de Agentes Potenciales">
    <div className="grid grid-cols-2 gap-6 mt-6">
       {[
          { icon: "🧹", title: "Refactor Agent", desc: "Limpia deuda técnica, moderniza sintaxis y aplica patrones de diseño.", example: "@RefactorMaster optimiza esta clase legacy" },
          { icon: "🧪", title: "Test Writer", desc: "Escribe tests unitarios siguiendo patrones AAA con alto coverage.", example: "@TestWriter crea suite completo para UserService" },
          { icon: "📝", title: "Documentation Agent", desc: "Documenta APIs en formato OpenAPI/Swagger y genera READMEs.", example: "@DocuMaster documenta esta API REST" },
          { icon: "🔐", title: "Security Guard", desc: "Audita código contra OWASP Top 10 2021 y valida inputs/outputs.", example: "@SecurityGuard escanea vulnerabilidades aquí" },
          { icon: "🏗️", title: "Migration Agent", desc: "Asiste en migraciones de versiones, frameworks o arquitecturas.", example: "@MigrationExpert migra de Angular 15 a 17" },
          { icon: "🎨", title: "UI/UX Expert", desc: "Optimiza componentes para accesibilidad y responsive design.", example: "@UIExpert mejora la accesibilidad del form" }
       ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-3 p-5 bg-white border border-gray-100 rounded-lg hover:shadow-lg hover:border-bbva-aqua transition-all group">
             <div className="flex items-start gap-4">
                <div className="text-3xl bg-gray-50 p-3 rounded-lg group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="flex-1">
                   <h4 className="font-bold text-bbva-navy mb-1">{item.title}</h4>
                   <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
             </div>
             <div className="bg-bbva-navy/5 border border-bbva-blue/20 rounded p-2 font-mono text-xs text-bbva-blue">
                {item.example}
             </div>
          </div>
       ))}
    </div>
    <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
       <p className="text-sm text-gray-700">
          <strong className="text-yellow-800">⚠️ Consejo:</strong> Empieza con 2-3 agentes bien definidos. La calidad supera a la cantidad. Itera basándote en feedback real del equipo.
       </p>
    </div>
  </SlideFrame>
);

const CTASlide: React.FC<{isActive: boolean}> = () => (
  <SlideFrame pageNumber={20} layout="section" title="Empieza Hoy">
    <div className="mt-8 max-w-2xl text-center">
       <p className="text-xl text-gray-200 font-light mb-12">
          La diferencia entre una herramienta y un compañero de equipo es la <span className="text-bbva-aqua font-bold">personalización</span>.
       </p>
       
       <div className="flex justify-center gap-8">
          <div className="bg-white text-bbva-navy px-8 py-4 rounded font-bold hover:bg-gray-100 cursor-pointer transition-colors">
             Crear .github/instructions
          </div>
          <div className="border border-white text-white px-8 py-4 rounded font-bold hover:bg-white/10 cursor-pointer transition-colors">
             Definir Primer Agente
          </div>
       </div>
    </div>
  </SlideFrame>
);

export const slides: SlideDefinition[] = [
  { id: 1, component: TitleSlide },
  { id: 2, component: ComparisonSlide },
  { id: 3, component: RoadmapSlide },
  { id: 4, component: DNASlide },
  { id: 5, component: HierarchySlide },
  { id: 6, component: AnatomySlide },
  { id: 7, component: BestPracticesSlide },
  { id: 8, component: AgentsIntroSlide },
  { id: 9, component: AgentAnatomySlide },
  { id: 10, component: AgentScopeSlide },
  { id: 11, component: SynergySlide },
  { id: 12, component: PlaybookIntro },
  { id: 13, component: ConfigGithubSlide },
  { id: 14, component: ConfigRepoSlide },
  { id: 15, component: ConfigAgentRepoSlide },
  { id: 16, component: CentralizeAgentsSlide },
  { id: 17, component: UsingAgentsSlide },
  { id: 18, component: SummarySlide },
  { id: 19, component: IdeasSlide },
  { id: 20, component: CTASlide },
];