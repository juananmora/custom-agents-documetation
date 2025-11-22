import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Github, Book, Code2, ArrowRight, CheckCircle2, Bot, FileText,
    Building, User, Shield, Layers, Zap, Target, Lightbulb, Rocket, Menu, X
} from 'lucide-react';
import PriorityVisualizer from './components/PriorityVisualizer';
import { ComparisonCard, FeatureCard, AgentCard, CodeComparison } from './components/ContentComponents';

const LandingPage: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(progress);
            setScrollY(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#fundamentos', label: 'Fundamentos' },
        { href: '#instrucciones', label: 'Instrucciones' },
        { href: '#agentes', label: 'Agentes' },
        { href: '#sinergia', label: 'Sinergia' },
        { href: '#configuracion', label: 'Configuración' },
        { href: '#practicas', label: 'Mejores Prácticas' }
    ];

    return (
        <div className="min-h-screen bg-canvas-default text-fg-default font-sans selection:bg-accent-subtle selection:text-accent-fg scroll-smooth">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-canvas-subtle z-[100]">
                <motion.div
                    className="h-full bg-gradient-to-r from-accent-fg via-success-fg to-accent-fg"
                    style={{ width: `${scrollProgress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-canvas-default/95 backdrop-blur-md border-b border-border-default">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Github className="w-8 h-8 text-fg-default" />
                        <span className="font-semibold text-lg tracking-tight">GitHub Copilot</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-fg-muted">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-fg-default transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-fg-muted hover:text-fg-default"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="hidden lg:flex items-center gap-3">
                        <a href="https://github.com/copilot/agents" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                            Ver Agentes
                        </a>
                        <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                            Obtener Copilot
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden border-t border-border-default bg-canvas-default"
                    >
                        <nav className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-3 py-2 rounded hover:bg-canvas-subtle text-fg-muted hover:text-fg-default transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </header>

            <main className="pt-16">
                {/* Hero Section */}
                <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Parallax Background */}
                    <motion.div
                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-subtle via-canvas-default to-canvas-default opacity-40"
                        style={{ y: scrollY * 0.5 }}
                    ></motion.div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-subtle border border-border-default text-xs font-medium text-fg-muted mb-6">
                                <span className="w-2 h-2 rounded-full bg-accent-fg animate-pulse"></span>
                                Más Allá de las Sugerencias
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-fg-default via-accent-fg to-fg-default bg-clip-text text-transparent">
                                Domina GitHub Copilot con<br />Agentes e Instrucciones a Medida
                            </h1>
                            <p className="text-xl text-fg-muted max-w-3xl mx-auto mb-10 leading-relaxed">
                                Una guía para transformar a Copilot de un asistente genérico a un miembro especializado de tu equipo
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                                <a href="#fundamentos" className="btn-primary text-base px-8 py-3 flex items-center gap-2">
                                    Comenzar <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="#configuracion" className="btn-secondary text-base px-8 py-3 flex items-center gap-2">
                                    Ver Configuración <Book className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                {[
                                    { icon: <FileText className="w-4 h-4" />, text: 'Instrucciones a Medida' },
                                    { icon: <Bot className="w-4 h-4" />, text: 'Agentes Personalizados' },
                                    { icon: <Zap className="w-4 h-4" />, text: 'Flujos Automatizados' },
                                    { icon: <Code2 className="w-4 h-4" />, text: 'Contexto Específico' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-canvas-subtle border border-border-default text-sm">
                                        {item.icon}
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Transformation Section */}
                <section id="fundamentos" className="py-20 border-y border-border-default bg-canvas-subtle/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                De Asistente Genérico a Compañero de Equipo Experto
                            </h2>
                            <p className="text-fg-muted max-w-2xl mx-auto text-lg">
                                La personalización convierte a Copilot en un multiplicador de fuerza para tu proyecto
                            </p>
                        </div>

                        <motion.div
                            className="grid md:grid-cols-2 gap-8 mb-12"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <ComparisonCard
                                title="Copilot Estándar"
                                type="standard"
                                items={[
                                    'Ofrece ayuda general sobre el código',
                                    'Desconoce los estándares y arquitectura de tu proyecto',
                                    'Requiere que repitas el contexto en cada prompt',
                                    'Respuestas genéricas sin personalización'
                                ]}
                            />
                            <ComparisonCard
                                title="Copilot Personalizado"
                                type="custom"
                                items={[
                                    'Entiende la "personalidad" de tu repositorio',
                                    'Conoce tus librerías y sigue tus guías de estilo',
                                    'Automatiza flujos de trabajo complejos',
                                    'Se convierte en un experto a tu servicio'
                                ]}
                            />
                        </motion.div>

                        {/* Transformation Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl mx-auto mb-12"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}copilot-transformation.png`}
                                alt="Transformación de Copilot de asistente genérico a compañero experto"
                                className="w-full rounded-xl shadow-2xl border border-border-default"
                            />
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, staggerChildren: 0.2 }}
                        >
                            <FeatureCard
                                icon={<Book className="w-6 h-6 text-[#58a6ff]" />}
                                title="Librerías"
                                description="Copilot conoce las librerías específicas de tu proyecto y genera código compatible"
                                color="blue"
                            />
                            <FeatureCard
                                icon={<FileText className="w-6 h-6 text-[#3fb950]" />}
                                title="Guías de Estilo"
                                description="Sigue automáticamente los estándares de código de tu equipo"
                                color="green"
                            />
                            <FeatureCard
                                icon={<Zap className="w-6 h-6 text-[#bc8cff]" />}
                                title="Flujos de Trabajo"
                                description="Automatiza tareas repetitivas con agentes especializados"
                                color="purple"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Instructions Base Section */}
                <motion.section
                    id="instrucciones"
                    className="py-20 bg-canvas-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                La Base: Instrucciones Personalizadas
                            </h2>
                            <p className="text-fg-muted max-w-3xl mx-auto text-lg">
                                El ADN de tu Proyecto
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="card p-8 bg-gradient-to-br from-accent-subtle/20 to-canvas-subtle">
                                <p className="text-lg mb-6">
                                    Las <strong className="text-accent-fg">Instrucciones Personalizadas</strong> son directivas en lenguaje natural que proveen contexto persistente a Copilot.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">No más repetición</h4>
                                            <p className="text-sm text-fg-muted">Evitan añadir el mismo contexto en cada prompt</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Conocimiento Integrado</h4>
                                            <p className="text-sm text-fg-muted">Copilot conoce las reglas y arquitectura de tu proyecto</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Alta Calidad</h4>
                                            <p className="text-sm text-fg-muted">Respuestas más precisas y relevantes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hierarchy Section */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8">Ámbitos de Influencia y su Jerarquía</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-2xl mx-auto">
                                Las instrucciones se aplican en diferentes niveles. Las más específicas siempre tienen prioridad sobre las más generales.
                            </p>
                            <PriorityVisualizer />
                        </div>

                        {/* Anatomy of Instructions */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8">Anatomía de las Instrucciones de Repositorio</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-3xl mx-auto">
                                Dentro de un repositorio, puedes afinar el contexto de Copilot con dos niveles de granularidad
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="card p-6 bg-canvas-subtle">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-accent-fg" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Instrucciones para todo el Repositorio</h4>
                                            <code className="text-xs text-fg-muted">.github/copilot-instructions.md</code>
                                        </div>
                                    </div>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Definir estándares y contexto que aplican a todo el proyecto
                                    </p>
                                    <div className="bg-canvas-default rounded p-3 text-xs font-mono">
                                        <div className="text-success-fg mb-1"># Ejemplo</div>
                                        <div className="text-fg-muted">Este proyecto usa React con Tailwind CSS</div>
                                        <div className="text-fg-muted">Genera siempre pruebas unitarias con Jest</div>
                                    </div>
                                </div>

                                <div className="card p-6 bg-canvas-subtle">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-success-subtle flex items-center justify-center">
                                            <Code2 className="w-5 h-5 text-success-fg" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Instrucciones Específicas de Ruta</h4>
                                            <code className="text-xs text-fg-muted">.github/instructions/NAME.instructions.md</code>
                                        </div>
                                    </div>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Aplicar reglas solo a archivos que coincidan con un patrón (glob)
                                    </p>
                                    <div className="bg-canvas-default rounded p-3 text-xs font-mono">
                                        <div className="text-success-fg mb-1"># Ejemplo</div>
                                        <div className="text-fg-muted">Para *.py, sigue PEP 8</div>
                                        <div className="text-fg-muted">En src/components/**/*.tsx, usa hooks</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div>
                            <h3 className="text-2xl font-bold text-center mb-8">Buenas Prácticas para Instrucciones</h3>

                            <div className="max-w-4xl mx-auto space-y-6 mb-12">
                                {[
                                    { icon: <Target className="w-5 h-5" />, title: 'Sé Breve y Directo', desc: 'Usa declaraciones cortas y autocontenidas' },
                                    { icon: <Layers className="w-5 h-5" />, title: 'Usa Estructura', desc: 'Emplea encabezados (#) y listas (-) para organizar' },
                                    { icon: <Code2 className="w-5 h-5" />, title: 'Ejemplos Concretos', desc: 'Muestra fragmentos de código de lo que se debe y no se debe hacer' },
                                    { icon: <Book className="w-5 h-5" />, title: 'Describe el Qué y el Porqué', desc: 'Explica el propósito, arquitectura y herramientas clave' }
                                ].map((practice, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-canvas-subtle"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center flex-shrink-0 text-accent-fg">
                                            {practice.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{practice.title}</h4>
                                            <p className="text-sm text-fg-muted">{practice.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <CodeComparison
                                bad={{
                                    title: 'MALA INSTRUCCIÓN (Vaga)',
                                    code: `Asegúrate de que el código sea bueno
y siga nuestros estándares`
                                }}
                                good={{
                                    title: 'BUENA INSTRUCCIÓN (Específica)',
                                    code: `# Estándares de Codificación para Python
Sigue las guías de estilo de PEP 8
Usa f-strings para el formateo de cadenas
Las funciones no deben exceder las 50 líneas

# Manejo de Errores
Usa bloques try/except para operaciones de I/O
Evita excepciones genéricas como except Exception:`
                                }}
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Custom Agents Section */}
                <motion.section
                    id="agentes"
                    className="py-20 bg-canvas-subtle/30 border-y border-border-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                El Especialista: Agentes Personalizados
                            </h2>
                            <p className="text-fg-muted max-w-3xl mx-auto text-lg">
                                Contratando a un Especialista para Tareas Específicas
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="card p-8 bg-gradient-to-br from-accent-subtle/20 to-canvas-subtle">
                                <p className="text-lg mb-6">
                                    Los <strong className="text-accent-fg">Agentes Personalizados</strong> son versiones especializadas y configurables del agente de codificación de Copilot, diseñados para ejecutar flujos de trabajo recurrentes y complejos.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <Bot className="w-5 h-5 text-accent-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Más allá del contexto</h4>
                                            <p className="text-sm text-fg-muted">Tienen personalidad, habilidades y propósito definidos</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-accent-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Expertos bajo demanda</h4>
                                            <p className="text-sm text-fg-muted">Invoca agentes específicos para tareas concretas</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Layers className="w-5 h-5 text-accent-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Configurables y Reutilizables</h4>
                                            <p className="text-sm text-fg-muted">Compartibles a nivel de repo, org o empresa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agent Examples */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <AgentCard
                                name="Arquitecto de Soluciones"
                                description="Diseña la estructura y arquitectura de nuevas funcionalidades"
                                icon={<Building className="w-6 h-6 text-white" />}
                                color="from-[#58a6ff] to-[#1f6feb]"
                            />
                            <AgentCard
                                name="Auditor de Seguridad"
                                description="Revisa el código en busca de vulnerabilidades y mejores prácticas"
                                icon={<Shield className="w-6 h-6 text-white" />}
                                color="from-[#f85149] to-[#da3633]"
                            />
                            <AgentCard
                                name="Experto en Documentación"
                                description="Genera documentación clara y completa para tu código"
                                icon={<Book className="w-6 h-6 text-white" />}
                                color="from-[#3fb950] to-[#2ea043]"
                            />
                        </div>

                        {/* Agent Anatomy */}
                        <div>
                            <h3 className="text-2xl font-bold text-center mb-8">Anatomía de un Agente Personalizado</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-2xl mx-auto">
                                Los agentes se definen en simples archivos Markdown (.md). La clave está en sus instrucciones internas.
                            </p>

                            <div className="max-w-4xl mx-auto card bg-[#0d1117] border-border-default shadow-2xl overflow-hidden">
                                <div className="flex items-center justify-between px-4 py-3 bg-canvas-subtle border-b border-border-default">
                                    <span className="text-xs font-mono text-fg-muted">.github/agents/nextjs-agent.md</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-relaxed text-fg-default">
                                        <code>
                                            <span className="text-accent-fg">---</span>{'\n'}
                                            <span className="text-success-fg">name:</span> NextJS Ninja{'\n'}
                                            <span className="text-success-fg">description:</span> Un experto en desarrollo con Next.js{'\n'}
                                            <span className="text-accent-fg">---</span>{'\n'}
                                            {'\n'}
                                            <span className="text-attention-fg"># CONTEXTO</span>{'\n'}
                                            Eres un experto en Next.js con 10 años de experiencia{'\n'}
                                            Tu especialidad es crear aplicaciones performantes y escalables{'\n'}
                                            {'\n'}
                                            <span className="text-attention-fg"># INSTRUCCIONES</span>{'\n'}
                                            - Utiliza siempre TypeScript{'\n'}
                                            - Prefiere Server Components sobre Client Components{'\n'}
                                            - Para el manejo de estado, sugiere Zustand o Jotai{'\n'}
                                            - Al crear la estructura inicial, incluye directorios para{'\n'}
                                            {'  '}components, lib, y app{'\n'}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Synergy Section */}
                <motion.section
                    id="sinergia"
                    className="py-20 bg-canvas-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                La Sinergia: Instrucciones y Agentes Trabajando Juntos
                            </h2>
                            <p className="text-fg-muted max-w-3xl mx-auto text-lg">
                                Las Instrucciones son el entorno. Los Agentes son los expertos que operan en él.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="card p-8 bg-gradient-to-br from-accent-subtle/10 to-canvas-subtle mb-12">
                                <p className="text-lg text-center mb-8">
                                    Un agente no opera en el vacío. Cuando invocas a un Agente Personalizado, Copilot combina de forma inteligente su "personalidad" con el contexto relevante de las Instrucciones Personalizadas.
                                </p>

                                {/* Flow Diagram */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-accent-subtle border-2 border-accent-muted flex items-center justify-center mx-auto mb-3">
                                            <Layers className="w-8 h-8 text-accent-fg" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Recopilación de Contexto</h4>
                                        <p className="text-sm text-fg-muted">
                                            GitHub Copilot reúne instrucciones del agente, de ruta, de repo, personales y de organización
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <ArrowRight className="w-8 h-8 text-accent-fg hidden md:block" />
                                    </div>

                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-success-subtle border-2 border-success-muted flex items-center justify-center mx-auto mb-3">
                                            <Zap className="w-8 h-8 text-success-fg" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Prompt Compuesto</h4>
                                        <p className="text-sm text-fg-muted">
                                            Toda la información se combina en un prompt enriquecido que se envía al modelo de IA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center my-6">
                                    <ArrowRight className="w-8 h-8 text-accent-fg rotate-90" />
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500/30 flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle2 className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h4 className="font-semibold mb-2">Output Relevante</h4>
                                    <p className="text-sm text-fg-muted max-w-md mx-auto">
                                        El resultado refleja la pericia del Agente y respeta las reglas y el contexto del proyecto
                                    </p>
                                </div>
                            </div>

                            <div className="card p-6 bg-accent-subtle/20 border-accent-muted">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-subtle border border-accent-muted flex items-center justify-center">
                                        <Bot className="w-5 h-5 text-accent-fg" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Ejemplo de Uso</h4>
                                        <p className="text-sm text-fg-muted mb-3">
                                            <strong>Input del Usuario:</strong> "Hey @copilot, usa el 'NextJS Ninja' para refactorizar este componente."
                                        </p>
                                        <p className="text-sm text-fg-muted">
                                            Copilot combinará las instrucciones del agente NextJS Ninja con tus instrucciones personales, las del repositorio, y las de tu organización para generar una refactorización que sigue todos los estándares establecidos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Configuration Section */}
                <motion.section
                    id="configuracion"
                    className="py-20 bg-canvas-subtle/30 border-y border-border-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                El Manual de Juego: Configuración e Implementación
                            </h2>
                            <p className="text-fg-muted max-w-3xl mx-auto text-lg">
                                Guía práctica y paso a paso para configurar Instrucciones y Agentes
                            </p>
                        </div>

                        {/* Configuration Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {/* Personal Level */}
                            <div className="card p-6 bg-canvas-subtle">
                                <div className="flex items-center gap-3 mb-4">
                                    <User className="w-6 h-6 text-accent-fg" />
                                    <h3 className="font-semibold text-lg">Nivel Personal</h3>
                                </div>
                                <p className="text-fg-muted text-sm mb-4">
                                    Aplica a todas tus interacciones en GitHub.com
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-canvas-default rounded border border-border-default">
                                        <strong className="text-accent-fg">Web:</strong> github.com → Settings → Copilot → Personal Instructions
                                    </div>
                                    <div className="p-3 bg-canvas-default rounded border border-border-default">
                                        <strong className="text-accent-fg">VS Code:</strong> Settings → GitHub Copilot → Custom Instructions
                                    </div>
                                </div>
                            </div>

                            {/* Repository Level */}
                            <div className="card p-6 bg-canvas-subtle">
                                <div className="flex items-center gap-3 mb-4">
                                    <Book className="w-6 h-6 text-success-fg" />
                                    <h3 className="font-semibold text-lg">Nivel Repositorio</h3>
                                </div>
                                <p className="text-fg-muted text-sm mb-4">
                                    Específico de un repositorio, compartido con colaboradores
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-canvas-default rounded border border-border-default">
                                        <strong className="text-success-fg">Archivo:</strong>
                                        <code className="block mt-1 px-2 py-1 bg-canvas-subtle rounded text-xs">
                                            .github/copilot-instructions.md
                                        </code>
                                    </div>
                                    <div className="p-3 bg-canvas-default rounded border border-border-default">
                                        <strong className="text-success-fg">Path-specific:</strong>
                                        <code className="block mt-1 px-2 py-1 bg-canvas-subtle rounded text-xs">
                                            .github/instructions/NAME.instructions.md
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* Org/Enterprise Level */}
                            <div className="card p-6 bg-canvas-subtle">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building className="w-6 h-6 text-attention-fg" />
                                    <h3 className="font-semibold text-lg">Org/Enterprise</h3>
                                </div>
                                <p className="text-fg-muted text-sm mb-4">
                                    Políticas y estándares a nivel de organización o empresa
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-canvas-default rounded border border-border-default">
                                        <strong className="text-attention-fg">Org:</strong> Org Settings → Copilot → Policies
                                    </div>
                                    <div className="p-3 bg-canvas-default rounded border border-border-default">
                                        <strong className="text-attention-fg">Enterprise:</strong> Enterprise Settings → Copilot → Global Policies
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agent Configuration */}
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-center mb-8">Configurar Agentes</h3>

                            <div className="space-y-6">
                                <div className="card p-6 bg-canvas-subtle">
                                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-sm">1</span>
                                        Nivel Repositorio
                                    </h4>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Crea especialistas para tareas únicas de tu proyecto
                                    </p>
                                    <code className="block px-4 py-2 bg-canvas-default rounded text-xs">
                                        .github/agents/NOMBRE_AGENTE.md
                                    </code>
                                </div>

                                <div className="card p-6 bg-canvas-subtle">
                                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-sm">2</span>
                                        Nivel Organización
                                    </h4>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Disponible para todos los repositorios de la organización
                                    </p>
                                    <code className="block px-4 py-2 bg-canvas-default rounded text-xs">
                                        Repositorio .github → agents/NOMBRE_AGENTE.md
                                    </code>
                                </div>

                                <div className="card p-6 bg-canvas-subtle">
                                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-sm">3</span>
                                        Nivel Empresa
                                    </h4>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Compartido entre todas las organizaciones de la empresa
                                    </p>
                                    <code className="block px-4 py-2 bg-canvas-default rounded text-xs">
                                        Repositorio .github-private → agents/NOMBRE_AGENTE.md
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Best Practices Section */}
                <motion.section
                    id="practicas"
                    className="py-20 bg-canvas-default"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                El Horizonte: Mejores Prácticas y Próximos Pasos
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="card p-8 bg-gradient-to-br from-accent-subtle/10 to-canvas-subtle">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <FileText className="w-6 h-6 text-accent-fg" />
                                    Recap de Instrucciones
                                </h3>
                                <p className="text-fg-muted mb-4">
                                    <strong className="text-fg-default">Función:</strong> Proveer contexto persistente. El "ADN" del proyecto.
                                </p>
                                <p className="text-sm text-fg-muted">
                                    <strong className="text-fg-default">Mejor Práctica:</strong> Usa instrucciones específicas de ruta (path-specific) para mantener la relevancia y evitar sobrecargar el contexto global.
                                </p>
                            </div>

                            <div className="card p-8 bg-gradient-to-br from-success-subtle/10 to-canvas-subtle">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Bot className="w-6 h-6 text-success-fg" />
                                    Recap de Agentes
                                </h3>
                                <p className="text-fg-muted mb-4">
                                    <strong className="text-fg-default">Función:</strong> Actuar como especialistas con propósito. Los "expertos" para tareas.
                                </p>
                                <p className="text-sm text-fg-muted">
                                    <strong className="text-fg-default">Mejor Práctica:</strong> Define agentes para flujos de trabajo recurrentes y bien definidos donde la consistencia es clave.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="card p-8 bg-gradient-to-r from-accent-subtle/20 to-purple-500/10 border-accent-muted text-center">
                                <Lightbulb className="w-12 h-12 text-accent-fg mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Principio General</h3>
                                <p className="text-lg">
                                    <strong>Itera y Refina:</strong> Empieza con instrucciones y agentes simples. Observa los resultados y ajústalos. La personalización es un proceso continuo, no un evento único.
                                </p>
                            </div>
                        </div>

                        {/* Agent Ideas */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8">Ideas para tus Agentes</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-2xl mx-auto">
                                Piensa en las tareas repetitivas o especializadas de tu equipo. ¿Puedes crear un agente para ellas?
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <AgentCard
                                    name="Especialista en Limpieza"
                                    description="Refactorizar código, eliminar duplicación y mejorar legibilidad"
                                    icon={<Code2 className="w-6 h-6 text-white" />}
                                    color="from-[#58a6ff] to-[#1f6feb]"
                                />
                                <AgentCard
                                    name="Auditor de Accesibilidad"
                                    description="Revisar componentes UI para cumplimiento WCAG"
                                    icon={<Shield className="w-6 h-6 text-white" />}
                                    color="from-[#f85149] to-[#da3633]"
                                />
                                <AgentCard
                                    name="Planificador de Implementación"
                                    description="Desglosar features en tareas técnicas accionables"
                                    icon={<Target className="w-6 h-6 text-white" />}
                                    color="from-[#3fb950] to-[#2ea043]"
                                />
                                <AgentCard
                                    name="Compañero de Bugs"
                                    description="Analizar reportes e implementar soluciones específicas"
                                    icon={<Zap className="w-6 h-6 text-white" />}
                                    color="from-[#bc8cff] to-[#8957e5]"
                                />
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="max-w-3xl mx-auto">
                            <div className="card p-8 bg-gradient-to-br from-accent-subtle to-purple-500/20 border-accent-muted text-center">
                                <Rocket className="w-16 h-16 text-accent-fg mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4">Tu Primer Paso Hacia la Maestría</h3>
                                <p className="text-lg mb-6">
                                    No esperes a tener el sistema perfecto. La mejor manera de empezar es con un pequeño experimento.
                                </p>
                                <div className="bg-canvas-default rounded-lg p-6 mb-6 text-left">
                                    <h4 className="font-semibold mb-3">Recomendación:</h4>
                                    <ul className="space-y-2 text-sm text-fg-muted">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-success-fg mt-0.5 flex-shrink-0" />
                                            <span><strong className="text-fg-default">Hoy mismo:</strong> Ve a uno de tus repositorios y crea tu primer archivo <code className="px-1 py-0.5 bg-canvas-subtle rounded">.github/copilot-instructions.md</code></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-success-fg mt-0.5 flex-shrink-0" />
                                            <span><strong className="text-fg-default">Añade 2-3 reglas clave:</strong> ¿Qué es lo más importante que Copilot debería saber sobre tu proyecto?</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://docs.github.com/en/copilot/customizing-copilot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-base px-8 py-3 inline-flex items-center gap-2"
                                >
                                    Explorar Biblioteca de Personalización <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Footer */}
                <footer className="py-12 border-t border-border-default bg-canvas-subtle text-center">
                    <div className="max-w-7xl mx-auto px-4">
                        <Github className="w-8 h-8 mx-auto text-fg-muted mb-4" />
                        <p className="text-fg-muted text-sm mb-2">
                            Guía Completa de GitHub Copilot Custom Agents e Instructions
                        </p>
                        <p className="text-fg-muted text-xs">
                            <a href="https://docs.github.com/en/copilot" className="text-accent-fg hover:underline">Documentación Oficial</a>
                            {' · '}
                            <a href="https://github.com/copilot/agents" className="text-accent-fg hover:underline">Ver Agentes</a>
                            {' · '}
                            <a href="https://docs.github.com/en/copilot/customizing-copilot" className="text-accent-fg hover:underline">Biblioteca de Personalización</a>
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default LandingPage;
