// Iteration 1: Names and Input
let hacker1= "Gemma";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "Javier";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

}
else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else if (hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
hacker1= hacker1.toUpperCase()
hacker1= hacker1.split("").join(" ");
console.log(hacker1);

let navigator="";

for(let i=hacker2.length-1; i>=0; i--){
    navigator += hacker2[i]
    console.log(navigator);
   if(hacker2[i]=== "a"){
    console.log("The driver's name goes first");

   } 
   else if(hacker2[i]=== "e"){
    console.log("Yo, the navigator goes first, definitely.");
   }
   else{
    console.log("What?! You both have the same name?");
   }
}
