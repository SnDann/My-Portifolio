import './App.css';
import Info from './pages/Info';
import Sobre from './pages/Sobre';
import Objetivo from './pages/Objetivo';
import Formacao from './pages/Formacao';
import Projetos from './pages/Projetos';
import Skill from './pages/Skill';
import Contato from './pages/Contato';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.add('dark'); // Começa no escuro
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    setIsDark(!isDark);
  };

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme} title="Alternar tema">
        {isDark ? '☀️' : '🌙'}
      </button>
      <main className="unified-main">
        <section id="inicio"><Info /></section>
        <section id="sobre"><Sobre /></section>
        <section id="objetivo"><Objetivo /></section>
        <section id="formacao"><Formacao /></section>
        <section id="projetos"><Projetos /></section>
        <section id="habilidades"><Skill /></section>
        <section id="contato"><Contato /></section>
      </main>
    </>
  );
}

export default App;
