"use client";

import LoadingSkeleton from "@/components/LoadingSkeleton";
import useBTCCandleByDays from "@/hooks/useBTCCandleByDays";
import { CurrencyBitcoinRounded } from "@mui/icons-material";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";
import dynamic from "next/dynamic";

const CandleStickChart = dynamic(() => import("@/components/CandleStickChart"), {
  ssr: false,
  loading: () => <LoadingSkeleton className="candle-stick-chart-skeleton" height={385} isLoading={true} />
});

const CandleStickChartCard: React.FC = () => {
  const { data, isLoading } = useBTCCandleByDays();

  return (
    <Stack spacing={1}>
      <Box display="flex" alignItems="center" gap={1}>
        <Box sx={{ background: yellow[700], height: 24, borderRadius: "50%" }}>
          <CurrencyBitcoinRounded htmlColor="#fff" sx={{ transform: "rotate(20deg)" }} />
        </Box>
        <Typography sx={{ fontWeight: 600 }}>Bitcoin</Typography>
        <Typography sx={{ fontSize: 12, color: grey[500] }}>BTC/KRW</Typography>
      </Box>

      <Card>
        <CardContent>
          <LoadingSkeleton className="candle-stick-chart-skeleton" height={385} isLoading={isLoading}>
            <CandleStickChart
              data={data
                ?.map((candle) => ({
                  x: candle.candle_date_time_utc,
                  y: [candle.opening_price, candle.high_price, candle.low_price, candle.trade_price]
                }))
                .reverse()}
            />
          </LoadingSkeleton>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CandleStickChartCard;
