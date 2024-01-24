function afficherLesNombres(nombre)
{
    for (let i=1;i<=nombre;i++){
        console.log(i);
    }
}

function afficherLesNombresRetour(nombre){
    for(let j=nombre;j>0;j--){
        console.log(j);
    }
}

function afficherNombresPairs(nombre){
    for(let u=1;u<=nombre;u++){
        let pair = u*2;
        texte += `${pair} - `;
    }
    console.log(texte);
}

function afficherNombresPairs(nombre){
    let texte="";
    for(let u=1;u<=nombre;u++){
        let pair = u*2;
        if(u===nombre){
            texte += `${pair}`;
        } else {
            texte += `${pair} - `;
        }
    }
    console.log(texte);
}

function afficherPuissancesDeDeux(){
    for(let o=1;o<17;o++){
        let puissanceResultat = Math.pow(2,o);
        texte+=`La puissance de 2 par ${o} donne ${puissanceResultat}.\n`;
    }
    console.log(texte);
}

function afficherPuissancesDeDeuxWhile(){
    let k=1;
    while(k<17){
         let puissanceResultat = Math.pow(2,k);
         texte+=`La puissance de 2 par ${k} donne ${puissanceResultat}.\n`;
         k++;
    }
    console.log(texte);
}

let n = prompt(`Saisir un nombre`);
afficherLesNombres(n);
afficherLesNombresRetour(n);
afficherNombresPairs(n);
afficherPuissancesDeDeux();
afficherPuissancesDeDeuxWhile();