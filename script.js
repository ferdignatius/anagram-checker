import isAnagram from './logicIsAnagram/logicIsAnagram.js'

// inisiasi
const form = document.getElementById('form');
const word1 = document.getElementById('word1'); 
const word2 = document.getElementById('word2');
const result = document.getElementById('result');
const description = document.getElementById('description-result');
const retryBtn = document.getElementById('retryBtn');
const resultImg = document.getElementById('result-img');
const cardResult = document.querySelector('.card-result');

// function
function showResult(title, desc, type, image) {
  result.textContent = title;
  description.textContent = desc;
  cardResult.classList.add(type);
  resultImg.src = image
  resultImg.style.display = "block";
  retryBtn.style.display = "block"; 
}

// form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const w1 = word1.value;
  const w2 = word2.value;
  result.textContent = '';
  description.textContent = '';
  resultImg.style.display = "none";
  
  cardResult.classList.remove('success', 'error');
  
  const res = isAnagram(w1, w2); 
  if (!res.ok) {
    showResult(
      'Bukan Anagram',
      `${w1} dan ${w2} bukan Anagram, ${res.error}`,
      'error',
      './assets/cross.png'
    )
  } else if (!res.result) {
    showResult(
      'Bukan Anagram',
      `${w1} dan ${w2} bukan Anagram, karena kedua istilah ini tidak mempunyai susunan huruf yang identik.`,
      'error',
      './assets/cross.png'
    )
  } else {
    showResult(
      'Anagram',
      `${w1} dan ${w2} merupakan Anagram, yang berarti keduanya terdiri dari huruf yang identik dan memiliki jumlah yang sama, hanya saja urutannya berbeda.`,
      'success',
      './assets/check.png'
    )
  }
})

// reset 
retryBtn.addEventListener('click', () => {
  word1.value = '';
  word2.value = '';
  result.textContent = 'Hasilnya akan muncul disini';
  description.textContent = '';
  cardResult.classList.remove('success', 'error');
  retryBtn.style.display = "none";
  resultImg.style.display = "none"; 
})

