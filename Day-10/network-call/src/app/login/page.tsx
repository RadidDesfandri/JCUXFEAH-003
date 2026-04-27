"use client";

import { loginSchema } from "@/schemas/auth.schema";
import { LoginData } from "@/types/auth.type";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);

    alert("Login sucessfully");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Card form */}
      <form
        className="max-w-md border p-7 w-full rounded space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold">Login form</h1>
        <p className="text-neutral-300 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          numquam porro earum ea maxime? Quaerat!
        </p>

        <div>
          <input
            type="email"
            placeholder="email@example.com"
            {...register("email")}
            className={clsx(
              "border p-3 rounded w-full",
              errors.email ? "border-red-500" : "border-white",
            )}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="******"
            {...register("password")}
            className={clsx(
              "border p-3 rounded w-full",
              errors.password ? "border-red-500" : "border-white",
            )}
          />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="border p-3 roudned w-full active:scale-[99%] cursor-pointer transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
