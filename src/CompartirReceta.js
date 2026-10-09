import { useState } from "react";

function CompartirReceta() {
  const [recetaCompleta, setRecetaCompleta] = useState(false);

  return (
    <main>

      <section id="formulario" className="formulario-seccion">

        <h2>Compartí tu receta</h2>

        <p>¡Ayúdanos a compartir más recetas deliciosas!</p>

        <form className="formulario-recetas">

          <label htmlFor="nombre">Tu nombre</label>

          <input id="nombre" type="text" required />

          <label htmlFor="email">Tu email</label>

          <input id="email" type="email" required />

          <label htmlFor="tituloReceta">Nombre de la receta</label>

          <input id="tituloReceta" type="text" required />

          <label className="casilla-receta">


            <input type="checkbox" checked={recetaCompleta}onChange={(evento) => setRecetaCompleta(evento.target.checked)} />
            Quiero compartir la receta completa
          </label>

          {recetaCompleta && (<><label htmlFor="ingredientes">Ingredientes</label><textarea id="ingredientes" rows="5" required/>

              <label htmlFor="preparacion">Preparación</label>

              <textarea id="preparacion" rows="6" required/></>
          )}

          <button type="submit">Enviar receta</button>

        </form>

      </section>

    </main>
  );
}

export default CompartirReceta;