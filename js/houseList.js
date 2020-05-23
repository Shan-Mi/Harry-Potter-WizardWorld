const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

let houseName = ''

function checkName() {
  if (/gryffindor/.test(location.href)) {
    houseName = "Gryffindor"
    return
  }
  if (/hufflepuff/.test(location.href)) {
    houseName = "Hufflepuff"
    return
  }
  if (/ravenclaw/.test(location.href)) {
    houseName = "Ravenclaw"
    return
  }
  if (/slytherin/.test(location.href)) {
    houseName = "Slytherin"
    return
  }
}
checkName()

const url = new URL('https://www.potterapi.com/v1/characters/'),
  params = {
    key: key,
    house: houseName
  }

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

const listWrapperArea = document.querySelector('.list-wrapper')
const searchArea = document.querySelector('.search-box')
const charactersList = []

const loadHouse = async () => {
  try {
    const res = await fetch(url);
    characters = await res.json();
    displayList(characters);
  } catch (err) {
    console.error(err);
  }
};

const displayList = (characters) => {

  const htmlString = characters
    .map((character) => {
      charactersList.push(character)
      let roleColor = ''
      let role = character.role
      let hasAWand
      // console.log(character.role)

      if (/student/i.test(role)) {
        roleColor = 'student'
      }
      if (/Professor/i.test(role)) {
        roleColor = 'professor'
      }
      if (/Headmaster/i.test(role)) {
        roleColor = 'headmaster'
      }
      if (/undefined/i.test(role)) {
        roleColor = 'isUndefined'
      }
      if (/Auror/i.test(role)) {
        roleColor = 'auror'
      }
      if (/founder/i.test(role)) {
        roleColor = 'founder'
      }

      character.hasOwnProperty('wand') ? hasAWand = 'hasWand' : hasAWand = ''

      return `
        <div class="role ${roleColor} ${hasAWand}" data-name="${character.name}">
          <h3 class="name">${character.name}</h3>
          <p class="detailed-role">${character.role}</p>
          <p class="bloodStatus">${character.bloodStatus}</p>
          <p class="species">${character.species}</p>
          <p class="boggart">${character.boggart}</p>
        </div>
  `;

    })
    .join('');
  listWrapperArea.innerHTML = htmlString;

}

loadHouse()

//search
searchArea.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase()

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchString)
  )
  displayList(filteredCharacters)
})

//add event to each cart to open a module
listWrapperArea.addEventListener('click', (e) => {
  if (e.target.matches('.role')) {
    const getName = e.target.dataset.name
    const getResult = charactersList.filter(character =>
      character.name.includes(getName)
    )
    // console.log(getResult)
    let wand
    let isThereAWand
    const moduleArea = document.querySelector('.module')
    moduleArea.classList.remove('hidden')
    const overlay = document.querySelector('.overlay-blur')
    overlay.classList.remove('hidden')
    if (getResult[0].hasOwnProperty('wand')) {
      wand = getResult[0].wand
      isThereAWand = ""
    } else {
      wand = ''
      isThereAWand = 'hidden'
    }
    moduleArea.innerHTML = `
      <img src="img/character/${getResult[0].name.replace(/\s$/, '')}.webp" alt="${getResult[0].name.replace(/\s$/, '')} image" class="character-avatar">
      <div class="allInfo">
        <h2 class="name">${getResult[0].name}</h3>
        <p class="bloodStatus"><span class='title'>Blood Status:</span> ${getResult[0].bloodStatus}</p>
        <p class="deathEater"><span class='title'>Death Easter:</span> ${getResult[0].deathEater}</p>
        <p class="dumbeldoresArmy"><span class='title'>Dumbeldore's Army:</span> ${getResult[0].dumbledoresArmy}</p>
        <p class="house"><span class='title'>House:</span> ${getResult[0].house}</p>
        <p class="ministryOfMagic"><span class='title'>Ministry Of Magic:</span> ${getResult[0].ministryOfMagic}</p>
        <p class="orderOfThePhoenix"><span class='title'>Order Of The Phoenix:</span> ${getResult[0].orderOfThePhoenix}</p>
        <p class="charactor-role"><span class='title'>Role:</span> ${getResult[0].role}</p>
        <p class="school"><span class='title'>School:</span> ${getResult[0].school}</p>
        <p class="species"><span class='title'>Species:</span> ${getResult[0].species}</p>
        <p class="wand ${isThereAWand}"><span class='title'>Wand: </span>${wand}</p>
        <img class="wand-img ${isThereAWand}" src="img/wand/${getResult[0].name}_wand.webp" alt="${getResult[0].name}'s wand">
      </div>
      <div><img class="module-close-btn" src="img/close.svg" alt="close sign"></div>
    `
    moduleArea.addEventListener('click', (e) => {
      if (e.target.matches(".module-close-btn")) {
        moduleArea.classList.add('hidden')
        moduleArea.innerHTML = ''
        overlay.classList.add('hidden')
      }
    })

    overlay.addEventListener('click', () => {
      moduleArea.classList.add('hidden')
      moduleArea.innerHTML = ''
      overlay.classList.add('hidden')
    })
  }
})

/* Go back to top btn */
const goBackToFrontPageBtn = document.querySelector('.go-to-fp')
goBackToFrontPageBtn.addEventListener('click', () => {
  window.location = "index.html"
})

/* Go back to top function for mobile*/
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else { // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 250;//faster
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

document.querySelector('.date').innerHTML = new Date()