import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container d-flex align-items-center justify-content-center flex-column text-center">
        <h2 className="about-title">À propos de nous</h2>
        <p className="about-description">
          Nous sommes une entreprise spécialisée dans les services de nettoyage professionnels. Nous offrons des solutions adaptées à vos besoins, garantissant propreté et satisfaction à chaque prestation.
        </p>
        <a href="#services" className="btn btn-about">Découvrez nos services</a>
      </div>
    </section>
  );
};

export default About;