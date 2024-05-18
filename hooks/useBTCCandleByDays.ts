import apis from "@/apis";
import { useQuery } from "@tanstack/react-query";

const useBTCCandleByDays = () => {
  return useQuery({
    queryKey: ["upbit", "btc", "candle", "days"],
    queryFn: async () => {
      return apis.fetchBTCCandleByDays();
    }
  });
};

export default useBTCCandleByDays;
