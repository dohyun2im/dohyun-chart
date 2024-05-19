import CandleStickChartCard from "@/components/CandleStickChartCard";
import SqlQueryEditorCard from "@/components/SqlQueryEditorCard";
import { Stack } from "@mui/material";

const DashboardPage: React.FC = () => {
  return (
    <Stack spacing={4}>
      <CandleStickChartCard />
      <SqlQueryEditorCard />
    </Stack>
  );
};

export default DashboardPage;
