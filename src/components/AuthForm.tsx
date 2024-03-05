"use client";

import { useState } from "react";

const AuthForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError(response.statusText);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center space-y-10">
      <div className="flex justify-center items-center gap-4">
        <h1 className="lg:text-5xl text-4xl leading-4 font-semibold text-gray-200 antialiased">
          Auth Form
        </h1>
        <div className="size-8 lg:size-10 rounded-full bg-sky-500" />
      </div>

      <form className="lg:space-y-8 space-y-6" onSubmit={handleSubmit}>
        {error && (
          <p className="text-rose-600 text-center text-lg">Error: {error}</p>
        )}

        <label htmlFor="email">
          <span>Email</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="123456"
            required
          />
        </label>

        <button disabled={loading}>
          {loading ? (
            <div className="loading"></div>
          ) : (
            <>
              <span>Submit</span>
              <div className="size-4 rounded-full bg-gray-100" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
