//DOM element to display response after fetching
function createOutput() {
  const $output = document.createElement("ul");
  $output.setAttribute("class", "output");
  return $output;
}

window.onload = function() {
  const $searchBar = createSearchBar();
  //controller for the view

  const $output = createOutput();

  document.body.appendChild($searchBar);
  document.body.appendChild($output);
};
