export const insertionSort = async (
  array,
  setArray,
  setStatus,
  setAlgorithm,
  speed,
  cancelSortRef
) => {
  cancelSortRef.current = false;
  setAlgorithm("Insertion Sort");
  setStatus("Sorting using Insertion Sort...");

  const arr = [...array];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    if (cancelSortRef.current) {
      setStatus("Sorting cancelled.");
      return;
    }

    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      if (cancelSortRef.current) {
        setStatus("Sorting cancelled.");
        return;
      }

      arr[j + 1] = arr[j];
      j--;
      setArray([...arr]);
      await sleep(speed);
    }

    arr[j + 1] = key;
    setArray([...arr]);
    await sleep(speed);
  }

  setStatus("Array sorted successfully!");
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
