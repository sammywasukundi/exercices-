let nombre = 0
let max = 0
let i = 0
for(i = 1 ; i < 21 ; i++){
    nombre = prompt('Tapez la valeur numero :'+ i + '\n')
    console.log(nombre)
    if(nombre > max){
        max = nombre
    }
}
console.log('le plus grand est ' + max + ' il est a la place ' + i)