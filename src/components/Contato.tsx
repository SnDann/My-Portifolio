
const Contato = () => (
  <section className="contato">
    <h2>Contato</h2>
    <form className="form-contato">
      <input type="text" placeholder="Nome" name="nome" required />
      <input type="email" placeholder="E-mail" name="email" required />
      <textarea placeholder="Mensagem" name="mensagem" required />
      <button type="submit">Enviar</button>
    </form>
    <div className="contato-info">
      <p>Email: daniel.devfront@gmail.com</p>
      <p>Localização: São Paulo, SP</p>
    </div>
  </section>
);

export default Contato; 