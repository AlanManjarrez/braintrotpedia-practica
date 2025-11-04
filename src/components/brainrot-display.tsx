import { NavLink } from "react-router";
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
    <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
      <div className="bg-body-tertiary">
        <img
          src={image}
          alt={name}
          className="card-img-top object-fit-cover"
          style={{ aspectRatio: "16/9" }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{name}</h5>
        <p className="text-muted small mb-4">{descripcion}</p>

        <span className="badge text-bg-secondary align-self-start mb-3">
          {origin}
        </span>

        { <NavLink className="btn btn-primary bg-dark border-dark" to={`/detail/${character?.id}`}>
          Ver detalles
        </NavLink> }
      </div>
    </div>
  );
};
export default BrainrotsDisplay;
