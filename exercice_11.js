// let nbre = prompt('Entrez un nombre au choix')
// console.log(nbre)
let nbre
const factorielle = (nbre) => {
    if(nbre === 0){
       return 1 
    }   
    else{
        return nbre * factorielle(nbre - 1)
    }
         
}
console.log(factorielle(5)) 