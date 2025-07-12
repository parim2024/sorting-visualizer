export const bubbleSort = async (
  array,
  setArray,
  setStatus,
  setAlgorithm,
  speed,
  cancelSortRef
) => {
  cancelSortRef.current = false; // ✅ Reset before starting new sort

  setAlgorithm("Bubble Sort");
  setStatus("Sorting using Bubble Sort...");

  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (cancelSortRef.current) {
        setStatus("Sorting cancelled.");
        return;
      }

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setArray([...arr]);
        await sleep(speed);
      }
    }
  }

  setStatus("Array sorted successfully!");
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
