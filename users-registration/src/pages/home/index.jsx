import "./style.css";

function Home() {
  return (
    <div>
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name="name " type="text" />
          <input name="age" type="number" />
          <input name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
