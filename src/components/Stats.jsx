import { useEffect, useRef } from "react";
export default function Stats() {
    const stats = [
    { number: "250+", label: "Reels Edited" },
    { number: "3+", label: "Internships" },
    { number: "∞", label: "Creative Energy" },
    ];

    const experience = [
    { icon: "🚀", text: "Promoted within 2 months at internship — based purely on work" },
    { icon: "🎬", text: "Freelanced for multiple influencers" },
    { icon: "👗", text: "Creative Director @ clothing brand — logo, social media, graphic design + 3D shirt print models (all solo)" },
    { icon: "📱", text: "Worked under multiple social media managers" },
    ];
    const sectionRef=useRef(null);
    


    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        }
    });
    }, { threshold: 0.15 });

    const targets = sectionRef.current.querySelectorAll(".stat-card, .exp-list li");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
}, []);
    return (
    <section className="stats" ref={sectionRef}>

    <div className="stats-numbers">
        {stats.map((s) => (
        <div className="stat-card" key={s.label}>
            <span className="stat-number">{s.number}</span>
            <span className="stat-label">{s.label}</span>
            </div>
        ))}
        </div>

        <div className="stats-exp">
        <h2 className="stats-title">THE JOURNEY</h2>
        <ul className="exp-list">
            {experience.map((e) => (
            <li key={e.text}>
            <span>{e.icon}</span>
            <p>{e.text}</p>
            </li>
            ))}
        </ul>
        </div>

    </section>
    
    );
}