// function sumArrayElements(array) {
//     let resultat = 0;
//     for (let i=0;i<array.length;i++) {
//       resultat += parseInt(array[i]);
//     }
//     return resultat;
//   }

  function averageArrayElements(array){
    let resultat = 0;
    for (let i = 0; i < array.length; i++) {
        resultat += parseInt(array[i]);
    }
    newAverage=resultat/array.length;
    return newAverage;
  }
  4
  let tableauNouveau = ['7', '10', '7'];
  let newAverage; // Déclaration de la variable
  newAverage = averageArrayElements(tableauNouveau);
  console.log(newAverage);

//   let resultat = sumArrayElements(tableauNouveau);
//   console.log(resultat);