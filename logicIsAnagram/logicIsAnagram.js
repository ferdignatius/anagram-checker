import isAlpha from "./isAlpha.js";
import sortWord from "./sortWord.js";

export default function isAnagram(word1, word2) {
  // jadikan jadi lowercase
  const normalize = (string) => string.toLowerCase();
  const str1 = normalize(word1);
  const str2 = normalize(word2);

  // jika bukan huruf return false
  if (!isAlpha(str1) || !isAlpha(str2)) return { ok: false, error: "Input hanya boleh huruf a-z" };

  // jika panjang keduanya berbeda, udah pasti bukan anagram
  if (str1.length !== str2.length) return { ok: false, error: "Panjang kata berbeda, sudah pasti bukan Anagram" };

  // sorting tiap huruf supaya bisa dicocokkan antar index
  const strSorted1 = sortWord(str1);
  const strSorted2 = sortWord(str2);

  // cek kecocokan tiap huruf antara str1 & str2
  return { ok: true, result: strSorted1 === strSorted2 };
}
