const sortMeBtn = document.querySelector('.js-sort')
const sortMeAreaWrapper = document.querySelector('.main-content__wrapper')
const sortingHat = document.querySelector('.sorting-hat')
const avatarMouth = document.querySelector('.avatar__mouth')
const houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"]
const leftEye = document.querySelector('.avatar__eyes.left')
const rightEye = document.querySelector('.avatar__eyes.right')
const mouth = document.querySelector('.avatar__mouth')
const jumpToAnswerLink = document.querySelector('#jumpToAnswerLink')
const genderArea = document.querySelector('.avatar-gender')

let item = houses[Math.floor(Math.random() * houses.length)];
let sortingHatAnswer = document.querySelector('.sorting-hat__answer')
let genderSelectors = document.querySelectorAll('input[name=avatar-gender]')
let hair = document.querySelector('.avatar__hair')

sortMeBtn.addEventListener('click', () => {
  // sortMeAreaWrapper.setAttribute('class', '')
  genderArea.classList.remove('reminder')
  sortMeAreaWrapper.removeAttribute('class')
  sortMeAreaWrapper.classList.add('main-content__wrapper')
  sortingHat.classList.remove('animate')
  avatarMouth.classList.remove('animate')

  const houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"]
  let item = houses[Math.floor(Math.random() * houses.length)]
  jumpToAnswerLink.setAttribute('href', `${item}.html`)

  sortingHatAnswer.classList.add('click-reminder')
  setTimeout(() => {
    sortingHatAnswer.classList.remove('click-reminder')
  }, 6500)

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

  setTimeout(() => {
    genderArea.classList.add('reminder')
  }, 4000);
})

genderSelectors.forEach(genderSelector => {
  genderSelector.addEventListener('change', (e) => {
    // console.log(e.currentTarget)
    let value = e.currentTarget.value
    // console.log(value)
    value == 1 ? hair.classList.remove('female') : hair.classList.add('female')
    value == 1 ? leftEye.classList.remove('female') : leftEye.classList.add('female')
    value == 1 ? rightEye.classList.remove('female') : rightEye.classList.add('female')
    value == 1 ? mouth.style.background = "#333" : mouth.style.background = "#e17055"
  })
})

const sortingHatAnchor = document.querySelector('#sorting-hat-anchor')
setTimeout(function () {
  sortingHatAnchor.scrollIntoView({
    behavior: "smooth"
  });
}, 4000) //after 4 seconds, meet the sorting hat

const goToSpellBtn = document.querySelector('.go-to-spell')
goToSpellBtn.addEventListener('click', () => {
  window.location = 'spell.html'
})