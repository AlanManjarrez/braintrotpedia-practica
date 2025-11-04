import { useEffect, useState } from "react";
import type { BrainrotCharacter } from "../interface/brainrot-character";
import BrainrotService from "../services/brainrot-service";

export const useCharacter = (id: string) => {
  const [character, setCharacter] = useState<BrainrotCharacter | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await BrainrotService.getCharacterById(id);
        setCharacter(data);
      } catch {
        setError("No se pudo obtener el personaje");
        setCharacter(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  return { character, isLoading, error };
};
