import getData from "../utils/getData.js";
import getMax from "../utils/getMax.js"

async function* Home () {
    //Variables
    let cont = 0;
    let data = ``;
    const max = await getMax();
    //Cicle
    while(true){
        for (let i = 1; i <= 24; i++) {
            if(cont <= max){
                const character = await getData(cont+i);
                data += `
                <article class="cards_item">
                    <img src="${character.image}" alt="${character.name}" class="cards_item_img">
                    <div class="cards_item_text">                
                        <p>${character.name}</p>
                        <p><i>${character.status}</i></p>
                    </div>
                </article>
                `;
                cont++;
            }else{
                break;
            }
        }
        yield (data);
    }
}

export default Home;