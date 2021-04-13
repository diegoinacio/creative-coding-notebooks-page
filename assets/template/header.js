const HEADER_TITLE = document.querySelector("#header h1");
const HEADER_TEXT = HEADER_TITLE.innerText;

HEADER_TITLE.innerText = "";

Array.from(HEADER_TEXT).forEach((element) => {
  let span = document.createElement("span");
  span.innerText = element;
  let hue = Math.random() * 360;
  span.style = `color: hsl(${hue}, 95%, 80%)`;
  HEADER_TITLE.appendChild(span);
});
