"use client";

import { TodoItem } from "@/types/todo";
import Card from "./card";

interface ListProps {
  todos: TodoItem[];
  deleteTodo: (id: string) => void;
  completedTodo: (id: string) => void;
}

const List = ({ todos, deleteTodo, completedTodo }: ListProps) => {
  return (
    <div className="mt-5 bg-white shadow rounded-md md:rounded-xl md:rounded-b-none max-h-96 overflow-y-auto dark:bg-[#25273D] dark:text-[#767992]">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Card
            key={todo.id}
            completedTodo={() => completedTodo(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            isCompleted={todo.isCompleted}
            todo={todo.todo}
          />
        ))
      ) : (
        <p className="p-10 text-center">Empty</p>
      )}
      <footer className="px-5 py-3 md:hidden flex items-center justify-between">
        <p>5 Items left</p>
        <button className="cursor-pointer">Clear Completed</button>
      </footer>
    </div>
  );
};

export default List;
