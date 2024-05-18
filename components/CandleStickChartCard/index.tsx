"use client";

import CandleStickChartSkeleton from "@/components/skeletons/CandleStickChartSkeleton";
import useBTCCandleByDays from "@/hooks/useBTCCandleByDays";
import { CurrencyBitcoinRounded } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import dynamic from "next/dynamic";

const CandleStickChart = dynamic(() => import("@/components/CandleStickChart"), {
  ssr: false,
  loading: () => <CandleStickChartSkeleton isLoading={true} />
});

const CandleStickChartCard: React.FC = () => {
  const { data, isLoading } = useBTCCandleByDays();

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ background: yellow[700], height: 24, borderRadius: "50%" }}>
              <CurrencyBitcoinRounded htmlColor="#fff" sx={{ transform: "rotate(20deg)" }} />
            </Box>
            <Typography sx={{ fontWeight: 600 }}>비트코인</Typography>
            <Typography sx={{ fontSize: 12, color: grey[500] }}>BTC/KRW</Typography>
          </Box>
        }
      />
      <CardContent>
        <CandleStickChartSkeleton isLoading={isLoading}>
          <CandleStickChart
            data={data
              ?.map((candle) => ({
                x: candle.candle_date_time_utc,
                y: [candle.opening_price, candle.high_price, candle.low_price, candle.trade_price]
              }))
              .reverse()}
          />
        </CandleStickChartSkeleton>
      </CardContent>
    </Card>
  );
};

export default CandleStickChartCard;