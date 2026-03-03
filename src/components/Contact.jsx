import { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle, Linkedin, Github, ArrowRight, CheckCircle2, Send, Phone } from 'lucide-react';

const contactLinks = [
    {
        id: 'email',
        label: 'Email Me',
        value: 'modikartik1911@gmail.com',
        icon: Mail,
        href: 'mailto:modikartik1911@gmail.com',
        accent: '#6366f1',
        desc: 'Best for project inquiries',
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        value: '+91 79748 51086',
        icon: MessageCircle,
        href: 'https://wa.me/917974851086',
        accent: '#25d366',
        desc: 'Quick questions & updates',
    },
    {
        id: 'phone',
        label: 'Call Me',
        value: '+91 79748 51086',
        icon: Phone,
        href: 'tel:+917974851086',
        accent: '#f59e0b',
        desc: 'Direct call for urgent projects',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'kartik-modi-9004aa2b2',
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/kartik-modi-9004aa2b2/',
        accent: '#0e76a8',
        desc: 'Professional networking',
    },
    {
        id: 'github',
        label: 'GitHub',
        value: 'Kartik-Developer-2012',
        icon: Github,
        href: 'https://github.com/Kartik-Developer-2012',
        accent: '#8b5cf6',
        desc: 'Projects & open source code',
    },
];

const offerings = [
    'New Flutter App (iOS & Android)',
    'Existing App Redesign or Refactor',
    'API Integration & Backend Setup',
    'App Performance Optimization',
    'Code Review & Architecture Consulting',
    'Ongoing Maintenance Contract',
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '', budget: '' });
    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 80);
                    });
                }
            }),
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) return;

        // Build a mailto URL so the message actually reaches the inbox
        const subject = encodeURIComponent(`New Project Inquiry from ${formState.name}`);
        const budgetLine = formState.budget ? `Budget: ${formState.budget}\n` : '';
        const body = encodeURIComponent(
            `Hi Kartik,\n\nI found your portfolio and I'd love to discuss a project with you.\n\n` +
            `Name: ${formState.name}\nEmail: ${formState.email}\n${budgetLine}\nMessage:\n${formState.message}\n\nLooking forward to hearing from you!`
        );
        window.location.href = `mailto:modikartik1911@gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormState({ name: '', email: '', message: '', budget: '' });
    };

    const inputStyle = {
        background: 'rgba(0,0,0,0.03)',
        border: '1px solid rgba(0,0,0,0.09)',
    };

    const focusStyle = (e) => {
        e.target.style.borderColor = 'rgba(99,102,241,0.55)';
        e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.1)';
    };

    const blurStyle = (e) => {
        e.target.style.borderColor = 'rgba(0,0,0,0.09)';
        e.target.style.boxShadow = 'none';
    };

    return (
        <section id="contact" aria-label="Contact" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <div className="hero-glow w-96 h-96 bg-indigo-600/10 top-0 right-0" />
            <div className="hero-glow w-80 h-80 bg-violet-600/8 bottom-0 left-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Let's Collaborate</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mt-3 leading-tight break-words"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Let's Build Your
                        <br />
                        <span className="gradient-text">Next Flutter App</span>
                    </h2>
                    <p className="text-gray-500 text-base mt-5 max-w-xl mx-auto leading-relaxed">
                        Whether you have a full spec ready or just a rough idea — I'd love to hear what you're building.
                        Let's turn it into a product users love.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left — Form */}
                    <div className="reveal">
                        <div className="glass-card rounded-2xl p-6 sm:p-8">
                            <h3
                                className="text-gray-900 font-bold text-xl mb-6"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                Send a Message
                            </h3>

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-10 text-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4 border border-emerald-500/25">
                                        <CheckCircle2 size={28} className="text-emerald-400" />
                                    </div>
                                    <div className="text-gray-900 font-bold text-lg mb-2">Message Sent! 🚀</div>
                                    <div className="text-gray-600 text-sm">I'll get back to you within 24 hours.</div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="contact-name" className="block text-gray-600 text-xs font-medium mb-2 uppercase tracking-wide">
                                                Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-neutral-600 text-sm outline-none transition-all duration-250"
                                                style={inputStyle}
                                                onFocus={focusStyle}
                                                onBlur={blurStyle}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-email" className="block text-gray-600 text-xs font-medium mb-2 uppercase tracking-wide">
                                                Email
                                            </label>
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-neutral-600 text-sm outline-none transition-all duration-250"
                                                style={inputStyle}
                                                onFocus={focusStyle}
                                                onBlur={blurStyle}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="contact-budget" className="block text-gray-600 text-xs font-medium mb-2 uppercase tracking-wide">
                                            Budget Range
                                        </label>
                                        <select
                                            id="contact-budget"
                                            name="budget"
                                            value={formState.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl text-gray-900 text-sm outline-none transition-all duration-250 appearance-none cursor-pointer"
                                            style={{
                                                ...inputStyle,
                                                color: formState.budget ? '#111827' : 'rgba(0,0,0,0.35)',
                                            }}
                                            onFocus={focusStyle}
                                            onBlur={blurStyle}
                                        >
                                            <option value="" style={{ background: '#ffffff' }}>Select budget range</option>
                                            <option value="under5k" style={{ background: '#ffffff' }}>Under $5,000</option>
                                            <option value="5k-15k" style={{ background: '#ffffff' }}>$5,000 – $15,000</option>
                                            <option value="15k-50k" style={{ background: '#ffffff' }}>$15,000 – $50,000</option>
                                            <option value="50k+" style={{ background: '#ffffff' }}>$50,000+</option>
                                            <option value="discuss" style={{ background: '#ffffff' }}>Let's discuss</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className="block text-gray-600 text-xs font-medium mb-2 uppercase tracking-wide">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Tell me about your project, goals, and timeline..."
                                            value={formState.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-neutral-600 text-sm outline-none resize-none transition-all duration-250"
                                            style={inputStyle}
                                            onFocus={focusStyle}
                                            onBlur={blurStyle}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary w-full justify-center gap-2"
                                        id="contact-submit-btn"
                                    >
                                        <Send size={16} />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right — Contact cards + offerings */}
                    <div className="space-y-6">
                        <div className="reveal">
                            <h3
                                className="text-gray-900 font-bold text-lg mb-4"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                Reach Me Directly
                            </h3>
                            <div className="space-y-3">
                                {contactLinks.map(({ id, label, value, icon: Icon, href, accent, desc }) => (
                                    <a
                                        key={id}
                                        href={href}
                                        target={id !== 'phone' ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 glass-card rounded-xl p-4 group"
                                        style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = `${accent}35`;
                                            e.currentTarget.style.background = `${accent}07`;
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                            e.currentTarget.style.boxShadow = `0 8px 32px ${accent}12`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '';
                                            e.currentTarget.style.background = '';
                                            e.currentTarget.style.transform = '';
                                            e.currentTarget.style.boxShadow = '';
                                        }}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                                            style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
                                        >
                                            <Icon size={18} style={{ color: accent }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-gray-900 font-semibold text-sm">{label}</div>
                                            <div className="text-gray-500 text-xs truncate">{value}</div>
                                            <div className="text-neutral-700 text-[11px]">{desc}</div>
                                        </div>
                                        <ArrowRight
                                            size={15}
                                            className="text-neutral-600 group-hover:text-black shrink-0 transition-all duration-250 group-hover:translate-x-1"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* What I can help with */}
                        <div className="glass-card rounded-2xl p-6 reveal">
                            <h4
                                className="text-gray-900 font-bold text-base mb-4"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                I Can Help You With
                            </h4>
                            <ul className="space-y-2.5">
                                {offerings.map((item, i) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-gray-600 break-words"
                                        style={{
                                            animationDelay: `${i * 60}ms`,
                                        }}
                                    >
                                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
