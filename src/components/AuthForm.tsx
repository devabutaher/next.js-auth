const AuthForm = () => {
  return (
    <div className="grid place-items-center space-y-10">
      <div className="flex justify-center items-center gap-4">
        <h1 className="lg:text-[3.5rem] text-4xl leading-4 font-semibold text-gray-200 antialiased">
          Login Now
        </h1>
        <div className="lg:size-10 size-8 rounded-full bg-sky-500" />
      </div>

      <form className="space-y-10 xl:min-w-[30rem]">
        <label htmlFor="email">
          <span>Email</span>
          <input type="email" id="email" placeholder="example@mail.com" />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input type="password" id="password" placeholder="123456" />
        </label>

        <button>
          <span>Submit Now</span>
          <div className="size-6 rounded-full bg-gray-100" />
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
