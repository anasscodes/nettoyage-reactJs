import "./Header.css"

const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg py-4">
    <div className="container">
        <a href="#" className="navbar-brand fs-2 fw-bold text-dark">
            <img src="/logo.png" className="logo me-2" alt="logo.png" />
            AlphaClean
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
                <li className="nav-item"><a href="#hero" className="nav-link text-dark">Accueil</a></li>
                <li className="nav-item"><a href="#about" className="nav-link text-dark">À propos</a></li>
                <li className="nav-item"><a href="#services" className="nav-link text-dark">Services</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link text-dark">Contact</a></li>
                <li className="nav-item"><a href="#feedback" className="nav-link text-dark">Feedback</a></li>
            </ul>
        </div>
    </div>
</nav>

    </>
  )
}

export default Header