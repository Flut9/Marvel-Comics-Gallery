import { API_URL, URL_COMICS, IMG_NOT_AVAILABLE, IMG_XLARGE, URL_CHARACTERS } from "../../constants/api";
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX } from "../../constants/root";

import Error from "../Error/Error";
import Characters from "../Characters/Characters";

import classes from './Comics.css';

class Comics {
    renderComics(data) {
        let htmlContent = '';

        data.forEach(({id, title, thumbnail: {path, extension}}) => {
            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1){
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;

                const imgSrc = path + '/' + IMG_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="${classes.comics__item}" data-uri="${uri}">
                        <span class="${classes.comics__name}">${title}</span>
                        <img class="img-contain ${classes.comics__img}" src="${imgSrc}">       
                        <button class="comics__btn ${classes.comics__btn}">More</button>                        
                    </li>
                `;
            }
        })

        const htmlWrapper = `
            <ul class="${classes.comics}">
                ${htmlContent}
            </ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        
        data ? this.renderComics(data) : Error.render();
    }

    eventListener() {
        document.querySelectorAll('.comics__btn').forEach(element => {
            const uri = element.parentNode.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(uri);
            })
        })
    }
}

export default new Comics();