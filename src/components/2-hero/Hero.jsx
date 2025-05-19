import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container d-flex align-items-center justify-content-between flex-wrap">
        {/* Left Side: Title, Paragraph, and Button */}
        <div className="left-content">
          <h2>Bienvenue chez Services de Nettoyage Pro</h2>
          <p>Des services de nettoyage de qualité pour rendre votre espace impeccable.</p>
          <a href="#contact" className="btn-primary">Contactez-nous</a>
        </div>

        {/* Right Side: Image with Animation */}
        <div className="right-content">
          <img 
            src="src/assets/hero1.jpg" 
            alt="Cleaning Service" 
            className="hero-image animate__animated animate__fadeInUp"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;