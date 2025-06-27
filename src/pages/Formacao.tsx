import { FaGraduationCap, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJs, FaMobileAlt } from 'react-icons/fa';

const cursos = [
  {
    nome: 'Bootcamp Front-End',
    instituicao: 'Inovação Digital One',
    ano: '2023',
    icone: <FaGraduationCap style={{ color: '#7c3aed' }} />,
  },
  {
    nome: 'JavaScript Moderno',
    instituicao: 'Udemy | 20h',
    ano: '2023',
    icone: <FaJs style={{ color: '#f7df1e' }} />,
  },
  {
    nome: 'Curso de React',
    instituicao: 'Udemy | 20h',
    ano: '2024',
    icone: <FaReact style={{ color: '#61dafb' }} />,
  },
  {
    nome: 'Curso de React Native',
    instituicao: 'Udemy | 20h',
    ano: '2024',
    icone: <FaMobileAlt style={{ color: '#7c3aed' }} />,
  },
  {
    nome: 'Curso de Node.js',
    instituicao: 'Udemy | 20h',
    ano: '2024',
    icone: <FaNodeJs style={{ color: '#3c873a' }} />,
  },
  {
    nome: 'Curso de MongoDB',
    instituicao: 'Udemy | 20h',
    ano: '2024',
    icone: <FaDatabase style={{ color: '#47a248' }} />,
  },
  {
    nome: 'Curso de SQL',
    instituicao: 'Udemy | 20h',
    ano: '2024',
    icone: <FaDatabase style={{ color: '#2563eb' }} />,
  },
  {
    nome: 'Curso de Git',
    instituicao: 'Udemy | 20h',
    ano: '2024',
    icone: <FaGitAlt style={{ color: '#f34f29' }} />,
  },
];

const Formacao = () => (
  <section className="courses-section">
    <h2 className="courses-title">Formação Acadêmica & Cursos</h2>
    <div className="courses-grid">
      {cursos.map((curso, idx) => (
        <div className="course-card" key={idx}>
          <span className="course-icon">{curso.icone}</span>
          <div>
            <strong>{curso.nome}</strong>
            <div>{curso.instituicao} | {curso.ano}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Formacao; 