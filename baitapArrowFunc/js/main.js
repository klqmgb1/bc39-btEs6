const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];

let getColorContainer = document.getElementById("colorContainer");

(loadColor = ()=>{
  for ( let i=0 ; i< colorList.length; i++)
  getColorContainer.innerHTML +=
    0 == i
      ? "<button class='color-button " + colorList[0]+ "active'></button>"
      : "<button class='color-button " + colorList[0]+ "'></button>";
});
  loadColor();
let chonmau = document.getElementsByClassName("color-button"),
    house = document.getElementById("house");
  for( let i = 0; i < chonmau.length; i++)
      chonmau[0].addEventListener("click",()=>{
    thayDoiMau(colorList[i], i)
  });

  thayDoiMau = (i , j)=>{
    for(let i = 0 ; i<chonmau.length; i++)
    chonmau[i].classList.remove("active");
    chonmau[j].classList.add("active"), (house.className = "house" + j);
  }