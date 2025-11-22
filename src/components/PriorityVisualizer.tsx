import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Book, Building, ArrowDown, Layers } from 'lucide-react';

const PriorityVisualizer: React.FC = () => {
    const [activeLayers, setActiveLayers] = useState({
        personal: true,
        repo: true,
        org: true
    });

    const toggleLayer = (layer: keyof typeof activeLayers) => {
        setActiveLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
    };

    const layers = [
        {
            id: 'personal',
            label: 'Personal Instructions',
            icon: <User className="w-5 h-5" />,
            color: 'bg-blue-500',
            textColor: 'text-blue-400',
            borderColor: 'border-blue-500/30',
            bgSubtle: 'bg-blue-500/10',
            description: 'Your specific preferences (e.g., "Always use TypeScript")'
        },
        {
            id: 'repo',
            label: 'Repository Instructions',
            icon: <Book className="w-5 h-5" />,
            color: 'bg-green-500',
            textColor: 'text-green-400',
            borderColor: 'border-green-500/30',
            bgSubtle: 'bg-green-500/10',
            description: 'Project-specific rules (e.g., "Use these testing patterns")'
        },
        {
            id: 'org',
            label: 'Organization Policies',
            icon: <Building className="w-5 h-5" />,
            color: 'bg-purple-500',
            textColor: 'text-purple-400',
            borderColor: 'border-purple-500/30',
            bgSubtle: 'bg-purple-500/10',
            description: 'Company-wide standards (e.g., "No hardcoded secrets")'
        }
    ];

    return (
        <div className="card bg-canvas-default border-border-default p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-accent-fg" />
                <div>
                    <h3 className="text-xl font-semibold">Context Priority Stack</h3>
                    <p className="text-sm text-fg-muted">Toggle layers to see how Copilot builds context</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Controls */}
                <div className="space-y-3">
                    <p className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-2">Available Context Layers</p>
                    {layers.map((layer) => (
                        <button
                            key={layer.id}
                            onClick={() => toggleLayer(layer.id as any)}
                            className={`w-full flex items-center gap-3 p-3 rounded-md border transition-all duration-200 text-left ${activeLayers[layer.id as keyof typeof activeLayers]
                                    ? `${layer.bgSubtle} ${layer.borderColor} ${layer.textColor}`
                                    : 'bg-canvas-subtle border-border-default text-fg-muted hover:border-fg-muted'
                                }`}
                        >
                            {layer.icon}
                            <div className="flex-1">
                                <div className="font-medium text-sm">{layer.label}</div>
                            </div>
                            <div className={`w-3 h-3 rounded-full border ${activeLayers[layer.id as keyof typeof activeLayers] ? layer.color : 'border-fg-muted bg-transparent'
                                }`} />
                        </button>
                    ))}
                </div>

                {/* Visualization */}
                <div className="relative bg-canvas-subtle rounded-xl p-4 border border-border-default min-h-[300px] flex flex-col items-center justify-center">
                    <div className="absolute top-2 left-4 text-xs font-mono text-fg-muted">Final Context Prompt</div>

                    <div className="w-full max-w-xs space-y-2 relative z-10">
                        <AnimatePresence mode='popLayout'>
                            {layers.map((layer) => (
                                activeLayers[layer.id as keyof typeof activeLayers] && (
                                    <motion.div
                                        key={layer.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        className={`p-3 rounded-lg border ${layer.borderColor} ${layer.bgSubtle} backdrop-blur-sm shadow-lg`}
                                    >
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`${layer.textColor}`}>{layer.icon}</span>
                                            <span className={`text-xs font-bold ${layer.textColor}`}>{layer.label}</span>
                                        </div>
                                        <p className="text-xs text-fg-default opacity-90">{layer.description}</p>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>

                        {Object.values(activeLayers).every(v => !v) && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-fg-muted text-sm py-8"
                            >
                                No custom instructions active. <br /> Copilot uses default baseline.
                            </motion.div>
                        )}
                    </div>

                    {/* Arrow indicating flow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-20">
                        <div className="text-xs font-mono rotate-90 whitespace-nowrap mb-4">Priority Flow</div>
                        <ArrowDown className="w-4 h-4" />
                        <ArrowDown className="w-4 h-4" />
                        <ArrowDown className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriorityVisualizer;
