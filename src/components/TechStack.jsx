import { useEffect, useRef } from 'react';

const techCategories = [
    {
        label: 'Mobile & Core',
        items: [
            { name: 'Flutter', color: '#54C5F8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'Dart', color: '#00B4AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { name: 'Android', color: '#3DDC84', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'iOS', color: '#555555', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        ],
    },
    {
        label: 'State Management',
        items: [
            { name: 'BLoC', color: '#6366f1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'Riverpod', color: '#8b5cf6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            { name: 'GetX', color: '#f59e0b', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg' },
            { name: 'Provider', color: '#10b981', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg' },
        ],
    },
    {
        label: 'Backend & Database',
        items: [
            { name: 'Firebase', color: '#FFCA28', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            { name: 'Supabase', color: '#3ECF8E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
            { name: 'Node.js', color: '#68A063', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'GraphQL', color: '#E10098', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        ],
    },
    {
        label: 'Tools & DevOps',
        items: [
            { name: 'Git', color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Figma', color: '#A259FF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'VS Code', color: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'GitHub', color: '#333333', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        ],
    },
    {
        label: 'Web',
        items: [
            { name: 'React JS', color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Tailwind', color: '#38BDF8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Vite', color: '#646CFF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
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
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-gray-500 text-base mt-4 max-w-lg mx-auto">
                        A carefully curated toolkit built for building production-grade Flutter applications.
                    </p>
                </div>

                <div className="space-y-10">
                    {techCategories.map(({ label, items }) => (
                        <div key={label} className="reveal">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-black/10" />
                                <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase px-2">
                                    {label}
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-black/10" />
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
                                        {/* Icon */}
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center p-2"
                                            style={{
                                                background: `${color}12`,
                                                border: `1px solid ${color}20`,
                                            }}
                                        >
                                            <img
                                                src={icon}
                                                alt={`${name} logo`}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Fallback: show first 2 letters of name
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.innerHTML = `<span style="font-size:1rem;font-weight:700;color:${color}">${name.slice(0, 2)}</span>`;
                                                }}
                                            />
                                        </div>
                                        <span className="text-gray-700 text-xs font-medium text-center leading-tight break-words max-w-[80px] text-wrap">
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
