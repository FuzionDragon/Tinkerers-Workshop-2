import jsondata from './projects.json';

const container = document.createElement("div");
container.className = "container";

// Iterator of jsondata, with properties name, desc, link and active
jsondata.forEach(item => {
  const itemCard = document.createElement("div");
  itemCard.className = "card";

  const itemTitle = document.createElement("h2");
  itemTitle.textContent = item.name;
  const itemDesc = document.createElement("p");
  itemDesc.textContent = item.desc;
  const itemActive = document.createElement("p");
  itemActive.textContent = item.active;
  const itemLink = document.createElement("a");
  itemLink.textContent = item.link;
  itemLink.href = item.link;

  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemDesc);
  itemCard.appendChild(itemLink);
  itemCard.appendChild(itemActive);

  container.appendChild(itemCard);
});

document.getElementById('projects').appendChild(container);
