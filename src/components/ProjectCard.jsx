import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, description, technologies = [], links, image }) => {
    return (
        <motion.div
            className="group relative h-full bg-card-bg rounded-xl overflow-hidden border border-white/5 shadow-lg flex flex-col"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                />

                {/* Overlay Links - visible on hover or always visible? Let's make them always accessible but styled nicely */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {links?.live && (
                        <a href={links.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-colors shadow-lg" title="Live Demo">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
                {/* Glow Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-300 pointer-events-none" />

                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
                    <div className="flex gap-2">
                        {links?.frontend && (
                            <a href={links.frontend} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Frontend Code">
                                <Github size={20} />
                            </a>
                        )}
                        {links?.backend && (
                            <a href={links.backend} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Backend Code">
                                <Code size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {technologies.slice(0, 4).map((tech, i) => ( // Show first 4
                        <span key={i} className="text-xs font-semibold px-3 py-1 bg-white/5 text-primary border border-primary/20 rounded-full">
                            {tech}
                        </span>
                    ))}
                    {technologies.length > 4 && (
                        <span className="text-xs font-semibold px-3 py-1 bg-white/5 text-gray-400 border border-white/5 rounded-full">
                            +{technologies.length - 4}
                        </span>
                    )}
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-500 ease-out" />
        </motion.div>
    );
};

export default ProjectCard;
