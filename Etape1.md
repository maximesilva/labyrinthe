# Etape 1 

## De quoi avez vous besoin à chaque étape pour vous arrêter ? pour continuer ?

A chaque étape j'ai besoin de tester toutes éventualitées de direction pour avancer. Pour m'arrêter,
il faut que j'enregistre les étapes ou j'ai plusieurs directions pour pouvoirs, si besoin y retourner et
tester d'autres directions.

### Pseudo code : 
```javascript
let array = [
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 2, 1, 1],
    [1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1]
];
let start = array[i][j];
let position = start;
let croisement = [];
while (position !== G) {
    let deplacementPossible = 0;
   
    if (searchDirection() > 1){
        croisement.push(position);
}
    deplacement(array, position);
}
//----- fonction searchDirection -----//
if (array[positionBas] = 1){
    deplacementPossible += 1;
}else if (array[positionDroite] = 1){
    deplacementPossible += 1;
}else if (array[positionHaut] = 1){
     deplacementPossible += 1;
}else if (array[positionGauche] = 1){
      deplacementPossible += 1;
}
return deplacementPossible;

//----- fonction deplacement ------//
if (array[positionBas] = 1){
    array[position] = 0;
    position = positionBas;
}else if (array[positionDroite] = 1){
    array[position] = 0;
    position = positionDroite;
}else if (array[positionHaut] = 1){
    array[position] = 0;
    position = positionHaut;
}else if (array[positionGauche] = 1){
    array[position] = 0;
    position = positionGauche;
}else {
    position = croisement[croisement.length -1];
    croisement.pop(croisement[croisement.length -1]);
    
}
return position;

```


