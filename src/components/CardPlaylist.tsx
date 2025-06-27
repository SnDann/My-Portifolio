import { motion } from 'framer-motion';

interface CardPlaylistProps {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  footer?: React.ReactNode;
  button?: React.ReactNode;
}

const CardPlaylist: React.FC<CardPlaylistProps> = ({ image, icon, title, description, footer, button }) => (
  <motion.div
    className="playlist-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
  >
    <div className="playlist-img-wrapper">
      {image && <img src={image} alt="" className="playlist-img" />}
      {icon && !image && <div className="playlist-icon">{icon}</div>}
    </div>
    <div className="playlist-content">
      <h2 className="playlist-title">{title}</h2>
      <p className="playlist-desc">{description}</p>
      <div className="playlist-footer">
        {footer}
        {button && <div className="playlist-btn-wrapper">{button}</div>}
      </div>
    </div>
  </motion.div>
);

export default CardPlaylist; 