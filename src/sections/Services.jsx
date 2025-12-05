import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { Code, Globe, Database } from 'lucide-react';
import { slideUp, staggerContainer, fadeIn } from '../utils/animations';

const iconMap = {
    Code: Code,
    Globe: Globe,
    Database: Database
};

const Services = () => {
    return (
        <section id="skills" className="py-20 transition-colors duration-300">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideUp}
                    className="mb-12"
                >
                    <h4 className="text-gray-500 dark:text-gray-400 font-medium mb-2 uppercase tracking-widest">My Expertise</h4>
                    <div className="flex gap-2 items-center">
                        <span className="text-gray-900 dark:text-white text-3xl font-bold">Technical</span>
                        <span className="text-primary text-3xl font-bold uppercase">Skills</span>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {skills.map((skillGroup, index) => {
                        const Icon = iconMap[skillGroup.icon] || Code;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-card-bg p-8 rounded-xl border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-colors duration-300 group shadow-lg"
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, idx) => (
                                        <span key={idx} className="text-sm bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
