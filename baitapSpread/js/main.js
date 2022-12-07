
const heading = document.querySelector(".heading");
(hover = (e) => {
  return [...e].map((e) => `<span>${e}</span>`).join("");
}),
  (heading.innerHTML = hover(heading.innerText));