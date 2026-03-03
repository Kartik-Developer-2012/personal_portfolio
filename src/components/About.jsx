import { useEffect, useRef } from 'react';
import { Code2, Rocket, Shield, Zap, Coffee, Target } from 'lucide-react';

const skills = [
    'Flutter', 'Dart', 'Firebase', 'REST APIs', 'GraphQL',
    'GetX', 'Riverpod', 'BLoC', 'Clean Architecture', 'Hive',
    'SQLite', 'Supabase', 'OAuth 2.0', 'Push Notifications',
    'CI/CD', 'Fastlane', 'Git', 'Figma', 'React JS', 'Node.js',
];

const highlights = [
    { icon: Code2, label: 'Clean Code', desc: 'SOLID principles & scalable architecture' },
    { icon: Rocket, label: 'Fast Delivery', desc: 'Agile workflow with weekly milestones' },
    { icon: Shield, label: 'Secure Apps', desc: 'Best-in-class security practices' },
    { icon: Target, label: 'Goal-Oriented', desc: 'Results that matter to your business' },
];

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 100);
                    });
                }
            }),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" aria-label="About" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            {/* Background glow */}
            <div className="hero-glow w-80 h-80 bg-indigo-600/8 top-0 right-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Section label */}
                <div className="text-center mb-16 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Who I Am</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        About <span className="gradient-text">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left — Avatar + Highlights */}
                    <div className="space-y-6">
                        {/* Avatar card */}
                        <div className="glass-card rounded-2xl p-6 flex items-center gap-5 reveal">
                            {/* Avatar SVG placeholder */}
                            <div
                                className="relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #1e1b4b, #312e81)',
                                    border: '1px solid rgba(99,102,241,0.3)',
                                    boxShadow: '0 8px 32px rgba(99,102,241,0.2)',
                                }}
                            >
                                <svg viewBox="0 0 80 80" className="w-full h-full" aria-label="Kartik Modi avatar">
                                    <circle cx="40" cy="30" r="14" fill="rgba(99,102,241,0.6)" />
                                    <ellipse cx="40" cy="72" rx="24" ry="20" fill="rgba(99,102,241,0.4)" />
                                </svg>
                            </div>

                            <div>
                                <h3
                                    className="text-xl font-bold text-white"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    Kartik Modi
                                </h3>
                                <p className="text-indigo-400 text-sm font-medium">Flutter App Developer</p>
                                <div className="flex items-center gap-1.5 mt-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span className="text-emerald-400 text-xs font-medium">Available to work</span>
                                </div>
                            </div>
                        </div>

                        {/* Highlights grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map(({ icon: Icon, label, desc }) => (
                                <div key={label} className="glass-card glass-card-hover rounded-xl p-4 reveal">
                                    <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center mb-3">
                                        <Icon size={17} className="text-indigo-400" />
                                    </div>
                                    <div className="text-white text-sm font-semibold mb-1">{label}</div>
                                    <div className="text-neutral-500 text-xs leading-relaxed">{desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Coffee badge */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card reveal">
                            <Coffee size={16} className="text-amber-400 shrink-0" />
                            <span className="text-neutral-400 text-sm">
                                Powered by <span className="text-white font-medium">strong coffee</span> &
                                {' '}<span className="text-white font-medium">clean architecture</span>
                            </span>
                        </div>
                    </div>

                    {/* Right — Intro text + skills */}
                    <div className="space-y-6 reveal">
                        <div className="glass-card rounded-2xl p-6 sm:p-8">
                            <h3
                                className="text-2xl sm:text-3xl font-bold text-white mb-5"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                Turning Ideas Into{' '}
                                <span className="gradient-text">Scalable Apps</span>
                            </h3>

                            <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
                                <p>
                                    With <span className="text-white font-medium">5+ years</span> of hands-on Flutter
                                    development, I specialize in building cross-platform mobile applications that don't
                                    just work — they <span className="text-indigo-400 font-medium">delight users</span>.
                                </p>
                                <p>
                                    From zero to production, I handle architecture decisions, UI/UX implementation, API
                                    integration, state management, and deployment — giving you a complete, polished product
                                    without the overhead of a large team.
                                </p>
                                <p>
                                    I've delivered <span className="text-white font-medium">50+ apps</span> across fintech,
                                    healthcare, e-commerce, and social sectors — always on-budget, always on-time.
                                </p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="reveal">
                            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
                                Tech I Work With
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
