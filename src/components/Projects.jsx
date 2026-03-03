import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

const projects = [
    {
        id: 'finpay',
        title: 'FinPay — Digital Wallet App',
        description:
            'A full-featured digital wallet with P2P transfers, QR payments, bill splitting, and real-time notifications. Built with BLoC, clean architecture, and 99.9% uptime.',
        tech: ['Flutter', 'Firebase', 'Stripe', 'BLoC', 'Node.js'],
        category: 'Fintech',
        accent: '#6366f1',
        stats: { users: '80K+', rating: '4.9', stores: 'iOS + Android' },
        gradient: 'from-indigo-900/60 to-violet-900/40',
        emoji: '💳',
    },
    {
        id: 'healthtrack',
        title: 'HealthTrack Pro — Wellness App',
        description:
            'Comprehensive health monitoring app with fitness tracking, meal logging, wearable integration, and AI-powered insights. HIPAA-compliant backend with Supabase.',
        tech: ['Flutter', 'Supabase', 'Riverpod', 'Google Fit'],
        category: 'Healthcare',
        accent: '#10b981',
        stats: { users: '30K+', rating: '4.8', stores: 'iOS + Android' },
        gradient: 'from-emerald-900/60 to-teal-900/40',
        emoji: '🏃',
    },
    {
        id: 'shopwave',
        title: 'ShopWave — E-Commerce Platform',
        description:
            'Feature-rich e-commerce app with advanced filtering, AR product preview, multi-vendor support, loyalty rewards, and seamless checkout. 3x conversion uplift.',
        tech: ['Flutter', 'Firebase', 'GetX', 'Razorpay', 'SendGrid'],
        category: 'E-Commerce',
        accent: '#f59e0b',
        stats: { users: '120K+', rating: '4.7', stores: 'iOS + Android' },
        gradient: 'from-amber-900/60 to-orange-900/40',
        emoji: '🛍️',
    },
    {
        id: 'socialink',
        title: 'SociaLink — Social Network',
        description:
            'Professional networking app with real-time chat, smart feed algorithm, stories, and event discovery. WebSocket-powered chat with end-to-end encryption.',
        tech: ['Flutter', 'Socket.io', 'Node.js', 'MongoDB', 'BLoC'],
        category: 'Social',
        accent: '#ec4899',
        stats: { users: '45K+', rating: '4.6', stores: 'iOS + Android' },
        gradient: 'from-pink-900/60 to-rose-900/40',
        emoji: '🌐',
    },
    {
        id: 'eduflow',
        title: 'EduFlow — Learning Management',
        description:
            'LMS app with video courses, live classes, progress tracking, quizzes, and offline video downloads. Used by 200+ educational institutions.',
        tech: ['Flutter', 'Firebase', 'GetStream', 'Riverpod'],
        category: 'EdTech',
        accent: '#22d3ee',
        stats: { users: '60K+', rating: '4.9', stores: 'iOS + Android' },
        gradient: 'from-cyan-900/60 to-blue-900/40',
        emoji: '📚',
    },
    {
        id: 'logipod',
        title: 'LogiPod — Fleet Management',
        description:
            'Real-time fleet tracking, route optimization, driver analytics, and live delivery updates. Reduced delivery costs by 35% for logistics clients.',
        tech: ['Flutter', 'Google Maps API', 'Firebase', 'BLoC'],
        category: 'Logistics',
        accent: '#8b5cf6',
        stats: { users: '10K+', rating: '4.8', stores: 'iOS + Android' },
        gradient: 'from-violet-900/60 to-purple-900/40',
        emoji: '🚛',
    },
];

const filterCategories = ['All', 'Fintech', 'Healthcare', 'E-Commerce', 'Social', 'EdTech', 'Logistics'];

function ProjectCard({ project, index }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Staggered entrance animation on mount
        const timer = setTimeout(() => setVisible(true), index * 90);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <article
            ref={cardRef}
            className="glass-card rounded-2xl overflow-hidden cursor-default group"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)',
                transition: `opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1) ${index * 90}ms,
                     transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) ${index * 90}ms,
                     border-color 0.3s ease, box-shadow 0.3s ease`,
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${project.accent}40`;
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.01)';
                e.currentTarget.style.boxShadow = `0 28px 70px ${project.accent}20`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.transform = visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.97)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            {/* Preview area */}
            <div
                className={`w-full h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
            >
                {/* Shimmer overlay on hover */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${project.accent}08, transparent 60%)` }}
                />

                {/* Abstract phone mockup */}
                <div className="relative w-28 h-48 mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-500">
                    <div
                        className="w-full h-full rounded-2xl flex flex-col overflow-hidden border"
                        style={{
                            background: '#0B0B0F',
                            borderColor: `${project.accent}40`,
                            boxShadow: `0 8px 32px ${project.accent}30`,
                        }}
                    >
                        <div className="h-6 flex items-center justify-center border-b" style={{ borderColor: `${project.accent}20` }}>
                            <div className="text-lg">{project.emoji}</div>
                        </div>
                        <div className="flex-1 p-2 space-y-1.5">
                            <div className="h-2 rounded-full w-full" style={{ background: `${project.accent}30` }} />
                            <div className="h-2 rounded-full w-4/5" style={{ background: `${project.accent}20` }} />
                            <div className="h-8 rounded-xl mt-2" style={{ background: `${project.accent}15` }} />
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-5 rounded-lg flex items-center gap-1 px-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                                    <div className="w-3 h-3 rounded" style={{ background: `${project.accent}40` }} />
                                    <div className="h-1.5 flex-1 rounded-full bg-white/10" />
                                </div>
                            ))}
                        </div>
                        <div className="h-6 flex justify-around items-center border-t" style={{ borderColor: `${project.accent}20` }}>
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-3 h-3 rounded"
                                    style={{ background: i === 0 ? `${project.accent}60` : 'rgba(255,255,255,0.1)' }} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Category badge */}
                <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{
                        background: `${project.accent}20`,
                        color: project.accent,
                        border: `1px solid ${project.accent}30`,
                    }}
                >
                    {project.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3
                    className="text-white font-bold text-base mb-2 break-words"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                    {project.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-4 break-words">{project.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 py-3 border-t border-b border-white/5">
                    {Object.entries(project.stats).map(([k, v]) => (
                        <div key={k} className="text-center flex-1">
                            <div className="text-white text-sm font-bold">{v}</div>
                            <div className="text-neutral-600 text-[10px] capitalize">{k}</div>
                        </div>
                    ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{
                                background: `${project.accent}10`,
                                color: project.accent,
                                border: `1px solid ${project.accent}20`,
                            }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/Kartik-Developer-2012"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-250"
                        style={{
                            background: `${project.accent}20`,
                            border: `1px solid ${project.accent}30`,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${project.accent}35`;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${project.accent}20`;
                        }}
                        aria-label={`View ${project.title}`}
                    >
                        <ExternalLink size={13} />
                        View Project
                    </a>
                    <a
                        href="https://github.com/Kartik-Developer-2012"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl flex items-center justify-center glass-card text-white/50 hover:text-white transition-colors"
                        aria-label="View GitHub"
                    >
                        <Github size={14} />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animKey, setAnimKey] = useState(0);
    const sectionRef = useRef(null);
    const headerRef = useRef(null);

    // Scroll reveal for header
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 100);
                    });
                }
            }),
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // When filter changes, bump the animKey so cards re-animate
    const handleFilterChange = (cat) => {
        setActiveFilter(cat);
        setAnimKey((k) => k + 1);
    };

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" aria-label="Projects" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <div className="hero-glow w-96 h-96 bg-indigo-600/8 top-0 left-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Header */}
                <div className="text-center mb-10 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">My Work</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-neutral-500 text-base mt-4 max-w-lg mx-auto">
                        Production apps trusted by users across the globe, built with performance and scale in mind.
                    </p>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
                    {filterCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleFilterChange(cat)}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                            style={
                                activeFilter === cat
                                    ? {
                                        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                        color: 'white',
                                        boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
                                        border: '1px solid transparent',
                                        transform: 'scale(1.05)',
                                    }
                                    : {
                                        background: 'rgba(255,255,255,0.04)',
                                        color: 'rgba(255,255,255,0.5)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        transform: 'scale(1)',
                                    }
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Project grid — key forces full remount & re-animation on filter change */}
                <div
                    key={animKey}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filtered.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Empty state */}
                {filtered.length === 0 && (
                    <div className="text-center py-20 text-neutral-600">
                        <div className="text-4xl mb-3">📭</div>
                        <div className="text-sm">No projects in this category yet.</div>
                    </div>
                )}
            </div>
        </section>
    );
}
