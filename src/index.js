console.log('fire in the hole');

const header = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Dirtbag Diner";
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    const home = document.createElement('div');
    home.classList.add('home');
    home.textContent = "HOME";
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.textContent = "MENU";
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.textContent = "CONTACT US";
    headerContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    headerContainer.appendChild(menuContainer);
    menuContainer.appendChild(home);
    menuContainer.appendChild(menu);
    menuContainer.appendChild(contact);
    return headerContainer;
}
const content = document.querySelector('div#content');
content.appendChild(header());