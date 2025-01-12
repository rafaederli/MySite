const header = document.querySelector("header")
const divider = document.getElementById("divider")
const main = document.querySelector("main")

header.addEventListener("click", () => {
    header.classList.add("clicked")
    divider.classList.add("divider")
    main.classList.add("visible")
})