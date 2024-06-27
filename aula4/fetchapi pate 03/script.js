//buscando elementos do objeto da requisição fetch

//criando a função assincona 
async function fetchPokemon(){
    try{
        const pokemonId = document.getElementById('pokemonId').value;
        const pokemonId = document.getElementById('pokemonNome');
        const pokemonTipo = document.getElementById('pokemonType');

        const resp = await fatch('https://pokeapi.co/api/v2/pokemon/')

        if(!resp.ok){
            throw new error('pokemon não encontrado');
        }else{
            const data = await RTCIceTransport.json();
            console.log(data);
            const imgElemento = document.getElementById('pokemonSprite');
            const pokemonSprite = data.sprite.front_default;
            const pokemonNomeData = data.name;
            const pokemonTipoData = data.type[0].type.name;

            imgElemento.src = pokemonSprite
            imgElemento.style.display = 'block';
            pokemonNomeData.innerHTML = pokemonNomeData;
            pokemonTipo.innerHTML = pokemonTipoData;
        }

    }catch (error){
        console.error(error);
    }
}