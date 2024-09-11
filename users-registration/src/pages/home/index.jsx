import "./style.css";

function Home() {
  const users = [
    {
      id: "14f5af2a1f5a4saa",
      name: "Gustavo",
      age: 9,
      email: "gu@gmail.com",
    },
    {
      id: "15145as1f1as514a59",
      name: "Herinque",
      age: 9,
      email: "rick@gmail.com",
    },
  ];
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
