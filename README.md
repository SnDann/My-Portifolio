# My-Portifolio
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Portfólio Daniel Pereira

## Registro de Funcionamento

![Portfólio rodando - tema escuro](./screenshot-dark.png)

## Implementações Técnicas

- Estrutura do projeto criada com Vite + React + TypeScript.
- Layout responsivo e moderno, com uso de CSS Grid e Flexbox.
- Seção de apresentação (hero) com nome, título, descrição e botões de navegação.
- Seção "Sobre Mim" com foto de perfil, informações pessoais e botão para download do currículo em PDF.
- Seção de habilidades técnicas exibidas em cards de ícones, separadas por categoria (Frontend, Backend, Outras Tecnologias).
- Seção de cursos e formação acadêmica em cards, com ícones representativos e layout responsivo.
- Seção de projetos em destaque, com cards, ícones, descrição, tecnologias utilizadas e links para código/demo.
- Seção de contato com informações, redes sociais e formulário funcional.
- Suporte a tema claro e escuro, com alternância dinâmica via botão fixo no topo da página.
- Utilização de variáveis CSS para cores principais, facilitando a manutenção e a troca de tema.
- Favicon e manifest configurados para compatibilidade com dispositivos e PWA.
- Estrutura preparada para deploy em Vercel, com build otimizado para produção.
- Código organizado em componentes reutilizáveis e arquivos separados por responsabilidade.

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode o projeto em modo desenvolvimento:
   ```sh
   npm run dev
   ```
3. Para build de produção:
   ```sh
   npm run build
   ```

## Deploy

O projeto está pronto para deploy em plataformas como Vercel, Netlify ou GitHub Pages. Basta importar o repositório e seguir o fluxo padrão da plataforma escolhida.
