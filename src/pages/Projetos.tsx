import { SiHtml5, SiDotnet } from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetosDestaque = [
  {
    nome: 'Projeto GitHub',
    descricao: 'Projeto lançado na sua repositório GitHub, com funcionalidades e tecnologias modernas.',
    icone: <FaGithub size={38} />,
    tecnologias: ['React', 'TypeScript', 'API'],
    link: 'https://github.com/SnDann/projeto-LandingPage',
    demo: '',
  },
  {
    nome: 'Aplicativo Mobile',
    descricao: 'Desenvolvimento de um aplicativo mobile com interface intuitiva e funcionalidades avançadas.',
    icone: <SiHtml5 size={38} />,
    tecnologias: ['React Native', 'Expo'],
    link: 'https://github.com/SnDann/trilha-net-fundamentos-desafio',
    demo: '',
  },
  {
    nome: 'E-commerce Platform',
    descricao: 'Plataforma completa de e-commerce com sistema de pagamentos e gerenciamento de produtos.',
    icone: <SiDotnet size={38} />,
    tecnologias: ['.NET', 'SQL', 'Azure'],
    link: 'https://github.com/SnDann/trilha-net-poo-desafio',
    demo: '',
  },
];

const Projetos = () => {
  return (
    <section className="projetos-section" id="projetos-destaque">
      <h2 className="projetos-title">Projetos em Destaque</h2>
      <p className="projetos-desc">Aqui estão alguns dos projetos que desenvolvi. Cada um representa um desafio único e uma oportunidade de aprendizado.</p>
      <div className="projetos-grid">
        {projetosDestaque.map((proj, idx) => (
          <div className="projeto-card-novo" key={idx}>
            <div className="projeto-icone">{proj.icone}</div>
            <h3 className="projeto-nome">{proj.nome}</h3>
            <p className="projeto-descricao">{proj.descricao}</p>
            <div className="projeto-tags">
              {proj.tecnologias.map((tec) => (
                <span className="projeto-tag" key={tec}>{tec}</span>
              ))}
            </div>
            <div className="projeto-botoes">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="btn-codigo">Ver código <FaGithub /></a>
              {proj.demo && <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">Demo <FaExternalLinkAlt /></a>}
            </div>
          </div>
        ))}
      </div>
      <div className="projetos-github-btn-wrapper">
        <a href="https://github.com/SnDann" target="_blank" rel="noopener noreferrer" className="projetos-github-btn">Ver mais no GitHub</a>
      </div>
    </section>
  );
};

export default Projetos;