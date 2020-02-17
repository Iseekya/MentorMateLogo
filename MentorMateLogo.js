var LogoPrinter = (function () {

    const star = "*";
    const dash = "-";


    // Constructor
    function LogoPrinter () {
    }

    // Check the input is correct!
    function validateInput(number) {
            if(typeof number !== 'number'){
                console.log('Please enter numbers only!');
            }else if (number > 2 && number < 10000 && number % 2 === 1) {
                printMMLogo(number);
            }else {
                throw Error("Wrong Input!");
            }
        }


    function printMMLogo(number){

            
        let firstNumToDecrease = number;
        let secondNumToDecrease = number;
        let thirdNumToIncrease = number;
            
             
        //prints the lines above the middile  of M
        for(let i = 0; i < number / 2; i++){
            
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
            // prints the lines  below the middle of M
            for(let i = 0; i < number / 2; i++){
            
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



 LogoPrinter.prototype.publicFun = function (input) {
        return validateInput.call(this, input);
    }
        return LogoPrinter;
 })();
    
    
    let logoPrinter = new LogoPrinter();

    logoPrinter.publicFun(9);

