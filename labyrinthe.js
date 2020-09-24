let labyrinthe = [
    ["S", 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1]
];

let i = 0;
let j = 0;

let croisement = [];

while (labyrinthe[i][j] !== "G") {

    showLaby();
    console.log("Je suis à la position : y = " + i + " x = " + j);
    labyrinthe[i][j] = "X";

    let nombreDirection = searchDirection(labyrinthe, i, j);
    if (nombreDirection > 1){
        //croisement = [...position];
        croisement.push([i, j]);
    }
    console.log(croisement);
    [i, j] = deplacement(labyrinthe, i, j);
    //console.log(i, j);
}
console.log("Vous avez trouver le point G à la position " + "y = " + i + " x = " + j)

//----- fonction searchDirection -----//
function searchDirection(labyrinthe, i, j){

    let deplacementPossible = 0;

    if (i < labyrinthe.length - 1 && (labyrinthe[i + 1][j] === 1 || labyrinthe[i + 1][j] === "G")){
        deplacementPossible += 1;
    }

    if (j < labyrinthe[i].length - 1 && (labyrinthe[i][j + 1] === 1 || labyrinthe[i][j + 1] === "G")){
        deplacementPossible += 1;
    }

    if (i > 0 && (labyrinthe[i - 1][j] === 1 || labyrinthe[i - 1][j] === "G")){
        deplacementPossible += 1;
    }

    if (j > 0 && (labyrinthe[i][j - 1] === 1 || labyrinthe[i][j - 1] === "G")){
        deplacementPossible += 1;
    }

    return deplacementPossible;
}

//----- fonction deplacement ------//
function deplacement(labyrinthe, i, j){

    if (i < labyrinthe.length - 1 && (labyrinthe[i + 1][j] === 1 || labyrinthe[i + 1][j] === "G")) {

        i += 1;
    } else if (j < labyrinthe[i].length - 1 && (labyrinthe[i][j + 1] === 1 || labyrinthe[i][j + 1] === "G")) {

        j += 1;
    } else if (i > 0 && (labyrinthe[i - 1][j] === 1 || labyrinthe[i - 1][j] === "G")) {

        i -= 1;
    } else if (j > 0 && (labyrinthe[i][j - 1] === 1 || labyrinthe[i][j - 1] === "G")) {

        j -= 1;
    } else {
        i = croisement[croisement.length - 1][0];
        j = croisement[croisement.length - 1][1];
        croisement.pop();
    }

    return [i, j];
}

function showLaby(){
    for (let i = 0; i < labyrinthe.length; i++){
        for (let j = 0; j < labyrinthe[i].length; j++){
            process.stdout.write( " " + labyrinthe[i][j] );
        }
            console.log("");
    }
    console.log("");
}