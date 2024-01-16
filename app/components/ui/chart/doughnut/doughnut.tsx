import { Doughnut } from "react-chartjs-2";
import {useDoughnutChart} from '@/app/components/ui/chart/doughnut/useDoughnutChart'

export function DoughnutChart() {
  const { data, options } = useDoughnutChart();
  return (
    <div dir="ltr">
      <Doughnut data={data} options={options} redraw={true}></Doughnut>
    </div>
  );
}
