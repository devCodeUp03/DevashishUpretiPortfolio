import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';
import { staggerContainer, fadeIn, slideUp } from '../utils/animations';

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative transition-colors duration-300">
            {/* Glow effect */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideUp}
                    className="text-center mb-16"
                >
                    <SectionTitle title="Projects" highlight="I have done" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
                        Here are some of the projects I've worked on, showcasing my expertise in Full Stack Development.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={fadeIn}>
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/devCodeUp03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-900 dark:text-white font-medium hover:border-primary hover:text-primary transition-all group"
                    >
                        View All Projects
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
