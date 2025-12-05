import React from 'react';
import { Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { testimonials } from '../data/portfolio';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 transition-colors duration-300">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <SectionTitle title="Testimonials" highlight="What they say" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-card-bg p-8 rounded-xl border border-gray-200 dark:border-white/5 relative shadow-lg">
                            <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">"{item.text}"</p>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.name}</h4>
                                <p className="text-primary text-sm">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
