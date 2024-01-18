import React from "react";
import { BoxContainer } from "@/components/ui/box-container";
import { List } from "@/components/ui/list";
import { useDoneTodos } from "@/components/done-todos/use-done-todos";
import { DONE_TASK_TITLE } from "@/utils/constant";

export const DoneTodos = () => {
  const { doneList } = useDoneTodos();
  return (
    <BoxContainer title={DONE_TASK_TITLE}>
      <List todoList={doneList} />
    </BoxContainer>
  );
};
