import { useState } from "react";
import Personagem from "./Components/Personagem";
import "./App.css"; 

function App() {
  const [contador, setContador] = useState(1);

  function trocarPersonagem() {
    if (contador < 826) {
      setContador(contador + 1);
    } else {
      setContador(1);
    }
  }

  return (<div className="mae">
    <div className="app">
      <div className="caixa">
        <h1>Rick and Morty</h1>
        <Personagem id={contador} />
        <button onClick={trocarPersonagem}>Trocar de personagem</button>
      </div>
    </div>
    </div>
  );
}


export default App;
