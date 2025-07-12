fetchData();

async function fetchData() {
    try{
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
        const response  = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error ("could not fetch response");
        }
        const data = await response.json();
        document.getElementById('name').innerHTML = data.name.toUpperCase();
        const pokemonsprite = data.sprites.front_default;
        const image = document.getElementById('pokemonsprite');

        image.src = pokemonsprite;
        image.style.display = "block"

         document.getElementById('height').innerHTML = data.height;


        console.log(data);

    }catch(error){
        console.error(error);
    }
}