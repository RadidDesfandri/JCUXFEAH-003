const filterData = ["all", "active", "completed"];

const Filter = () => {
  return (
    <div className="mt-5 md:mt-0 px-5 py-3 bg-white shadow rounded-md md:py-5 md:rounded-xl md:rounded-t-none dark:bg-[#25273D] dark:text-[#767992] flex items-center justify-center md:justify-between">
      <p className="hidden md:block">5 Items left</p>
      <div className="flex items-center gap-4 font-semibold">
        {filterData.map((item) => (
          <button
            key={item}
            type="button"
            className="cursor-pointer capitalize"
          >
            {item}
          </button>
        ))}
      </div>
      <button type="button" className="hidden md:block cursor-pointer">
        Clear Completed
      </button>
    </div>
  );
};

export default Filter;
