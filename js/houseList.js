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
    house: houseName //41
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

      return `
        <div class="role ${roleColor}" data-name="${character.name}">
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
    const moduleArea = document.querySelector('.module')
    moduleArea.classList.remove('hidden')
    moduleArea.innerHTML = `
      <img src="img/character/${getResult[0].name}.webp" alt="" class="character-avatar">
      <div class="allInfo">
        <p class="bloodStatus">${getResult[0].bloodStatus}</p>
        <p class="deathEater">${getResult[0].deathEater}</p>
        <p class="dumbeldoresArmy">${getResult[0].dumbledoresArmy}</p>
        <p class="house">${getResult[0].house}</p>
        <p class="ministryOfMagic">${getResult[0].ministryOfMagic}</p>
        <p class="name">${getResult[0].name}</p>
        <p class="orderOfThePhoenix">${getResult[0].orderOfThePhoenix}</p>
        <p class="charactor-role">${getResult[0].role}</p>
        <p class="school">${getResult[0].school}</p>
        <p class="species">${getResult[0].species}</p>
      </div>
      <button class="module-close-btn">X</button>
    `
    moduleArea.addEventListener('click', (e)=>{
      if(e.target.matches("button")){
        // console.log('this is close button')
        moduleArea.classList.add('hidden')
        moduleArea.innerHTML = ''
      }
    })

  }
})