import { useEffect, useRef } from 'react';
import { Smartphone, Globe, Zap, Shield, Palette, BarChart3 } from 'lucide-react';

const services = [
    {
        icon: Smartphone,
        title: 'Flutter App Development',
        description:
            'Cross-platform apps for iOS and Android from a single codebase. Pixel-perfect UI, native performance, smooth 60fps experience.',
        accent: '#6366f1',
        tags: ['iOS', 'Android', 'Web'],
    },
    {
        icon: Globe,
        title: 'API Integration & Backend',
        description:
            'REST, GraphQL, Firebase, Supabase — seamless integration with any backend. Real-time data, auth flows, and offline support.',
        accent: '#8b5cf6',
        tags: ['REST API', 'Firebase', 'Supabase'],
    },
    {
        icon: Zap,
        title: 'Performance Optimization',
        description:
            'App profiling, render optimization, memory management. I turn sluggish apps into blazing-fast experiences users love.',
        accent: '#f59e0b',
        tags: ['Profiling', '60fps', 'Lazy Load'],
    },
    {
        icon: Shield,
        title: 'App Architecture & Consulting',
        description:
            'Clean Architecture, SOLID principles, scalable folder structure. Setup your project right from day one — avoid tech debt.',
        accent: '#10b981',
        tags: ['BLoC', 'Clean Arch', 'GetX'],
    },
    {
        icon: Palette,
        title: 'UI/UX Implementation',
        description:
            'Figma to Flutter with 100% fidelity. Custom animations, micro-interactions, and responsive layouts that wow users.',
        accent: '#ec4899',
        tags: ['Figma', 'Custom UI', 'Animations'],
    },
    {
        icon: BarChart3,
        title: 'App Maintenance & Support',
        description:
            'Post-launch monitoring, bug fixes, feature upgrades, and OS compatibility. I keep your app healthy and growing.',
        accent: '#22d3ee',
        tags: ['Monitoring', 'Bug Fixes', 'Upgrades'],
    },
];

export default function Services() {
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

    return (
        <section id="services" aria-label="Services" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <div className="hero-glow w-96 h-96 bg-indigo-600/8 top-0 right-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">What I Offer</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        My <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto leading-relaxed">
                        End-to-end Flutter development — from concept to App Store launch and beyond.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map(({ icon: Icon, title, description, accent, tags }) => (
                        <article
                            key={title}
                            className="glass-card rounded-2xl p-6 group cursor-default reveal"
                            style={{ transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${accent}35`;
                                e.currentTarget.style.background = `${accent}06`;
                                e.currentTarget.style.transform = 'translateY(-6px)';
                                e.currentTarget.style.boxShadow = `0 24px 60px ${accent}18`;
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
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    background: `${accent}15`,
                                    border: `1px solid ${accent}25`,
                                }}
                            >
                                <Icon size={22} style={{ color: accent }} />
                            </div>

                            {/* Content */}
                            <h3
                                className="text-gray-900 font-bold text-lg mb-3 break-words"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-5 break-words">{description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                                        style={{
                                            background: `${accent}10`,
                                            color: accent,
                                            border: `1px solid ${accent}20`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
