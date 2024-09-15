console.log("second file");

// const secondList = document.getElementById("second-list");
// const li =document.createElement("li");
// li.innerText ="my dynamic item";
// secondList.appendChild(li)


const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
section.innerHTML=`
<h1>My dress</h1>
<ul>
<li>tupi</li>
<li>panjabi</li>
<li>paijama</li>
</ul>

`
mainContainer.appendChild(section)