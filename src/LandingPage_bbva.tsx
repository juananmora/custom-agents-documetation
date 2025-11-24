import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Book, Code2, ArrowRight, CheckCircle2, Bot, FileText,
    Building, User, Shield, Layers, Zap, Target, Rocket, Menu, X
} from 'lucide-react';

import { ComparisonCard, FeatureCard, AgentCard, CodeComparison } from './components/ContentComponents_bbva';
import PriorityVisualizer from './components/PriorityVisualizer_bbva';

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
        <div className="min-h-screen bg-white text-[#2C3E50] font-sans selection:bg-[#004481] selection:text-white scroll-smooth">
            {/* Scroll Progress Bar - BBVA style */}
            <div className="fixed top-0 left-0 w-full h-1 bg-[#F4F8FB] z-[100]">
                <motion.div
                    className="h-full bbva-gradient"
                    style={{ width: `${scrollProgress}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>
            {/* Header - BBVA style */}
            <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#D3DCE6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <img src={`${import.meta.env.BASE_URL}bbva-logo.jpg`} alt="BBVA" className="h-6 w-auto" />
                        <div className="h-8 w-px bg-[#D3DCE6]"></div>
                        <img src={`${import.meta.env.BASE_URL}copilot-icon.png`} alt="GitHub Copilot" className="h-8 w-auto text-[#004481]" style={{ filter: 'none' }} />
                        <span className="font-bold text-lg tracking-tight text-[#2C3E50] whitespace-nowrap">GitHub Copilot</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-semibold text-[#2C3E50] uppercase tracking-wide flex-shrink-0">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="hover:text-[#004481] transition-colors relative group whitespace-nowrap"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004481] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-[#2C3E50] hover:text-[#004481] flex-shrink-0"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
                        <a href="https://docs.github.com/en/copilot" target="_blank" rel="noopener noreferrer" className="btn-primary-bbva text-xs px-4 py-2 whitespace-nowrap rounded-sm">
                            Documentación
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:hidden border-t border-[#D3DCE6] bg-white"
                    >
                        <nav className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-3 py-3 hover:bg-[#F4F8FB] text-[#2C3E50] hover:text-[#004481] transition-colors font-semibold uppercase text-sm tracking-wide rounded-sm"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="border-t border-[#D3DCE6] my-2"></div>
                            <a
                                href="https://docs.github.com/en/copilot"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-3 bg-[#004481] text-white hover:bg-[#003366] transition-colors font-semibold uppercase text-sm tracking-wide text-center rounded-sm"
                            >
                                Documentation
                            </a>
                        </nav>
                    </motion.div>
                )}
            </header>

            <main className="pt-20">
                {/* Hero Section - BBVA style */}
                <section id="inicio" className="relative section-spacing overflow-hidden bg-gradient-to-br from-white via-[#F4F8FB] to-white">
                    {/* BBVA-style diagonal shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <div className="absolute top-0 right-0 w-full h-64 bbva-gradient accenture-diagonal"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-[#004481] opacity-5 accenture-diagonal"></div>

                    {/* Subtle animated elements */}
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#004481] rounded-full"
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
                        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#004481] rounded-full"
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#004481] text-xs font-bold text-[#004481] mb-8 uppercase tracking-wider rounded-sm">
                                <motion.span
                                    className="w-2 h-2 bg-[#004481]"
                                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                Innovación en Desarrollo
                            </div>
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-[#2C3E50]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Domina GitHub Copilot con
                                <br />
                                <span className="text-[#004481]">Agentes Personalizados</span>
                                <br />
                                e Instrucciones a Medida
                            </motion.h1>
                            <p className="text-xl md:text-2xl text-[#5A6872] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                                Transforma GitHub Copilot en un equipo de especialistas virtuales que entienden tu proyecto, siguen tus estándares y automatizan tareas complejas
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                                <motion.a
                                    href="#fundamentos"
                                    className="btn-primary-bbva text-sm px-10 py-4 flex items-center gap-3 rounded-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Comenzar <ArrowRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="#configuracion"
                                    className="btn-secondary-bbva text-sm px-10 py-4 flex items-center gap-3 rounded-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Ver Configuración <Book className="w-5 h-5" />
                                </motion.a>
                            </div>

                            {/* Workflow Video */}
                            <div className="mb-16 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-2 border-[#D3DCE6]">
                                <video
                                    src={`${import.meta.env.BASE_URL}workflow2.mp4`}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                                <motion.div
                                    className="flex flex-wrap items-center justify-center gap-6 w-full"
                                >
                                    {[
                                        { icon: <FileText className="w-5 h-5" />, text: 'Instrucciones a Medida' },
                                        { icon: <Bot className="w-5 h-5" />, text: 'Agentes Personalizados' },
                                        { icon: <Zap className="w-5 h-5" />, text: 'Flujos Automatizados' },
                                        { icon: <Code2 className="w-5 h-5" />, text: 'Contexto Específico' }
                                    ].map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href="#fundamentos"
                                            className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-[#D3DCE6] text-center hover:border-[#004481] hover:bg-[#F4F8FB] transition-all duration-300 cursor-pointer group min-w-[200px] rounded-sm"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 + (index * 0.1) }}
                                            whileHover={{ y: -4 }}
                                        >
                                            <div className="text-[#004481] group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wide text-[#2C3E50]">{item.text}</span>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Transformation Section - BBVA style */}
                <section id="fundamentos" className="section-spacing bg-[#F4F8FB] relative overflow-hidden">
                    {/* Diagonal accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#004481] opacity-5 accenture-diagonal"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2C3E50]">
                                    De Asistente Genérico a
                                    <br />
                                    <span className="text-[#004481]">Compañero Experto</span>
                                </h2>
                                <p className="text-[#5A6872] max-w-3xl mx-auto text-xl font-light">
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
                                    'Entiende el contexto único de tu repositorio',
                                    'Respeta tus bibliotecas, frameworks y guías de estilo',
                                    'Automatiza flujos de trabajo y tareas recurrentes',
                                    'Actúa como un equipo de especialistas a tu servicio'
                                ]}
                            />
                        </motion.div>

                        {/* Transformation Image - BBVA style with clean design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 60 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                            className="max-w-4xl mx-auto mb-20"
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#004481] opacity-10 group-hover:opacity-20 blur-2xl transition duration-500"></div>
                                <div className="relative border-4 border-[#004481] overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}copilot-transformation.png`}
                                        alt="Copilot transformation from generic assistant to expert teammate"
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
                                icon={<Book className="w-6 h-6 text-[#004481]" />}
                                title="Contexto de Librerías"
                                description="Copilot entiende las librerías y frameworks específicos de tu proyecto para generar código compatible"
                                color="purple"
                            />
                            <FeatureCard
                                icon={<FileText className="w-6 h-6 text-[#004481]" />}
                                title="Estándares de Código"
                                description="Aplica automáticamente las convenciones y mejores prácticas de tu equipo"
                                color="purple"
                            />
                            <FeatureCard
                                icon={<Zap className="w-6 h-6 text-[#004481]" />}
                                title="Automatización"
                                description="Crea agentes especializados que ejecutan tareas complejas y repetitivas consistentemente"
                                color="purple"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Instructions Base Section */}
                <motion.section
                    id="instrucciones"
                    className="section-spacing bg-white relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    {/* Subtle background gradient for section separation - BBVA style */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F4F8FB]/30 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#004481] opacity-5 accenture-diagonal"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
                                La Base: Instrucciones Personalizadas
                            </h2>
                            <p className="text-[#5A6872] max-w-3xl mx-auto text-lg font-light">
                                El ADN de tu Proyecto
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="card p-8 bg-gradient-to-br from-[#F4F8FB] to-white border-2 border-[#D3DCE6]">
                                <p className="text-lg mb-6 text-[#2C3E50]">
                                    Las <strong className="text-[#004481]">Instrucciones Personalizadas</strong> son directivas en lenguaje natural que proporcionan contexto persistente a GitHub Copilot. Puedes definirlas a nivel personal, de repositorio o de organización.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#004481] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">Contexto Permanente</h4>
                                            <p className="text-sm text-[#5A6872]">Evita repetir el mismo contexto en cada interacción</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#004481] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">Conocimiento Profundo</h4>
                                            <p className="text-sm text-[#5A6872]">Copilot comprende las reglas y arquitectura de tu proyecto</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#004481] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">Mayor Precisión</h4>
                                            <p className="text-sm text-[#5A6872]">Respuestas más relevantes y alineadas con tu contexto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hierarchy Section */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#2C3E50]">Jerarquía de Instrucciones</h3>
                            <p className="text-center text-[#5A6872] mb-12 max-w-2xl mx-auto">
                                Las instrucciones se aplican en diferentes ámbitos. Las más específicas tienen prioridad sobre las generales: <strong className="text-[#2C3E50]">Personal → Repositorio → Organización</strong>.
                            </p>
                            <PriorityVisualizer />
                        </div>

                        {/* Anatomy of Instructions */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#2C3E50]">Tipos de Instrucciones en el Repositorio</h3>
                            <p className="text-center text-[#5A6872] mb-12 max-w-3xl mx-auto">
                                Dentro de un repositorio, puedes definir instrucciones con diferentes niveles de especificidad para optimizar el contexto que recibe Copilot
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="card p-6 bg-[#F4F8FB] border-2 border-[#D3DCE6]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#004481]/10 flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-[#004481]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#2C3E50]">Instrucciones para todo el Repositorio</h4>
                                            <code className="text-xs text-[#5A6872]">.github/copilot-instructions.md</code>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#5A6872] mb-3">
                                        Define estándares y contexto que aplican a todo el repositorio
                                    </p>
                                    <div className="bg-white rounded p-3 text-xs font-mono border border-[#D3DCE6]">
                                        <div className="text-[#004481] mb-1"># Ejemplo</div>
                                        <div className="text-[#5A6872]">Este proyecto usa React 19 con TypeScript</div>
                                        <div className="text-[#5A6872]">Todos los tests deben usar Jest y React Testing Library</div>
                                    </div>
                                </div>

                                <div className="card p-6 bg-[#F4F8FB] border-2 border-[#D3DCE6]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#004481]/10 flex items-center justify-center">
                                            <Code2 className="w-5 h-5 text-[#004481]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#2C3E50]">Instrucciones Específicas de Ruta</h4>
                                            <code className="text-xs text-[#5A6872]">.github/instructions/NAME.instructions.md</code>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#5A6872] mb-3">
                                        Aplica reglas específicas a archivos que coinciden con patrones (glob patterns)
                                    </p>
                                    <div className="bg-white rounded p-3 text-xs font-mono border border-[#D3DCE6]">
                                        <div className="text-[#004481] mb-1"># Ejemplo con frontmatter YAML</div>
                                        <div className="text-[#5A6872]">---</div>
                                        <div className="text-[#5A6872]">applyTo: src/components/**/*.tsx</div>
                                        <div className="text-[#5A6872]">---</div>
                                        <div className="text-[#5A6872]">Usa siempre React Hooks y TypeScript</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div id="practicas">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#2C3E50]">Mejores Prácticas para Instrucciones</h3>

                            <div className="max-w-4xl mx-auto space-y-6 mb-12">
                                {[
                                    { icon: <Target className="w-5 h-5" />, title: 'Sé Breve y Directo', desc: 'Usa declaraciones cortas y autocontenidas' },
                                    { icon: <Layers className="w-5 h-5" />, title: 'Usa Estructura', desc: 'Usa encabezados (#) y listas (-) para organizar' },
                                    { icon: <Code2 className="w-5 h-5" />, title: 'Ejemplos Concretos', desc: 'Muestra fragmentos de código de qué hacer y qué no hacer' },
                                    { icon: <Book className="w-5 h-5" />, title: 'Describe el Qué y el Porqué', desc: 'Explica el propósito, arquitectura y herramientas clave' }
                                ].map((practice, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-[#F4F8FB] border border-[#D3DCE6]"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[#004481]/10 flex items-center justify-center flex-shrink-0 text-[#004481]">
                                            {practice.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">{practice.title}</h4>
                                            <p className="text-sm text-[#5A6872]">{practice.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <CodeComparison
                                bad={{
                                    title: 'MALA INSTRUCCIÓN (Vaga)',
                                    code: `Make sure the code is good
and follows our standards`
                                }}
                                good={{
                                    title: 'BUENA INSTRUCCIÓN (Específica)',
                                    code: `# Estándares de Código Python
Sigue las guías de estilo PEP 8
Usa f-strings para formateo de cadenas
Las funciones no deben exceder 50 líneas

# Manejo de Errores
Usa bloques try/except para operaciones I/O
Evita excepciones genéricas como except Exception:`
                                }}
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Custom Agents Section */}
                <motion.section
                    id="agentes"
                    className="py-20 bg-[#F4F8FB] border-y border-[#D3DCE6] relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#004481] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004481] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
                                El Especialista: Agentes Personalizados
                            </h2>
                            <p className="text-[#5A6872] max-w-3xl mx-auto text-lg font-light">
                                Contratando un Especialista para Tareas Específicas
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="p-8 bg-white border-2 border-[#D3DCE6]">
                                <p className="text-lg mb-6 text-[#2C3E50]">
                                    Los <strong className="text-[#004481]">Agentes Personalizados</strong> son versiones especializadas del agente de codificación de Copilot. Se definen mediante archivos Markdown con frontmatter YAML que especifican su personalidad, herramientas disponibles e instrucciones específicas para tareas recurrentes.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <Bot className="w-5 h-5 text-[#004481] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">Especialistas Definidos</h4>
                                            <p className="text-sm text-[#5A6872]">Cada agente tiene una personalidad, habilidades y un propósito específico</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-[#004481] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">Invocación Bajo Demanda</h4>
                                            <p className="text-sm text-[#5A6872]">Llama a agentes específicos cuando los necesites para tareas concretas</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Layers className="w-5 h-5 text-[#004481] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#2C3E50]">Compartibles y Reutilizables</h4>
                                            <p className="text-sm text-[#5A6872]">Disponibles a nivel de repositorio, organización o empresa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agent Examples */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <AgentCard
                                name="Arquitecto de Soluciones"
                                description="Diseña estructura y arquitectura para nuevas funcionalidades"
                                icon={<Building className="w-6 h-6 text-white" />}
                                color="from-[#004481] to-[#003366]"
                            />
                            <AgentCard
                                name="Auditor de Seguridad"
                                description="Revisa código en busca de vulnerabilidades y mejores prácticas"
                                icon={<Shield className="w-6 h-6 text-white" />}
                                color="from-[#003366] to-[#5a009e]"
                            />
                            <AgentCard
                                name="Experto en Documentación"
                                description="Genera documentación clara y completa para tu código"
                                icon={<Book className="w-6 h-6 text-white" />}
                                color="from-[#1973B8] to-[#004481]"
                            />
                        </div>

                        {/* Agent Anatomy */}
                        <div>
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#2C3E50]">Anatomía de un Agente Personalizado</h3>
                            <p className="text-center text-[#5A6872] mb-12 max-w-2xl mx-auto font-light">
                                Los agentes se definen con archivos Markdown que incluyen frontmatter YAML con configuración y el prompt personalizado en el cuerpo del archivo.
                            </p>

                            <div className="max-w-4xl mx-auto bg-[#1a1a1a] border-2 border-[#004481] shadow-2xl overflow-hidden">
                                <div className="flex items-center justify-between px-6 py-4 bg-[#004481]/20 border-b-2 border-[#004481]">
                                    <span className="text-sm font-bold text-[#004481] uppercase tracking-wide">.github/agents/nextjs-agent.md</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                </div>
                                <div className="p-8 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-relaxed text-gray-100">
                                        <code>
                                            <span className="text-[#004481]">---</span>{'\n'}
                                            <span className="text-[#3fb950]">name:</span> nextjs-expert{'\n'}
                                            <span className="text-[#3fb950]">description:</span> Next.js and React Server Components Expert{'\n'}
                                            <span className="text-[#3fb950]">tools:</span> ['read', 'search', 'edit', 'bash']{'\n'}
                                            <span className="text-[#004481]">---</span>{'\n'}
                                            {'\n'}
                                            <span className="text-[#79c0ff]"># Context</span>{'\n'}
                                            You are a senior Next.js 15 expert with deep knowledge of{'\n'}
                                            React Server Components, App Router, and performance optimization.{'\n'}
                                            {'\n'}
                                            <span className="text-[#79c0ff]"># Instructions</span>{'\n'}
                                            - Always use TypeScript with strict types{'\n'}
                                            - Prioritize Server Components over Client Components{'\n'}
                                            - For client state, suggest Zustand or Jotai{'\n'}
                                            - Implement code splitting and lazy loading when appropriate{'\n'}
                                            - Follow structure conventions: app/, components/, lib/{'\n'}
                                            {'\n'}
                                            <span className="text-[#79c0ff]"># Commands</span>{'\n'}
                                            - Tests: npm run test{'\n'}
                                            - Build: npm run build{'\n'}
                                            - Dev: npm run dev{'\n'}
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
                    className="py-20 bg-white relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F4F8FB] to-transparent pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
                                La Sinergia: Instrucciones y Agentes Trabajando Juntos
                            </h2>
                            <p className="text-[#5A6872] max-w-3xl mx-auto text-lg font-light">
                                Las instrucciones son el entorno. Los agentes son los expertos operando dentro de él.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="p-8 bg-[#F4F8FB] border-2 border-[#D3DCE6] mb-12">
                                <p className="text-lg text-center mb-8 text-[#2C3E50]">
                                    Cuando invocas un Agente Personalizado, GitHub Copilot combina inteligentemente su prompt específico con todas las Instrucciones Personalizadas relevantes (personales, de repositorio, específicas de ruta y de organización) para crear un contexto rico y preciso.
                                </p>

                                {/* Flow Diagram */}
                                {/* Flow Diagram Image */}
                                <div className="mb-12 flex justify-center">
                                    <img
                                        src={`${import.meta.env.BASE_URL}agent.png`}
                                        alt="Synergy Diagram"
                                        className="w-full max-w-4xl rounded-lg shadow-sm"
                                    />
                                </div>

                                {/* Usage Example */}
                                <div className="card p-6 bg-white border-2 border-[#D3DCE6] max-w-3xl mx-auto">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#004481]/10 flex items-center justify-center">
                                            <Bot className="w-6 h-6 text-[#004481]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2 text-[#2C3E50]">Ejemplo de Uso</h4>
                                            <p className="text-[#5A6872] mb-4">
                                                <strong className="text-[#2C3E50]">Entrada de Usuario:</strong> "Hey @nextjs-expert, refactoriza este componente para usar Server Components."
                                            </p>
                                            <p className="text-[#5A6872]">
                                                Copilot combinará las instrucciones del agente nextjs-expert con tus instrucciones personales, de repositorio, específicas de ruta y de organización para generar una refactorización que cumpla con todos los estándares establecidos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Configuration Section */}
                <motion.section
                    id="configuracion"
                    className="py-20 bg-[#F4F8FB] border-y border-[#D3DCE6]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C3E50]">
                                El Manual: Configuración e Implementación
                            </h2>
                            <h3 className="text-2xl font-bold text-center mb-4 text-[#2C3E50]">Gestión y Alcance de Copilot Instructions</h3>
                            <p className="text-[#5A6872] max-w-3xl mx-auto text-lg font-light">
                                Define el ADN de tu proyecto directamente en el código
                            </p>
                        </div>

                        {/* Configuration Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {/* Personal Level */}
                            <div className="p-6 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <User className="w-6 h-6 text-[#004481]" />
                                    <h3 className="font-semibold text-lg text-[#2C3E50]">Nivel Personal</h3>
                                </div>
                                <p className="text-[#5A6872] text-sm mb-4">
                                    Aplica a todas tus interacciones con Copilot en cualquier proyecto
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                        <strong className="text-[#004481]">Web:</strong> github.com → Settings → Copilot → Personal Instructions
                                    </div>
                                    <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                        <strong className="text-[#004481]">VS Code:</strong> Settings → GitHub Copilot → Custom Instructions
                                    </div>
                                </div>
                            </div>

                            {/* Repository Level */}
                            <div className="p-6 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Book className="w-6 h-6 text-[#004481]" />
                                    <h3 className="font-semibold text-lg text-[#2C3E50]">Nivel Repositorio</h3>
                                </div>
                                <p className="text-[#5A6872] text-sm mb-4">
                                    Específico del proyecto, compartido con todos los colaboradores del repositorio
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                        <strong className="text-[#004481]">Archivo:</strong>
                                        <code className="block mt-1 px-2 py-1 bg-white rounded text-xs border border-[#D3DCE6]">
                                            .github/copilot-instructions.md
                                        </code>
                                    </div>
                                    <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                        <strong className="text-[#004481]">Específico por ruta:</strong>
                                        <code className="block mt-1 px-2 py-1 bg-white rounded text-xs border border-[#D3DCE6]">
                                            .github/instructions/NAME.instructions.md
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* Org/Enterprise Level */}
                            <div className="p-6 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building className="w-6 h-6 text-[#004481]" />
                                    <h3 className="font-semibold text-lg text-[#2C3E50]">Org/Empresa</h3>
                                </div>
                                <p className="text-[#5A6872] text-sm mb-4">
                                    Políticas y estándares globales para toda la organización
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                        <strong className="text-[#004481]">Admin:</strong> Organization Settings → Copilot → Policies
                                    </div>
                                    <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                        <strong className="text-[#004481]">Gestión:</strong> Centralizada para cumplimiento y gobernanza
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agent Management Section */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-4 text-[#2C3E50]">Gestión y Alcance de los Agentes: De tu Repo a toda la Empresa</h3>
                            <p className="text-center text-[#5A6872] mb-12 max-w-3xl mx-auto">
                                Los agentes pueden ser definidos y compartidos en múltiples niveles para adaptarse a las necesidades de tu equipo.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                {/* Repository Level */}
                                <div className="p-6 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Book className="w-6 h-6 text-[#004481]" />
                                        <h4 className="font-semibold text-lg text-[#2C3E50]">Repositorio</h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                            <strong className="text-[#004481]">Ubicación:</strong>
                                            <code className="block mt-1 px-2 py-1 bg-white rounded text-xs border border-[#D3DCE6]">
                                                .github/agents/NOMBRE_AGENTE.md
                                            </code>
                                        </div>
                                        <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                            <strong className="text-[#004481]">Alcance:</strong>
                                            <p className="mt-1 text-[#5A6872]">
                                                Disponible solo para el repositorio donde se define. Ideal para agentes muy específicos del proyecto.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Organization Level */}
                                <div className="p-6 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Building className="w-6 h-6 text-[#004481]" />
                                        <h4 className="font-semibold text-lg text-[#2C3E50]">Organización</h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                            <strong className="text-[#004481]">Ubicación:</strong>
                                            <p className="mt-1 text-[#5A6872]">
                                                En un repositorio especial llamado <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#D3DCE6]">.github</code>, dentro de un directorio <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#D3DCE6]">agents/</code>.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                            <strong className="text-[#004481]">Alcance:</strong>
                                            <p className="mt-1 text-[#5A6872]">
                                                Disponible para todos los repositorios dentro de esa organización. Perfecto para agentes que aplican estándares de equipo (ej. "Experto en C#").
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Enterprise Level */}
                                <div className="p-6 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Shield className="w-6 h-6 text-[#004481]" />
                                        <h4 className="font-semibold text-lg text-[#2C3E50]">Empresa ('Enterprise')</h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                            <strong className="text-[#004481]">Ubicación:</strong>
                                            <p className="mt-1 text-[#5A6872]">
                                                En un repositorio especial llamado <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#D3DCE6]">.github-private</code>, dentro de un directorio <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#D3DCE6]">agents/</code>.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-[#F4F8FB] rounded border border-[#D3DCE6] text-[#2C3E50]">
                                            <strong className="text-[#004481]">Alcance:</strong>
                                            <p className="mt-1 text-[#5A6872]">
                                                Compartido entre todas las organizaciones de la empresa, gestionado centralmente desde la sección "AI Controls" de la configuración de la empresa.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#2C3E50]">Ideas para tus Agentes</h3>
                            <p className="text-center text-[#5A6872] mb-12 max-w-2xl mx-auto">
                                Piensa en las tareas repetitivas o especializadas de tu equipo. ¿Puedes crear un agente para ellas?
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <AgentCard
                                    name="Especialista en Limpieza"
                                    description="Refactorizar código, eliminar duplicación y mejorar legibilidad"
                                    icon={<Code2 className="w-6 h-6 text-white" />}
                                    color="from-[#004481] to-[#003366]"
                                />
                                <AgentCard
                                    name="Auditor de Accesibilidad"
                                    description="Revisar componentes UI para cumplimiento WCAG"
                                    icon={<Shield className="w-6 h-6 text-white" />}
                                    color="from-[#003366] to-[#5a009e]"
                                />
                                <AgentCard
                                    name="Planificador de Implementación"
                                    description="Desglosar features en tareas técnicas accionables"
                                    icon={<Target className="w-6 h-6 text-white" />}
                                    color="from-[#1973B8] to-[#004481]"
                                />
                                <AgentCard
                                    name="Compañero de Bugs"
                                    description="Analizar reportes e implementar soluciones específicas"
                                    icon={<Zap className="w-6 h-6 text-white" />}
                                    color="from-[#004481] to-[#8957e5]"
                                />
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="max-w-3xl mx-auto">
                            <div className="p-8 bg-[#F4F8FB] border-2 border-[#D3DCE6] rounded-lg text-center">
                                <Rocket className="w-16 h-16 text-[#004481] mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">Tu Primer Paso Hacia la Maestría</h3>
                                <p className="text-lg mb-6 text-[#5A6872]">
                                    No esperes a tener el sistema perfecto. La mejor manera de empezar es con un pequeño experimento.
                                </p>
                                <div className="bg-white border border-[#D3DCE6] rounded-lg p-6 mb-6 text-left">
                                    <h4 className="font-semibold mb-3 text-[#2C3E50]">Recomendación:</h4>
                                    <ul className="space-y-2 text-sm text-[#5A6872]">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#004481] mt-0.5 flex-shrink-0" />
                                            <span><strong className="text-[#2C3E50]">Hoy mismo:</strong> Ve a uno de tus repositorios y crea tu primer archivo <code className="px-1 py-0.5 bg-[#F4F8FB] border border-[#D3DCE6] rounded text-[#2C3E50]">.github/copilot-instructions.md</code></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#004481] mt-0.5 flex-shrink-0" />
                                            <span><strong className="text-[#2C3E50]">Añade 2-3 reglas clave:</strong> ¿Qué es lo más importante que Copilot debería saber sobre tu proyecto?</span>
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

                {/* Footer - BBVA style */}
                <footer className="py-16 border-t-2 border-[#D3DCE6] bg-[#F4F8FB]">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-4">
                                <img src={`${import.meta.env.BASE_URL}bbva-logo.jpg`} alt="BBVA" className="h-8 w-auto" />
                                <div className="h-10 w-px bg-[#D3DCE6]"></div>
                                <img src={`${import.meta.env.BASE_URL}copilot-icon.png`} alt="GitHub Copilot" className="h-12 w-auto" style={{ filter: 'none' }} />
                            </div>
                            <p className="text-[#2C3E50] text-base font-bold uppercase tracking-wider">
                                Guía Completa de GitHub Copilot
                            </p>
                            <p className="text-[#5A6872] text-sm font-light max-w-2xl text-center">
                                Agentes Personalizados e Instrucciones
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                                <a href="https://docs.github.com/en/copilot" className="text-[#2C3E50] hover:text-[#004481] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Documentación Oficial
                                </a>
                                <span className="text-[#D3DCE6]">•</span>
                                <a href="https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents" className="text-[#2C3E50] hover:text-[#004481] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Agentes Personalizados
                                </a>
                                <span className="text-[#D3DCE6]">•</span>
                                <a href="https://docs.github.com/en/copilot/customizing-copilot" className="text-[#2C3E50] hover:text-[#004481] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Personalización
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div >
    );
};

export default LandingPage;
