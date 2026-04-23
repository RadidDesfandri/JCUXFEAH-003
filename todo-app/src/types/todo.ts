interface TodoItem {
  id: string;
  todo: string;
  isCompleted: boolean;
}

type FilterTodo = "all" | "active" | "completed";

export type { TodoItem, FilterTodo };
