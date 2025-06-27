import React from 'react';
import { SiSupabase, SiCplusplus, SiDotnet, SiC, SiJavascript, SiHtml5, SiTypescript, SiReact, SiBootstrap, SiGit, SiGithub } from 'react-icons/si';
import './Skill.css';

const stack = [
  {
    grupo: 'Back-end',
    skills: [
      { nome: 'Supabase', icon: <SiSupabase />, porcentagem: 75 },
      { nome: 'C++', icon: <SiCplusplus />, porcentagem: 85 },
      { nome: 'C#', icon: <SiDotnet />, porcentagem: 80 },
      { nome: 'C', icon: <SiC />, porcentagem: 70 },
    ],
  },
  {
    grupo: 'Front-end',
    skills: [
      { nome: 'JavaScript', icon: <SiJavascript />, porcentagem: 90 },
      { nome: 'TypeScript', icon: <SiTypescript />, porcentagem: 85 },
      { nome: 'HTML5', icon: <SiHtml5 />, porcentagem: 95 },
      { nome: 'React', icon: <SiReact />, porcentagem: 88 },
      { nome: 'Bootstrap', icon: <SiBootstrap />, porcentagem: 75 },
    ],
  },
  {
    grupo: 'Ferramentas',
    skills: [
      { nome: 'Git', icon: <SiGit />, porcentagem: 85 },
      { nome: 'GitHub', icon: <SiGithub />, porcentagem: 90 },
    ],
  },
];

const softSkills = [
  'Resiliência',
  'Pensamento analítico',
  'Empatia',
  'Trabalho em equipe',
  'Foco sob pressão',
  'Inglês: Básico (leitura técnica)'
];

const Skill = () => (
  <section className="skill">
    <h2>Habilidades</h2>
    {stack.map((grupo) => (
      <div key={grupo.grupo} className="stack-group">
        <h3>{grupo.grupo}</h3>
        <div className="skills-list">
          {grupo.skills.map((skill) => (
            <div className="skill-item" key={skill.nome}>
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.nome}</span>
                <span className="skill-percent">{skill.porcentagem}%</span>
              </div>
              <div className="skill-bar-container">
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.porcentagem}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
    <h3>Soft Skills</h3>
    <div className="soft-badges">
      {softSkills.map((s) => <span className="soft-badge" key={s}>{s}</span>)}
    </div>
  </section>
);

export default Skill; 