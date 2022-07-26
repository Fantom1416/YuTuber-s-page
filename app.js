const listItems = document.querySelectorAll("li")

const deleteItems = () => {
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("active")
    }
}

for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i]);
    listItems[i].addEventListener("click", (e) => {
        console.log(e);
        deleteItems()
        listItems[i].classList.add("active")
    })
}