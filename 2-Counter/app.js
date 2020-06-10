let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const stylesClass = e.currentTarget.classList;
        if (stylesClass.contains("decrease")) {
            count--;
        }
        else if (stylesClass.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
        if (count >= 1) {
            value.style.color = "green";
        }
        else if (count == 0) {
            value.style.color = "black";
        }
        else {
            value.style.color = "red";
        }
    });
});