async function fetchPokemon() {
    try{
        const pokemonName = document.querySelector("#pokemonName").value.toLowerCase();
        const pokemonImg = document.querySelector("#pokemonSprite");

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {         
          throw new Error("Existe pas");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        console.log(data);

        pokemonImg.src = pokemonSprite;
        pokemonImg.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}