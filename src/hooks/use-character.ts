import { useState } from "react"
import type { BrainrotCharacter } from "../interface/brainrot-character"
import BrainrotService from "../services/brainrot-service";

export const useCharacter = () => {
    const [character, setCharacter] = useState<BrainrotCharacter|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|null>(null)

    const fetchCharacter = async (id: number) =>{
        try{
            setIsLoading(true)
            setError(null)

            const data = await BrainrotService.getCharacterById(id)
            setCharacter(data)
        }catch{
            setError("No se pudo obtener el personaje")
            setCharacter(null)
        }finally{
            setIsLoading(false)
        }
    }

    return { character, isLoading, error, fetchCharacter }
}