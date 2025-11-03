import type { BrainrotCharacter } from "../interface/brainrot-character";

interface Props {
  character: BrainrotCharacter | null;
  isLoading: boolean
}

const BrainrotsDisplay = ({ character, isLoading }: Props) => {
  const image = character?.imageUrl;
  const name = character?.name;
  const descripcion = character?.description;
  const origin = character?.origin;

  return (
    <div className="card">
      <div className="card-header">
        {isLoading && (
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
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
        <button className="btn btn-outline-dark">Ver detalles</button>
      </div>
    </div>
  );
};
export default BrainrotsDisplay;
