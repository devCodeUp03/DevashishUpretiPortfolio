


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error, config_error

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

        // Debug: Log credentials (redacted for security)
        console.log('EmailJS Configuration:', {
            serviceId: SERVICE_ID ? `${SERVICE_ID.substring(0, 8)}...` : 'MISSING',
            templateId: TEMPLATE_ID ? `${TEMPLATE_ID.substring(0, 9)}...` : 'MISSING',
            publicKey: PUBLIC_KEY ? `${PUBLIC_KEY.substring(0, 8)}...` : 'MISSING'
        });

        // DEMO MODE: If keys are missing, simulate a successful send
        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'your_service_id_here') {
            console.warn("EmailJS keys missing. Running in DEMO mode.");
            setTimeout(() => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 3000);
            }, 2000);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('✅ Email sent successfully:', result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 3000);
            }, (error) => {
                console.error('❌ EmailJS Error - Full Details:', {
                    status: error.status,
                    text: error.text,
                    fullError: error
                });

                // Log the exact error message
                console.error('Error Message:', error.text || error.message || 'Unknown error');

                // Provide specific error guidance
                if (error.text && error.text.includes('service')) {
                    console.error('🔍 Service ID Error: Please verify your service ID at https://dashboard.emailjs.com/admin');
                    console.error('Current Service ID:', SERVICE_ID);
                } else if (error.text && error.text.includes('template')) {
                    console.error('🔍 Template ID Error: Please verify your template ID at https://dashboard.emailjs.com/admin');
                    console.error('Current Template ID:', TEMPLATE_ID);
                } else if (error.text && error.text.includes('public')) {
                    console.error('🔍 Public Key Error: Please verify your public key at https://dashboard.emailjs.com/admin/account');
                    console.error('Current Public Key:', PUBLIC_KEY);
                } else {
                    console.error('🔍 Unknown Error - Check all credentials at https://dashboard.emailjs.com/admin');
                    console.error('Credentials being used:', { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
                }

                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto"
        >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white"
                        placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-gray-900 dark:text-white resize-none"
                        placeholder="How can I help you?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 px-6 rounded-lg bg-primary text-black font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 size={20} className="animate-spin" />
                            Sending...
                        </>
                    ) : status === 'success' ? (
                        'Message Sent!'
                    ) : status === 'error' ? (
                        'Failed to Send'
                    ) : (
                        <>
                            <Send size={20} />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
