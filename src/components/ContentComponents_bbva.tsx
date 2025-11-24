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
            className={`p-8 ${isCustom ? 'bg-[#004481] text-white' : 'bg-white text-[#2C3E50]'} border-none shadow-lg transition-all duration-300`}
        >
            <h3 className={`text-2xl font-bold mb-6 uppercase tracking-tight ${isCustom ? 'text-white' : 'text-[#2C3E50]'}`}>
                {title}
            </h3>
            <ul className="space-y-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base">
                        {isCustom ? (
                            <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                        ) : (
                            <span className="w-5 h-5 border-2 border-[#D3DCE6] mt-0.5 flex-shrink-0" />
                        )}
                        <span className={isCustom ? 'text-white font-light' : 'text-[#5A6872] font-light'}>{item}</span>
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
        blue: 'bg-white border-2 border-[#D3DCE6] hover:border-[#004481]',
        green: 'bg-white border-2 border-[#D3DCE6] hover:border-[#004481]',
        purple: 'bg-white border-2 border-[#D3DCE6] hover:border-[#004481]'
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -8, transition: { duration: 0.2 } }}
            className={`p-8 ${colorClasses[color]} cursor-default transition-all duration-300 shadow-md hover:shadow-xl`}
        >
            <div className="flex items-start gap-4 mb-4">
                <div className="text-[#004481]">
                    {icon}
                </div>
                <h3 className="font-bold text-xl text-[#2C3E50] uppercase tracking-tight">{title}</h3>
            </div>
            <p className="text-[#5A6872] font-light leading-relaxed">{description}</p>
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
            whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
            className="p-8 bg-white border-2 border-[#D3DCE6] hover:border-[#004481] transition-all duration-300 shadow-md hover:shadow-xl cursor-default"
        >
            <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${color} flex items-center justify-center mb-6`}
                whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
            >
                {icon}
            </motion.div>
            <h4 className="font-bold text-xl mb-3 text-[#2C3E50] uppercase tracking-tight">{name}</h4>
            <p className="text-[#5A6872] font-light leading-relaxed">{description}</p>
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
        <div className="grid md:grid-cols-2 gap-8">
            {/* Bad Example */}
            <div className="bg-[#1a1a1a] border-2 border-red-600 overflow-hidden">
                <div className="px-6 py-4 bg-red-600/20 border-b-2 border-red-600 flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-600"></div>
                    <span className="text-sm font-bold text-red-500 uppercase tracking-wide">{bad.title}</span>
                </div>
                <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto">
                    <code>{bad.code}</code>
                </pre>
            </div>

            {/* Good Example */}
            <div className="bg-[#1a1a1a] border-2 border-[#004481] overflow-hidden">
                <div className="px-6 py-4 bg-[#004481]/20 border-b-2 border-[#004481] flex items-center gap-3">
                    <div className="w-4 h-4 bg-[#004481]"></div>
                    <span className="text-sm font-bold text-[#004481] uppercase tracking-wide">{good.title}</span>
                </div>
                <pre className="p-6 text-sm text-gray-100 font-mono overflow-x-auto">
                    <code>{good.code}</code>
                </pre>
            </div>
        </div>
    );
};

export { ComparisonCard, FeatureCard, AgentCard, CodeComparison };
export type { ComparisonCardProps, FeatureCardProps, AgentCardProps, CodeComparisonProps };
