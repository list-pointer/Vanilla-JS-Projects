const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    // console.log(document.body);
    // Get Random number between 0-3 for accesing the value from Array.
    const randomNumber = getrandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getrandomNumber()
{
    return Math.floor(Math.random()*(4-0)+0);
}

