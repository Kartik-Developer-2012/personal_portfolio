import { useEffect, useRef } from 'react';
import { Code2, Rocket, Shield, Zap, Coffee, Target } from 'lucide-react';

const skills = [
    'Flutter', 'Dart', 'React Native', 'Firebase', 'REST APIs',
    'GetX', 'Riverpod', 'BLoC', 'Clean Architecture', 'Hive',
    'SQLite', 'Android', 'iOS', 'HTML', 'CSS', 'JavaScript',
    'React JS', 'Stitch', 'Figma', 'Canva', 'App Deployment',
];

const highlights = [
    { icon: Code2, label: 'Clean UI', desc: 'Focus on smooth and intuitive user interfaces' },
    { icon: Rocket, label: 'Scalable Apps', desc: 'Building high-performance mobile solutions' },
    { icon: Shield, label: 'Reliable Code', desc: 'Passionate about clean architecture' },
    { icon: Target, label: 'Client Success', desc: 'Driving business growth through technology' },
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
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3"
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
                                    background: 'linear-gradient(135deg, #ede9fe, #c7d2fe)',
                                    border: '1px solid rgba(99,102,241,0.2)',
                                    boxShadow: '0 8px 32px rgba(99,102,241,0.1)',
                                }}
                            >
                                <svg viewBox="0 0 80 80" className="w-full h-full" aria-label="Kartik Modi avatar">
                                    <circle cx="40" cy="30" r="14" fill="rgba(99,102,241,0.6)" />
                                    <ellipse cx="40" cy="72" rx="24" ry="20" fill="rgba(99,102,241,0.4)" />
                                </svg>
                            </div>

                            <div>
                                <h3
                                    className="text-xl font-bold text-gray-900"
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
                                    <div className="text-gray-900 text-sm font-semibold mb-1">{label}</div>
                                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Coffee badge */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card reveal">
                            <Coffee size={16} className="text-amber-400 shrink-0" />
                            <span className="text-gray-600 text-sm">
                                Powered by <span className="text-gray-900 font-medium">strong coffee</span> &
                                {' '}<span className="text-gray-900 font-medium">clean code</span>
                            </span>
                        </div>
                    </div>

                    {/* Right — Intro text + skills */}
                    <div className="space-y-6 reveal">
                        <div className="glass-card rounded-2xl p-6 sm:p-8">
                            <h3
                                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                Building Clean &{' '}
                                <span className="gradient-text">Scalable Solutions</span>
                            </h3>

                            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                                <p>
                                    I am a <span className="text-gray-900 font-medium">Flutter Developer</span> with 1+ year
                                    of hands-on experience building clean, responsive, and user-focused mobile applications.
                                    I specialize in turning UI/UX designs into smooth, high-performance apps.
                                </p>
                                <p>
                                    Collaborating with brands to build scalable apps that enhance their digital presence
                                    is what I do best. I have a strong focus on clean UI and smooth user experience,
                                    ensuring every project delivers business value.
                                </p>
                                <p>
                                    Beyond Flutter, I have hands-on experience with <span className="text-gray-900 font-medium">React Native</span>,
                                    expanding my cross-platform development capabilities to meet diverse client needs.
                                </p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="reveal">
                            <h4 className="text-black/60 text-xs font-semibold tracking-widest uppercase mb-4">
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
