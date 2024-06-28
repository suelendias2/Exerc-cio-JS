//criando a função fetch do botao pesquisar

 async function fetchpokemon(){
    try{
       const pokemonId = document.getElementById('pokemonId').value
       if(pokemonId == ''){
           alert('digite um Id válido');
           throw new error('Id inválido');
       }
    const pokemonNome = document.getElementById('pokemonNome');      
     const pokemonType = document.getElementById('pokemonType');

     const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if(!resp.ok){
            throw new error('pokemon não encontrado')
        } else{
            const data = await resp.json();
            console.log(data);
            const pokemonSprite = data.sprites.front_default;
            const imgElemento = document.getElementById('pokemonSprite');

            const pokemonNomeData = data.name.toUpperCase();
            const pokemonTypeData = data.types[0].type.name;

           //setando os elementos data no html
           imgElemento.src = pokemonSprite;
           imgElemento.style.display = 'block';
           
           pokemonNome.innerHTML = pokemonNomeData;
           pokemonType.innerHTML = pokemonTypeData;
        }

    }catch (error){
        console.log(error)
    }
 }