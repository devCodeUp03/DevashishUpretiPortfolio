import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/portfolio';
import { slideUp, staggerContainer, scaleUp } from '../utils/animations';

const Contact = () => {
    const contactLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: personalInfo.socials.linkedin,
            color: 'hover:bg-[#0077b5] hover:text-white' // LinkedIn Blue
        },
        {
            name: 'GitHub',
            icon: Github,
            href: personalInfo.socials.github,
            color: 'hover:bg-[#333] hover:text-white' // GitHub Dark
        },
        {
            name: 'Email',
            icon: Mail,
            href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`,
            color: 'hover:bg-[#ea4335] hover:text-white' // Google Red
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            href: personalInfo.socials.whatsapp,
            color: 'hover:bg-[#25d366] hover:text-white' // WhatsApp Green
        }
    ];

    return (
        <section id="contact" className="py-20 border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideUp}
                    className="text-center mb-16"
                >
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Get in Touch</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Let's Connect</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Side: Text & Socials */}
                    <div className="space-y-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                        >
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question about my work, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-2 gap-4"
                        >
                            {contactLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={scaleUp}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex flex-col items-center justify-center p-6 bg-white dark:bg-card-bg border border-gray-200 dark:border-white/5 rounded-xl transition-all duration-300 group ${item.color} shadow-sm hover:shadow-md`}
                                >
                                    <item.icon size={28} className="mb-2 text-gray-500 dark:text-gray-400 group-hover:text-inherit transition-colors" />
                                    <span className="font-bold text-xs tracking-widest uppercase text-gray-900 dark:text-white group-hover:text-white">{item.name}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
