import getHash from "./getHash.js";
import getMax from "./getMax.js";


const getRoute = () => {
    const route = getHash();
    
    //Home
    if(route === '/') {
        return route
    }else
    if(route > 0 && route <= getMax())
    {
        //Id
        return '/id'
    }else{
        return `/${route}`;
    }
}

export default getRoute;