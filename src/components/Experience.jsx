import { useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
    {
        period: '2023 – Present',
        role: 'Senior Flutter Developer',
        company: 'TechScale Solutions',
        location: 'Remote (US Client)',
        type: 'Full-Time',
        description:
            'Led development of 3 fintech apps with 100K+ active users. Architected BLoC-based clean architecture reducing crash rate by 60%. Mentored a team of 4 junior developers.',
        tech: ['Flutter', 'BLoC', 'Firebase', 'Stripe', 'REST API'],
        color: '#6366f1',
    },
    {
        period: '2021 – 2023',
        role: 'Flutter Developer',
        company: 'AppCraft Studio',
        location: 'Hybrid — Mumbai',
        type: 'Full-Time',
        description:
            'Delivered 20+ cross-platform apps from design to deployment. Implemented CI/CD with Fastlane, reduced build time by 40%. Managed direct client communications and sprint planning.',
        tech: ['Flutter', 'GetX', 'Node.js', 'Supabase', 'Jira'],
        color: '#8b5cf6',
    },
    {
        period: '2020 – 2021',
        role: 'Junior Flutter Developer',
        company: 'StartUp Hub',
        location: 'Ahmedabad, India',
        type: 'Full-Time',
        description:
            'Built e-commerce and social apps from scratch. Integrated complex payment gateways (Razorpay, PayU). Created reusable widget libraries used across 5 products.',
        tech: ['Flutter', 'Firebase', 'Dart', 'REST APIs'],
        color: '#a78bfa',
    },
    {
        period: '2019 – 2020',
        role: 'Freelance Mobile Developer',
        company: 'Self-Employed',
        location: 'Remote',
        type: 'Freelance',
        description:
            'Completed 15+ freelance projects on Upwork (Top Rated Plus). Built apps for clients across India, UAE, and the USA in healthcare and retail verticals.',
        tech: ['Flutter', 'Firebase', 'Android', 'iOS'],
        color: '#c4b5fd',
    },
];

export default function Experience() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.querySelectorAll('.reveal').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 120);
                    });
                }
            }),
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" aria-label="Experience" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <div className="hero-glow w-72 h-72 bg-violet-600/8 bottom-16 left-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Career Journey</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line (desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/20 to-transparent -translate-x-1/2" />

                    <div className="space-y-8 md:space-y-0">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={exp.company}
                                    className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 pb-8 md:pb-16 reveal`}
                                >
                                    {/* Left card (even) */}
                                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-10 md:text-right' : 'md:ml-auto md:pl-10'} order-2 md:order-none`}>
                                        {isLeft ? (
                                            <ExperienceCard exp={exp} align="right" />
                                        ) : (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>

                                    {/* Center dot */}
                                    <div
                                        className="hidden md:flex relative z-10 w-10 h-10 shrink-0 rounded-full items-center justify-center border-2 order-1 md:order-none"
                                        style={{
                                            background: `radial-gradient(circle, ${exp.color}30, #ffffff)`,
                                            borderColor: exp.color,
                                            boxShadow: `0 0 16px ${exp.color}40`,
                                        }}
                                    >
                                        <div className="w-3 h-3 rounded-full" style={{ background: exp.color }} />
                                    </div>

                                    {/* Right card (odd) */}
                                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:ml-auto md:pl-10' : 'md:pr-10'} order-2 md:order-none`}>
                                        {!isLeft ? (
                                            <ExperienceCard exp={exp} align="left" />
                                        ) : (
                                            <div className="hidden md:block" />
                                        )}
                                    </div>

                                    {/* Mobile: always full width */}
                                    <div className="w-full md:hidden order-2">
                                        {isLeft ? null : <ExperienceCard exp={exp} align="left" />}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ exp, align }) {
    return (
        <div
            className="glass-card glass-card-hover rounded-2xl p-6 cursor-default"
            style={{ textAlign: align === 'right' ? 'right' : 'left' }}
        >
            {/* Period badge */}
            <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4`}
                style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}
            >
                <Calendar size={11} />
                {exp.period}
            </div>

            <h3
                className="text-gray-900 font-bold text-lg mb-1 break-words"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
                {exp.role}
            </h3>
            <div className="text-gray-600 font-medium text-sm mb-1">{exp.company}</div>

            <div className={`flex items-center gap-1.5 text-gray-500 text-xs mb-4 ${align === 'right' ? 'justify-end' : ''}`}>
                <MapPin size={11} />
                <span className="break-words">{exp.location}</span>
                <span className="text-neutral-700">•</span>
                <span
                    className="font-medium"
                    style={{ color: exp.color }}
                >
                    {exp.type}
                </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 break-words">{exp.description}</p>

            {/* Tech tags */}
            <div className={`flex flex-wrap gap-1.5 ${align === 'right' ? 'justify-end' : ''}`}>
                {exp.tech.map((t) => (
                    <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-full font-medium"
                        style={{
                            background: `${exp.color}12`,
                            color: exp.color,
                            border: `1px solid ${exp.color}25`,
                        }}
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}
