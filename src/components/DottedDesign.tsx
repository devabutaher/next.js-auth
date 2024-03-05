import Dotted from "./Dotted";

const DottedDesign = () => {
  return (
    <div className="space-y-16 lg:block hidden">
      <Dotted />

      <div className="flex justify-center items-center gap-4">
        <h1 className="text-5xl leading-4 font-semibold text-gray-200 antialiased">
          Next.js Auth
        </h1>
        <div className="size-10 rounded-full bg-sky-500" />
      </div>

      <Dotted />
    </div>
  );
};

export default DottedDesign;
