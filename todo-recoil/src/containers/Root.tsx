import React from "react";
import { RecoilRoot } from "recoil";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export const Root = () => {
  return (
    <RecoilRoot>
      <div className="container">
        <h1>Todos</h1>
        <AddTodo />
        <TodoList />
      </div>
    </RecoilRoot>
  );
};
