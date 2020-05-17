hpLib = (function () {
  const info = "Helper library to get data and draw list area from Harry Potter API"

  const version = "0.1"

  // API key
  const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';

  // create URL to get info that we want to get



  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  const hpLib = {
    drawCharactersPanel: function () {

    },

    createNode(element) {
      return document.createElement(element);
    },

    // Append the second parameter(element) to the first one
    append(parent, el) {
      return parent.appendChild(el);
    }

  }

  return hpLib
})();