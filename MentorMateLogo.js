function validInput(number) { // Check the input is correct!
    if(typeof number !== 'number'){
        console.log('Please enter numbers only!');
    }else if (number > 2 && number < 10000 && number % 2 === 1) {
        printMMLogo(number);
    } else {
        throw Error("Wrong Input!")
    }
}

function printMMLogo(number){

let star = "*";
let dash = "-";

    firstNumToDecrease = number;
    secondNumToDecrease = number;
    thirdNumToIncrease = number;

 
        for(let i = 0; i < number / 2; i++){ //prints the lines above the middile  of M

            line = dash.repeat(firstNumToDecrease) + 
            star.repeat(secondNumToDecrease) + 
            dash.repeat(thirdNumToIncrease) + 
            star.repeat(secondNumToDecrease) + 
            dash.repeat(firstNumToDecrease);
            console.log(line.repeat(2));

            firstNumToDecrease--;
            secondNumToDecrease += 2;
            thirdNumToIncrease -= 2;
        }
        for(let i = 0; i < number / 2; i++){ // // prints the lines  below the middle of M

            secondNumToDecrease -= 2;
            thirdNumToIncrease += 2;
            
            line = dash.repeat(firstNumToDecrease) + 
            star.repeat(number) + 
            dash.repeat(thirdNumToIncrease) + 
            star.repeat(secondNumToDecrease) + 
            dash.repeat(thirdNumToIncrease) + 
            star.repeat(number) + 
            dash.repeat(firstNumToDecrease);
            console.log(line.repeat(2));
            firstNumToDecrease--;
        }

    }
    printMMLogo(9)



