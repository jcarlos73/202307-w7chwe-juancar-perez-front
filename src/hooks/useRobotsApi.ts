import axios from "axios";
import { useCallback } from "react";
import { Robot } from "../types";

const useRobotsApi = () => {
  const apiBaseUrl = import.meta.env.VITE_ROBOTS_API_URL;

  const getRobotsApi = useCallback(async (): Promise<Robot[]> => {
    try {
      const { data } = await axios.get<{ robots: Robot[] }>(
        `${apiBaseUrl}/robots`,
      );
      const { robots } = data;

      return robots;
    } catch {
      throw new Error("Could not get the robots");
    }
  }, [apiBaseUrl]);

  return { getRobotsApi };
};

export default useRobotsApi;
