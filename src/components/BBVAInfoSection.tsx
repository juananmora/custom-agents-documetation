import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface BBVAInfoSectionProps {
    category: string;
    categoryLink: string;
    title: string;
    titleLink: string;
    description: string;
}

const BBVAInfoSection: React.FC<BBVAInfoSectionProps> = ({
    category,
    categoryLink,
    title,
    titleLink,
    description
}) => {
    return (
        <motion.section
            className="py-20 bg-white border-y border-[#D3DCE6] relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1 }}
        >
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#004481] rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="groupInfo_sph col-md-12 col-sm-12 col-12">
                        <div className="noticia_InfoHeader_sph mb-6">
                            <p className="notSeccion_sph mb-4">
                                <a
                                    href={categoryLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#004481] hover:text-[#003366] transition-colors duration-300"
                                >
                                    {category}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </p>
                            <h2 className="notTituloDest text-4xl md:text-5xl font-bold mb-8 text-[#2C3E50]">
                                <a
                                    href={titleLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#004481] transition-colors duration-300"
                                >
                                    {title}
                                </a>
                            </h2>
                        </div>
                        <div className="noticia_InfoTexto">
                            <p className="notTexto text-xl md:text-2xl text-[#5A6872] leading-relaxed font-light">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default BBVAInfoSection;
