let darkModeSwitchedElement = document.querySelector(".dark-mode-switched");
let htmlElement = document.querySelector("html");
darkModeSwitchedElement.onclick = () => {
    htmlElement.setAttribute("data-bs-theme",
        htmlElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark");
};

let dateElement = document.querySelector("#date > span:last-child");

let date = new Date();
let s = new Intl.DateTimeFormat("en-US", {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
).format(date);

let s1 = date.toLocaleDateString("en-US", {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
});
dateElement.innerHTML = s1;