import './style.css'

const routes = {
  '/': {
    linkLabel: 'Home',
    content: 'First thing the user sees'
  },
  '/projects': {
    linkLabel: 'Projects',
    content: 'All my projects'
  },
  '/contacts': {
    linkLabel: 'Contacts',
    content: 'My contacts and other relavent links'
  },
  '/skills': {
    linkLabel: 'Skills',
    content: 'The programming languages, tools and other skills that I have experience with'
  },
  '/about': {
    linkLabel: 'About',
    content: 'Some details about myself'
  }
} 

const app = document.querySelector('#app')
const nav = document.querySelector('#nav')

const renderNavLinks = () => {
  const navFragment = document.createDocumentFragment();
  Object.keys(routes).forEach(route => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement('a');
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = 'nav-link';
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
}

const registerNavLinks = () => {
  nav.addEventListener('click', (e) => {
    e.preventDefault();
    const { href } = e.target;
    navigate(e);
  })
}

const renderContent = route => app.innerHTML = routes[route].content;

const navigate = e => {
  const route = e.target.pathname;
  history.pushState({}, "", route);
  renderContent(route);
}

const registerBrowserBackAndForth =() => {
  window.onpopstate = function (e) {
    const route = location.pathname;
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const route = location.pathname;
  renderContent(route); 
};

(function bootup() {
  renderNavLinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();
