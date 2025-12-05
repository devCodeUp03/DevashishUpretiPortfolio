import React from 'react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ title, description, icon }) => {
    const IconComponent = Icons[icon] || Icons.HelpCircle;

    return (
        <div className="bg-card-bg p-8 rounded-lg border border-white/5 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
                <div className="w-12 h-1 bg-primary/50 rounded-full"></div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCard;
