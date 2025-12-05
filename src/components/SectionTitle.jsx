import React from 'react';

const SectionTitle = ({ title, highlight }) => {
    return (
        <div className="mb-12 text-center md:text-left">
            {highlight && <p className="text-gray-500 dark:text-gray-400 font-medium mb-2 uppercase tracking-widest">{highlight}</p>}
            <div className="flex gap-2 items-center justify-center md:justify-start">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white capitalize inline-block relative z-10">
                    {title}
                    <div className="absolute w-full h-2 bottom-1 left-0 bg-primary/20 -z-10 rounded-full" />
                </h2>
            </div>
        </div>
    );
};

export default SectionTitle;
