// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navButton = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navButton.addEventListener('click', function () {
    // const clss = links.classList;
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // }
    // else {
    //     links.classList.add("show-links");
    // }
    // use the below code if not want to use the above code
    links.classList.toggle("show-links");
});
