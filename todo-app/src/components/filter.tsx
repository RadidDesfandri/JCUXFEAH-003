import { FilterTodo } from "@/types/todo";
import clsx from "clsx";

const filterData = ["all", "active", "completed"];

interface FilterProps {
  onChangeFilter: (filter: FilterTodo) => void;
  filter: FilterTodo;
  clearCompleted: () => void;
  countTodo: number
}

const Filter = ({ onChangeFilter, filter, clearCompleted, countTodo }: FilterProps) => {
  return (
    <div className="mt-5 md:mt-0 px-5 py-3 bg-white shadow rounded-md md:py-5 md:rounded-xl md:rounded-t-none dark:bg-[#25273D] dark:text-[#767992] flex items-center justify-center md:justify-between">
      <p className="hidden md:block">{countTodo} Items left</p>
      <div className="flex items-center gap-4  transition-all duration-300">
        {filterData.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onChangeFilter(item as FilterTodo)}
            className={clsx(
              "cursor-pointer capitalize",
              item === filter ? "font-bold" : "font-medium",
            )}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={clearCompleted}
        className="hidden md:block cursor-pointer"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Filter;
