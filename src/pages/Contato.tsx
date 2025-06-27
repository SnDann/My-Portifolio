import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contato = () => (
  <section className="contato-section">
    <h2 className="contato-title">Entre em Contato</h2>
    <p className="contato-desc">Tem um projeto em mente ou quer conversar sobre oportunidades? Entre em contato comigo!</p>
    <div className="contato-row">
      <div className="contato-info-card">
        <h3 className="contato-info-title">Informações de Contato</h3>
        <div className="contato-info-list">
          <div className="contato-info-item"><FaEnvelope /> <span>daniel.devfront@gmail.com</span></div>
          <div className="contato-info-item"><FaMapMarkerAlt /> <span>Brasil</span></div>
          <div className="contato-info-item"><span>Redes Sociais</span></div>
          <div className="contato-info-socials">
            <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/daniel-pereira/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <form className="contato-form">
        <h3 className="contato-form-title">Envie uma Mensagem</h3>
        <input type="text" placeholder="Nome" name="nome" required />
        <input type="email" placeholder="Email" name="email" required />
        <textarea placeholder="Sua mensagem..." name="mensagem" required />
        <button type="submit" className="contato-btn-gradient">Enviar Mensagem</button>
      </form>
    </div>
  </section>
);

export default Contato;