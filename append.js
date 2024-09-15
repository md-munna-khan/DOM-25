const placesList = document.getElementById("places-list");
const li = document.createElement("li");
li.innerText= "pahar toli";
placesList.appendChild(li)

const mainContainer = document.getElementById("main-container");
const section= document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText ="food manu item";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement("li");
li1.innerText ="biryani";
ul.appendChild(li1)
const li2 = document.createElement("li");
li2.innerText ="borhani";
ul.appendChild(li2)
const li3 = document.createElement("li");
li3.innerText ="water";
ul.appendChild(li3)
section.appendChild (ul);

mainContainer.appendChild(section)
// set inner html directly
const sectionDress =document.createElement("section");
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
<li>T- shirt</li>
<li>longi</li>
<li>genji</li>
</ul>

`
mainContainer.appendChild(sectionDress);