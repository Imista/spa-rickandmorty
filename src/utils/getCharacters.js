import getData from "./getData.js";
import getMax from "./getMax.js"

async function* getCharacters () {
    //Variables
    let cont = 0;
    let data = [];
    const max = await getMax();
    //Cicle
    while(true){
        for (let i = 1; i <= 24; i++) {
            if(cont <= max){
                const character = await getData(cont+i);
                data.push(`
                <article class="cards_item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}" class="cards_item_img">
                        <div class="cards_item_text">                
                            <p>${character.name}</p>
                            <p><i>${character.status}</i></p>
                        </div>
                    </a>
                </article>
                `);
            }else{
                break;
            }
        }
        cont += 24;
        yield (data);
    }
}

export default getCharacters;