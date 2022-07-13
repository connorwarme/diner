import Photo2 from './img/photo2.jpg';
import Photo3 from './img/photo3.jpg';
import Photo4 from './img/photo4.jpg';
import Photo5 from './img/photo5.jpg';
import Photo6 from './img/photo6.jpg';

const menu = () => {
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menuPage');
        let count = 2;
        const makeDivs = () => {
            let div = document.createElement('div');
            div.setAttribute('id', `id${count}`);
            if (count < 7) {
                let photo = new Image();
                if (count == 2) {
                    photo.src = Photo2;
                } else if (count == 3) {
                    photo.src = Photo3;
                } else if (count == 4) {
                    photo.src = Photo4;
                } else if (count == 5) {
                    photo.src = Photo5;
                } else if (count == 6) {
                    photo.src = Photo6;
                }
                photo.alt = `photo ${count}`;
                div.appendChild(photo);
            }
            count++;
            return div;
        }
        for (let i=0; i<7; i++) {
            menuContainer.appendChild(makeDivs());
        }
    
        return menuContainer;
    }
    const blurb = () => {
        const info1 = document.getElementById('id7');
        const blurb1 = document.createElement('div');
        blurb1.classList.add('b1');
        blurb1.textContent = "Tofu Masala";
        const blurb2 = document.createElement('div');
        blurb2.classList.add('b2');
        blurb2.textContent = "Thai Green Curry";
        const blurb3 = document.createElement('div');
        blurb3.classList.add('b3');
        blurb3.textContent = "Vanana Bread!";
        const blurb4 = document.createElement('div');
        blurb4.classList.add('b4');
        blurb4.textContent = "Sendy Cookies!";
        const blurb5 = document.createElement('div');
        blurb5.classList.add('b5');
        blurb5.textContent = "Fajitas & Guac"
        info1.appendChild(blurb1);
        info1.appendChild(blurb2);
        info1.appendChild(blurb3);
        const info2 = document.getElementById('id8');
        info2.appendChild(blurb4);
        info2.appendChild(blurb5);
    }
export { menu, blurb };