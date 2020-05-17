// API key
const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

// create URL to get all Harry Potter all spells
const url = new URL('https://www.potterapi.com/v1/spells/'),
  params = {
    key: key
  }

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

const spellBtn = document.querySelector('.getSpell')
const spellCardWrapper = document.querySelector('#spell-main')
const spellCardArea = document.querySelector('.spell-card')


//spells structure: effect | spell | type | id
/* e.g. spells[0]
effect: "opens objects"
spell: "Aberto"
type: "Charm"
_id: "5b74ebd5fb6fc0739646754c" */

const getOneRandomSpell = async () => {
  try {
    const res = await fetch(url);
    spells = await res.json();
    const spellLength = spells.length
    let spellNumber = Math.floor(Math.random() * spellLength)
    let spell = spells[spellNumber]
    console.log(spell)
    displaySpell(spell);
  } catch (err) {
    console.error(err);
  }
};

const displaySpell = (spell) => {
  const htmlString = `
      <div class="spell-card">
        <h2 class="spell-name">"${spell.spell}"</h2>
        <p class="spell-effect">Effect: ${spell.effect}</p>
        <p class="spell-type">Type: ${spell.type}</p>
      </div>
      <button class="getSpell hvr-wobble-horizontal">Charm</button>
      `;
  spellCardWrapper.innerHTML = htmlString;
};

getOneRandomSpell();

spellCardWrapper.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    getOneRandomSpell()
    // displaySpell()
  }
})