import { useEffect, useRef } from 'react';

const techCategories = [
    {
        label: 'Mobile & Core',
        items: [
            { name: 'Flutter', icon: '🐦', color: '#54C5F8' },
            { name: 'Dart', icon: '🎯', color: '#00B4AB' },
            { name: 'Android', icon: '🤖', color: '#3DDC84' },
            { name: 'iOS', icon: '🍎', color: '#999999' },
        ],
    },
    {
        label: 'State Management',
        items: [
            { name: 'BLoC', icon: '🧩', color: '#6366f1' },
            { name: 'Riverpod', icon: '⚡', color: '#8b5cf6' },
            { name: 'GetX', icon: '🔥', color: '#f59e0b' },
            { name: 'Provider', icon: '📦', color: '#10b981' },
        ],
    },
    {
        label: 'Backend & Database',
        items: [
            { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
            { name: 'Supabase', icon: '🌿', color: '#3ECF8E' },
            { name: 'Node.js', icon: '🟢', color: '#68A063' },
            { name: 'GraphQL', icon: '🔗', color: '#E10098' },
        ],
    },
    {
        label: 'Tools & DevOps',
        items: [
            { name: 'Git', icon: '🌿', color: '#F05032' },
            { name: 'Fastlane', icon: '🚀', color: '#00B0D8' },
            { name: 'Figma', icon: '🎨', color: '#A259FF' },
            { name: 'VS Code', icon: '💙', color: '#007ACC' },
        ],
    },
    {
        label: 'Web',
        items: [
            { name: 'React JS', icon: '⚛️', color: '#61DAFB' },
            { name: 'TypeScript', icon: '🔷', color: '#3178C6' },
            { name: 'Tailwind', icon: '💨', color: '#38BDF8' },
            { name: 'Vite', icon: '⚡', color: '#646CFF' },
        ],
    },
];

export default function TechStack() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 60);
                    });
                }
            }),
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="tech" aria-label="Tech Stack" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <div className="hero-glow w-80 h-80 bg-violet-600/8 bottom-0 right-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">My Arsenal</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-neutral-500 text-base mt-4 max-w-lg mx-auto">
                        A carefully curated toolkit built for building production-grade Flutter applications.
                    </p>
                </div>

                <div className="space-y-10">
                    {techCategories.map(({ label, items }) => (
                        <div key={label} className="reveal">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/5" />
                                <span className="text-neutral-500 text-xs font-semibold tracking-widest uppercase px-2">
                                    {label}
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/5" />
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {items.map(({ name, icon, color }) => (
                                    <div
                                        key={name}
                                        className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2.5 cursor-default min-w-[90px]"
                                        style={{ transition: 'all 0.3s ease' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = `${color}40`;
                                            e.currentTarget.style.background = `${color}08`;
                                            e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)';
                                            e.currentTarget.style.boxShadow = `0 16px 40px ${color}20`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '';
                                            e.currentTarget.style.background = '';
                                            e.currentTarget.style.transform = '';
                                            e.currentTarget.style.boxShadow = '';
                                        }}
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                                            style={{
                                                background: `${color}12`,
                                                border: `1px solid ${color}20`,
                                            }}
                                        >
                                            {icon}
                                        </div>
                                        <span className="text-white/70 text-xs font-medium text-center leading-tight break-words max-w-[80px] text-wrap">
                                            {name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
