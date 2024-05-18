import { Candle } from "@/types/apis/upbit";

export const fetchBTCCandleByDays = async (): Promise<Candle[]> => {
  return fetch("https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=30").then((res) => res.json());
};
