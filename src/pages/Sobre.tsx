import { FaMapMarkerAlt, FaEnvelope, FaUserTie } from 'react-icons/fa';
import fotoPerfil from '../assets/foto-perfil.jpg';

const Sobre = () => (
  <section className="sobre-section">
    <div className="sobre-avatar-bg sobre-avatar-animada sobre-avatar-mobile">
      <img src={fotoPerfil} alt="Foto de perfil de Daniel Santos" className="sobre-avatar-img" />
    </div>
    <div className="sobre-right">
      <h2 className="sobre-title">Sobre Mim</h2>
      <h3 className="sobre-subtitle">Desenvolvedor de Software Full Stack</h3>
      <p className="sobre-desc">
        Olá! Sou Daniel Pereira, profissional em transição de carreira da área da saúde para a tecnologia, atualmente atuando como Técnico de Enfermagem. Com sólida vivência hospitalar, busca aplicar seu conhecimento prático em ambientes clínicos para contribuir no desenvolvimento de sistemas médicos eficientes e centrados no usuário. Experiência com desenvolvimento de aplicações simples em JavaScript, TypeScript e C#, utilizando boas práticas de versionamento com Git/GitHub. Familiarizado com metodologias ágeis como Scrum e práticas colaborativas em equipes multidisciplinares. Proativo, comunicativo e em constante aprendizado
      </p>
      <div className="sobre-info-grid">
        <div className="sobre-info-item"><FaUserTie /> <span>Daniel Pereira</span></div>
        <div className="sobre-info-item"><FaEnvelope /> <span>daniel.devfront@gmail.com</span></div>
        <div className="sobre-info-item"><FaMapMarkerAlt /> <span>São Paulo, Brasil</span></div>
      </div>
      <a href="/Daniel_Pereira_FullStack.pdf" className="sobre-cv-btn" download target="_blank" rel="noopener noreferrer">Baixar CV</a>
    </div>
  </section>
);

export default Sobre; 