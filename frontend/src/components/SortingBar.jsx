const SortingBar = ({ value }) => {
  const barHeight = `${value}px`;

  return (
    <div
      className="relative flex items-end justify-center bg-indigo-400"
      style={{
        height: barHeight,
        width: "calc(100% / 60)", // You can tweak this to fit your layout
        minWidth: "6px",
      }}
    >
      <span className="absolute top-0 text-[10px] sm:text-[12px] text-black">
        {value}
      </span>
    </div>
  );
};


export default SortingBar;