import { motion } from 'framer-motion';
import './feedback.css';

import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';

const feedbacks = [
  {
    name: "Sofia M.",
    image: client1,
    rating: 5,
    text: "Le service pour ma maison était impeccable. Je recommande vivement !"
  },
  {
    name: "Amine R.",
    image: client2,
    rating: 4,
    text: "Excellent nettoyage de nos bureaux, très professionnels et efficaces."
  },
  {
    name: "Rania K.",
    image: client3,
    rating: 5,
    text: "Service rapide et professionnel pour notre entreprise. Très satisfait."
  },
  {
    name: "Youssef B.",
    image: client4,
    rating: 4,
    text: "Un service de nettoyage impeccable pour notre résidence. Je suis ravie."
  },
  {
    name: "Marouane O.",
    image: client5,
    rating: 4,
    text: "Un service de nettoyage impeccable pour notre résidence. Je suis ravie."
  }
];

const Feedback = () => {
  return (
    <section id="feedback" className="feedback-section">
      <motion.div
        className="feedback-header text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ce que disent nos clients</h2>
        <p>Des retours authentiques sur nos services</p>
      </motion.div>

      <div className="feedback-slider">
        <div className="feedback-track">
          {feedbacks.concat(feedbacks).map((client, index) => (
            <motion.div
              key={index}
              className="feedback-card text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={client.image} alt="Client" className="feedback-img mb-3" />
              <h5 className="feedback-name">{client.name}</h5>
              <p className="feedback-text">{client.text}</p>
              <div className="stars mb-2">
                {'★'.repeat(client.rating)}{'☆'.repeat(5 - client.rating)}
              </div>
              <p className="small text-muted">Client satisfait</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;