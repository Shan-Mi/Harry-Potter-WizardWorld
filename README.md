# Harry-Potter-WizardWorld
This is an individuel assignment, topic is made up by myself.

### Background:
This is a website for fans of Harry Potter film series, and here they can see all characters from Gryffindor / Hufflepuff / Ravenclaw / Slytherin as well as spells, etc. basically everything about Harry Potter’s magic world. They can also search by character’s name to get character’s information. This website is just for fun, and no user data will be stored, so no database requirement is needed. It is based on [API Link 1](https://www.potterapi.com/v1/) or maybe [API link 2](https://hp-api.herokuapp.com/) [Another website](https://www.wizardingworld.com/discover/films)) Maybe will get some information from here as well.

🌟 ➡[This figma link](https://www.figma.com/file/Aw0kz9EIwQ3sLLlBpNGe2P/Harry-Potter?node-id=0%3A1)⬅ is a rough design to visuralize the page. 🌟

All information will get from Harry Potter API by GET requirement with personal token.

### Functionality: 
On loading page, user will get a random house name from clicking sorting Hat and then user will be led to relevant page there all characters belong to this house will be listed in some list form. Only names are listed there, and grouped by their role (teacher/student/etc.). There will be four houses, we can switch to different house by clicking relevant badge.

Once user click a name, a overlay module will be displayed. User could see detailed information which get from that API, and also with one image of that character and a wand (if he/she has any). Maybe add extra information link to other fans website.

Search function: User could be able to search their desired character by input name (validation needed: name length more than 2 and less than 20, only alphabet allowed).

On loading page there will be a link to spell page, and there a random spell will be got from API. It will be able to go back to startpage as well as get a new spell. Add some animation if possible.

### Requirement:
- No frameworks, use fetch/axios to get data.
- Do responsive webdesign if have any extra time.
- Only use HTML / SASS to create this website from scratch

---
Following are information that can get from API (https://www.potterapi.com/v1/) :

GET     |-sortingHat (the only route that does not require a key)

        |-characters (Returns all characters.  195)

        |-characters/{characterId}

        |-houses (Returns all Hogwarts Houses. 4  Gryffindor / Hufflepuff / Ravenclaw / Slytherin)

        |-houses/{houseId}

        |-spells (Returns all spells. 151)

**characters info structure: URL Query Parameters**

**Param**            **Value**       **Description**

key                   your api key    required   $2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK

name                  string      

house                 string          Valid strings: (4)  'Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'

patronus              string

species               string          not required

bloodStatus           string          Valid strings: (4)  'pure-blood', 'half-blood', 'muggle-born', unknown' 

role                  string

school                string

deathEater            boolean

dumbledoresArmy       boolean

orderOfThePhoenix     boolean

ministryOfMagic       boolean

alias                 string

wand                  string

boggart               string

animagus              string



