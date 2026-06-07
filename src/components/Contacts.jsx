export default function Contacts() {
    const links = [
        {
            icon: "📩",
            label: "Email",
            value: "chinshawork@gmail.com",
            href: "mailto:chinshawork@gmail.com",
        },
        {
            icon: "📸",
            label: "Instagram",
            value: "@ci.trus__",
            href: "https://instagram.com/ci.trus__",
        },
        {
            icon: "💬",
            label: "WhatsApp",
            value: "+91 78780 09104, +91 8306528356",
            href: "https://wa.me/917878009104",
        },
    ];
    return(
        <section className="contact">
            <h2 className="contact-title">LET'S WORK TOGETHER!</h2>
            <p className= "contact-sub">open for freelance, collabs, creative projects and building something together.</p>
            <div className="contact-cards">
                {links.map((l) => (
                    <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-card"
                    >
                        <span className="contact-icon">{l.icon}</span>
                        <span className="contact-value">{l.label}</span>
                        <span className="contact-label">{l.value}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}