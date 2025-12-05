import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
    const socialLinks = [
        { icon: Linkedin, href: personalInfo.socials.linkedin },
        { icon: Github, href: personalInfo.socials.github },
        { icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}` },
        { icon: MessageCircle, href: personalInfo.socials.whatsapp }
    ];

    return (
        <footer className="bg-gradient-to-r from-[#01cdba] to-[#01cfbb] text-black py-8 relative z-10">
            <div className="container-custom flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

                {/* Copyright & Name */}
                <div className="font-medium">
                    <p>© {new Date().getFullYear()} <span className="font-bold uppercase tracking-wider">{personalInfo.name}</span>. All rights reserved.</p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors text-black"
                        >
                            <item.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
