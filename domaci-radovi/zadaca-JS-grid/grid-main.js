const gridList = document.querySelectorAll(".grid-item");

gridList.forEach(item => {
    item.addEventListener("mouseover", () => item.style.opacity = 0)
})
gridList.forEach(item => {
    item.addEventListener("mouseout", () => item.style.opacity = 1)
})