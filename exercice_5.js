let A
let B
let C
let delta
let X1
let X2
 A = prompt("Entrez une valeur pour A")
console.log(A)
B = prompt("Entrez une valeur pour B")
console.log(B)
C = prompt("Entrez une valeur pour C")
console.log(C)

delta = Math.pow(B,2) - 4 * (A * C)
 if (delta > 0)
{
    X1 = ((-B) + Math.sqrt(delta)) / (2 * A)
    X2 = ((-B) - Math.sqrt(delta)) / (2 * A)
    console.log("il y'a deux solutions dont " + X1 + " et " + X2)
}
else if (delta == 0) 
{
    X1 = X2 = (-B) / (2 * A) 
    console.log(" X1 = X2 et ça donne " + X1 + " = " + X2)
 }
else
 {
    console.log("Pas de racine reelle")
  }