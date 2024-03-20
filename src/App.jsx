import { useState } from "react";

import Perfil from "./components/Perfil/Index";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepositoriosList";
import './global.css';


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario , setNomeUsuario] = useState('');

  return (
    <>
      <input className="inputNomeUsuario" type="text" placeholder="Digite seu usuario do GitHub" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsuario.length > 4 &&(
        <> 
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      
      {/*formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button"> toggle form
      </button> */}
    
    </>
  )
}

export default App
