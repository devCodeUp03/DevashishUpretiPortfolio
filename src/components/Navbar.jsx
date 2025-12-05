import React, { useState, useEffect } from 'react';

import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-white/5' : 'bg-transparent'}`}>
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-black border border-primary text-primary flex items-center justify-center font-bold text-xl rounded-none group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                            D
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg tracking-wider leading-none text-gray-900 dark:text-white">DEVASHISH</span>
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-[0.2em]">UPRETI</span>
                        </div>
                    </a>

                    {/* Desktop Menu - Square Tabs */}
                    <div className="hidden md:flex items-center h-full gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="h-full px-6 flex items-center text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-black hover:bg-primary transition-all duration-300 border-b-2 border-transparent hover:border-white"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 ml-4 rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a
                            href="#contact"
                            className="ml-4 border border-primary text-primary px-6 py-2 text-sm font-medium hover:bg-primary hover:text-black dark:hover:bg-primary dark:hover:text-black transition-all duration-300 rounded-none bg-transparent dark:bg-transparent"
                        >
                            HIRE ME
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="text-gray-600 dark:text-white p-2"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            className="text-gray-900 dark:text-white p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-none transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-white/10 animate-fade-in shadow-2xl overflow-y-auto z-40">
                    <div className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-black hover:bg-primary py-4 px-6 mb-2 border-l-4 border-transparent hover:border-white transition-all duration-200 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
