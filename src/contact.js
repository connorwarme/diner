import Phone from './img/phone.svg';
import Contact from './img/contact.jpeg';

const contactPage = () => {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');
    const wrap = document.createElement('div');
    wrap.classList.add('wrap');
    const title = document.createElement('div');
    title.classList.add('contactTitle');
    title.textContent = "Coming to a Crag Near You!";
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('contactInner');
    const sunset = new Image();
    sunset.src = Contact;
    sunset.alt = "Sunset and the Van";
    const contact = document.createElement('div');
    contact.classList.add('contactP');
    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.textContent = "123-456-7890";
    const photo = new Image();
    photo.src = Phone;
    photo.alt = "Phone Number:";
    contactContainer.appendChild(wrap);
    wrap.appendChild(title);
    wrap.appendChild(contact);
    contact.appendChild(photo);
    contact.appendChild(phone);
    wrap.appendChild(innerContainer);
    innerContainer.appendChild(sunset);
    return contactContainer;
}
export { contactPage };