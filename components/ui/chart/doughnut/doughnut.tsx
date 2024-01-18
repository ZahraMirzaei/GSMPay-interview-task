import { Doughnut } from "react-chartjs-2";
import { useDoughnutChart } from "@/components/ui/chart/doughnut/use-doughnut-chart";

export function DoughnutChart() {
  const { data, options } = useDoughnutChart();
  return (
    <div dir='ltr' className='min-w-1/2 h-[90px]' id='d-chart'>
      <Doughnut data={data} options={options} redraw={true}></Doughnut>
    </div>
  );
}
