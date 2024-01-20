import React from "react";
import { BoxContainer } from "@/components/ui/box-container";
import { List } from "@/components/ui/list";
import { useDoingTodos } from "@/components/doing-todos/use-doing-todos";
import { DOING_TASK_TITLE } from "@/utils/constant";

export const DoingTodos = () => {
  const { doingList, deleteTodo } = useDoingTodos();
  return (
    <BoxContainer title={DOING_TASK_TITLE}>
      <List
        todoList={doingList}
      />
    </BoxContainer>
  );
};
