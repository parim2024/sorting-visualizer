export const selectionSort = async (
  array,
  setArray,
  setStatus,
  setAlgorithm,
  speed,
  cancelSortRef
) => {
  cancelSortRef.current = false; // reset flag
  setAlgorithm("Selection Sort");
  setStatus("Sorting using Selection Sort...");

  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    if (cancelSortRef.current) {
      setStatus("Sorting cancelled.");
      return;
    }

    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (cancelSortRef.current) {
        setStatus("Sorting cancelled.");
        return;
      }

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }

      await sleep(speed);
    }

    // Swap
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      await sleep(speed);
    }
  }

  setStatus("Array sorted successfully!");
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
