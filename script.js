const firstSide = document.querySelector('#first');
const secondSide = document.querySelector('#second');
const btnSubmit = document.querySelector('#btn-submit');
const ratings = document.querySelector('.ratings').children;
const resultText = document.querySelector('#result-text');

//feedback-selected
let currentRating = 0;

const submit = () => {
  if (currentRating !== 0) {
    firstSide.classList.add('invisible');
    secondSide.classList.remove('invisible');
    resultText.textContent = `You selected ${currentRating} out of 5`;
  }
};

btnSubmit.addEventListener('click', submit);

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', function (e) {
    let id = i + 1;
    for (let j = 0; j < ratings.length; j++) {
      if (j + 1 != id) ratings[j].classList.remove('feedback-selected');
      else {
        if (!ratings[j].classList.contains('feedback-selected'))
          ratings[j].classList.add('feedback-selected');
      }
    }
    currentRating = id;
  });
}
