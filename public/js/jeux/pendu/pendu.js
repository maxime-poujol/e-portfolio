
let motJeu = ""
const divMot = document.getElementById("mot");
const input = document.getElementById("champsText");
let penduElement = 1;

startGame();

function startGame(){

    for (let i = 1; i < 7; i++) {
        document.getElementById("pendu-" + i).style.display = "none";
    }

    let value = Math.floor(Math.random() * listMots.length);

    motJeu = listMots[value].toUpperCase();

    console.log(motJeu)

    genererAffichageMot();
    input.value = "";

}

/**
 *
 * @param lettre
 */
function genererAffichageMot(lettre = null){

    divMot.innerText = "";
    let mot = "";

    for (let i = 0; i < motJeu.length; i++) {
        lettre !== null && motJeu.charAt(i) === lettre ? mot += lettre : mot += "_";
        mot+= " ";
    }

    divMot.innerText = mot;

}

function verifierLettreOuMot() {
    console.log(input.value)

    let value = input.value.toUpperCase()

    if (value.length === 1 ){
        if (contientLettre(value)){
            genererAffichageMot(value.charAt(0))
        }else {
            afficherPenduElement();
        }
    }else {

    }

}

/**
 *
 * @param {string} lettre
 * @return {boolean}
 */
function contientLettre(lettre){
    for (let i = 0; i < motJeu.length; i++) {
        if(motJeu.charAt(i) === lettre.charAt(0)) return true;
    }
    return false;
}

function afficherPenduElement(){
    document.getElementById("pendu-" + penduElement).style.display = "block";
    penduElement++;

    if (penduElement > 6){

    }
}




















