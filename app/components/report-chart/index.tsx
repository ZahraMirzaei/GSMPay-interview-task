import React from "react";
import { BoxContainer } from "@/app/components/ui/box-container";
import { DoughnutChart } from "@/app/components/ui/chart";
import { useTodoReport } from "@/app/components/report-chart/useTodoReport";
import { convertToPersianNumber } from "@/utils/convert-en-number-to-fa-number";

export const ReportChart = () => {
  const { totalTasks, doneTasks } = useTodoReport();
  return (
    <BoxContainer title='گزارش موفقیت' className='order-1 xs:order-2'>
      <div className='flex justify-start items-end flex-wrap'>
        <DoughnutChart />
        <div className=''>
          <p className='font-bold text-lg'>
            <span>{convertToPersianNumber(doneTasks)}</span>
            &nbsp; از&nbsp;
            <span>{convertToPersianNumber(totalTasks)}</span>
          </p>
          <p className='text-base'>تسک انجام شده است</p>
        </div>
      </div>
    </BoxContainer>
  );
};
