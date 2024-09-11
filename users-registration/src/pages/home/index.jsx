import "./style.css";
import Trash from "../../assets/trash-2.svg";

function Home() {
  const users = [
    {
      id: "14f5af2a1f5a4saa",
      name: "Gustavo",
      age: 9,
      email: "gu@email.com",
    },
    {
      id: "15145as1f1as514a59",
      name: "Herinque",
      age: 9,
      email: "rick@email.com",
    },
    {
      id: "1a2sa1f21af5",
      name: "Gil",
      age: 38,
      email: "Gil@email.com",
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
        {users.map((user) => (
          <div key={user.id}>
            <div>
              <p>Nome:{user.name}</p>
              <p>Idade:{user.age}</p>
              <p>Email:{user.email}</p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
