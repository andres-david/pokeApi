let printPokemon = ( pokemon ) => {

    let card = `
    <div class="tarjeta card" style="width: 30%">
        <img src="${pokemon.img}" class="pokemonImg card-img-top" alt="...">
        <div class="card-body">
            <h4 class="pokemonName card-title">${pokemon.nombre}</h4>
            <h5>Abilites</h5>
        </div>
        <ul class="pokemonAbilities list-group list-group-flush">
            
        </ul>
        <div class="card-body">
            <a href="#" class="closeBtn card-link">Close</a>
        </div>
    </div>`;

    
    let cardInfo = document.querySelector('.cardInfo');
    cardInfo.innerHTML = '';
    
    cardInfo.innerHTML += card;

    document.querySelector('#form').reset();

    closeBtn = document.querySelector('.closeBtn');

    closeBtn.addEventListener('click', () => {

        cardContainer.style.display = "none";
    
    })
    
    let li = '';
    let pokemonAbilities = document.querySelector('.pokemonAbilities');

    for( let i = 0; i < pokemon.habilidades.length; i++ ){

        li = `<li class="list-group-item">${pokemon.habilidades[i].ability.name}</li>`;

        pokemonAbilities.innerHTML += li;

    }


}


let url = 'https://pokeapi.co/api/v2/pokemon/';

let callPokemon = async ( id ) => {

    try {

        let res  = await fetch(`${url}${id}/`);
        let data = await res.json();

        let img         = data.sprites.other.dream_world.front_default;
        let nombre      = data.name;
        let habilidades = data.abilities;

        let pokemon = {
            img: img,
            nombre: nombre,
            habilidades: habilidades,
        }
    
        console.log( data );

        printPokemon( pokemon );
        
    } catch (error) {

        console.log( error );
        
    }

}

let btnMostrar    = document.querySelector('#btn__mostrar');
let cardContainer = document.querySelector('.cardContainer');
let closeBtn;


btnMostrar.addEventListener('click', () => {

    cardContainer.style.display = "block";

    let name = document.querySelector('#nombre').value;

    callPokemon( name );

});