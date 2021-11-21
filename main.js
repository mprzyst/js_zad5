const colors = ["green", "blue", "purple", "red", "gray"];
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = colors[Math.floor(Math.random() * colors.length)];
  paragraphs[i].title = paragraphs[i].textContent.length;
  paragraphs[i].addEventListener("click", (event) => klik(event));
}

function klik(event) {
  var ar = document.getElementsByTagName("p");

  for (let el of ar) {
    el.style.border = "none";
    el.style.backgroundColor = "inherit";
  }

  event.currentTarget.style.border = "thick solid green";
  if (event.currentTarget.nextElementSibling.nextElementSibling)
    event.currentTarget.nextElementSibling.nextElementSibling.style.border =
      "thick solid blue";
  if (event.currentTarget.previousElementSibling.previousElementSibling)
    event.currentTarget.previousElementSibling.previousElementSibling.style.border =
      "thick solid orange";

  let currentIndex = 0;
  for (let el of ar) {
    if (el.style.border === "thick solid green") break;
    else currentIndex++;
  }

  if (currentIndex % 2 == 0) {
    event.currentTarget.style.backgroundColor = "black";
  } else {
    event.currentTarget.style.backgroundColor = "gray";
  }
}

var headers = document.getElementsByTagName("header");

for (let el of headers) {
  el.addEventListener("click", (event) => hideShow(event));
}

function hideShow(event) {
  if (event.currentTarget.nextElementSibling.style.display === "none") {
    event.currentTarget.nextElementSibling.style.display = "block";
  } else {
    event.currentTarget.nextElementSibling.style.display = "none";
  }
}

function addNewElement(event) {
  event.preventDefault();

  var textNewHeader = document.getElementById("fheader").value;
  var textNewParagraph = document.getElementById("fparagraph").value;
  console.log(textNewHeader);
  console.log(textNewParagraph);

  let fo = document.getElementsByTagName("form")[0];

  var newHeader = document.createElement("header");
  var newParagraph = document.createElement("p");

  newHeader.append(textNewHeader);
  newParagraph.append(textNewParagraph);
  newParagraph.style.color = colors[Math.floor(Math.random() * colors.length)];
  newParagraph.title = newParagraph.textContent.length;
  newParagraph.addEventListener("click", (event) => klik(event));
  newHeader.addEventListener("click", (event) => hideShow(event));

  fo.before(newHeader);
  fo.before(newParagraph);

  console.log(textNewParagraph);
}
