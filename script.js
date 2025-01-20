// const app=document.querySelector('#app')
// function fetchPromise(URL){
//     return new Promise(
//         function(resolve){
//             fetch(URL)
//             .then(
//                 function(response){
//                     const promise=response.json()
//                     resolve(promise)
//                 }
//             )
//             .catch(function(error){
//                 console.log(error)
//                 app.innerHTML='Oh No'
//             })
//         }
//     )
// }
// let offset=0
// const limit=5
// let pokemons=[]
// let filerterpokemon=[]
// fetchPromise('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
// .then(
//     function(value){
//         app.innerHTML=''
//         pokemons=value.results
//         render()
//     }
// )
// //stringify
// //localStorage.setIteam
// function render(){
//     const renderLimit=offset+limit;
//     for (;offset<renderLimit;offset++){
//         const pokemon=pokemons[offset];
//         const div=document.createElement('div')
//         div.innerText=pokemon.name;
//         app.appendChild(div)
//     }
// }
// const button=document.querySelector('button')
// button.addEventListener('click',render)


























// 
// const app = document.querySelector('#app');
// const button = document.querySelector('button');
// const input = document.querySelector('input');

// function fetchPromise(URL) {
//     return new Promise(function(resolve) {
//         fetch(URL)
//             .then(function(response) {
//                 const promise = response.json();
//                 resolve(promise);
//             })
//             .catch(function(error) {
//                 console.log(error);
//                 app.innerHTML = 'Oh no! Something went wrong.';
//             });
//     });
// }

// let offset = 0;
// const limit = 5;
// let pokemons = JSON.parse(localStorage.getItem('pokemonsData')) || [];
// let filteredPokemon = pokemons;

// if (pokemons.length) {
//     render();
// } else {
//     fetchPromise("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898")
//         .then(function(value) {
//             pokemons = value.results;
//             filteredPokemon = value.results;
//             localStorage.setItem('pokemonsData', JSON.stringify(pokemons));
//             render();
//         });
// }

// function render() {
//     const renderLimit = offset + limit;
//     for (; offset < renderLimit; offset++) {
//         const pokemon = filteredPokemon[offset];
//         if (!pokemon) {
//             button.style.display = 'none';
//             break;
//         } else {
//             button.style.display = 'block';
//         }

//         // Lấy URL ảnh cho Pokémon
//         const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset + 1}.png`;

//         const div = document.createElement('div');
//         div.innerHTML = `
//             <img src="${pokemonImage}" alt="${pokemon.name}">
//             <h3>${pokemon.name}</h3>
//         `;
//         app.appendChild(div);
//     }
// }

// button.addEventListener('click', render);

// input.addEventListener('input', function() {
//     offset = 0;
//     app.innerHTML = '';
//     filteredPokemon = pokemons.filter(function(pokemon) {
//         return pokemon.name.includes(input.value);
//     });
//     render();
// });
const app = document.querySelector('#app');
const button = document.querySelector('button');
const input = document.querySelector('input');

function fetchPromise(URL) {
    return new Promise(function(resolve) {
        fetch(URL)
            .then(function(response) {
                const promise = response.json();
                resolve(promise);
            })
            .catch(function(error) {
                console.log(error);
                app.innerHTML = 'Oh no! Something went wrong.';
            });
    });
}

let offset = 0;
const limit = 20;
let pokemons = JSON.parse(localStorage.getItem('pokemonsData')) || [];
let filteredPokemon = pokemons;

if (pokemons.length) {
    render();
} else {
    fetchPromise("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898")
        .then(function(value) {
            pokemons = value.results;
            filteredPokemon = value.results;
            localStorage.setItem('pokemonsData', JSON.stringify(pokemons));
            render();
        });
}

function render() {
    const renderLimit = offset + limit;
    for (; offset < renderLimit; offset++) {
        const pokemon = filteredPokemon[offset];
        if (!pokemon) {
            button.style.display = 'none';
            break;
        } else {
            button.style.display = 'block';
        }

        // Lấy URL ảnh cho Pokémon
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${offset + 1}.png`;

        const div = document.createElement('div');
        div.classList.add('pokemon-item'); // Thêm lớp CSS để style

        // Nội dung HTML cho Pokémon
        div.innerHTML = `
            <div class="pokemon-id">#${offset + 1}</div>
            <img class="pokemon-image" src="${pokemonImage}" alt="${pokemon.name}">
            <h3>${pokemon.name}</h3>
            <div
        `;
        app.appendChild(div);
    }
}

button.addEventListener('click', render);

input.addEventListener('input', function() {
    offset = 0;
    app.innerHTML = '';
    filteredPokemon = pokemons.filter(function(pokemon) {
        return pokemon.name.includes(input.value);
    });
    render();
});
