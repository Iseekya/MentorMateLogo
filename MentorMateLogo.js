let LogoPrinter = (function() {

    const star = "*";
    const dash = "-";

    let firstNumToDecrease;
    let secondNumToDecrease;
    let thirdNumToIncrease;

    // Constructor
    function LogoPrinter() {}

    function validateInput(number) {
        if(typeof number !== 'number') {
            console.log('Please enter numbers only!');
        } else if (number > 2 && number < 10000 && number % 2 === 1) {
            drawMMLogo(number);
        } else {
            throw Error("Wrong Input!");
        }
    }


    function drawMMLogo(number) {

        firstNumToDecrease = number;
        secondNumToDecrease = number;
        thirdNumToIncrease = number;
            
        printTopPart(number);
        printBottomPart(number);

    }

    // prints the lines above the middile  of M
    function printTopPart(number) {

        for(let i = 0; i < number / 2; i++) {

            line = dash.repeat(firstNumToDecrease) + 
            star.repeat(secondNumToDecrease) + 
            dash.repeat(thirdNumToIncrease) + 
            star.repeat(secondNumToDecrease) + 
            dash.repeat(firstNumToDecrease);
            console.log(line.repeat(2));
            
            firstNumToDecrease --;
            secondNumToDecrease += 2;
            thirdNumToIncrease -= 2;
        }
    }

    // prints the lines  below the middle of M
    function printBottomPart(number) {

        for(let i = 0; i < number / 2; i++) {  

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

            firstNumToDecrease --; 
        }
    }



    LogoPrinter.prototype.print = function(input) {
        return validateInput.call(this, input);
    }
    
    return LogoPrinter;
})();

let logoPrinter = new LogoPrinter();
    
logoPrinter.print(3);

