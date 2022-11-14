let  num = 0
let maxi = 0
let effectif = 0
let i = 0
effectif =prompt('Combien des valeurs voulez vous mettre')
console.log(effectif)

prompt('Tapez les nombres au choix')
for(i = 0 ; i < effectif ; i++){
    prompt(i + ")") 
    console.log(num)
    if(num > maxi){
        maxi=num
    }
    if(num === 0){
        break
    }
}
console.log("Le plus grand est :" + maxi + " ,il est a la place  " + i)