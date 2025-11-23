import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Book, Code2, ArrowRight, CheckCircle2, Bot, FileText,
    Building, User, Shield, Layers, Zap, Target, Rocket, Menu, X
} from 'lucide-react';

import { ComparisonCard, FeatureCard, AgentCard, CodeComparison } from './components/ContentComponents';
import PriorityVisualizerEn from './components/PriorityVisualizer_en';

const LandingPageEn: React.FC = () => {
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
        { href: '#inicio', label: 'Home' },
        { href: '#fundamentos', label: 'Fundamentals' },
        { href: '#instrucciones', label: 'Instructions' },
        { href: '#agentes', label: 'Agents' },
        { href: '#sinergia', label: 'Synergy' },
        { href: '#configuracion', label: 'Configuration' },
        { href: '#practicas', label: 'Best Practices' }
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
                        <img src={`${import.meta.env.BASE_URL}copilot-icon.png`} alt="GitHub Copilot" className="h-8 w-auto text-[#A100FF]" style={{ filter: 'none' }} />
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
                            Documentation
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
                                Documentation
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
                                Innovation in Development
                            </div>
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-[#323232]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Master GitHub Copilot with
                                <br />
                                <span className="text-[#A100FF]">Custom Agents</span>
                                <br />
                                and Tailored Instructions
                            </motion.h1>
                            <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                                Transform GitHub Copilot into a team of virtual specialists who understand your project, follow your standards, and automate complex tasks
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                                <motion.a
                                    href="#fundamentos"
                                    className="btn-primary text-sm px-10 py-4 flex items-center gap-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get Started <ArrowRight className="w-5 h-5" />
                                </motion.a>
                                <motion.a
                                    href="#configuracion"
                                    className="btn-secondary text-sm px-10 py-4 flex items-center gap-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Configuration <Book className="w-5 h-5" />
                                </motion.a>
                            </div>

                            {/* Workflow Video */}
                            <div className="mb-16 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl border-2 border-[#E5E5E5]">
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
                                        { icon: <FileText className="w-5 h-5" />, text: 'Tailored Instructions' },
                                        { icon: <Bot className="w-5 h-5" />, text: 'Custom Agents' },
                                        { icon: <Zap className="w-5 h-5" />, text: 'Automated Workflows' },
                                        { icon: <Code2 className="w-5 h-5" />, text: 'Specific Context' }
                                    ].map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href="#fundamentos"
                                            className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-[#E5E5E5] text-center hover:border-[#A100FF] hover:bg-[#F3F2F1] transition-all duration-300 cursor-pointer group min-w-[200px]"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 + (index * 0.1) }}
                                            whileHover={{ y: -4 }}
                                        >
                                            <div className="text-[#A100FF] group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <span className="text-xs font-bold uppercase tracking-wide text-[#323232]">{item.text}</span>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
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
                                    From Generic Assistant to
                                    <br />
                                    <span className="text-[#A100FF]">Expert Partner</span>
                                </h2>
                                <p className="text-[#666666] max-w-3xl mx-auto text-xl font-light">
                                    Discover how customization turns Copilot into a true productivity multiplier
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
                                title="Standard Copilot"
                                type="standard"
                                items={[
                                    'Provides general programming assistance',
                                    'Doesn\'t know your project\'s specific standards',
                                    'Requires repeated context in each interaction',
                                    'Generates generic responses without personalization'
                                ]}
                            />
                            <ComparisonCard
                                title="Customized Copilot"
                                type="custom"
                                items={[
                                    'Understands your repository\'s unique context',
                                    'Respects your libraries, frameworks, and style guides',
                                    'Automates workflows and recurring tasks',
                                    'Acts as a team of specialists at your service'
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
                                icon={<Book className="w-6 h-6 text-[#A100FF]" />}
                                title="Library Context"
                                description="Copilot understands the specific libraries and frameworks in your project to generate compatible code"
                                color="purple"
                            />
                            <FeatureCard
                                icon={<FileText className="w-6 h-6 text-[#A100FF]" />}
                                title="Code Standards"
                                description="Automatically applies your team's conventions and best practices"
                                color="purple"
                            />
                            <FeatureCard
                                icon={<Zap className="w-6 h-6 text-[#A100FF]" />}
                                title="Automation"
                                description="Create specialized agents that execute complex and repetitive tasks consistently"
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
                    {/* Subtle background gradient for section separation - Accenture style */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F3F2F1]/30 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#A100FF] opacity-5 accenture-diagonal"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#323232]">
                                The Foundation: Custom Instructions
                            </h2>
                            <p className="text-[#666666] max-w-3xl mx-auto text-lg font-light">
                                Your Project's DNA
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="card p-8 bg-gradient-to-br from-[#F3F2F1] to-white border-2 border-[#E5E5E5]">
                                <p className="text-lg mb-6 text-[#323232]">
                                    <strong className="text-[#A100FF]">Custom Instructions</strong> are natural language directives that provide persistent context to GitHub Copilot. You can define them at personal, repository, or organization level.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#A100FF] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">Permanent Context</h4>
                                            <p className="text-sm text-[#666666]">Avoid repeating the same context in each interaction</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#A100FF] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">Deep Knowledge</h4>
                                            <p className="text-sm text-[#666666]">Copilot understands your project's rules and architecture</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#A100FF] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">Greater Precision</h4>
                                            <p className="text-sm text-[#666666]">More relevant responses aligned with your context</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hierarchy Section */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#323232]">Instruction Hierarchy</h3>
                            <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
                                Instructions are applied at different scopes. More specific ones take priority over general ones: <strong className="text-[#323232]">Personal → Repository → Organization</strong>.
                            </p>
                            <PriorityVisualizerEn />
                        </div>

                        {/* Anatomy of Instructions */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#323232]">Types of Instructions in the Repository</h3>
                            <p className="text-center text-[#666666] mb-12 max-w-3xl mx-auto">
                                Within a repository, you can define instructions with different levels of specificity to optimize the context Copilot receives
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="card p-6 bg-[#F3F2F1] border-2 border-[#E5E5E5]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#A100FF]/10 flex items-center justify-center">
                                            <FileText className="w-5 h-5 text-[#A100FF]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#323232]">Repository-wide Instructions</h4>
                                            <code className="text-xs text-[#666666]">.github/copilot-instructions.md</code>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#666666] mb-3">
                                        Define standards and context that apply to the entire repository
                                    </p>
                                    <div className="bg-white rounded p-3 text-xs font-mono border border-[#E5E5E5]">
                                        <div className="text-[#A100FF] mb-1"># Example</div>
                                        <div className="text-[#666666]">This project uses React 19 with TypeScript</div>
                                        <div className="text-[#666666]">All tests must use Jest and React Testing Library</div>
                                    </div>
                                </div>

                                <div className="card p-6 bg-[#F3F2F1] border-2 border-[#E5E5E5]">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#A100FF]/10 flex items-center justify-center">
                                            <Code2 className="w-5 h-5 text-[#A100FF]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#323232]">Path-specific Instructions</h4>
                                            <code className="text-xs text-[#666666]">.github/instructions/NAME.instructions.md</code>
                                        </div>
                                    </div>
                                    <p className="text-sm text-[#666666] mb-3">
                                        Apply specific rules to files matching patterns (glob patterns)
                                    </p>
                                    <div className="bg-white rounded p-3 text-xs font-mono border border-[#E5E5E5]">
                                        <div className="text-[#A100FF] mb-1"># Example with YAML frontmatter</div>
                                        <div className="text-[#666666]">---</div>
                                        <div className="text-[#666666]">applyTo: src/components/**/*.tsx</div>
                                        <div className="text-[#666666]">---</div>
                                        <div className="text-[#666666]">Always use React Hooks and TypeScript</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Best Practices */}
                        <div id="practicas">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#323232]">Best Practices for Instructions</h3>

                            <div className="max-w-4xl mx-auto space-y-6 mb-12">
                                {[
                                    { icon: <Target className="w-5 h-5" />, title: 'Be Brief and Direct', desc: 'Use short, self-contained statements' },
                                    { icon: <Layers className="w-5 h-5" />, title: 'Use Structure', desc: 'Use headings (#) and lists (-) to organize' },
                                    { icon: <Code2 className="w-5 h-5" />, title: 'Concrete Examples', desc: 'Show code snippets of what to do and what not to do' },
                                    { icon: <Book className="w-5 h-5" />, title: 'Describe the What and Why', desc: 'Explain the purpose, architecture, and key tools' }
                                ].map((practice, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-lg bg-[#F3F2F1] border border-[#E5E5E5]"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[#A100FF]/10 flex items-center justify-center flex-shrink-0 text-[#A100FF]">
                                            {practice.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">{practice.title}</h4>
                                            <p className="text-sm text-[#666666]">{practice.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <CodeComparison
                                bad={{
                                    title: 'BAD INSTRUCTION (Vague)',
                                    code: `Make sure the code is good
and follows our standards`
                                }}
                                good={{
                                    title: 'GOOD INSTRUCTION (Specific)',
                                    code: `# Python Code Standards
Follow PEP 8 style guidelines
Use f-strings for string formatting
Functions should not exceed 50 lines

# Error Handling
Use try/except blocks for I/O operations
Avoid generic exceptions like except Exception:`
                                }}
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Custom Agents Section */}
                <motion.section
                    id="agentes"
                    className="py-20 bg-[#F3F2F1] border-y border-[#E5E5E5] relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1 }}
                >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#A100FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A100FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#323232]">
                                The Specialist: Custom Agents
                            </h2>
                            <p className="text-[#666666] max-w-3xl mx-auto text-lg font-light">
                                Hiring a Specialist for Specific Tasks
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto mb-16">
                            <div className="p-8 bg-white border-2 border-[#E5E5E5]">
                                <p className="text-lg mb-6 text-[#323232]">
                                    <strong className="text-[#A100FF]">Custom Agents</strong> are specialized versions of Copilot's coding agent. They are defined through Markdown files with YAML frontmatter that specify their personality, available tools, and specific instructions for recurring tasks.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="flex items-start gap-3">
                                        <Bot className="w-5 h-5 text-[#A100FF] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">Defined Specialists</h4>
                                            <p className="text-sm text-[#666666]">Each agent has a personality, skills, and a specific purpose</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-[#A100FF] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">On-demand Invocation</h4>
                                            <p className="text-sm text-[#666666]">Call specific agents when you need them for concrete tasks</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Layers className="w-5 h-5 text-[#A100FF] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold mb-1 text-[#323232]">Shareable and Reusable</h4>
                                            <p className="text-sm text-[#666666]">Available at repository, organization, or enterprise level</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agent Examples */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <AgentCard
                                name="Solutions Architect"
                                description="Designs structure and architecture for new features"
                                icon={<Building className="w-6 h-6 text-white" />}
                                color="from-[#A100FF] to-[#7000B8]"
                            />
                            <AgentCard
                                name="Security Auditor"
                                description="Reviews code for vulnerabilities and best practices"
                                icon={<Shield className="w-6 h-6 text-white" />}
                                color="from-[#7000B8] to-[#5a009e]"
                            />
                            <AgentCard
                                name="Documentation Expert"
                                description="Generates clear and complete documentation for your code"
                                icon={<Book className="w-6 h-6 text-white" />}
                                color="from-[#C866FF] to-[#A100FF]"
                            />
                        </div>

                        {/* Agent Anatomy */}
                        <div>
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#323232]">Anatomy of a Custom Agent</h3>
                            <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto font-light">
                                Agents are defined with Markdown files that include YAML frontmatter with configuration and the custom prompt in the file body.
                            </p>

                            <div className="max-w-4xl mx-auto bg-[#1a1a1a] border-2 border-[#A100FF] shadow-2xl overflow-hidden">
                                <div className="flex items-center justify-between px-6 py-4 bg-[#A100FF]/20 border-b-2 border-[#A100FF]">
                                    <span className="text-sm font-bold text-[#A100FF] uppercase tracking-wide">.github/agents/nextjs-agent.md</span>
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                                    </div>
                                </div>
                                <div className="p-8 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-relaxed text-gray-100">
                                        <code>
                                            <span className="text-[#A100FF]">---</span>{'\n'}
                                            <span className="text-[#3fb950]">name:</span> nextjs-expert{'\n'}
                                            <span className="text-[#3fb950]">description:</span> Next.js and React Server Components Expert{'\n'}
                                            <span className="text-[#3fb950]">tools:</span> ['read', 'search', 'edit', 'bash']{'\n'}
                                            <span className="text-[#A100FF]">---</span>{'\n'}
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
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F3F2F1] to-transparent pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#323232]">
                                The Synergy: Instructions and Agents Working Together
                            </h2>
                            <p className="text-[#666666] max-w-3xl mx-auto text-lg font-light">
                                Instructions are the environment. Agents are the experts operating within it.
                            </p>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="p-8 bg-[#F3F2F1] border-2 border-[#E5E5E5] mb-12">
                                <p className="text-lg text-center mb-8 text-[#323232]">
                                    When you invoke a Custom Agent, GitHub Copilot intelligently combines its specific prompt with all relevant Custom Instructions (personal, repository, path-specific, and organization) to create a rich and precise context.
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
                                <div className="card p-6 bg-white border-2 border-[#E5E5E5] max-w-3xl mx-auto">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#A100FF]/10 flex items-center justify-center">
                                            <Bot className="w-6 h-6 text-[#A100FF]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2 text-[#323232]">Usage Example</h4>
                                            <p className="text-[#666666] mb-4">
                                                <strong className="text-[#323232]">User Input:</strong> "Hey @nextjs-expert, refactor this component to use Server Components."
                                            </p>
                                            <p className="text-[#666666]">
                                                Copilot will combine the nextjs-expert agent's instructions with your personal, repository, path-specific, and organization instructions to generate a refactoring that meets all established standards.
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
                    className="py-20 bg-[#F3F2F1] border-y border-[#E5E5E5]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#323232]">
                                The Manual: Configuration and Implementation
                            </h2>
                            <h3 className="text-2xl font-bold text-center mb-4 text-[#323232]">Copilot Instructions Management and Scope</h3>
                            <p className="text-[#666666] max-w-3xl mx-auto text-lg font-light">
                                Define your project's DNA directly in code
                            </p>
                        </div>

                        {/* Configuration Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {/* Personal Level */}
                            <div className="p-6 bg-white border-2 border-[#E5E5E5] hover:border-[#A100FF] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <User className="w-6 h-6 text-[#A100FF]" />
                                    <h3 className="font-semibold text-lg text-[#323232]">Personal Level</h3>
                                </div>
                                <p className="text-[#666666] text-sm mb-4">
                                    Applies to all your Copilot interactions across any project
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                        <strong className="text-[#A100FF]">Web:</strong> github.com → Settings → Copilot → Personal Instructions
                                    </div>
                                    <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                        <strong className="text-[#A100FF]">VS Code:</strong> Settings → GitHub Copilot → Custom Instructions
                                    </div>
                                </div>
                            </div>

                            {/* Repository Level */}
                            <div className="p-6 bg-white border-2 border-[#E5E5E5] hover:border-[#A100FF] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Book className="w-6 h-6 text-[#A100FF]" />
                                    <h3 className="font-semibold text-lg text-[#323232]">Repository Level</h3>
                                </div>
                                <p className="text-[#666666] text-sm mb-4">
                                    Project-specific, shared with all repository collaborators
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                        <strong className="text-[#A100FF]">File:</strong>
                                        <code className="block mt-1 px-2 py-1 bg-white rounded text-xs border border-[#E5E5E5]">
                                            .github/copilot-instructions.md
                                        </code>
                                    </div>
                                    <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                        <strong className="text-[#A100FF]">Path-specific:</strong>
                                        <code className="block mt-1 px-2 py-1 bg-white rounded text-xs border border-[#E5E5E5]">
                                            .github/instructions/NAME.instructions.md
                                        </code>
                                    </div>
                                </div>
                            </div>

                            {/* Org/Enterprise Level */}
                            <div className="p-6 bg-white border-2 border-[#E5E5E5] hover:border-[#A100FF] transition-colors duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building className="w-6 h-6 text-[#A100FF]" />
                                    <h3 className="font-semibold text-lg text-[#323232]">Org/Enterprise</h3>
                                </div>
                                <p className="text-[#666666] text-sm mb-4">
                                    Global policies and standards for the entire organization
                                </p>
                                <div className="space-y-2 text-sm">
                                    <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                        <strong className="text-[#A100FF]">Admin:</strong> Organization Settings → Copilot → Policies
                                    </div>
                                    <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                        <strong className="text-[#A100FF]">Management:</strong> Centralized for compliance and governance
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agent Management Section */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-4 text-[#323232]">Agent Management and Scope: From Your Repo to the Entire Enterprise</h3>
                            <p className="text-center text-[#666666] mb-12 max-w-3xl mx-auto">
                                Agents can be defined and shared at multiple levels to adapt to your team's needs.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-16">
                                {/* Repository Level */}
                                <div className="p-6 bg-white border-2 border-[#E5E5E5] hover:border-[#A100FF] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Book className="w-6 h-6 text-[#A100FF]" />
                                        <h4 className="font-semibold text-lg text-[#323232]">Repository</h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                            <strong className="text-[#A100FF]">Location:</strong>
                                            <code className="block mt-1 px-2 py-1 bg-white rounded text-xs border border-[#E5E5E5]">
                                                .github/agents/AGENT_NAME.md
                                            </code>
                                        </div>
                                        <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                            <strong className="text-[#A100FF]">Scope:</strong>
                                            <p className="mt-1 text-[#666666]">
                                                Available only for the repository where it's defined. Ideal for very project-specific agents.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Organization Level */}
                                <div className="p-6 bg-white border-2 border-[#E5E5E5] hover:border-[#A100FF] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Building className="w-6 h-6 text-[#A100FF]" />
                                        <h4 className="font-semibold text-lg text-[#323232]">Organization</h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                            <strong className="text-[#A100FF]">Location:</strong>
                                            <p className="mt-1 text-[#666666]">
                                                In a special repository called <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#E5E5E5]">.github</code>, within an <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#E5E5E5]">agents/</code> directory.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                            <strong className="text-[#A100FF]">Scope:</strong>
                                            <p className="mt-1 text-[#666666]">
                                                Available for all repositories within that organization. Perfect for agents that apply team standards (e.g., "C# Expert").
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Enterprise Level */}
                                <div className="p-6 bg-white border-2 border-[#E5E5E5] hover:border-[#A100FF] transition-colors duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Shield className="w-6 h-6 text-[#A100FF]" />
                                        <h4 className="font-semibold text-lg text-[#323232]">Enterprise</h4>
                                    </div>
                                    <div className="space-y-3 text-sm">
                                        <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                            <strong className="text-[#A100FF]">Location:</strong>
                                            <p className="mt-1 text-[#666666]">
                                                In a special repository called <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#E5E5E5]">.github-private</code>, within an <code className="px-1 py-0.5 bg-white rounded text-xs border border-[#E5E5E5]">agents/</code> directory.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-[#F3F2F1] rounded border border-[#E5E5E5] text-[#323232]">
                                            <strong className="text-[#A100FF]">Scope:</strong>
                                            <p className="mt-1 text-[#666666]">
                                                Shared across all organizations in the enterprise, centrally managed from the "AI Controls" section of enterprise settings.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-center mb-8 text-[#323232]">Ideas for Your Agents</h3>
                            <p className="text-center text-[#666666] mb-12 max-w-2xl mx-auto">
                                Think about your team's repetitive or specialized tasks. Can you create an agent for them?
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <AgentCard
                                    name="Cleanup Specialist"
                                    description="Refactor code, eliminate duplication, and improve readability"
                                    icon={<Code2 className="w-6 h-6 text-white" />}
                                    color="from-[#A100FF] to-[#7000B8]"
                                />
                                <AgentCard
                                    name="Accessibility Auditor"
                                    description="Review UI components for WCAG compliance"
                                    icon={<Shield className="w-6 h-6 text-white" />}
                                    color="from-[#7000B8] to-[#5a009e]"
                                />
                                <AgentCard
                                    name="Implementation Planner"
                                    description="Break down features into actionable technical tasks"
                                    icon={<Target className="w-6 h-6 text-white" />}
                                    color="from-[#C866FF] to-[#A100FF]"
                                />
                                <AgentCard
                                    name="Bug Companion"
                                    description="Analyze reports and implement specific solutions"
                                    icon={<Zap className="w-6 h-6 text-white" />}
                                    color="from-[#A100FF] to-[#8957e5]"
                                />
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="max-w-3xl mx-auto">
                            <div className="p-8 bg-[#F3F2F1] border-2 border-[#E5E5E5] rounded-lg text-center">
                                <Rocket className="w-16 h-16 text-[#A100FF] mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-4 text-[#323232]">Your First Step Towards Mastery</h3>
                                <p className="text-lg mb-6 text-[#666666]">
                                    Don't wait to have the perfect system. The best way to start is with a small experiment.
                                </p>
                                <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 mb-6 text-left">
                                    <h4 className="font-semibold mb-3 text-[#323232]">Recommendation:</h4>
                                    <ul className="space-y-2 text-sm text-[#666666]">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#A100FF] mt-0.5 flex-shrink-0" />
                                            <span><strong className="text-[#323232]">Today:</strong> Go to one of your repositories and create your first <code className="px-1 py-0.5 bg-[#F3F2F1] border border-[#E5E5E5] rounded text-[#323232]">.github/copilot-instructions.md</code> file</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#A100FF] mt-0.5 flex-shrink-0" />
                                            <span><strong className="text-[#323232]">Add 2-3 key rules:</strong> What's the most important thing Copilot should know about your project?</span>
                                        </li>
                                    </ul>
                                </div>
                                <a
                                    href="https://docs.github.com/en/copilot/customizing-copilot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary text-base px-8 py-3 inline-flex items-center gap-2"
                                >
                                    Explore Customization Library <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Footer - Accenture style */}
                <footer className="py-16 border-t-2 border-[#E5E5E5] bg-[#F3F2F1]">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col items-center gap-6">
                            <img src={`${import.meta.env.BASE_URL}copilot-icon.png`} alt="GitHub Copilot" className="h-12 w-auto" style={{ filter: 'none' }} />
                            <p className="text-[#323232] text-base font-bold uppercase tracking-wider">
                                Complete Guide to GitHub Copilot
                            </p>
                            <p className="text-[#666666] text-sm font-light max-w-2xl text-center">
                                Custom Agents and Instructions
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                                <a href="https://docs.github.com/en/copilot" className="text-[#323232] hover:text-[#A100FF] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Official Documentation
                                </a>
                                <span className="text-[#E5E5E5]">•</span>
                                <a href="https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents" className="text-[#323232] hover:text-[#A100FF] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Custom Agents
                                </a>
                                <span className="text-[#E5E5E5]">•</span>
                                <a href="https://docs.github.com/en/copilot/customizing-copilot" className="text-[#323232] hover:text-[#A100FF] font-semibold uppercase tracking-wide transition-colors" target="_blank" rel="noopener noreferrer">
                                    Customization
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div >
    );
};

export default LandingPageEn;
