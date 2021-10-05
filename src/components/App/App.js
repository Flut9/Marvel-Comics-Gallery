import Comics from '../Comics/Comics';
import Preload from '../Preload/Preload';

import './App.css';

class App {
    async render() {
        Preload.render();
        Preload.eventListener();
        // await Comics.render();
    }
}

export default new App();