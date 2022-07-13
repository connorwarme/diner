// import Photo from './img/photo.jpg';
// import Icon from './img/background.jpg';
// import Git from './img/github.svg';
// import Linked from './img/linked.svg';
// import Photo2 from './img/photo2.jpg';
// import Photo3 from './img/photo3.jpg';
// import Photo4 from './img/photo4.jpg';
// import Photo5 from './img/photo5.jpg';
// import Photo6 from './img/photo6.jpg';
// import Phone from './img/phone.svg';
// import Contact from './img/contact.jpeg';
import { header, body, footer } from './body.js';
import { home } from './home.js';
import { menu, blurb } from './menu.js';
import { contactPage } from './contact.js';

// const header = () => {
//     const headerContainer = document.createElement('div');
//     headerContainer.classList.add('headerContainer');
//     const titleContainer = document.createElement('div');
//     titleContainer.classList.add('titleContainer');
//     const title = document.createElement('h1');
//     title.classList.add('title');
//     title.textContent = "Dirtbag Diner";
//     const menuContainer = document.createElement('div');
//     menuContainer.classList.add('menuContainer');
//     const home = document.createElement('div');
//     home.classList.add('home');
//     const homebtn = document.createElement('button');
//     homebtn.classList.add('homebtn');
//     homebtn.setAttribute('id', 'homebtn');
//     const homeLabel = document.createElement('label');
//     homeLabel.setAttribute('for', 'homebtn');
//     homeLabel.textContent = "HOME";
//     const menu = document.createElement('div');
//     menu.classList.add('menu');
//     const menubtn = document.createElement('button');
//     menubtn.classList.add('menubtn');
//     menubtn.setAttribute('id', 'menubtn');
//     const menuLabel = document.createElement('label');
//     menuLabel.setAttribute('for', 'menubtn');
//     menuLabel.textContent = "MENU";
//     const contact = document.createElement('div');
//     contact.classList.add('contact');
//     const contactbtn = document.createElement('button');
//     contactbtn.classList.add('contactbtn');
//     contactbtn.setAttribute('id', 'contactbtn');
//     const contactLabel = document.createElement('label');
//     contactLabel.setAttribute('for', 'contactbtn');
//     contactLabel.textContent = "CONTACT US";
//     headerContainer.appendChild(titleContainer);
//     titleContainer.appendChild(title);
//     headerContainer.appendChild(menuContainer);
//     menuContainer.appendChild(home);
//     menuContainer.appendChild(menu);
//     menuContainer.appendChild(contact);
//     home.appendChild(homebtn);
//     homebtn.appendChild(homeLabel);
//     menu.appendChild(menubtn);
//     menubtn.appendChild(menuLabel);
//     contact.appendChild(contactbtn);
//     contactbtn.appendChild(contactLabel);
//     return headerContainer;
// }
const content = document.querySelector('div#content');
content.appendChild(header());
content.appendChild(body(content));
content.appendChild(footer());
// content.appendChild(home());
// content.appendChild(menu());
content.appendChild(contactPage());
// blurb();
// const background = new Image();
// background.src = Icon;
// background.alt = "Connor on The Path";
// content.style.background = `no-repeat center / 100% url(${background.src})`;
// content.appendChild(header());
// body: main image, fun title
// const body = () => {
//     const bodyContainer = document.createElement('div');
//     bodyContainer.classList.add('bodyContainer');
//     const body = document.createElement('div');
//     body.classList.add('body');
//     const h2 = document.createElement('h2');
//     h2.textContent = "Delicious, Nutritious, and Adventurous!";
//     const innerContainer = document.createElement('div');
//     innerContainer.classList.add('innerContainer');
//     const photo = new Image();
//     photo.src = Photo;
//     photo.alt = "Amity cooking in the van";
//     const textContainer = document.createElement('div');
//     textContainer.classList.add('textContainer');
//     textContainer.textContent = "est. February 2017";
//     bodyContainer.appendChild(body);
//     body.appendChild(h2);
//     body.appendChild(innerContainer);
//     body.appendChild(textContainer);
//     innerContainer.appendChild(photo);
//     return bodyContainer;
// }
// content.appendChild(body());
// menu page
// const menu = () => {
//     const menuContainer = document.createElement('div');
//     menuContainer.classList.add('menuPage');
//     let count = 2;
//     const makeDivs = () => {
//         let div = document.createElement('div');
//         div.setAttribute('id', `id${count}`);
//         if (count < 7) {
//             let photo = new Image();
//             if (count == 2) {
//                 photo.src = Photo2;
//             } else if (count == 3) {
//                 photo.src = Photo3;
//             } else if (count == 4) {
//                 photo.src = Photo4;
//             } else if (count == 5) {
//                 photo.src = Photo5;
//             } else if (count == 6) {
//                 photo.src = Photo6;
//             }
//             photo.alt = `photo ${count}`;
//             div.appendChild(photo);
//         }
//         count++;
//         return div;
//     }
//     for (let i=0; i<7; i++) {
//         menuContainer.appendChild(makeDivs());
//     }

//     return menuContainer;
// }
// // content.appendChild(menu()); 
// const blurb = () => {
//     const info1 = document.getElementById('id7');
//     const blurb1 = document.createElement('div');
//     blurb1.classList.add('b1');
//     blurb1.textContent = "Tofu Masala";
//     const blurb2 = document.createElement('div');
//     blurb2.classList.add('b2');
//     blurb2.textContent = "Thai Green Curry";
//     const blurb3 = document.createElement('div');
//     blurb3.classList.add('b3');
//     blurb3.textContent = "Vanana Bread!";
//     const blurb4 = document.createElement('div');
//     blurb4.classList.add('b4');
//     blurb4.textContent = "Sendy Cookies!";
//     const blurb5 = document.createElement('div');
//     blurb5.classList.add('b5');
//     blurb5.textContent = "Fajitas & Guac"
//     info1.appendChild(blurb1);
//     info1.appendChild(blurb2);
//     info1.appendChild(blurb3);
//     const info2 = document.getElementById('id8');
//     info2.appendChild(blurb4);
//     info2.appendChild(blurb5);
// }
// // blurb();

// // contact us page
// const contact = () => {
//     const contactContainer = document.createElement('div');
//     contactContainer.classList.add('contactContainer');
//     const wrap = document.createElement('div');
//     wrap.classList.add('wrap');
//     const title = document.createElement('div');
//     title.classList.add('contactTitle');
//     title.textContent = "Coming to a Crag Near You!";
//     const innerContainer = document.createElement('div');
//     innerContainer.classList.add('contactInner');
//     const sunset = new Image();
//     sunset.src = Contact;
//     sunset.alt = "Sunset and the Van";
//     const contact = document.createElement('div');
//     contact.classList.add('contactP');
//     const phone = document.createElement('div');
//     phone.classList.add('phone');
//     phone.textContent = "123-456-7890";
//     const photo = new Image();
//     photo.src = Phone;
//     photo.alt = "Phone Number:";
//     contactContainer.appendChild(wrap);
//     wrap.appendChild(title);
//     wrap.appendChild(contact);
//     contact.appendChild(photo);
//     contact.appendChild(phone);
//     wrap.appendChild(innerContainer);
//     innerContainer.appendChild(sunset);
//     return contactContainer;
// }
// content.appendChild(contact());
// footer: simple credit / links
// const footer = () => {
//     const footerContainer = document.createElement('div');
//     footerContainer.classList.add('footerContainer');
//     const footer = document.createElement('div');
//     footer.classList.add('footer');
//     const linkContainer = document.createElement('div');
//     linkContainer.classList.add('linkContainer');
//     const gitLink = document.createElement('a');
//     gitLink.setAttribute('href', 'https://github.com/connorwarme');
//     gitLink.setAttribute('alt', 'GitHub profile link');
//     const linkLink = document.createElement('a');
//     linkLink.setAttribute('href', 'https://www.linkedin.com/in/connor-warme-103a09167');
//     linkLink.setAttribute('alt', 'LinkedIn profile link');
//     const github = new Image();
//     github.src = Git;
//     github.alt = "GitHub link";
//     const linked = new Image();
//     linked.src = Linked;
//     linked.alt = "Linked In profile";
//     const box = document.createElement('div');
//     box.classList.add('box');
//     box.textContent = "Peregrinning Productions";
//     footerContainer.appendChild(footer);
//     footer.appendChild(linkContainer);
//     linkContainer.appendChild(gitLink);
//     linkContainer.appendChild(linkLink);
//     gitLink.appendChild(github);
//     linkLink.appendChild(linked);
//     footer.appendChild(box);
//     return footerContainer;
// }
// content.appendChild(footer());