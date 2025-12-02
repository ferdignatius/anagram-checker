export default function sortWord(word) {
  // inisiasi dan masukkan word ke array wordSorted
  const arr = [];
  for (let i = 0; i < word.length; i++) arr.push(word[i])
  
  for (let i = 0; i < word.length - 1; i++) {
    for (let j = 0; j < word.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let sorted = '';
  for (let i = 0; i < arr.length; i++) sorted += arr[i];
  
  return sorted;
}