import React from 'react';
import { motion } from 'framer-motion';
import HexagonImage from '../components/HexagonImage';
import { personalInfo } from '../data/portfolio';
import { slideUp, scaleUp } from '../utils/animations';
import useTypingEffect from '../hooks/useTypingEffect';

const Hero = () => {
    const qualities = [
        "Problem Solver",
        "Critical Thinker",
        "Logical Thinker",
        "Fast Learner",
        "Detail-Oriented",
        "Strong Debugger",
        "Clean Code Writer",
        "Solution-Focused",
        "Analytical Mindset",
        "Continuous Learner",
        "Systems Thinker",
        "Performance-Oriented",
        "Writes Maintainable Code",
        "Breaks Down Complexity",
        "Thinks Before Coding"
    ];

    const typedText = useTypingEffect(qualities, 80, 40, 1500);

    return (
        <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={slideUp}
                    className="order-2 md:order-1 space-y-6"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-300">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-gray-900 dark:text-white leading-tight">
                        {personalInfo.name} <br />
                        <span className="text-primary text-xl md:text-2xl font-medium tracking-widest block mt-2">
                            {personalInfo.role}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-normal tracking-normal block mt-3 min-h-[2rem]">
                            {typedText}<span className="animate-pulse text-primary">|</span>
                        </span>
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                        {personalInfo.bio}
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4">
                        <a
                            href={personalInfo.socials.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-primary text-black font-bold px-8 py-3 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors uppercase text-sm tracking-wider"
                        >
                            Let's Chat!
                        </a>
                        <a
                            href="/assets/DevashishUpreti.pdf"
                            download="DevashishUpreti.pdf"
                            className="inline-block bg-transparent border-2 border-primary text-primary font-bold px-8 py-3 rounded-md hover:bg-primary hover:text-black transition-colors uppercase text-sm tracking-wider"
                        >
                            Download CV
                        </a>
                    </div>

                    <div className="pt-8 flex gap-4 text-gray-500 dark:text-gray-400 items-center">
                        <span className="text-sm font-medium">Follow me on :</span>
                        <div className="flex gap-4">
                            {Object.entries(personalInfo.socials).map(([platform, link]) => (
                                <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors capitalize">
                                    {platform}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Hexagon Image */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={scaleUp}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <HexagonImage
                        src="/assets/profile_v2.jpg" // Updated profile image v2
                        alt={personalInfo.name}
                        className="w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
