import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, education, experience } from '../data/portfolio';
import { slideUp, scaleUp } from '../utils/animations';

const About = () => {
    return (
        <section id="about" className="py-20 transition-colors duration-300">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Image/Visual */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleUp}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-primary rounded-2xl rotate-6 group-hover:rotate-3 transition-transform opacity-20"></div>
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                            alt="Coding Setup"
                            className="relative rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 w-full object-cover aspect-square"
                        />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-2">About Me</h4>
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                {personalInfo.role}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                {personalInfo.bio}
                            </p>
                        </div>

                        {/* Experience Block */}
                        {experience && experience.length > 0 && (
                            <div className="border-l-2 border-primary/30 pl-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Experience</h3>
                                {experience.map((exp, i) => (
                                    <div key={i} className="mb-6">
                                        <h4 className="text-primary font-bold">{exp.role}</h4>
                                        <p className="text-gray-800 dark:text-white text-sm font-medium">{exp.company} | <span className="text-gray-500 font-normal">{exp.period}</span></p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Education Block */}
                        <div className="border-l-2 border-gray-200 dark:border-white/10 pl-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h3>
                            {education.map((edu, i) => (
                                <div key={i} className="mb-4">
                                    <h4 className="text-gray-800 dark:text-white font-bold">{edu.school}</h4>
                                    <p className="text-primary text-sm">{edu.degree}</p>
                                    <p className="text-gray-500 text-sm">{edu.year} • {edu.location}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
