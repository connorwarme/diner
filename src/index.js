console.log('fire in the hole');

const header = () => {
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('headerContainer');
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Dirtbag Diner";
    headerContainer.appendChild(titleContainer);
    titleContainer.appendChild(title);
    return headerContainer;
}
document.body.appendChild(header());