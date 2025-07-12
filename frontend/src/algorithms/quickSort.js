export const quickSort = async (
  array,
  setArray,
  setStatus,
  setAlgorithm,
  speed,
  cancelSortRef
) => {
  cancelSortRef.current = false;
  setAlgorithm("Quick Sort");
  setStatus("Sorting using Quick Sort...");

  const arr = [...array];

  await quickSortHelper(arr, 0, arr.length - 1, setArray, speed, cancelSortRef);

  if (!cancelSortRef.current) {
    setStatus("Array sorted successfully!");
  } else {
    setStatus("Sorting cancelled.");
  }
};

const quickSortHelper = async (arr, low, high, setArray, speed, cancelSortRef) => {
  if (low < high && !cancelSortRef.current) {
    const pivotIndex = await partition(arr, low, high, setArray, speed, cancelSortRef);
    await quickSortHelper(arr, low, pivotIndex - 1, setArray, speed, cancelSortRef);
    await quickSortHelper(arr, pivotIndex + 1, high, setArray, speed, cancelSortRef);
  }
};

const partition = async (arr, low, high, setArray, speed, cancelSortRef) => {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (cancelSortRef.current) return;

    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await sleep(speed);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await sleep(speed);

  return i + 1;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
