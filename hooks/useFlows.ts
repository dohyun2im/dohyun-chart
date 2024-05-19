import apis from "@/apis";
import { useQuery } from "@tanstack/react-query";

const useFlows = () => {
  return useQuery({
    queryKey: ["flow"],
    queryFn: async () => {
      return apis.fetchFlows();
    }
  });
};

export default useFlows;
