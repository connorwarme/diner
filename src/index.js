import { header, body, footer } from './body.js';
import { home } from './home.js';
import { menu, blurb } from './menu.js';
import { contactPage } from './contact.js';


const content = document.querySelector('div#content');
content.appendChild(header());
content.appendChild(body(content));
content.appendChild(footer());
const wrap = document.querySelector('div.bodyWrapper');
wrap.appendChild(home());
// wrap.appendChild(menu());
// blurb();
// wrap.appendChild(contactPage());

const listeners = () => {
    const clearWrap = () => {
        wrap.removeChild(wrap.children[0]);
    }
    const homebtn = document.querySelector('button.homebtn');
    const homeFn = () => {
        clearWrap();
        wrap.appendChild(home());
    }
    homebtn.addEventListener('click', homeFn);
    const menubtn = document.querySelector('button.menubtn');
    const menuFn = () => {
        clearWrap();
        wrap.appendChild(menu());
        blurb();
    }
    menubtn.addEventListener('click', menuFn);
    const contactbtn = document.querySelector('button.contactbtn');
    const contactFn = () => {
        clearWrap();
        wrap.appendChild(contactPage());
    }
    contactbtn.addEventListener('click', contactFn);
}
listeners();