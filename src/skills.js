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
  const text = document.createTextNode(item);
  const langList = document.createElement("li");
  langList.appendChild(text);
  langDiv.appendChild(langList);
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
  const text = document.createTextNode(item);
  const webList = document.createElement("li");
  webList.appendChild(text);
  webDiv.appendChild(webList);
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
  const text = document.createTextNode(item);
  const softList = document.createElement("li");
  softList.appendChild(text);
  softDiv.appendChild(softList);
});
container.appendChild(softDiv);

document.getElementById('skills').appendChild(container);
