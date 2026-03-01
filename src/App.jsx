import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [card, setCard] = useState(false);
  const [cor, setCor] = useState("");
  const [bg, setBg] = useState("");

  function gerarCard(e) {
    e.preventDefault();

    if (nome != "" && email != "") {
      setCard(true);
    } else {
      alert("Preencha o formulário para gerar o card!");
    }
  }

  function deletarCard() {
    setNome("");
    setEmail("");
    setCard(false);
  }

  function mudarCor() {
    setBg(cor)
  }

  return (
    <>
      <div className="conteudo">
        <div className="formulario">
          <form action="">
            <label htmlFor="">Nome</label>
            <br />
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </form>
          <div className="botoes-container">
            <button onClick={gerarCard}>Gerar Card</button>
            <button onClick={deletarCard}>Excluir</button>

            {card && (
              <div className="card-color">
                <input
                  type="color"
                  name="cor"
                  id="cor"
                  onChange={(e) => setCor(e.target.value)}
                />
                <button onClick={mudarCor}>Alterar cor de fundo</button>
              </div>
            )}
          </div>
        </div>

        {card && (
          <div className="card" style={{ backgroundColor: bg }}>
            <p>Nome: {nome}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
