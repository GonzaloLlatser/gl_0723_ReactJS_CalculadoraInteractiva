import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"

function App() {
  return (
    <div className="App">
      <div class="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"/>
      </div>
    </div>
  );
}

export default App;
