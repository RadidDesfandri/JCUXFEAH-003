"use client";

import Filter from "@/components/filter";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Input from "@/components/input";
import List from "@/components/list";
import { FilterTodo, TodoItem } from "@/types/todo";
import { FormEvent, useState } from "react";

export default function Home() {
  // Buat hooks
  // Tampilkan data hooks
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Filter state
  const [filter, setFilter] = useState<FilterTodo>("all");

  // Bikin logic dan func -> create, delete, filter, checked
  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return; // Berguna agar tidak bisa input kosong

    setTodo([
      ...todo,
      { id: `id-${Date.now()}`, todo: input, isCompleted: isCompleted },
    ]);

    setInput("");
    setIsCompleted(false);
  };

  const deleteTodo = (id: string) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const completedTodo = (id: string) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const changeFilter = (filter: FilterTodo) => {
    setFilter(filter);
  };

  const clearCompleted = () => {
    setTodo((prev) => prev.filter((item) => !item.isCompleted));
  };

  const filteredData = todo.filter((item) => {
    if (filter === "active") return !item.isCompleted;
    if (filter === "completed") return item.isCompleted;

    return true;
  });

  return (
    <div className="bg-white dark:bg-[#171823] h-screen">
      <div className="relative">
        <img
          src="/banner.jpg"
          alt="Banner"
          className="w-full object-top md:object-center object-cover h-48 md:h-full"
        />

        <form
          onSubmit={addTodo}
          className="absolute left-1/2 -translate-x-1/2 transform top-14 md:top-16 px-5 w-full max-w-2xl"
        >
          <Header />
          <Input
            value={input}
            checked={isCompleted}
            onChange={(e) => setInput(e.target.value)}
            onChecked={() => setIsCompleted(!isCompleted)}
          />
          <List
            todos={filteredData}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
          />
          <Filter
            filter={filter}
            countTodo={filteredData.length}
            onChangeFilter={changeFilter}
            clearCompleted={clearCompleted}
          />
          <Footer />
        </form>
      </div>
    </div>
  );
}
