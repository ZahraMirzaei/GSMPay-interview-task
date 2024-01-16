import ChartJS from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { convertToPersianNumber } from "@/utils/convert-en-number-to-fa-number";

/**
 * Todo: we should get data value from a source.
 * Todo: remove hover effect.
 */
export const useDoughnutChart = () => {
  /* --------------------------- Chart registeration -------------------------- */
  ChartJS.register(ChartDataLabels);
  /* --------------------------- Chart configuration -------------------------- */
  const data = {
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#2F3A58", "#00B8A9"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 4,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    aspectRatio: 2,
    responsive: true,
    cutout: "45%",
    plugins: {
      datalabels: {
        formatter: (value: string) => {
          const farsiValue = convertToPersianNumber(value);
          return farsiValue + "٪";
        },
        color: "#fff",
        font: {
          weight: 700,
          size: 18,
          family: "vazirmatn",
        },
      },
      tooltip: { enabled: false }
    },
  };
  /* -------------------------------------------------------------------------- */
  return { data, options }
}
