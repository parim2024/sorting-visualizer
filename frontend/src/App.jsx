import { useEffect, useState, useRef } from "react";

import "./index.css";
import SortingBar from "./components/SortingBar";
import Controls from "./components/Controls";
import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";

function App() {
  const [array, setArray] = useState([]);
  const [status, setStatus] = useState("Random array generated");
  const [algorithm, setAlgorithm] = useState("None");
  const [speed, setSpeed] = useState(50); // milliseconds
  const cancelSortRef = useRef(false);
  const [isSorting, setIsSorting] = useState(false);

  const generateArray = () => {
    cancelSortRef.current = true; // cancel ongoing sort
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 10);
    }
    setArray(newArray);
    setAlgorithm("None");
    setStatus("New array generated");
    setIsSorting(false); // allow new sort after cancel
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleBubbleSort = async () => {
    if (isSorting) return;
    cancelSortRef.current = false;
    setIsSorting(true);
    await bubbleSort(
      array,
      setArray,
      setStatus,
      setAlgorithm,
      speed,
      cancelSortRef,
      setIsSorting
    );
    setIsSorting(false);
  };

  const handleSelectionSort = async () => {
    if (isSorting) return;
    cancelSortRef.current = false;
    setIsSorting(true);
    await selectionSort(
      array,
      setArray,
      setStatus,
      setAlgorithm,
      speed,
      cancelSortRef,
      setIsSorting
    );
    setIsSorting(false);
  };

  const handleInsertionSort = async () => {
    if (isSorting) return;
    cancelSortRef.current = false;
    setIsSorting(true);
    await insertionSort(
      array,
      setArray,
      setStatus,
      setAlgorithm,
      speed,
      cancelSortRef,
      setIsSorting
    );
    setIsSorting(false);
  };

  const handleMergeSort = async () => {
    if (isSorting) return;
    cancelSortRef.current = false;
    setIsSorting(true);
    await mergeSort(
      array,
      setArray,
      setStatus,
      setAlgorithm,
      speed,
      cancelSortRef,
      setIsSorting
    );
    setIsSorting(false);
  };

  const handleQuickSort = async () => {
    if (isSorting) return;
    cancelSortRef.current = false;
    setIsSorting(true);
    await quickSort(
      array,
      setArray,
      setStatus,
      setAlgorithm,
      speed,
      cancelSortRef,
      setIsSorting
    );
    setIsSorting(false);
  };

  return (
    <div className="min-h-[100vh] bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-3">
        Sorting Visualizer
      </h1>
      <p className="text-sm text-gray-700 mb-2">
        Algorithm: <span className="font-semibold">{algorithm}</span>
      </p>
      <p className="text-sm text-gray-600 italic mb-4">{status}</p>

      <Controls
        generateArray={generateArray}
        bubbleSort={handleBubbleSort}
        selectionSort={handleSelectionSort}
        insertionSort={handleInsertionSort}
        mergeSort={handleMergeSort}
        quickSort={handleQuickSort}
        speed={speed}
        setSpeed={setSpeed}
        isSorting={isSorting}
      />

      <div className="flex items-end justify-center flex-wrap h-[340px] w-full max-w-7xl px-2 sm:px-4 gap-[1px] bg-white rounded mx-auto">
        {array.map((value, index) => (
          <SortingBar key={index} value={value} />
        ))}
      </div>
    </div>
  );
}

export default App;
