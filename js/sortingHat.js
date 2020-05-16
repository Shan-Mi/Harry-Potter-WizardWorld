const sortMeBtn = document.querySelector('.js-sort')
const sortMeAreaWrapper = document.querySelector('.main-content__wrapper')
const sortingHat = document.querySelector('.sorting-hat')
const avatarMouth = document.querySelector('.avatar__mouth')
const houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"]
let item = houses[Math.floor(Math.random() * houses.length)];
let sortingHatAnswer = document.querySelector('.sorting-hat__answer')
let genderSelector = document.querySelector('input[name=avatar-gender]')
let hair = document.querySelector('.avatar__hair')

sortMeBtn.addEventListener('click', () => {
  sortMeAreaWrapper.setAttribute('class', '')
  sortMeAreaWrapper.classList.add('main-content__wrapper')
  sortingHat.classList.remove('animate')
  avatarMouth.classList.remove('animate')

  const houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"]
  let item = houses[Math.floor(Math.random() * houses.length)]
  setTimeout(function () {
    sortingHat.classList.add('animate')
    sortingHatAnswer.textContent = `${item} !`
  }, 1000)

  setTimeout(function () {
    avatarMouth.classList.add('animate')
  }, 1500)

  setTimeout(function () {
    sortMeAreaWrapper.classList.add(`${item}`)
  }, 4000);
})

genderSelector.addEventListener('change', () => {
  let value = genderSelector.querySelector('checked').value
  value == 1 ? hair.classList.remove('female') : hair.classList.add('female')
})

const sortingHatAnchor = document.querySelector('#sorting-hat-anchor')
setTimeout(function () {
  sortingHatAnchor.scrollIntoView();
}, 2000) //after 2 seconds, meet the sorting hat