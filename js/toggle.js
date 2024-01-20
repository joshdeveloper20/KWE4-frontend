let toggleNav = document.getElementById("toggle");
let sidebar = document.getElementById("sidebar");
let main = document.getElementById("main");
let header = document.getElementById("header");
let body = document.querySelector("body");
let timeBar = document.getElementById("cancel");
let subMenu = document.querySelectorAll(".submenu");
let listWithChildren = document.querySelectorAll(".list-with-children");

toggleNav.addEventListener("click", function (e) {
    if (body.offsetWidth >= 1200) {
        sidebar.classList.toggle("remove");
        main.classList.toggle("stretch");
        header.classList.toggle("expand");
    } else if (body.offsetWidth < 1198) {
        sidebar.classList.toggle("active");
    }
});

timeBar.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    sidebar.classList.remove("remove");
});

listWithChildren.forEach((list) => {
    list.addEventListener("click", function (e) {
        const clicked = e.target.closest(".list-with-children");
        // console.log(clicked);

        document
            .querySelector(`.submenu-${clicked.dataset.list}`)
            .classList.toggle("submenu-active");
        clicked.classList.toggle("active");
    });
});