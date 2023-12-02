let cart = [];
let divBody = document.querySelector("main");
localStorage.setItem("purchased", JSON.stringify(cart));
let items = JSON.parse(localStorage.getItem("ManzNotAdmin")) || [];

divBody.innerHTML = items.map(function(i, index) {
    return `
        <div>
            <h2>${i.name}</h2>
            <p>${i.description}</p>
            <button value="${index}" data-add>Buy</button>
        </div>
    `;
}).join("");

function addToCart(index) {
    cart.push(items[index]);
    localStorage.setItem("purchased", JSON.stringify(cart));
}

divBody.addEventListener("click", function () {
    if (event.target.hasAttribute("data-add")) {
        addToCart(event.target.value);
    }
});

console.log(cart);

let a = items.filter(i => {
    return i.name == "Nike" 
})
console.log(a);