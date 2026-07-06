export function multiply(a,b){
    return a*b;
}


// module are worked on same as scope like : they are inside of isolated module scope --> and their var and functions 
// cannot be accessed or used till they are exposed explicitily
// encapsulation , explicit sharing , no global namespace pollution(naming conflict none)

// when we use the whole module code is wrapped inside a function name as IIFE - immedialtely invoked function expression 
// creating a function  adn on instant invoking it

// (function x(){
// all code of module run inside this require first wrapped inside IIFE and then give it to V8
// })(); (IIFE)-> encapsulation(privacy of var and methods), 