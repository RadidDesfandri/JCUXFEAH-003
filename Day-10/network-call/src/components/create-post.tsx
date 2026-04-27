"use client";

import { useInput } from "@/hooks/use-input";
import axios from "axios";
import { FormEvent, useState } from "react";

function CreatePost() {
  const [title, onChangeTitle] = useInput("");
  const [body, onChangeBody] = useInput("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      alert("Title and body is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
        },
      );

      console.log("RESPONSE:", response.data);

      alert("Success create post");
    } catch (error) {
      console.log("[ERROR]: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="title"
        className="border p-3 rounded w-full"
      />

      <textarea
        placeholder="Body"
        value={body}
        onChange={onChangeBody}
        className="border p-3 rounded w-full
      "
      />

      <button
        type="submit"
        disabled={isLoading}
        className="border p-3 roudned w-full active:scale-[99%] cursor-pointer transition-all duration-300"
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

export default CreatePost;
