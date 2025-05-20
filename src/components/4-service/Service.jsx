import { motion } from 'framer-motion';
import "./Service.css";

const Service = () => {
  return (
    <>
     <section id="services" className="service-section bg-cover text-white py-5 text-center">
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="display-4 fw-bold mb-3">Nos Services de Nettoyage</h2>
            <p className="lead">Des solutions de nettoyage professionnel pour rendre votre espace impeccable.</p>
        </motion.div>
        <div className="container mt-5">
            <div className="row">
                <motion.div 
                    className="col-md-4 mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card service-card shadow-lg rounded-2 p-3">
                        <div className="card-body text-center">
                            <div className="service-image-container">
                                <img src="https://i.ibb.co/8D0NcrHq/Home.jpg" 
                                alt="Nettoyage Résidentiel" className="service-image" />
                            </div>
                            <h5 className="card-title">Nettoyage Résidentiel</h5>
                            <p className="card-text">Un nettoyage complet et détaillé pour votre maison.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="col-md-4 mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card service-card shadow-lg rounded-2 p-3">
                        <div className="card-body text-center">
                            <div className="service-image-container">
                                <img src="https://i.ibb.co/4nVdhd9F/bureau.jpg" 
                                alt="Nettoyage de Bureaux" className="service-image" />
                            </div>
                            <h5 className="card-title">Nettoyage de Bureaux</h5>
                            <p className="card-text">Gardez votre espace de travail propre et productif.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="col-md-4 mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card service-card shadow-lg rounded-2 p-3">
                        <div className="card-body text-center">
                            <div className="service-image-container">
                                <img src="https://i.ibb.co/5hrH0FJP/commercial.jpg" 
                                alt="Nettoyage Commercial" className="service-image" />
                            </div>
                            <h5 className="card-title">Nettoyage Commercial</h5>
                            <p className="card-text">Des services professionnels pour les grands espaces et les entreprises.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Service;