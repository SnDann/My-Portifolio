import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <span className="navbar-logo">Portfólio</span>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Início</NavLink>
        <NavLink to="/sobre" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Sobre</NavLink>
        <NavLink to="/objetivo" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Objetivo</NavLink>
        <NavLink to="/skills" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Skills</NavLink>
        <NavLink to="/projetos" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Projetos</NavLink>
        <NavLink to="/formacao" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Formação</NavLink>
        <NavLink to="/contato" className={({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''}>Contato</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar; 