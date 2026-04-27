"use client";

import { Post } from "@/types/post.type";
import axios from "axios";
import { useEffect, useState } from "react";

function ListData() {
  const [data, setData] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState<boolean>(false);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
      );

      setData(data);
      return data;
    } catch (error) {
      console.log("[ERROR]: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    setIsLoadingDelete(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      setData(data.filter((item) => item.id !== id));
      alert(`Post with id ${id} deleted`);
    } catch (error) {
      console.log("[ERROR]: ", error);
    } finally {
      setIsLoadingDelete(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full grid grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="border p-3 rounded flex gap-4 flex-col justify-between"
        >
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <p className="tetx-sm">{item.body}</p>
          <button
            type="button"
            disabled={isLoadingDelete}
            onClick={() => handleDelete(item.id)}
            className="border-red-500 border p-3 w-full rounded active:scale-[99%] transition-all duration-300 cursor-pointer"
          >
            {isLoadingDelete ? "Loading..." : "Delete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListData;
