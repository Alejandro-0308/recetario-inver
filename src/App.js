import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Recetas from "./Recetas";
import CompartirReceta from "./CompartirReceta";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Recetas />} />
          <Route
            path="/compartir"
            element={<CompartirReceta />}
          />
        </Routes>

        <footer className="App-footer">
          <p>
            &copy; 2026 Recetas Inver. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;