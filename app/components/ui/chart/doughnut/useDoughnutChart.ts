import ChartJS from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { convertToPersianNumber } from "@/utils/convert-en-number-to-fa-number";

export const useDoughnutChart = () => { 
  ChartJS.register(ChartDataLabels);
  /**
   * Todo: we should get data value from a source.
   * Todo: remove hover effect.
   * Todo: decrease width of chart.
   */
  const data = {
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#2F3A58", "#00B8A9"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 5,
        circumference: 180,
        rotation: 270,
      },
    ],
  };
  
  const options = {
    aspectRatio: 2,
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value: string) => {
          const farsiValue = convertToPersianNumber(value);
          return farsiValue + "٪";
        },
        color: ["white", "white"],
        font: {
          weight: 700,
          size: 20,
          family: "vazirmatn",
        },
      },
    },
  };

  return {data, options}
}
