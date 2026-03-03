import { Zap, Heart, ArrowUp, Mail, Github, Linkedin, Phone } from 'lucide-react';

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    {
        icon: Github,
        href: 'https://github.com/Kartik-Developer-2012',
        label: 'GitHub Portfolio',
    },
    {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/kartik-modi-9004aa2b2/',
        label: 'LinkedIn',
    },
    {
        icon: Phone,
        href: 'tel:+917974851086',
        label: 'Call',
    },
    {
        icon: Mail,
        href: 'mailto:modikartik1911@gmail.com',
        label: 'Email',
    },
];

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer
            className="relative overflow-hidden border-t"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}
            role="contentinfo"
        >
            {/* Top gradient line */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.45), transparent)' }}
            />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                                <Zap size={17} className="text-gray-900" strokeWidth={2.5} />
                            </div>
                            <span
                                className="font-bold text-gray-900 tracking-tight"
                                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem' }}
                            >
                                Kartik<span className="gradient-text">Modi</span>
                            </span>
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Flutter App Developer crafting scalable, pixel-perfect mobile experiences.
                            Available for freelance & long-term contracts.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-2 mt-5">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={label === 'Call' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-500 hover:text-black transition-all duration-250 hover:-translate-y-0.5"
                                    style={{ transition: 'all 0.25s ease' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                                        e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.background = '';
                                    }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav aria-label="Footer navigation">
                        <div className="text-neutral-600 text-xs font-semibold tracking-widest uppercase mb-4">Navigation</div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2.5 list-none">
                            {footerLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-gray-500 hover:text-black text-sm transition-colors duration-200"
                                        onClick={(e) => handleNavClick(e, href)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA card */}
                    <div className="text-center md:text-right">
                        <div className="text-neutral-600 text-xs font-semibold tracking-widest uppercase mb-4">Ready to start?</div>
                        <a
                            href="mailto:modikartik1911@gmail.com"
                            className="btn-primary inline-flex mb-4"
                        >
                            <Mail size={15} />
                            Hire Me Now
                        </a>
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-emerald-400 text-xs font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Open to work
                            </span>
                        </div>
                        {/* Real contact info */}
                        <div className="mt-4 space-y-1">
                            <p className="text-neutral-600 text-xs">modikartik1911@gmail.com</p>
                            <p className="text-neutral-600 text-xs">+91 79748 51086</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="my-8 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)' }}
                />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-neutral-700 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Kartik Modi. Crafted with{' '}
                        <Heart size={12} className="inline text-pink-500 fill-pink-500" />{' '}
                        using Flutter-grade precision.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-gray-500 hover:text-black transition-all duration-250 hover:-translate-y-1 shrink-0"
                        aria-label="Back to top"
                        style={{ transition: 'all 0.25s ease' }}
                    >
                        <ArrowUp size={15} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
