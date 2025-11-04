import type { BrainrotCharacter } from "../interface/brainrot-character";
import type { BrainrotStats } from "../interface/brainrot-stats";

const BRAINROT_API_URL = "https://tralalero-api.vercel.app/api";

const BrainrotService = {
  async getCharacters(): Promise<BrainrotCharacter[]> {
    const res = await fetch(`${BRAINROT_API_URL}/personajes`);
    if (!res.ok) throw new Error("Error al obtener los personajes");
    const data = await res.json();
    return data.data;
  },
  async getCharacterById(id: string): Promise<BrainrotCharacter> {
    const res = await fetch(`${BRAINROT_API_URL}/personajes/${id}`);
    if (!res.ok) throw new Error("Error al obtener el personaje");
    const data = await res.json();
    return data.data;
  },
  async searchCharacters(name: string): Promise<BrainrotCharacter[]> {
    const res = await fetch(`${BRAINROT_API_URL}/personajes/search/${name}`);
    if (!res.ok) throw new Error("Error en la busqueda");
    const data = await res.json();
    return data.data;
  },
  async getStats(): Promise<BrainrotStats> {
    const res = await fetch(`${BRAINROT_API_URL}/stats`);
    if (!res.ok) throw new Error("Error al obtener las estadisticas");
    const data = await res.json();
    return data.data;
  },
};

export default BrainrotService;
