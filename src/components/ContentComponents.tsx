import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ComparisonCardProps {
    title: string;
    items: string[];
    type: 'standard' | 'custom';
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ title, items, type }) => {
    const isCustom = type === 'custom';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`card p-6 ${isCustom ? 'bg-accent-subtle border-accent-muted shadow-lg shadow-accent-fg/10' : 'bg-canvas-subtle border-border-default'} transition-all duration-300`}
        >
            <h3 className={`text-xl font-semibold mb-4 ${isCustom ? 'text-accent-fg' : 'text-fg-muted'}`}>
                {title}
            </h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                        {isCustom ? (
                            <CheckCircle2 className="w-4 h-4 text-success-fg mt-0.5 flex-shrink-0" />
                        ) : (
                            <span className="w-4 h-4 rounded-full bg-fg-muted/20 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={isCustom ? 'text-fg-default' : 'text-fg-muted'}>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: 'blue' | 'green' | 'purple';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
    const colorClasses = {
        blue: 'from-[#58a6ff]/20 to-[#58a6ff]/5 border-[#58a6ff]/30',
        green: 'from-[#3fb950]/20 to-[#3fb950]/5 border-[#3fb950]/30',
        purple: 'from-[#bc8cff]/20 to-[#bc8cff]/5 border-[#bc8cff]/30'
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
            className={`card p-6 bg-gradient-to-br ${colorClasses[color]} cursor-default transition-shadow duration-300 hover:shadow-xl`}
        >
            <div className="flex items-center gap-3 mb-3">
                {icon}
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-fg-muted text-sm">{description}</p>
        </motion.div>
    );
};

interface AgentCardProps {
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, description, icon, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
            className="card p-6 bg-canvas-subtle hover:bg-canvas-default transition-all duration-300 hover:shadow-xl cursor-default"
        >
            <motion.div 
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
            >
                {icon}
            </motion.div>
            <h4 className="font-semibold text-lg mb-2">{name}</h4>
            <p className="text-fg-muted text-sm">{description}</p>
        </motion.div>
    );
};

interface CodeComparisonProps {
    bad: {
        title: string;
        code: string;
    };
    good: {
        title: string;
        code: string;
    };
}

const CodeComparison: React.FC<CodeComparisonProps> = ({ bad, good }) => {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Bad Example */}
            <div className="card bg-[#0d1117] border-[#f85149]/30 overflow-hidden">
                <div className="px-4 py-3 bg-[#f85149]/10 border-b border-[#f85149]/30 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#f85149]"></div>
                    <span className="text-xs font-medium text-[#f85149]">{bad.title}</span>
                </div>
                <pre className="p-4 text-sm text-fg-muted font-mono overflow-x-auto">
                    <code>{bad.code}</code>
                </pre>
            </div>

            {/* Good Example */}
            <div className="card bg-[#0d1117] border-[#3fb950]/30 overflow-hidden">
                <div className="px-4 py-3 bg-[#3fb950]/10 border-b border-[#3fb950]/30 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#3fb950]"></div>
                    <span className="text-xs font-medium text-[#3fb950]">{good.title}</span>
                </div>
                <pre className="p-4 text-sm text-fg-default font-mono overflow-x-auto">
                    <code>{good.code}</code>
                </pre>
            </div>
        </div>
    );
};

export { ComparisonCard, FeatureCard, AgentCard, CodeComparison };
export type { ComparisonCardProps, FeatureCardProps, AgentCardProps, CodeComparisonProps };
