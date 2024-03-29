/*
minha solução
for(var i = 1; i <= 7; i++){
    console.log('#'.repeat(i));        
}
*/

console.log("########LOOPING A TRIANGLE##########\n\n");

//solução do livro encontrada em https://eloquentjavascript.net/code/
for(let line = '#'; line.length < 8; line += '#'){
    console.log(line);
}    

console.log("\n###########FIZZBUZZ#################\n\n");

//minha resolução
/*
for(let i = 1; i <= 100; i++){

    if(isDivisibleByThree(i) && !isDivisibleByFive(i)) console.log("Fizz", i);
    else if(!isDivisibleByThree(i) && isDivisibleByFive(i)) console.log("Buzz", i);
    else if(isDivisibleByThree(i) && isDivisibleByFive(i)) console.log("FizzBuzz", i);
    else console.log(i);
}    

function isDivisibleByThree(_num){
    return _num%3 == 0 ? true : false; 
}

function isDivisibleByFive(_num){
    return _num%5 == 0 ? true : false; 
}
*/

//resolução do livro :)
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

console.log("\n###########CHESSBOARD#################\n\n");

let size = 8;
let out = "";

for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
        if( (j + i) % 2 == 0 ) out += " ";
        else out += "#";
    }
    out += "\n";
}

console.log(out);


/* solução do livro - ficou identica \o/
    let size = 8;

    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
            board += " ";
            } else {
            board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);    
*/
