export const mergeSort = async (
  array,
  setArray,
  setStatus,
  setAlgorithm,
  speed,
  cancelSortRef
) => {
  cancelSortRef.current = false;
  setAlgorithm("Merge Sort");
  setStatus("Sorting using Merge Sort...");

  const arr = [...array];

  await mergeSortHelper(arr, 0, arr.length - 1, setArray, speed, cancelSortRef);

  if (!cancelSortRef.current) {
    setStatus("Array sorted successfully!");
  } else {
    setStatus("Sorting cancelled.");
  }
};

const mergeSortHelper = async (arr, left, right, setArray, speed, cancelSortRef) => {
  if (left >= right || cancelSortRef.current) return;

  const mid = Math.floor((left + right) / 2);
  await mergeSortHelper(arr, left, mid, setArray, speed, cancelSortRef);
  await mergeSortHelper(arr, mid + 1, right, setArray, speed, cancelSortRef);
  await merge(arr, left, mid, right, setArray, speed, cancelSortRef);
};

const merge = async (arr, left, mid, right, setArray, speed, cancelSortRef) => {
  let temp = [];
  let i = left;
  let j = mid + 1;

  while (i <= mid && j <= right) {
    if (cancelSortRef.current) return;

    if (arr[i] < arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
    await sleep(speed);
  }

  while (i <= mid) {
    if (cancelSortRef.current) return;
    temp.push(arr[i++]);
    await sleep(speed);
  }

  while (j <= right) {
    if (cancelSortRef.current) return;
    temp.push(arr[j++]);
    await sleep(speed);
  }

  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
    setArray([...arr]);
    await sleep(speed);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
