let $input = document.getElementById("input-search") as HTMLInputElement;
let $btn = document.getElementById("btn") as HTMLButtonElement;
let $resWord = document.getElementById("res-word") as HTMLElement;
let $resDef = document.getElementById("res-def") as HTMLElement;
let $listDef = document.getElementById("list-def") as HTMLElement;
let $resPhon = document.getElementById("res-phon") as HTMLElement;
let $audio = document.getElementById("audio") as HTMLElement;
let API_BASE = `https://api.dictionaryapi.dev/api/v2/entries/en`; // {word}
console.log($input);
console.log($btn);

$input.focus();
$btn.addEventListener("click", gotWord);
//If the key pressed is Enter, use the function gotWord, if not, do nothing
document.addEventListener("keypress", (e) => {
  return e.key === "Enter" ? gotWord() : null;
});

//Get the promise and return the Obj output
async function getOutPutPromisse(word: string) {
  let response = await fetch(`${API_BASE}/${word}`);
  let outputPromisse = await response.json();
  console.log(outputPromisse);
  return outputPromisse[0];
}

//Destructuring the Obj from getOutPut Promisse and using them in render functions
async function gotWord() {
  let wordValue = $input.value;
  let gotWord = await getOutPutPromisse(wordValue);
  let {
    word,
    phonetic,
    meanings: [{ definitions }],
    phonetics: [
      { audio: audioPhonetic1 },
      { audio: audioPhonetic2 } = { audio: "" },
    ],
  } = gotWord;
  //console.log(word);
  //console.log(phonetic);
  //console.log(definitions);
  renderWord(word);
  renderPhonetics(phonetic);
  renderDef(definitions);
  renderAudio(audioPhonetic2 ? audioPhonetic2 : audioPhonetic1);

  return gotWord[0];
}

// render the search in DOM word
async function renderWord(word: string) {
  $resWord.innerHTML = `<h1>${word}: </h1> <br><br> `;
  return;
}
// render the phonetics in DOM phonetics
async function renderPhonetics(phon: string) {
  phon === undefined
    ? ($resPhon.innerHTML = "")
    : ($resPhon.innerHTML = `<br><h4>Phonetic: </h4> <bold>${phon}</bold> <br><br>`);
}
// Using REST to get the definitions from the promise obj and using loop to get all the definition from the obj
async function renderDef([...moreDef]) {
  $listDef.innerHTML = "";
  for (let i = 0; i < moreDef.length; i++) {
    $listDef.innerHTML += ` <li>${moreDef[i].definition} </li> `;
  }
}

//Render element audio with a button and icon, adding a function for this button
async function renderAudio(audio: string) {
  $audio.innerHTML = "";
  $audio.innerHTML += `
            <button id="play-audio-btn" class="original-button">
                <audio id="play-audio" src="${audio}"></audio>
                    <span class="material-symbols-outlined">
                    play_arrow
                </span>
            </button>      
        `;
  const $playAudioBtn = document.getElementById(
    "play-audio-btn"
  ) as HTMLButtonElement;
  $playAudioBtn.addEventListener("click", playAudio);
}

//playing the audio
async function playAudio() {
  const $playAudio = document.getElementById("play-audio") as HTMLAudioElement;
  return await $playAudio.play();
}
