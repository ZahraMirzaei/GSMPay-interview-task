import React from "react";
import { BoxContainer } from "@/components/ui/box-container";
import { DoughnutChart } from "@/components/ui/chart";
import { useTodoReport } from "@/components/report-chart/use-todo-report";
import { convertToPersianNumber } from "@/utils/convert-en-number-to-fa-number";
import { SUCCESS_REPORT_TITLE, DONE_TASK_REPORT, FROM } from "@/utils/constant";

export const ReportChart = () => {
  const { totalTodos, doneTodos } = useTodoReport();
  
  return (
    <BoxContainer title={SUCCESS_REPORT_TITLE} className='order-1 xs:order-2'>
      <div className='flex justify-start items-end flex-wrap'>
        <DoughnutChart />
        <div className=''>
          <p className='font-bold text-lg'>
            <span>{convertToPersianNumber(doneTodos)}</span>
            &nbsp;{FROM}&nbsp;
            <span>{convertToPersianNumber(totalTodos)}</span>
          </p>
          <p className='text-base'>{ DONE_TASK_REPORT }</p>
        </div>
      </div>
    </BoxContainer>
  );
};
