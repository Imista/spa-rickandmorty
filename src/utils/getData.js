const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const url = id ? `${API}${id}` : API;

    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

export default getData;