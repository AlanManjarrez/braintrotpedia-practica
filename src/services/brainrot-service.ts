import type { BrainrotCharacter } from "../interface/brainrot-character";
import type { BrainrotStats } from "../interface/brainrot-stats";

const BRAINROT_API_URL = "https://tralalero-api.vercel.app/api";

const BrainrotService = {
  async getCharacters(): Promise<BrainrotCharacter[]> {
    const res = await fetch(`${BRAINROT_API_URL}/personajes`);
    if (!res.ok) throw new Error("Error al obtener los personajes");
    return (await res.json()) as BrainrotCharacter[];
  },
  async getCharacterById(id: number): Promise<BrainrotCharacter> {
    const res = await fetch(`${BRAINROT_API_URL}/personajes/${id}`);
    if (!res.ok) throw new Error("Error al obtener el personaje");
    return (await res.json()) as BrainrotCharacter;
  },
  async searchCharacters(name: string): Promise<BrainrotCharacter[]> {
    const res = await fetch(`${BRAINROT_API_URL}/personajes/search/${name}}`);
    if (!res.ok) throw new Error("Error en la busqueda");
    return res.json();
  },
  async getStats(): Promise<BrainrotStats> {
    const res = await fetch(`${BRAINROT_API_URL}/stats`);
    if (!res.ok) throw new Error("Error al obtener las estadisticas");
    return res.json();
  },
};

export default BrainrotService;
