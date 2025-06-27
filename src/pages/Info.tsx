import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Info = () => (
  <section className="hero-section">
    <div className="hero-left">
      <h1 className="hero-title">
        Olá, eu sou <br />
        <span className="gradient-name">Daniel Pereira</span>
      </h1>
      <h2 className="hero-subtitle">Desenvolvedor de Software Full Stack</h2>
      <p className="hero-desc">
        Transformando ideias em código e criando soluções digitais inovadoras aplicando meu conhecimento prático em ambientes clínicos para contribuir no desenvolvimento de sistemas médicos eficientes e centrados no usuário.
      </p>
      <div className="hero-actions">
        <a href="#contato" className="btn-gradient hero-btn-main">Entre em contato</a>
        <a href="#projetos-destaque" className="btn-outline hero-btn-outline">Ver projetos</a>
      </div>
      <div className="hero-socials hero-socials-row">
        <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/daniel-pereira-da-cruz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </div>
  </section>
);

export default Info; 