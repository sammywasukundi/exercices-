let nombre = prompt('Tapez un nombre entre 10 et 20')
while(nombre <= 10  || nombre >=20){
    if(nombre <= 10){
       console.log('Plus grand')
       break 
    }   
    else if(nombre >=20){
       console.log('Plus petit')
       break
    } 
    
    console.log('Bien joue')         
}
// if(nombre >= 10  || nombre <=20){
        
//     }
