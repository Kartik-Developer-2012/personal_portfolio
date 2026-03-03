import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'James Whitfield',
        role: 'CEO, FinPay Inc.',
        country: '🇺🇸 USA',
        rating: 5,
        text: "Kartik delivered a world-class fintech app that exceeded every expectation. The architecture is clean, the UI is flawless, and it's performing incredibly well in production. He communicated proactively and never missed a deadline. Absolutely hire him.",
        avatar: 'JW',
        accentColor: '#6366f1',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        role: 'Product Manager, HealthTrack',
        country: '🇮🇳 India',
        rating: 5,
        text: "Working with Kartik was a pleasure from start to finish. He took our complex healthcare requirements and turned them into a beautiful, HIPAA-compliant app in just 3 months. His Flutter expertise is genuinely top-tier.",
        avatar: 'PS',
        accentColor: '#10b981',
    },
    {
        id: 3,
        name: 'Lucas Bauer',
        role: 'Founder, ShopWave GmbH',
        country: '🇩🇪 Germany',
        rating: 5,
        text: "Our e-commerce app conversion rate tripled after Kartik redesigned it. He didn't just write code — he genuinely cared about the product. The animations, performance, and overall quality are exactly what we needed.",
        avatar: 'LB',
        accentColor: '#f59e0b',
    },
    {
        id: 4,
        name: 'Aisha Al-Rashid',
        role: 'CTO, SociaLink',
        country: '🇦🇪 UAE',
        rating: 5,
        text: "Kartik built our entire social networking app with real-time messaging, feeds, and stories — within budget and ahead of schedule. Code quality is exceptional. We'll definitely work with him on our next projects.",
        avatar: 'AA',
        accentColor: '#ec4899',
    },
    {
        id: 5,
        name: 'Ryuichi Tanaka',
        role: 'Director, EduFlow Japan',
        country: '🇯🇵 Japan',
        rating: 5,
        text: "Our LMS needed complex offline video, live interactions, and gamification. Kartik handled all of it elegantly. Over 200 institutions now use the platform daily. Exceptional developer, exceptional human.",
        avatar: 'RT',
        accentColor: '#22d3ee',
    },
];

function StarRating({ count }) {
    return (
        <div className="flex items-center gap-0.5" aria-label={`Rating: ${count} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={i < count ? 'text-amber-400 fill-amber-400' : 'text-neutral-700'}
                />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sectionRef = useRef(null);

    const goTo = (idx) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((idx + testimonials.length) % testimonials.length);
            setIsTransitioning(false);
        }, 200);
    };

    useEffect(() => {
        const interval = setInterval(() => goTo(current + 1), 5000);
        return () => clearInterval(interval);
    }, [current]);

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

    const active = testimonials[current];

    return (
        <section id="testimonials" aria-label="Testimonials" ref={sectionRef} className="section-wrapper relative overflow-hidden">
            <div className="hero-glow w-96 h-96 bg-violet-600/6 top-0 right-0" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8">
                {/* Header */}
                <div className="text-center mb-14 reveal">
                    <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">Social Proof</span>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-gray-500 text-base mt-4 max-w-lg mx-auto">
                        Don't take my word for it — here's what clients across 10+ countries have to say.
                    </p>
                </div>

                {/* Main testimonial card */}
                <div className="max-w-3xl mx-auto mb-6 reveal">
                    <div
                        className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden"
                        style={{
                            borderColor: `${active.accentColor}30`,
                            transition: 'opacity 0.2s ease, border-color 0.3s ease',
                            opacity: isTransitioning ? 0 : 1,
                        }}
                    >
                        {/* Quote icon */}
                        <div
                            className="absolute top-6 right-6 opacity-15"
                            style={{ color: active.accentColor }}
                        >
                            <Quote size={60} />
                        </div>

                        {/* Rating */}
                        <div className="mb-5">
                            <StarRating count={active.rating} />
                        </div>

                        {/* Quote text */}
                        <blockquote
                            className="text-black/80 text-lg sm:text-xl leading-relaxed mb-8 relative z-10 break-words"
                            style={{ fontStyle: 'italic' }}
                        >
                            "{active.text}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-gray-900 font-bold text-sm shrink-0"
                                style={{
                                    background: `linear-gradient(135deg, ${active.accentColor}60, ${active.accentColor}30)`,
                                    border: `1px solid ${active.accentColor}40`,
                                }}
                                aria-hidden="true"
                            >
                                {active.avatar}
                            </div>
                            <div>
                                <div className="text-gray-900 font-bold text-base">{active.name}</div>
                                <div className="text-gray-500 text-sm">{active.role}</div>
                            </div>
                            <div className="ml-auto text-xl" aria-label={`Client from ${active.country}`}>
                                {active.country}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 mb-8 reveal">
                    <button
                        className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-black/60 hover:text-black transition-colors"
                        onClick={() => goTo(current - 1)}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: i === current ? 24 : 8,
                                    height: 8,
                                    background: i === current ? active.accentColor : 'rgba(0,0,0,0.15)',
                                }}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-black/60 hover:text-black transition-colors"
                        onClick={() => goTo(current + 1)}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 reveal">
                    {[
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '4.9 ★', label: 'Avg. Rating' },
                        { value: '100%', label: 'Job Success' },
                        { value: '10+', label: 'Countries Served' },
                    ].map(({ value, label }) => (
                        <div key={label} className="glass-card rounded-2xl p-4 text-center">
                            <div
                                className="text-2xl font-extrabold text-gray-900 mb-1"
                                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                                {value}
                            </div>
                            <div className="text-gray-500 text-xs">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
