import type { BrainrotCharacter } from "../interface/brainrot-character";

interface Props {
  character: BrainrotCharacter | null;
}

const BrainrotsDisplay = ({ character }: Props) => {
  const image = character?.imagen;
  const name = character?.nombre;
  const descripcion = character?.descripcion;
  const origin = character?.origen;

  return (
    <div className="card">
      <div className="card-header">
        <img
          src={image}
          alt=""
          className="img-fluid mx-auto d-block"
          style={{
            maxHeight: "300px",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
      <div className="card-body">
        <h1>{name}</h1>
        <a>{descripcion}</a>
        <a>{origin}</a>
        <br />
        <button className="btn btn-outline-dark">Ver detalles</button>
      </div>
    </div>
  );
};
export default BrainrotsDisplay;
