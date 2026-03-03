import { useState, useEffect } from 'react';
import { Menu, X, Code2, Zap } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#0B0B0F]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/30'
                    : 'bg-transparent'
                    }`}
                role="banner"
            >
                <nav
                    className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
                    aria-label="Main navigation"
                >
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-2.5 group"
                        aria-label="Kartik Modi - Flutter Developer"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300">
                            <Zap size={17} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span
                            className="font-bold text-white tracking-tight leading-none"
                            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem' }}
                        >
                            Kartik<span className="gradient-text">Modi</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-8 list-none" role="list">
                        {navLinks.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="nav-link"
                                    onClick={(e) => handleNavClick(e, href)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="mailto:modikartik1911@gmail.com"
                            className="btn-primary"
                            style={{ padding: '10px 22px', fontSize: '0.85rem', borderRadius: '10px' }}
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/80 hover:text-white transition-colors"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>

                {/* Mobile Dropdown */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-white/5 px-5 pb-6 pt-2">
                        <ul className="flex flex-col gap-1 list-none" role="list">
                            {navLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm"
                                        onClick={(e) => handleNavClick(e, href)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                            <li className="mt-3">
                                <a
                                    href="mailto:modikartik1911@gmail.com"
                                    className="btn-primary w-full justify-center"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Hire Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}
