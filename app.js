let random = Math.floor(Math.random()* 10 + 1);
let count = 0;

function guessNumber(){

    let num = Number(document.getElementById("userNumber").value);

    if(count <=3 ){

        if(num > random){
            document.getElementById("result").innerHTML = random + 1;

        }else if(num < random){
            document.getElementById("result").innerHTML = random - 1;

        }else{
            document.getElementById("result").innerHTML = random;
        }
        count++;

    }else{
        document.getElementById("result").innerHTML = "Game Over";
    }
    
}