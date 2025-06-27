import { SiHtml5, SiDotnet } from 'react-icons/si';

const projetos = [
  {
    nome: 'projeto-LandingPage',
    link: 'https://github.com/SnDann/projeto-LandingPage',
    descricao: 'Projeto de desenvolvimento do módulo base do curso de Tecnologia da Escola DNC.',
    tecnologias: [<SiHtml5 key="html5" />],
  },
  {
    nome: 'trilha-net-fundamentos-desafio',
    link: 'https://github.com/SnDann/trilha-net-fundamentos-desafio',
    descricao: 'Desafio de projeto .NET Fundamentos - DIO.',
    tecnologias: [<SiDotnet key="dotnet1" />],
  },
  {
    nome: 'trilha-net-poo-desafio',
    link: 'https://github.com/SnDann/trilha-net-poo-desafio',
    descricao: 'Projeto Desafio Sistema de Hospedagem.',
    tecnologias: [<SiDotnet key="dotnet2" />],
  },
];

const Projetos = () => (
  <section className="projetos">
    <h2>Projetos em Destaque</h2>
    <div className="projetos-lista">
      {projetos.map((proj) => (
        <div className="projeto-card" key={proj.nome}>
          <h3>{proj.nome}</h3>
          <p>{proj.descricao}</p>
          <div className="projeto-tec">{proj.tecnologias}</div>
          <a className="projeto-btn" href={proj.link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projetos; 