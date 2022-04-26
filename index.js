const $inputField = document.querySelector(".list-input");
const $insertButton = document.querySelector(".input-button");
const $listField = document.querySelector(".list-elements");

let finalList = "";
let listCount = 0;

$insertButton.addEventListener("click", function () {
  if ($inputField.value == "") return;
  listCount++;
  finalList =
    finalList +
    `<div class="item-wrapper"><input class="item-checkbox" type="checkbox" id="item-` +
    listCount +
    `"/><label class="item-text" for="item-` +
    listCount +
    `">` +
    $inputField.value +
    `</label></div>`;
  $listField.innerHTML = finalList;
});