const Controls = ({
  generateArray,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  speed,
  setSpeed,
  isSorting,
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 mb-8">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={generateArray}
          className={`px-4 py-2 rounded shadow-md text-white font-medium ${
            isSorting
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isSorting ? "Cancel Sorting" : "Generate New Array"}
        </button>

        <button
          onClick={bubbleSort}
          disabled={isSorting}
          className={`px-4 py-2 rounded font-medium text-white shadow-md transition-all duration-200 ${
            isSorting
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          Bubble Sort
        </button>

        <button
          onClick={selectionSort}
          disabled={isSorting}
          className={`px-4 py-2 rounded font-medium text-white shadow-md transition-all duration-200 ${
            isSorting
              ? "bg-purple-300 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-600"
          }`}
        >
          Selection Sort
        </button>

        <button
          onClick={insertionSort}
          disabled={isSorting}
          className={`px-4 py-2 rounded font-medium text-white shadow-md transition-all duration-200 ${
            isSorting
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          Insertion Sort
        </button>

        <button
          onClick={mergeSort}
          disabled={isSorting}
          className={`px-4 py-2 rounded font-medium text-white shadow-md transition-all duration-200 ${
            isSorting
              ? "bg-pink-300 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          Merge Sort
        </button>

        <button
          onClick={quickSort}
          disabled={isSorting}
          className={`px-4 py-2 rounded font-medium text-white shadow-md transition-all duration-200 ${
            isSorting
              ? "bg-yellow-300 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          Quick Sort
        </button>
      </div>

      <div className="flex flex-col items-center mt-2">
        <label htmlFor="speed" className="text-sm font-medium text-gray-700">
          Speed: {speed} ms
        </label>
        <input
          id="speed"
          type="range"
          min="5"
          max="200"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
          className="w-40 accent-blue-500"
        />
      </div>
    </div>
  );
};

export default Controls;
