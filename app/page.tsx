"use client";
import { AddNewTask } from "@/components/add-new-task";
import { ReportChart } from "@/components/report-chart";
import { DoingTodos } from "@/components/doing-todos";
import { DoneTodos } from "@/components/done-todos";
import HydrationZustand from "@/utils/hydration-zustand";

export default function Home() {
  return (
    <main className='flex  min-h-screen max-w-5xl flex-col px-4 py-20 sm:p-24 m-auto'>
      <HydrationZustand>
        <div className='flex flex-wrap w-full gap-x-9'>
          <AddNewTask />

          <ReportChart />
        </div>
        <DoingTodos />
        <DoneTodos />
      </HydrationZustand>
    </main>
  );
}
