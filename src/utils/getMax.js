const API = 'https://rickandmortyapi.com/api/character/';

const getMax = async () => {
    try{
        const response = await fetch(API);
        const data = await response.json();
        return data.info.count;
    }catch(e){
        console.log(e);
    }
}

export default getMax;