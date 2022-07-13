import Photo from './img/photo.jpg';

const home = () => {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('bodyContainer');
    const body = document.createElement('div');
    body.classList.add('body');
    const h2 = document.createElement('h2');
    h2.textContent = "Delicious, Nutritious, and Adventurous!";
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('innerContainer');
    const photo = new Image();
    photo.src = Photo;
    photo.alt = "Amity cooking in the van";
    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');
    textContainer.textContent = "est. February 2017";
    bodyContainer.appendChild(body);
    body.appendChild(h2);
    body.appendChild(innerContainer);
    body.appendChild(textContainer);
    innerContainer.appendChild(photo);
    return bodyContainer;
}
export { home };