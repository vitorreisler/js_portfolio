const $input = document.getElementById("input-text") as HTMLInputElement
const $btnSubmit = document.getElementById("submit")
const $btnClean = document.getElementById("clean")
const $list = document.querySelector(".lista")
const res = document.getElementById("res")
const $btnShowList = document.getElementById("show")
const API_BASE = "https://pokeapi.co/api/v2/pokemon"

let choosenPokemons:{}[] = []



// Listening to which key is pressed and if is the keyCode 13 (Enter) running the app and using the function getInputValue to take the pokemon name
window.addEventListener("keypress", (e) =>{
if(e.keyCode === 13){
    run(getInputValue())
}
})


$btnSubmit.addEventListener("click", ()=>{
run(getInputValue())
})

$btnClean.addEventListener("click", ()=>{
    window.location.reload()
    $input.focus()
})

$btnShowList.addEventListener("click", showHideList)

$input.focus()

//Getting the input value and passing tho lower case because the API need the name in lowercase
function getInputValue(){
    let $inputValueRaw = $input.value
    const $inputValue = $inputValueRaw.toLowerCase()
    console.log($inputValue);
return $inputValue
}

//toggle the class of show/hide btn.
function showHideList(){
        $list.classList.toggle("listHidden")
    
}

//Getting promise
async function getPromisse(pokeName:string){
    let pokemonApi = await fetch(`${API_BASE}/${pokeName}`)
    
    return await pokemonApi.json()
}

//destructuring the Obj output from the promise and rendering
async function render(renderPokemon:string){
    const pokemonToRender = await getPromisse(renderPokemon)
    let {name,
        sprites: {front_default: frontImg}, 
        abilities:[hab1, hab2,...someHab]} = pokemonToRender
        console.log(someHab);
   
   return `
   <img src="${frontImg}" > <br>
   <h6> Name: </h6> 
   <p> ${name} </p> 
   <h6> Ability 1:</h6>
   <p> ${hab1.ability.name}</p>
   <h6> Ability 2:</h6>
   <p> ${hab2.ability.name}</p>
${someHab[0] ? 
    `
        <h6>Ability 3: </h6>
        ${someHab[0].ability.name}
        <br>
        <br>
    ` 
    :     
    ""
}
   
` 

}



//Runing the app
async function run(pokeName:string){
    try {
                const pokemon = await getPromisse(pokeName)
                choosenPokemons = [...choosenPokemons, pokemon]
                let renderPokemon = await render(pokeName)
        
            res.innerHTML = renderPokemon
            $list.innerHTML += renderPokemon
            $input.value = ""
            $input.focus()
            
        }
    catch(err){
        res.innerHTML = "Please write the pokemon name right"
        console.error("Please write the pokemon name right");
        }
            
    
}


