import { useSearchParams } from "react-router";
import BrainrotsDisplay from "../components/brainrot-display";
import { useCharacters } from "../hooks/use-characters";
import { useEffect, useState } from "react";
import BrainrotService from "../services/brainrot-service";
import type { BrainrotCharacter } from "../interface/brainrot-character";

const HomePage = () => {
  const { characters, isLoading, error } = useCharacters();
  const [searchResults, setSearchResults] = useState<BrainrotCharacter[]>([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchSearch = async () => {
      if (!search) return setSearchResults([]);
      try {
        const res = await BrainrotService.searchCharacters(search);
        setSearchResults(res);
      } catch {
        setSearchResults([]);
      }
    };
    fetchSearch();
  }, [search]);

  const listToRender = search ? searchResults : characters;

  if (isLoading) return <h3 className="text-center mt-4">Cargando...</h3>;
  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <h1 className="row justify-content-center">Personajes de Brainrot</h1>
        <span className="row justify-content-center text-secondary mb-5">
          Los personajes mas populares de internet
        </span>

        <div className="row justify-content-center">
          {listToRender.length === 0 && search && (
            <p className="text-center text-muted">No se encontraron personajes</p>
          )}

          {listToRender.map((character: BrainrotCharacter) =>(
            <div key={character.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <BrainrotsDisplay character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
