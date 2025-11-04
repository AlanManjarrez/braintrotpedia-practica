import BrainrotsDisplay from "../components/brainrot-display";
import { useCharacters } from "../hooks/use-characters";

const HomePage = () => {
  const { characters, isLoading, error } = useCharacters();

  if (isLoading) return <h3 className="text-center mt-4">Cargando...</h3>;
  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        {Array.isArray(characters) && characters.map((character) => (
          <div key={character.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <BrainrotsDisplay character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
