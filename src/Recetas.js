
import { useState } from "react";

function Recetas() {
  const [recetaActual, setRecetaActual] = useState(0);
  const [recetaCompleta, setRecetaCompleta] = useState(false);
  
  const recetas = [
    {
      nombre: "Pasta Cremosa",
      imagen: "https://images.unsplash.com/photo-1702827761984-205e57a3a633?q=80&w=1000",
      descripcion: "Una deliciosa pasta cremosa que te encantará",
      ingredientes: [
        "200g de pasta",
        "1 taza de crema de leche",
        "1/2 taza de queso rallado",
        "2 dientes de ajo picados",
        "Sal y pimienta al gusto"
      ],
      instrucciones: [
        "Cocina la pasta según las instrucciones del paquete.",
        "En una sartén, sofríe el ajo picado hasta que esté dorado.",
        "Agrega la crema de leche y el queso rallado, mezcla bien.",
        "Incorpora la pasta cocida a la salsa y mezcla hasta que esté bien cubierta.",
        "Sazona con sal y pimienta al gusto y sirve caliente."
      ]
    },
    {
      nombre: "Ensalada Fresca",
      imagen: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1000",
      descripcion: "Una ensalada fresca y saludable para cualquier ocasión",
      ingredientes: [
        "2 tazas de lechuga",
        "1 tomate grande",
        "1/2 pepino",
        "1/4 taza de cebolla morada",
        "Aderezo al gusto"
      ],
      instrucciones: [
        "Lava y corta la lechuga, el tomate, el pepino y la cebolla.",
        "Mezcla todos los ingredientes en un bol grande.",
        "Añade el aderezo de tu elección y mezcla bien.",
        "Sirve inmediatamente y disfruta de tu ensalada fresca."
      ]
    },
    {
      nombre: "Postre de Chocolate",
      imagen: "https://images.unsplash.com/photo-1673551490812-eaee2e9bf0ef?q=80&w=1000",
      descripcion: "Un postre de chocolate irresistible para los amantes del dulce",
      ingredientes: [
        "200g de chocolate negro",
        "1 taza de crema de leche",
        "1/4 taza de azúcar",
        "1 cucharadita de esencia de vainilla",
        "Frutas frescas para decorar"
      ],
      instrucciones: [
        "Derrite el chocolate a baño maría o en el microondas.",
        "En un bol, bate la crema de leche con el azúcar hasta obtener picos suaves.",
        "Incorpora el chocolate derretido y la esencia de vainilla a la crema batida.",
        "Vierte la mezcla en moldes individuales y refrigera por al menos 2 horas.",
        "Decora con frutas frescas antes de servir."
      ]
    },
  ];

  const receta = recetas[recetaActual];

  return (
    
    <main className="App">

      <section id="recetas" className="Carrusel-seccion"> 

        <h2>Recetas Destacadas</h2>

        
        <article className="App-article">

          <h2>{receta.nombre}</h2>

          <p>{receta.descripcion}</p>

          <p className="receta-contador">

            Receta {recetaActual + 1} de {recetas.length}

          </p>

          <div className="receta-contenido">

            <img src={receta.imagen} alt={receta.nombre} />

            <div className="receta-detalles">

              <div className="receta-ingredientes">

                <h3>Ingredientes</h3>

                <ul>
                  {receta.ingredientes.map((ingrediente, index) => (<li key={index}>{ingrediente}</li>))}
                </ul>

              </div>

              <div className="receta-instrucciones">

                <h3>Preparación</h3>

                <ol>
                  {receta.instrucciones.map((instruccion, index) => (<li key={index}>{instruccion}</li>))}
                </ol>

              </div>

            </div>

          </div>

          <div className="Carrusel-botones">

            <button onClick={() => setRecetaActual((recetaActual - 1 + recetas.length) % recetas.length)}>
              Anterior
            </button>

            <button
              onClick={() => setRecetaActual((recetaActual + 1) % recetas.length)}>
              Siguiente
            </button>

          </div>

        </article>

      </section>

    </main>
  );
}

export default Recetas;