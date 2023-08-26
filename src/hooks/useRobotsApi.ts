import axios from "axios";
import { Robot } from "../types";

const useRobotsApi = () => {
  const apiBaseUrl = import.meta.env.VITE_ROBOTS_API_URL;

  const getRobotsApi = async () => {
    try {
      const { data } = await axios.get<Robot[]>(`${apiBaseUrl}/robots`);

      return data;
    } catch {
      throw new Error("Could not get the robots");
    }
  };

  return { getRobotsApi };
};

export default useRobotsApi;
