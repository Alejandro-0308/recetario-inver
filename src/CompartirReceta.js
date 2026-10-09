
import { useState } from "react";

function CompartirReceta() {
  const [recetaCompleta, setRecetaCompleta] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(evento) {
    evento.preventDefault();

    setEnviado(true);

    // Limpiamos los campos después del envío
    evento.currentTarget.reset();
    setRecetaCompleta(false);
  }

  return (
    <main className="formulario-seccion">
      <h2>Compartinos tu receta</h2>

      <p>
        ¿Tenés una receta que te encanta?
        ¡Nos gustaría conocerla!
      </p>

      {enviado && (
        <p className="mensaje-exito" role="status">
          ¡Gracias por compartir tu receta!
          El formulario se envió correctamente.
        </p>
      )}

      <form
        className="formulario-recetas"
        onSubmit={manejarEnvio}
      >
        <label htmlFor="nombre">
          Tu nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Escribí tu nombre"
          required
        />

        <label htmlFor="email">
          Tu email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@correo.com"
          required
        />

        <label htmlFor="tituloReceta">
          Nombre de la receta
        </label>
        <input
          id="tituloReceta"
          name="tituloReceta"
          type="text"
          placeholder="Ej.: Tarta de manzana"
          required
        />

        <label className="casilla-receta">
          <input
            type="checkbox"
            name="recetaCompleta"
            checked={recetaCompleta}
            onChange={(evento) => {
              setRecetaCompleta(evento.target.checked);
            }}
          />
          Quiero compartir la receta completa
        </label>

        {recetaCompleta && (
          <>
            <label htmlFor="ingredientes">
              Ingredientes
            </label>
            <textarea
              id="ingredientes"
              name="ingredientes"
              rows="5"
              placeholder="Escribí los ingredientes y sus cantidades..."
              required
            />

            <label htmlFor="preparacion">
              Preparación
            </label>
            <textarea
              id="preparacion"
              name="preparacion"
              rows="6"
              placeholder="Contanos cómo preparar la receta..."
              required
            />
          </>
        )}

        <button type="submit">
          Enviar receta
        </button>
      </form>
    </main>
  );
}

export default CompartirReceta;