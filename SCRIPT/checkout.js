let purchased = JSON.parse(localStorage.getItem("purchased"))

let main = document.querySelector("main");


main.innerHTML = purchased.map((item, index) => {
    return `
    <div>
        <div>
            <div>${index+1}</div>
            <div>${item.name}</div>
            <div>${item.description}</div>
            <div>${item.price}</div>
        </div>
    </div>
    `
}).join("")