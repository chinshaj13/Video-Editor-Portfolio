import myPhoto from "../assets/hey.jpeg";

export default function Hero() {
    return (
    <section className="hero">
    <div className="background-name">PORTFOLIO</div>

    <img
    className="hero-photo"
    src={myPhoto}
    alt="Chinsha Jangid"
    />

    <div className="hero-text">
    <p className="hero-role">
        VIDEO EDITOR • CREATIVE DIRECTOR • VISUAL STORYTELLER
    </p>
    <h1 className="hero-name">
        CHINSHA<br/>JANGID
    </h1>
    </div>

</section>
    );
}