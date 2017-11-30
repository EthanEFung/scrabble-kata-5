function createSearchBar() {
  const $searchBar = document.createElement("div");
  $searchBar.setAttribute("class", "search-bar");

  const $input = createInput();
  const $submit = createSubmit();

  $searchBar.appendChild($input);
  $searchBar.appendChild($submit);
  return $searchBar;
}

function createInput() {
  const $input = document.createElement("input");
  $input.setAttribute("id", "input");
  return $input;
}

function createSubmit() {
  const $submit = document.createElement("button");
  $submit.setAttribute("class", "submit");
  $submit.textContent = "Submit";
  $submit.addEventListener("click", e => {
    e.preventDefault();
    const input = document.getElementById("input").value;
    fetch(`/${input}`)
      .then(res => res.json())
      .then(data => {});
  });
  return $submit;
}
