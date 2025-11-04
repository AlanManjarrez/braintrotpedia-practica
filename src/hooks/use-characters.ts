import { useEffect, useState } from "react";
import BrainrotService from "../services/brainrot-service";
import type { BrainrotCharacter } from "../interface/brainrot-character";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<BrainrotCharacter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const fetchCharacters = async () => {
    try {
      const data = await BrainrotService.getCharacters();
      if (!Array.isArray(data))
        throw new Error("La API no devolvió una lista de personajes");
      setCharacters(data);
    } catch {
      setError("No se pudieron obtener los personajes");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
    console.log(characters);
  }, []);
  return { characters, isLoading, error };
};
