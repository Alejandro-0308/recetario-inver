
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Recetas inver</h1>

      <nav className="navegacion">
        <Link to="/" className="boton-nav">
          Recetas
        </Link>

        <Link
          to="/compartir"
          className="boton-nav boton-destacado"
        >
          Compartinos tu receta
        </Link>
      </nav>
    </header>
  );
}

export default Header;