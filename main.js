let li = document.querySelectorAll('li')
let img = document.querySelectorAll('img')

li.forEach(function (e) {
    let data
    e.addEventListener("click", (e) => {
        // Remove and add active class
        li.forEach((e) => {
            e.classList.remove("active")
        })
        e.currentTarget.classList.add("active")

        // Manage Images
        img.forEach((e) => {
            e.style.display = "none"
        })
        data = e.currentTarget.getAttribute("data-cat")
        img.forEach((e) => {
            if (e.classList.contains(data)) {
                e.style.display = "block"
            }
        })
    })
})