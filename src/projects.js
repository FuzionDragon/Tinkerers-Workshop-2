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

  itemCard.appendChild(itemTitle);
  itemCard.appendChild(itemDesc);

  const itemLink = document.createElement("a");

  if (item.link.startsWith("https")) {
    const wipNotice = document.createElement("p");
    wipNotice.textContent = "Project page WIP or planned."
    wipNotice.style = "font-weight: bold"
    itemCard.appendChild(wipNotice);
    itemLink.textContent = "Link to GitHub repo";
    itemLink.target = "_blank";
  } else {
    itemLink.textContent = "More Details...";
  }
  itemLink.href = item.link;

  itemCard.appendChild(itemLink);

  container.appendChild(itemCard);
});

document.getElementById('projects').appendChild(container);
