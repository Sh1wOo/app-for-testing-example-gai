const ProgressBar: React.FC<{
  current: number;
  total: number;
  answers: Record<number, string>;
}> = ({ current, total, answers }) => {
  return (
    <div className="flex mb-4">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 mx-1 rounded ${
            index <= current
              ? answers[index] === "correct"
                ? "bg-green-500"
                : answers[index] === "incorrect"
                ? "bg-red-500"
                : "bg-gray-400"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export { ProgressBar };
