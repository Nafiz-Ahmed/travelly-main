const autoComplete = (x, y, z, a) => {
  const input = x;
  const suggestions = y;
  var places = z;
  const next = a;

  // first we are sending all data to ul
  function sendUl() {
    const allUl = places
      .map((ap) => {
        return `
      <li>${ap}</li>
      `;
      })
      .join("");
    suggestions.innerHTML = allUl;
  }
  sendUl();

  // find or search the option that match in places...
  function findMatches(wordToMatch, places) {
    return places.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.match(regex);
    });
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, places);
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        // const name = place.replace(regex, `<li class="hl">${this.value}</li>`);
        return `
      <li>${place}</li>
      `;
      })
      .join("");

    suggestions.innerHTML = html;
  }

  input.addEventListener("change", displayMatches);
  input.addEventListener("keyup", displayMatches);

  function useSuggestion(e) {
    input.value = e.target.innerText;
    input.blur();
    suggestions.innerHTML = "";
  }

  suggestions.addEventListener("click", useSuggestion);
};

export default autoComplete;
