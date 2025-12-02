import isAnagram from './logicIsAnagram/logicIsAnagram.js'

const form = document.getElementById('form');
const word1 = document.getElementById('word1'); 
const word2 = document.getElementById('word2');
const result = document.getElementById('result');
const decription = document.getElementById('description-result');
const retryBtn = document.getElementById('retryBtn');
const resultImg = document.getElementById('result-img');
const cardResult = document.querySelector('.card-result');

// form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const w1 = word1.value;
  const w2 = word2.value;
  result.textContent = '';
  decription.textContent = '';
  resultImg.style.display = "none";
  
  cardResult.classList.remove('success', 'error');
  
  if (isAnagram(w1, w2)) {
    result.textContent = `Anagram`;
    decription.textContent = `${w1} dan ${w2} merupakan Anagram, yang berarti keduanya terdiri dari huruf yang identik dan memiliki jumlah yang sama, hanya saja urutannya berbeda.`;
    cardResult.classList.add('success');
    resultImg.src = "./assets/check.png";
  } else {
    result.textContent = `Bukan Anagram`;
    decription.textContent = `${w1} dan ${w2} bukan Anagram, karena kedua istilah ini tidak mempunyai susunan huruf yang identik. Ini berarti bahwa keduanya bukan merupakan anagram.`;
    cardResult.classList.add('error');
    resultImg.src = "./assets/cross.png";
}

  resultImg.style.display = "block";
  retryBtn.style.display = "block"; 
})

// reset 
retryBtn.addEventListener('click', () => {
  word1.value = '';
  word2.value = '';
  result.textContent = 'Hasilnya akan muncul disini';
  decription.textContent = '';
  cardResult.classList.remove('success', 'error');
  retryBtn.style.display = "none";
  resultImg.style.display = "none"; 
})



