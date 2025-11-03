import { useEffect } from "react";
import BrainrotsDisplay from "../components/brainrot-display";
import { useCharacter } from "../hooks/use-character";
import { useParams } from "react-router";

const HomePage = () => {
  const { id } = useParams();
  const { character, isLoading, error, fetchCharacter } = useCharacter();

  useEffect(() => {
    if(id) fetchCharacter(Number(id));
  },[id]);
  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <BrainrotsDisplay
            character={character}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
