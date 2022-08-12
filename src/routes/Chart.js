import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

function Chart({ coinId }) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery(
    [["price"], coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const ChartData =
    data &&
    data.map((price) => {
      return {
        x: price.time_close * 1000,
        y: [price.open, price.high, price.low, price.close],
      };
    });
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              data: ChartData,
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              type: "candlestick",
              height: 500,
              width: 500,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
            },
            stroke: {
              width: 2,
            },
            yaxis: {
              show: false,
              tickAmount: 7,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
