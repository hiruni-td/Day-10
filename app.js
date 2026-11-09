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
            console.log("Correct Number");


        } else if (num < random) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User Number < Random Number... Try again!",

            });
            console.log("User Number < Random Number");

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User Number > Random Number... Try again!",

            });
            console.log("User Number > Random Number");
        }
        count++;
    }
}
        


    




