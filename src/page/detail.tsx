import { useParams } from "react-router";
import { useCharacter } from "../hooks/use-character";

const CharacterDetail = () => {
  const { id } = useParams();
  const { character, isLoading, error } = useCharacter(id!);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!character) return <p>No se encontro el personaje</p>;

  return (
    <div className="container my-5">
      <div className="row g-4 align-items-center">
        <div className="col md-6 text-center">
          <img
            src={character.imagen}
            alt={character.nombre}
            className="img-fluid rounded"
            style={{ maxHeight: "450px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="fw-bold">{character?.nombre}</h1>
          <p className="text-muted">{character?.descripcion}</p>

          <p>
            <strong>Origen:</strong>
            <br />
            {character?.origen}
          </p>
          <p>
            <strong>Popularidad:</strong>
            <br />
            {character?.popularidad}
          </p>

          <h5 className="mt-3">Memes populares:</h5>
          <div className="d-flex flex-wrap gap-2 mt-2">
            {character.memes?.map((meme: string, idx: number) => (
              <span key={idx} className="badge text-bg-secondary">
                {meme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterDetail;
