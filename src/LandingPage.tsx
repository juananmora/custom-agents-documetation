import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Book, Code2, ArrowRight, CheckCircle2, Bot, FileText,
    Building, User, Shield, Layers, Zap, Target, Lightbulb, Rocket, Menu, X
} from 'lucide-react';
import PriorityVisualizer from './components/PriorityVisualizer';
import { ComparisonCard, FeatureCard, AgentCard, CodeComparison } from './components/ContentComponents';

const LandingPage: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            setScrollProgress(progress);
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
        <div className="min-h-screen bg-white text-[#323232] font-sans selection:bg-[#A100FF] selection:text-white scroll-smooth">
            {/* Scroll Progress Bar - Accenture style */}
            <div className="fixed top-0 left-0 w-full h-1 bg-[#F3F2F1] z-[100]">
                <motion.div
                    className="h-full accenture-gradient"
                    style={{ width: `${scrollProgress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>
            {/* Header - Accenture style */}
            <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <img src={`${import.meta.env.BASE_URL}copilot-logo.svg`} alt="GitHub Copilot" className="w-8 h-8 text-[#A100FF]" style={{ filter: 'none' }} />
                        <span className="font-bold text-lg tracking-tight text-[#323232] whitespace-nowrap">GitHub Copilot</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-semibold text-[#323232] uppercase tracking-wide flex-shrink-0">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-[#A100FF] transition-colors relative group whitespace-nowrap"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A100FF] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-[#323232] hover:text-[#A100FF] flex-shrink-0"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                        <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-4 py-2 whitespace-nowrap">
                            Documentación
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden border-t border-[#E5E5E5] bg-white"
                    >
                        <nav className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-3 py-3 hover:bg-[#F3F2F1] text-[#323232] hover:text-[#A100FF] transition-colors font-semibold uppercase text-sm tracking-wide"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="border-t border-[#E5E5E5] my-2"></div>
                            <a
                                href="https://docs.github.com/en/copilot"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-3 bg-[#A100FF] text-white hover:bg-[#7000B8] transition-colors font-semibold uppercase text-sm tracking-wide text-center"
                            >
                                Documentación
                            </a>
                        </nav>
                    </motion.div>
                )}
            </header>

            <main className="pt-20">
                {/* Hero Section - Accenture style */}
                <section id="inicio" className="relative section-spacing overflow-hidden bg-gradient-to-br from-white via-[#F3F2F1] to-white">
                    {/* Accenture-style diagonal shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <div className="absolute top-0 right-0 w-full h-64 accenture-gradient accenture-diagonal"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-[#A100FF] opacity-5 accenture-diagonal"></div>
                    
                    {/* Subtle animated elements */}
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#A100FF] rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#A100FF] rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center max-w-5xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#A100FF] text-xs font-bold text-[#A100FF] mb-8 uppercase tracking-wider">
                                <motion.span 
                                    className="w-2 h-2 bg-[#A100FF]"
                                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                Innovación en Desarrollo
                            </div>
                            <motion.h1 
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-[#323232]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Domina GitHub Copilot con
                                <br />
                                <span className="text-[#A100FF]">Agentes Personalizados</span>
                                <br />
                                e Instrucciones a Medida
                            </motion.h1>
                            <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                                Transforma GitHub Copilot en un equipo de especialistas virtuales que comprenden tu proyecto, siguen tus estándares y automatizan tareas complejas
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                                <motion.a 
                                    href="#fundamentos" 
                                    className="btn-primary text-sm px-10 py-4 flex items-center gap-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Comenzar <ArrowRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a 
                                    href="#configuracion" 
                                    className="btn-secondary text-sm px-10 py-4 flex items-center gap-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Ver Configuración <Book className="w-5 h-5" />
                                </motion.a>
                            </div>

                            {/* Feature Pills - Accenture style */}
                            <motion.div 
                                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                {[
                                    { icon: <FileText className="w-5 h-5" />, text: 'Instrucciones a Medida' },
                                    { icon: <Bot className="w-5 h-5" />, text: 'Agentes Personalizados' },
                                    { icon: <Zap className="w-5 h-5" />, text: 'Flujos Automatizados' },
                                    { icon: <Code2 className="w-5 h-5" />, text: 'Contexto Específico' }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-[#E5E5E5] text-center hover:border-[#A100FF] hover:bg-[#F3F2F1] transition-all duration-300 cursor-default group"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + (index * 0.1) }}
                                        whileHover={{ y: -4 }}
                                    >
                                        <div className="text-[#A100FF] group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wide text-[#323232]">{item.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Transformation Section - Accenture style */}
                <section id="fundamentos" className="section-spacing bg-[#F3F2F1] relative overflow-hidden">
                    {/* Diagonal accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#A100FF] opacity-5 accenture-diagonal"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#323232]">
                                    De Asistente Genérico a
                                    <br />
                                    <span className="text-[#A100FF]">Compañero de Equipo Experto</span>
                                </h2>
                                <p className="text-[#666666] max-w-3xl mx-auto text-xl font-light">
                                    Descubre cómo la personalización convierte a Copilot en un verdadero multiplicador de productividad
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="grid md:grid-cols-2 gap-8 mb-12"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, staggerChildren: 0.2 }}
                        >
                            <ComparisonCard
                                title="Copilot Estándar"
                                type="standard"
                                items={[
                                    'Ofrece asistencia general de programación',
                                    'No conoce los estándares específicos de tu proyecto',
                                    'Requiere contexto repetido en cada interacción',
                                    'Genera respuestas genéricas sin personalización'
                                ]}
                            />
                            <ComparisonCard
                                title="Copilot Personalizado"
                                type="custom"
                                items={[
                                    'Comprende el contexto único de tu repositorio',
                                    'Respeta tus librerías, frameworks y guías de estilo',
                                    'Automatiza flujos de trabajo y tareas recurrentes',
                                    'Actúa como un equipo de especialistas a tu servicio'
                                ]}
                            />
                        </motion.div>

                        {/* Transformation Image - Accenture style with clean design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 60 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                            className="max-w-4xl mx-auto mb-20"
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#A100FF] opacity-10 group-hover:opacity-20 blur-2xl transition duration-500"></div>
                                <div className="relative border-4 border-[#A100FF] overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}copilot-transformation.png`}
                                        alt="Transformación de Copilot de asistente genérico a compañero experto"
                                        className="relative w-full"
                                    />
                                </div>
                            </div>
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
                                icon={<Book className="w-6 h-6 text-[#A100FF]" />}
                                title="Contexto de Librerías"
                                description="Copilot comprende las librerías y frameworks específicos de tu proyecto para generar código compatible"
                                color="purple"
                            />
                            <FeatureCard
                                icon={<FileText className="w-6 h-6 text-[#A100FF]" />}
                                title="Estándares de Código"
                                description="Aplica automáticamente las convenciones de código y mejores prácticas de tu equipo"
                                color="purple"
                            />
                            <FeatureCard
                                icon={<Zap className="w-6 h-6 text-[#A100FF]" />}
                                title="Automatización"
                                description="Crea agentes especializados que ejecutan tareas complejas y repetitivas de forma consistente"
                                color="purple"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Instructions Base Section */}
                <motion.section
                    id="instrucciones"
                    className="py-20 bg-canvas-default relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    {/* Subtle background gradient for section separation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-canvas-subtle/20 to-transparent pointer-events-none"></div>
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
                                    Las <strong className="text-accent-fg">Instrucciones Personalizadas</strong> son directivas en lenguaje natural que proporcionan contexto persistente a GitHub Copilot. Puedes definirlas a nivel personal, de repositorio o de organización.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Contexto Permanente</h4>
                                            <p className="text-sm text-fg-muted">Evita repetir el mismo contexto en cada interacción</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Conocimiento Profundo</h4>
                                            <p className="text-sm text-fg-muted">Copilot comprende las reglas y arquitectura de tu proyecto</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-success-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Mayor Precisión</h4>
                                            <p className="text-sm text-fg-muted">Respuestas más relevantes y alineadas con tu contexto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hierarchy Section */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8">Jerarquía de Instrucciones</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-2xl mx-auto">
                                Las instrucciones se aplican en diferentes ámbitos. Las más específicas tienen prioridad sobre las generales: <strong>Personal → Repositorio → Organización</strong>.
                            </p>
                            <PriorityVisualizer />
                        </div>

                        {/* Anatomy of Instructions */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8">Tipos de Instrucciones en el Repositorio</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-3xl mx-auto">
                                Dentro de un repositorio, puedes definir instrucciones con diferentes niveles de especificidad para optimizar el contexto que recibe Copilot
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
                                        Define estándares y contexto que aplican a todo el repositorio
                                    </p>
                                    <div className="bg-canvas-default rounded p-3 text-xs font-mono">
                                        <div className="text-success-fg mb-1"># Ejemplo</div>
                                        <div className="text-fg-muted">Este proyecto usa React 19 con TypeScript</div>
                                        <div className="text-fg-muted">Todos los tests deben usar Jest y React Testing Library</div>
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
                                        Aplica reglas específicas a archivos que coinciden con patrones (glob patterns)
                                    </p>
                                    <div className="bg-canvas-default rounded p-3 text-xs font-mono">
                                        <div className="text-success-fg mb-1"># Ejemplo con frontmatter YAML</div>
                                        <div className="text-fg-muted">---</div>
                                        <div className="text-fg-muted">applyTo: src/components/**/*.tsx</div>
                                        <div className="text-fg-muted">---</div>
                                        <div className="text-fg-muted">Usa siempre React Hooks y TypeScript</div>
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
                    className="py-20 bg-canvas-subtle/30 border-y border-border-default relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-subtle rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-success-subtle rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none"></div>
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
                                    Los <strong className="text-accent-fg">Agentes Personalizados</strong> son versiones especializadas del agente de codificación de Copilot. Se definen mediante archivos Markdown con frontmatter YAML que especifican su personalidad, herramientas disponibles y instrucciones específicas para tareas recurrentes.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <Bot className="w-5 h-5 text-accent-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Especialistas Definidos</h4>
                                            <p className="text-sm text-fg-muted">Cada agente tiene personalidad, habilidades y un propósito específico</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-accent-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Invocación Bajo Demanda</h4>
                                            <p className="text-sm text-fg-muted">Llama a agentes específicos cuando los necesites para tareas concretas</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Layers className="w-5 h-5 text-accent-fg mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Compartibles y Reutilizables</h4>
                                            <p className="text-sm text-fg-muted">Disponibles a nivel de repositorio, organización o empresa</p>
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
                                color="from-[#A100FF] to-[#7000B8]"
                            />
                            <AgentCard
                                name="Auditor de Seguridad"
                                description="Revisa el código en busca de vulnerabilidades y mejores prácticas"
                                icon={<Shield className="w-6 h-6 text-white" />}
                                color="from-[#7000B8] to-[#5a009e]"
                            />
                            <AgentCard
                                name="Experto en Documentación"
                                description="Genera documentación clara y completa para tu código"
                                icon={<Book className="w-6 h-6 text-white" />}
                                color="from-[#C866FF] to-[#A100FF]"
                            />
                        </div>

                        {/* Agent Anatomy */}
                        <div>
                            <h3 className="text-2xl font-bold text-center mb-8">Anatomía de un Agente Personalizado</h3>
                            <p className="text-center text-fg-muted mb-12 max-w-2xl mx-auto">
                                Los agentes se definen con archivos Markdown que incluyen frontmatter YAML con la configuración y el prompt personalizado en el cuerpo del archivo.
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
                                            <span className="text-success-fg">name:</span> nextjs-expert{'\n'}
                                            <span className="text-success-fg">description:</span> Experto en Next.js y React Server Components{'\n'}
                                            <span className="text-success-fg">tools:</span> ['read', 'search', 'edit', 'bash']{'\n'}
                                            <span className="text-accent-fg">---</span>{'\n'}
                                            {'\n'}
                                            <span className="text-attention-fg"># Contexto</span>{'\n'}
                                            Eres un experto senior en Next.js 15 con conocimiento profundo de{'\n'}
                                            React Server Components, App Router y optimización de rendimiento.{'\n'}
                                            {'\n'}
                                            <span className="text-attention-fg"># Instrucciones</span>{'\n'}
                                            - Siempre usa TypeScript con tipos estrictos{'\n'}
                                            - Prioriza Server Components sobre Client Components{'\n'}
                                            - Para estado cliente, sugiere Zustand o Jotai{'\n'}
                                            - Implementa code splitting y lazy loading cuando sea apropiado{'\n'}
                                            - Sigue las convenciones de estructura: app/, components/, lib/{'\n'}
                                            {'\n'}
                                            <span className="text-attention-fg"># Comandos</span>{'\n'}
                                            - Pruebas: npm run test{'\n'}
                                            - Build: npm run build{'\n'}
                                            - Desarrollo: npm run dev{'\n'}
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
                    className="py-20 bg-canvas-default relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-subtle/10 to-transparent pointer-events-none"></div>
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
                                    Cuando invocas un Agente Personalizado, GitHub Copilot combina inteligentemente su prompt específico con todas las Instrucciones Personalizadas relevantes (personal, repositorio, ruta específica y organización) para crear un contexto enriquecido y preciso.
                                </p>

                                {/* Flow Diagram */}
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-accent-subtle border-2 border-accent-muted flex items-center justify-center mx-auto mb-3">
                                            <Layers className="w-8 h-8 text-accent-fg" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Recopilación de Contexto</h4>
                                        <p className="text-sm text-fg-muted">
                                            Copilot reúne instrucciones del agente, instrucciones específicas de ruta, del repositorio, personales y de organización
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-center">
                                        <ArrowRight className="w-8 h-8 text-accent-fg hidden md:block" />
                                    </div>

                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-success-subtle border-2 border-success-muted flex items-center justify-center mx-auto mb-3">
                                            <Zap className="w-8 h-8 text-success-fg" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Prompt Enriquecido</h4>
                                        <p className="text-sm text-fg-muted">
                                            Todo el contexto se fusiona en un prompt completo que se envía al modelo de IA con la jerarquía de prioridad correcta
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center my-6">
                                    <ArrowRight className="w-8 h-8 text-accent-fg rotate-90" />
                                </div>

                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-full bg-[#A100FF]/20 border-2 border-[#A100FF]/30 flex items-center justify-center mx-auto mb-3">
                                        <CheckCircle2 className="w-8 h-8 text-[#A100FF]" />
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
                                            <strong>Input del Usuario:</strong> "Hey @nextjs-expert, refactoriza este componente para usar Server Components."
                                        </p>
                                        <p className="text-sm text-fg-muted">
                                            Copilot combinará las instrucciones del agente nextjs-expert con tus instrucciones personales, las del repositorio, las específicas de ruta y las de tu organización para generar una refactorización que cumple todos los estándares establecidos.
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
                                    Se aplican a todas tus interacciones con Copilot en cualquier proyecto
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
                                    Específicas del proyecto, compartidas con todos los colaboradores del repositorio
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
                                        Define agentes especializados para tareas específicas de tu proyecto
                                    </p>
                                    <code className="block px-4 py-2 bg-canvas-default rounded text-xs">
                                        .github/agents/AGENTE.md
                                    </code>
                                </div>

                                <div className="card p-6 bg-canvas-subtle">
                                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-sm">2</span>
                                        Nivel Organización
                                    </h4>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Agentes compartidos entre todos los repositorios de tu organización
                                    </p>
                                    <code className="block px-4 py-2 bg-canvas-default rounded text-xs">
                                        {'{org}'}/.github/agents/AGENTE.md
                                    </code>
                                </div>

                                <div className="card p-6 bg-canvas-subtle">
                                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-sm">3</span>
                                        Nivel Empresa
                                    </h4>
                                    <p className="text-sm text-fg-muted mb-3">
                                        Agentes disponibles para todas las organizaciones de tu empresa
                                    </p>
                                    <code className="block px-4 py-2 bg-canvas-default rounded text-xs">
                                        {'{org}'}/.github-private/agents/AGENTE.md
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
                                    <strong className="text-fg-default">Función:</strong> Proporcionar contexto persistente que define el "ADN" y las reglas fundamentales del proyecto.
                                </p>
                                <p className="text-sm text-fg-muted">
                                    <strong className="text-fg-default">Mejor Práctica:</strong> Usa instrucciones específicas de ruta (.instructions.md) para mantener el contexto relevante y evitar sobrecargar las instrucciones globales.
                                </p>
                            </div>

                            <div className="card p-8 bg-gradient-to-br from-success-subtle/10 to-canvas-subtle">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Bot className="w-6 h-6 text-success-fg" />
                                    Recap de Agentes
                                </h3>
                                <p className="text-fg-muted mb-4">
                                    <strong className="text-fg-default">Función:</strong> Actuar como especialistas virtuales con propósitos y personalidades definidas para tareas específicas.
                                </p>
                                <p className="text-sm text-fg-muted">
                                    <strong className="text-fg-default">Mejor Práctica:</strong> Define agentes para flujos de trabajo recurrentes y bien delimitados donde la consistencia y especialización son fundamentales.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="card p-8 bg-gradient-to-r from-[#A100FF]/10 to-[#C866FF]/10 border-[#A100FF]/30 text-center">
                                <Lightbulb className="w-12 h-12 text-[#A100FF] mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-3">Principio General</h3>
                                <p className="text-lg mb-6">
                                    <strong>Itera y Refina:</strong> Comienza con instrucciones y agentes simples. Observa los resultados, analiza su efectividad y ajústalos continuamente. La personalización es un proceso iterativo, no un evento único.
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
                                    color="from-[#A100FF] to-[#7000B8]"
                                />
                                <AgentCard
                                    name="Auditor de Accesibilidad"
                                    description="Revisar componentes UI para cumplimiento WCAG"
                                    icon={<Shield className="w-6 h-6 text-white" />}
                                    color="from-[#7000B8] to-[#5a009e]"
                                />
                                <AgentCard
                                    name="Planificador de Implementación"
                                    description="Desglosar features en tareas técnicas accionables"
                                    icon={<Target className="w-6 h-6 text-white" />}
                                    color="from-[#C866FF] to-[#A100FF]"
                                />
                                <AgentCard
                                    name="Compañero de Bugs"
                                    description="Analizar reportes e implementar soluciones específicas"
                                    icon={<Zap className="w-6 h-6 text-white" />}
                                    color="from-[#A100FF] to-[#8957e5]"
                                />
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="max-w-3xl mx-auto">
                            <div className="card p-8 bg-gradient-to-br from-[#A100FF]/15 to-[#C866FF]/15 border-[#A100FF]/30 text-center">
                                <Rocket className="w-16 h-16 text-[#A100FF] mx-auto mb-6" />
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

                {/* Footer - Accenture style */}
                <footer className="py-16 border-t-2 border-[#E5E5E5] bg-[#F3F2F1]">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col items-center gap-6">
                            <img src={`${import.meta.env.BASE_URL}copilot-logo.svg`} alt="GitHub Copilot" className="w-12 h-12" style={{ filter: 'none' }} />
                            <p className="text-[#323232] text-base font-bold uppercase tracking-wider">
                                Guía Completa de GitHub Copilot
                            </p>
                            <p className="text-[#666666] text-sm font-light max-w-2xl text-center">
                                Custom Agents e Instructions
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                                <a href="https://docs.github.com/en/copilot" className="text-[#323232] hover:text-[#A100FF] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Documentación Oficial
                                </a>
                                <span className="text-[#E5E5E5]">•</span>
                                <a href="https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents" className="text-[#323232] hover:text-[#A100FF] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Custom Agents
                                </a>
                                <span className="text-[#E5E5E5]">•</span>
                                <a href="https://docs.github.com/en/copilot/customizing-copilot" className="text-[#323232] hover:text-[#A100FF] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Personalización
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default LandingPage;
