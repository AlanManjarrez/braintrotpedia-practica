import { useEffect, useState } from "react";
import BrainrotService from "../services/brainrot-service";
import type { BrainrotStats } from "../interface/brainrot-stats";

export const useStats = () => {
  const [stats, setStats] = useState<BrainrotStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      const data = await BrainrotService.getStats();
      setStats(data);
    } catch {
      setError("No se pudieron obtener las estadisticas");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchStats();
  }, []);
  return { stats, isLoading, error };
};
