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
          <input placeholder="Nome" name="name " type="text" />
          <input placeholder="Idade" name="age" type="number" />
          <input placeholder="Email" name="email" type="email" />
          <button type="button">Cadastrar</button>
        </form>
        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome:<span>{user.name}</span>
              </p>
              <p>
                Idade:<span>{user.age}</span>
              </p>
              <p>
                Email:<span>{user.email}</span>
              </p>
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
