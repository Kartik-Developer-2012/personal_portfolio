import { useState, useEffect } from 'react';
import { ArrowRight, Briefcase, Star } from 'lucide-react';

const roles = ['Flutter Developer', 'React Native Developer', 'UI/UX Designer', 'Mobile App Expert'];

// Typewriter hook — cycles through `words` indefinitely
function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
    const [display, setDisplay] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIdx % words.length];
        const delay = isDeleting ? deletingSpeed : typingSpeed;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplay(current.slice(0, display.length + 1));
                if (display.length + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pauseMs);
                }
            } else {
                setDisplay(current.slice(0, display.length - 1));
                if (display.length - 1 === 0) {
                    setIsDeleting(false);
                    setWordIdx((i) => i + 1);
                }
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [display, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

    return display;
}

const stats = [
    { value: '3+', label: 'Industry Projects' },
    { value: '4.9★', label: 'Client Satisfaction' },
    { value: '1+ Yr', label: 'Experience' },
];


export default function Hero() {
    const typedRole = useTypewriter(roles);

    const scrollToProjects = (e) => {
        e.preventDefault();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = (e) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            aria-label="Hero section"
            className="relative min-h-screen flex items-center overflow-hidden bg-grid"
        >
            {/* Background glows */}
            <div className="hero-glow w-[600px] h-[600px] bg-indigo-600/10 -top-32 -left-32" />
            <div className="hero-glow w-[400px] h-[400px] bg-violet-600/10 top-1/2 right-0 -translate-y-1/2" />
            <div className="hero-glow w-[300px] h-[300px] bg-indigo-600/8 bottom-0 left-1/3" />

            {/* Abstract SVG circle outlines */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                aria-hidden="true"
            >
                <circle cx="15%" cy="80%" r="200" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
                <circle cx="85%" cy="20%" r="150" fill="none" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
                <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="0.5" />
            </svg>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* ── Left: Text ── */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for New Projects
                        </div>

                        {/* ── Headline: 3-line staggered layout ── */}
                        <div className="mb-6">

                            {/* Line 1 — Hello, */}
                            <div
                                className="animate-fade-in-up"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    animationDelay: '0.05s',
                                }}
                            >
                                <span
                                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
                                    style={{
                                        background: 'linear-gradient(90deg, rgba(17,24,39,0.7), rgba(55,65,81,0.45))',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    Hello,
                                </span>
                            </div>

                            {/* Line 2 — I am Kartik Modi */}
                            <div
                                className="animate-fade-in-up mt-1"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    animationDelay: '0.18s',
                                }}
                            >
                                <h1
                                    className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
                                >
                                    <span className="text-gray-900">I am </span>
                                    <span className="gradient-text">Kartik Modi</span>
                                </h1>
                            </div>

                            {/* Line 3 — Typewriter role */}
                            <div
                                className="animate-fade-in-up mt-3"
                                style={{
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    animationDelay: '0.35s',
                                }}
                            >
                                <span
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #38bdf8 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {typedRole}
                                    <span
                                        className="inline-block w-[3px] h-[0.8em] ml-1 rounded-sm align-middle"
                                        style={{
                                            background: 'linear-gradient(180deg, #6366f1, #a78bfa)',
                                            animation: 'blink 1s step-start infinite',
                                            WebkitTextFillColor: 'initial',
                                        }}
                                    />
                                </span>
                            </div>

                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up delay-200">
                            I craft <span className="text-black/80">pixel-perfect</span>, high-performance Flutter and React Native apps
                            that scale. Focused on clean UI, smooth user experience, and delivering reliable
                            solutions for business growth.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 animate-fade-in-up delay-300">
                            <a href="#projects" className="btn-primary w-full sm:w-auto justify-center" onClick={scrollToProjects}>
                                <span>View Projects</span>
                                <ArrowRight size={17} />
                            </a>
                            <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center" onClick={scrollToContact}>
                                <Briefcase size={17} />
                                <span>Hire Me</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-center lg:justify-start gap-8 sm:gap-10 animate-fade-in-up delay-400">
                            {stats.map(({ value, label }) => (
                                <div key={label} className="text-center lg:text-left">
                                    <div
                                        className="text-2xl sm:text-3xl font-extrabold text-gray-900"
                                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                    >
                                        {value}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Device Mockups ── */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center relative animate-fade-in delay-400">
                        {/* Main glow behind devices */}
                        <div
                            className="absolute w-80 h-80 rounded-full opacity-20 animate-pulse-glow"
                            style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }}
                        />

                        {/* Laptop Mockup */}
                        <div className="relative z-10 animate-float">
                            <div
                                className="w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl"
                                style={{
                                    background: 'linear-gradient(145deg, #f8fafc 0%, #e8edf5 100%)',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    boxShadow: '0 40px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(99,102,241,0.12)',
                                }}
                            >
                                {/* Browser bar */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-black/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    </div>
                                    <div className="flex-1 h-5 ml-2 rounded-full bg-black/5 border border-black/5 flex items-center px-3">
                                        <span className="text-black/20 text-[9px] font-mono">flutter.dev/app</span>
                                    </div>
                                </div>

                                {/* Fake app UI */}
                                <div className="p-4 space-y-3">
                                    {/* Header bar */}
                                    <div className="flex items-center justify-between">
                                        <div className="h-4 w-24 rounded-full bg-indigo-500/30" />
                                        <div className="h-6 w-6 rounded-full bg-black/10" />
                                    </div>

                                    {/* Hero card */}
                                    <div className="rounded-xl p-3 border border-black/5" style={{ background: 'rgba(99,102,241,0.1)' }}>
                                        <div className="h-3 w-16 rounded-full bg-indigo-400/50 mb-2" />
                                        <div className="h-2 w-full rounded-full bg-black/10 mb-1.5" />
                                        <div className="h-2 w-4/5 rounded-full bg-black/8" />
                                        <div className="mt-3 flex gap-2">
                                            <div className="h-7 w-20 rounded-lg bg-indigo-500/60" />
                                            <div className="h-7 w-16 rounded-lg bg-black/8" />
                                        </div>
                                    </div>

                                    {/* Row of cards */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="h-12 rounded-lg bg-black/5 border border-black/5 p-2">
                                                <div className="w-5 h-5 rounded-md mb-1" style={{ background: ['rgba(99,102,241,0.4)', 'rgba(139,92,246,0.4)', 'rgba(236,72,153,0.4)', 'rgba(34,211,238,0.4)'][i] }} />
                                                <div className="h-1.5 w-3/4 rounded-full bg-black/10" />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom bar */}
                                    <div className="flex justify-around pt-1">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className={`w-6 h-6 rounded-md ${i === 0 ? 'bg-indigo-500/40' : 'bg-black/5'}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Mockup */}
                        <div
                            className="absolute z-20 -bottom-4 sm:bottom-4 -right-2 sm:right-4 animate-float-reverse"
                            style={{ animationDelay: '1s' }}
                        >
                            <div
                                className="w-28 sm:w-36 rounded-[20px] overflow-hidden shadow-2xl"
                                style={{
                                    background: 'linear-gradient(145deg, #f8fafc 0%, #e8edf5 100%)',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(139,92,246,0.12)',
                                    padding: '3px',
                                }}
                            >
                                {/* Notch */}
                                <div className="flex justify-center pt-2 pb-1">
                                    <div className="w-16 h-4 rounded-full bg-white" />
                                </div>
                                {/* Phone screen content */}
                                <div className="px-2 pb-3 space-y-2">
                                    <div className="h-20 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.3))' }}>
                                        <div className="p-2">
                                            <div className="h-2 w-10 rounded-full bg-black/50 mb-1" />
                                            <div className="h-1.5 w-14 rounded-full bg-black/20 mb-3" />
                                            <div className="h-5 w-12 rounded-lg bg-black/20" />
                                        </div>
                                    </div>
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-8 rounded-lg bg-black/5 flex items-center px-2 gap-2">
                                            <div className="w-4 h-4 rounded-md bg-indigo-500/40 shrink-0" />
                                            <div className="flex-1 space-y-1">
                                                <div className="h-1.5 rounded-full bg-black/20 w-full" />
                                                <div className="h-1 rounded-full bg-black/10 w-3/4" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Home bar */}
                                <div className="flex justify-center pb-2">
                                    <div className="w-12 h-1 rounded-full bg-black/20" />
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div
                            className="absolute top-0 -left-4 sm:left-4 z-30 glass-card rounded-xl px-3 py-2 flex items-center gap-2 animate-float"
                            style={{ animationDelay: '0.5s' }}
                        >
                            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                <Star size={12} className="text-emerald-400" />
                            </div>
                            <div>
                                <div className="text-gray-900 text-[10px] font-bold">Top Rated</div>
                                <div className="text-black/40 text-[8px]">Upwork</div>
                            </div>
                        </div>

                        <div
                            className="absolute bottom-12 sm:bottom-20 -right-2 sm:-right-6 z-30 glass-card rounded-xl px-3 py-2 animate-float"
                            style={{ animationDelay: '1.5s' }}
                        >
                            <div className="text-gray-900 text-[10px] font-bold">Clean Architecture</div>
                            <div className="flex items-center gap-1 mt-1">
                                {['F', 'R', 'D'].map((l, i) => (
                                    <div key={i} className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-gray-900"
                                        style={{ background: ['#6366f1', '#8b5cf6', '#a78bfa'][i] }}>
                                        {l}
                                    </div>
                                ))}
                                <span className="text-black/40 text-[8px] ml-1">+more</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-indigo-400 to-transparent" />
                <span className="text-[10px] text-black/40 tracking-widest uppercase">Scroll</span>
            </div>
        </section>
    );
}
