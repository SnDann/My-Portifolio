import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiPython, SiMongodb, SiMysql, SiGit, SiDocker, SiAwsamplify, SiFirebase, SiRedux, SiTypescript, SiJest } from 'react-icons/si';
import './Skill.css';

const frontend = [
  { nome: 'HTML & CSS', icon: <SiHtml5 /> },
  { nome: 'JavaScript', icon: <SiJavascript /> },
  { nome: 'React', icon: <SiReact /> },
  { nome: 'Tailwind CSS', icon: <SiTailwindcss /> },
];

const backend = [
  { nome: 'Node.js', icon: <SiNodedotjs /> },
  { nome: 'Python', icon: <SiPython /> },
  { nome: 'MongoDB', icon: <SiMongodb /> },
  { nome: 'SQL', icon: <SiMysql /> },
];

const outras = [
  { nome: 'Git', icon: <SiGit /> },
  { nome: 'Docker', icon: <SiDocker /> },
  { nome: 'AWS', icon: <SiAwsamplify /> },
  { nome: 'Firebase', icon: <SiFirebase /> },
  { nome: 'Redux', icon: <SiRedux /> },
  { nome: 'TypeScript', icon: <SiTypescript /> },
  { nome: 'Jest', icon: <SiJest /> },
];

const Skill = () => (
  <section className="skills-section">
    <h2 className="skills-title">Minhas Habilidades</h2>
    <p className="skills-desc">Tecnologias e ferramentas com as quais trabalho para criar soluções eficientes e inovadoras.</p>
    <div className="skills-cards-row-grid">
      <div className="skills-card-grid-block">
        <h3 className="skills-card-title">Frontend</h3>
        <div className="skills-outras-grid">
          {frontend.map((skill) => (
            <div className="skill-icon-card" key={skill.nome} title={skill.nome}>
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <span className="skill-icon-name">{skill.nome}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-card-grid-block">
        <h3 className="skills-card-title">Backend</h3>
        <div className="skills-outras-grid">
          {backend.map((skill) => (
            <div className="skill-icon-card" key={skill.nome} title={skill.nome}>
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <span className="skill-icon-name">{skill.nome}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-card-grid-block">
        <h3 className="skills-card-title">Outras Tecnologias</h3>
        <div className="skills-outras-grid">
          {outras.map((tec) => (
            <div className="skill-icon-card" key={tec.nome} title={tec.nome}>
              <div className="skill-icon-wrapper">{tec.icon}</div>
              <span className="skill-icon-name">{tec.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skill;