import { Flow } from "@/types/apis/flow";

export const fetchFlows = async (): Promise<Flow> => {
  return fetch("/api/flow").then((res) => res.json());
};
