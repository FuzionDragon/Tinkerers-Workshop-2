import jsondata from './projects.json';

const container = document.createElement("div");
container.className = "container";

// Iterator of jsondata, with properties name, desc, link and active
jsondata.forEach(item => {
  const itemCard = document.createElement("div");
  itemCard.className = "card";

  const itemTitle = document.createElement("h3");
  itemTitle.textContent = item.name;
  const itemDesc = document.createElement("p");
  itemDesc.textContent = item.desc;
  const itemLink = document.createElement("a");
  itemLink.textContent = "More Details...";
  itemLink.href = item.link;
  //  itemLink.target = "_blank";

  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemDesc);
  itemCard.appendChild(itemLink);

  container.appendChild(itemCard);
});

document.getElementById('projects').appendChild(container);
