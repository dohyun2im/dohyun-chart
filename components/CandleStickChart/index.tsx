"use client";

import { numF } from "@/utils/format";
import dayjs from "dayjs";
import _ from "lodash";
import ReactApexChart from "react-apexcharts";

interface Props {
  data?: { x: string; y: number[] }[];
}

const CandleStickChart: React.FC<Props> = ({ data }) => {
  return (
    <ReactApexChart
      type="candlestick"
      height={370}
      series={[
        {
          data: data ?? []
        }
      ]}
      options={{
        chart: {
          height: 370,
          type: "candlestick",
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          formatter: (val) => `${numF(Number(val))}원`
        },
        tooltip: {
          enabled: true,
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const [open, high, low, trade] = w.globals.initialSeries[seriesIndex].data[dataPointIndex].y;
            const space = "&nbsp;";

            return (
              "<ul>" +
              "<li><b>시가</b> " +
              `${numF(Number(open))}원${space.repeat(5)}` +
              "</li>" +
              "<li><b>고가</b> " +
              `${numF(Number(high))}원${space.repeat(5)}` +
              "</li>" +
              "<li><b>저가</b> " +
              `${numF(Number(low))}원${space.repeat(5)}` +
              "</li>" +
              "<li><b>종가</b> " +
              `${numF(Number(trade))}원${space.repeat(5)}` +
              "</li>" +
              "</ul>"
            );
          }
        },
        xaxis: {
          type: "category",
          labels: {
            formatter: (val) => dayjs(val).format("MM월 DD일")
          },
          tooltip: {
            enabled: true
          }
        },
        yaxis: {
          labels: {
            formatter: (val) => `${numF(Number(val))}원`
          },
          tooltip: {
            enabled: true
          }
        }
      }}
    />
  );
};

export default CandleStickChart;
