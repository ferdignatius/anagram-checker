// sorting
function sortWord(word) {
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

function isAlpha(str) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    const isLower = code >= 97 && code <= 122;

    if(!isLower) return false;
  }
  return true;
}

export default function isAnagram(word1, word2) {
  
  // jadikan jadi lowercase & hanya terima a-z aja
  const normalize = (string) => string.toLowerCase();
  const str1 = normalize(word1);
  const str2 = normalize(word2);

  // jika bukan huruf return false
  if (!isAlpha(str1) || !isAlpha(str2)) return false;

  // jika panjang keduanya berbeda, udah pasti bukan anagram
  if (str1.length !== str2.length) return false;

  // sorting tiap huruf supaya bisa dicocokkan antar index
  const strSorted1 = sortWord(str1);
  const strSorted2 = sortWord(str2);

  // cek kecocokan tiap huruf antara str1 & str2
  if (strSorted1 === strSorted2) {
    return true;
  } else {
    return false;
  }
}
