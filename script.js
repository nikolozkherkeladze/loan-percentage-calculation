var btn = document.getElementById('gtg2');

btn.onclick = function(){
    var userInput0 = prompt('choose descripton type: 1: Easy loan; 2:difficult loan; 3: loan with payment frequency ');

    if(userInput0 == 1){
        var userInput1p = prompt('enter amount of money given: ');
            var userInput2r = prompt('enter procentege of cash: ');
                var userInput3t = prompt('enter time for fee: ');
                if(userInput0 <= 0 && userInput0 >3 && userInput1p <= 0 && userInput2r <= 0 && userInput3t <= 0)
                {console.log('please enter valid number')};
        
        var findS = userInput1p * (1 + ((userInput2r/100) * userInput3t/100));
        var win = findS - userInput1p;

        console.log('S= ' + findS + '; win = ' + win);
    }
    else if(userInput0 == 2){
         var userInput1p = prompt('enter amount of money given: ');
            var userInput2r = prompt('enter procentege of cash: ');
                var userInput3t = prompt('enter time for fee: ');
                if(userInput0 <= 0 && userInput0 >3 && userInput1p <= 0 && userInput2r <= 0 && userInput3t <= 0)
                {console.log('please enter valid number')};

        var findS2 = userInput1p * (1 + Math.pow((userInput2r/100), userInput3t));
        var win2 = findS2 - userInput1p;

       console.log('S= ' + findS2 + '; win = ' + win2);

    }
     else if(userInput0 == 3){
         var userInput1p = prompt('enter amount of money given: ');
            var userInput2r = prompt('enter procentege of cash: ');
                var userInput3t = prompt('enter time for fee: ');
                var userInput4n = prompt('enter how many times in year is payment');
     }
                if(userInput0 <= 0 && userInput0 >3 && userInput1p <= 0 && userInput2r <= 0 && userInput3t <= 0)
                {console.log('please enter valid number')};
            
            var TXN = userInput3t * userInput4n;

        var findS3 = userInput1p *(1 + ((userInput2r/100)/userInput4n) * Math.pow(((userInput2r/100)/userInput4n), TXN))

        var win3 = findS3 - userInput1p;

        console.log('S= ' + findS3 + '; win = ' + win3);    
}

function calculate()
{
     var userInput0 = prompt('choose descripton type: 1: Easy loan; 2:difficult loan; 3: loan with "n" ');

    if(userInput0 == 1){
        var userInput1p = prompt('enter amount of money given: ');
            var userInput2r = prompt('enter procentege of cash: ');
                var userInput3t = prompt('enter time for fee: ');
                if(userInput0 <= 0 && userInput0 >3 && userInput1p <= 0 && userInput2r <= 0 && userInput3t <= 0)
                {console.log('please enter valid number')};
        
        var findS = userInput1p * (1 + ((userInput2r/100) * userInput3t/100));
        var win = findS - userInput1p;

        console.log('S= ' + findS + '; win = ' + win);
    }
    else if(userInput0 == 2){
         var userInput1p = prompt('enter amount of money given: ');
            var userInput2r = prompt('enter procentege of cash: ');
                var userInput3t = prompt('enter time for fee: ');
                if(userInput0 <= 0 && userInput0 >3 && userInput1p <= 0 && userInput2r <= 0 && userInput3t <= 0)
                {console.log('please enter valid number')};

        var findS2 = userInput1p * (1 + Math.pow((userInput2r/100), userInput3t));
        var win2 = findS2 - userInput1p;

       console.log('S= ' + findS2 + '; win = ' + win2);

    }
     else if(userInput0 == 3){
         var userInput1p = prompt('enter amount of money given: ');
            var userInput2r = prompt('enter procentege of cash: ');
                var userInput3t = prompt('enter time for fee: ');
                var userInput4n = prompt('enter how many times in year is payment');
     }
                if(userInput0 <= 0 && userInput0 >3 && userInput1p <= 0 && userInput2r <= 0 && userInput3t <= 0)
                {console.log('please enter valid number')};
            
            var TXN = userInput3t * userInput4n;

        var findS3 = userInput1p *(1 + ((userInput2r/100)/userInput4n) * Math.pow(((userInput2r/100)/userInput4n), TXN))

        var win3 = findS3 - userInput1p;

        console.log('S= ' + findS3 + '; win = ' + win3);
}

