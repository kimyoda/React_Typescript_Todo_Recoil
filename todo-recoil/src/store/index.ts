import { atom, selector } from "recoil";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

// atom 기본 단위

export const todoState = atom({
  key: "todos",
  default: [] as Todo[],
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    total: get(todoState).length,
    completed: get(todoState).filter((todo) => todo.completed).length,
    notCompleted: get(todoState).filter((todo) => !todo.completed).length,
  }),
});
