import setRoute from './routes/index.js';

window.addEventListener('load', setRoute);
window.addEventListener('hashchange', setRoute);


// //Observer
// let observer = new IntersectionObserver(entry => {

// }, {
//     rootMargin: '0px 0px 0px 0px',
//     threshold: 1.0
// });
