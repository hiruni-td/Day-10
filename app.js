let random = Math.floor(Math.random() * 10 + 1);
console.log(random);

let count = 0;

function guessNumber() {

    let num = Number(document.getElementById("userNumber").value);
    console.log(num);

    if (count < 3) {


        if (num == random) {
            Swal.fire({
                title: "Good job!",
                text: "Correct Answer",
                icon: "success"
            });
            document.getElementById("result").innerHTML = "Correct Number!";
            console.log("Correct Number");


        } else if (num < random) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User Number < Random Number... Try again!"

            });
            document.getElementById("result").innerHTML = "Low Number!";
            console.log("User Number < Random Number");

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User Number > Random Number... Try again!"

            });
            document.getElementById("result").innerHTML = "High Number!";
            console.log("User Number > Random Number");
        }
        count++;
    } else {
        Swal.fire({
            icon: "error",
            title: "Game Over",
            text: "You have used all 3 attempts...!"

        });
        document.getElementById("result").innerHTML = "Game Over!";
        console.log("Game Over");
    }
}





    












