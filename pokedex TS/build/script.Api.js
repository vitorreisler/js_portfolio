const $input = document.getElementById("input-text");
const $btnSubmit = document.getElementById("submit");
const $btnClean = document.getElementById("clean");
const $list = document.querySelector(".lista");
const res = document.getElementById("res");
const $btnShowList = document.getElementById("show");
const API_BASE = "https://pokeapi.co/api/v2/pokemon";
let choosenPokemons = [];
window.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        run(getInputValue());
    }
});
$btnSubmit.addEventListener("click", () => {
    run(getInputValue());
});
$btnClean.addEventListener("click", () => {
    window.location.reload();
    $input.focus();
});
$btnShowList.addEventListener("click", showHideList);
$input.focus();
function getInputValue() {
    let $inputValueRaw = $input.value;
    const $inputValue = $inputValueRaw.toLowerCase();
    console.log($inputValue);
    return $inputValue;
}
function showHideList() {
    $list.classList.toggle("listHidden");
}
async function getPromisse(pokeName) {
    let pokemonApi = await fetch(`${API_BASE}/${pokeName}`);
    return await pokemonApi.json();
}
async function render(renderPokemon) {
    const pokemonToRender = await getPromisse(renderPokemon);
    let { name, sprites: { front_default: frontImg }, abilities: [hab1, hab2, ...someHab] } = pokemonToRender;
    console.log(someHab);
    return `
   <img src="${frontImg}" > <br>
   <h6> Name: </h6> 
   <p> ${name} </p> 
   <h6> Ability 1:</h6>
   <p> ${hab1.ability.name}</p>
   <h6> Ability 2:</h6>
   <p> ${hab2.ability.name}</p>
   <h6> Ability 3:</h6>
   <p> ${someHab[0] ? someHab[0].ability.name : "unknown"}</p>
   <hr>
`;
}
async function run(pokeName) {
    try {
        const pokemon = await getPromisse(pokeName);
        choosenPokemons = [...choosenPokemons, pokemon];
        let renderPokemon = await render(pokeName);
        res.innerHTML = renderPokemon;
        $list.innerHTML += renderPokemon;
        $input.value = "";
        $input.focus();
    }
    catch (err) {
        res.innerHTML = "Please write the pokemon name right";
        console.error("Please write the pokemon name right");
    }
}
