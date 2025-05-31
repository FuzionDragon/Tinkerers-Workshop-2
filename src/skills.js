import jsondata from './skills.json';

const container = document.createElement("div");
container.className = "container";

// Programming languages
const languages = jsondata.languages;
const langDiv = document.createElement("div");
langDiv.className = "card";

const langTitle = document.createElement("h2");
langTitle.textContent = "Programming Languages";
langDiv.appendChild(langTitle);

languages.forEach(item => {
  const langItem = document.createElement("p");
  langItem.textContent = item;
  langDiv.appendChild(langItem);
});
container.appendChild(langDiv);

// Web technologies
const web = jsondata.web;
const webDiv = document.createElement("div");
webDiv.className = "card";

const webTitle = document.createElement("h2");
webTitle.textContent = "Web Technologies";
webDiv.appendChild(webTitle);

web.forEach(item => {
  const webItem = document.createElement("p");
  webItem.textContent = item;
  webDiv.appendChild(webItem);
});
container.appendChild(webDiv);

// Software and tools
const software = jsondata.software;
const softDiv = document.createElement("div");
softDiv.className = "card";

const softTitle = document.createElement("h2");
softTitle.textContent = "Software and Tools";
softDiv.appendChild(softTitle);

software.forEach(item => {
  const softItem = document.createElement("p");
  softItem.textContent = item;
  softDiv.appendChild(softItem);
});
container.appendChild(softDiv);

document.getElementById('skills').appendChild(container);
