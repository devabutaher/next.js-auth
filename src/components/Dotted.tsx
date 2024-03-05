const Dotted = () => {
  return (
    <div className="grid grid-cols-4 gap-16 place-items-center">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="size-10 rounded-full bg-gray-600" />
      ))}
    </div>
  );
};

export default Dotted;
