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

const loadHouse = async () => {
  try {
    const res = await fetch(url);
    characters = await res.json();
    const charactersLength = characters.length
    displayList(characters);
  } catch (err) {
    console.error(err);
  }
};

const displayList = (characters) => {
  const htmlString = characters
    .map((character) => {
      let roleColor = ''
      switch (character.role) {
        case 'student':
          roleColor = 'student'
          break;
        case 'undefined':
          roleColor = isUndefined
        default:
          roleColor = 'staff'
          break;
      }

      return `
        <div class="role ${roleColor}">
          <img src="" alt="" class="character-avatar">
          <h3 class="name">${character.name}</h3>
          <p class="role">${character.role}</p>
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