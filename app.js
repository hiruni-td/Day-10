let random = Math.floor(Math.random()* 10 + 1);
console.log(random);

// let count = 0;

function guessNumber(){

    let num = (document.getElementById("userNumber").value);
    console.log(num);
    
    
        if(num == random){
            console.log("Correct Number");
            

        }else if(num < random){
            console.log("Low Number");
            

        }else{
            console.log("High Number");
            
        }
        
    
}