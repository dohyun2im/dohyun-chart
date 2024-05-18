import CandleStickChartCard from "@/components/CandleStickChartCard";
import { Card, CardContent, Grid } from "@mui/material";

const DashboardPage: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <CandleStickChartCard />
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>sql editor</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
