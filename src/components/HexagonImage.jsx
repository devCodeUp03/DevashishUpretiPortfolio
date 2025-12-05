import React from 'react';
import { motion } from 'framer-motion';

const HexagonImage = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative ${className} flex justify-center items-center`}>
            {/* Rotating Ring 1 - Clockwise */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    scale: 1.05
                }}
            />

            {/* Rotating Ring 2 - Counter-Clockwise */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-bl from-primary/40 to-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    scale: 1.05
                }}
            />

            {/* Soft Back Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-xl scale-90" />

            {/* Stable Main Image Container */}
            <div
                className="relative z-10 w-full h-full p-1 bg-black/20 backdrop-blur-sm"
                style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    style={{
                        objectPosition: "center 20%", // Tweaked to ensure face visibility for upright/scooter shots
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                />
            </div>
        </div>
    );
};

export default HexagonImage;
