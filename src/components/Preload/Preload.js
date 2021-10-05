import { ROOT_PRELOAD } from '../../constants/root';

import Comics from '../Comics/Comics';

import classes from './Preload.css';

class Preload {
    render() {
        const html = `    
            <div class="${classes.preload__container}">                    
                <h1 class="${classes.preload__title}">Marvel Comics Gallery</h1>
                <p class="${classes.preload__text}">Comics are like boobs. They look great on a computer, but I wish I could hold them in my hands.</p>
                <span class="${classes.preload__span}">Stan Lee</span>
                <button class="preload__btn ${classes.preload__btn}">Learn more</button>
            </div>
        `;

        ROOT_PRELOAD.innerHTML += html;
    }

    eventListener() {
        document.querySelector('.preload__btn').addEventListener('click', async () => {
            ROOT_PRELOAD.innerHTML = '';

            await Comics.render();
            
            Comics.eventListener();
        })
    }
}

export default new Preload();
