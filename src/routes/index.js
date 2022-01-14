import Home from '../pages/Home.js';
import Character from '../pages/Character.js';
import Header from '../templates/Header.js';
import getRoute from '../utils/getRoute.js';
import getHash from '../utils/getHash.js';
import Footer from '../templates/Footer.js';
import Error from '../pages/Error.js';

const routes = {
    '/': Home,
    '/id': Character,
};

const setRoute = async () => {
    const header = null || document.querySelector('header');
    const main = null || document.querySelector('main');
    const footer = null || document.querySelector('footer');

    //Header
    header.innerHTML = Header();

    //Main
    const route = getRoute();
    let render = routes[route] ? routes[route] : Error;
    main.innerHTML = await render();
        //Update
    if(render === Home){

        const options = {
            rootMargin: '0px 0px 0px 0px',
            threshold: .5,
        }

        async function callback(entries) {
            if (entries[0].isIntersecting && getHash() === '/') {
                main.innerHTML = await render(true);
            }
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(footer);       
    }

    //Footer
    footer.innerHTML = Footer();

}

const run = async () => {
    //Update info
    const characters = await Home();
    content.innerHTML = characters.join('');
}

const setInfo = async () => {
    const data = await Character();
    info.innerHTML = data;
}

export default setRoute;