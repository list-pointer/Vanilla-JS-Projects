//using selectors inside the element

const btn = document.querySelectorAll(".question");

btn.forEach(function (item) {
    const question = item.querySelector(".question-btn");
    question.addEventListener("click", function () {
        item.classList.toggle("show-text");
    });
    
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const event = e.currentTarget.parentElement.parentElement;
//         event.classList.toggle("show-text");
//     });
// });

