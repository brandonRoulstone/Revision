let itemArr = [];

function ConstructorFunc(id, name, description, price, url) {
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}

let item2 = new ConstructorFunc(1, "Nike", "Amazing Shoe 1", 2500, "https://i.postimg.cc/ZRMGb1VY/Nike-logo.png");
let itemThree = new ConstructorFunc(2, "Nike Air", "Amazing Shoe 2", 3500, "https://i.postimg.cc/ZRMGb1VY/Nike-logo.png");

itemArr.push(item2, itemThree);
localStorage.setItem("ManzNotAdmin", JSON.stringify(itemArr));

//storing data into existing array
itemArr = JSON.parse(localStorage.getItem("ManzNotAdmin"));
let adminDom = document.querySelector("table");


function Brandon(){
    let initialState = itemArr.map(function(item, index){
    console.log(item);
    console.log(index);
    return `
    <tr>
    <td><img src="${item.url}" /></td>
    <td> | ${item.name}</td>
    <td>| R ${item.price}</td>
    <td> | ${item.description} |</td>
    <td><button>Edit</button></td>
    <td><button class="Del" value="${index}">Delete</button></td>
    </tr>
    `
});
adminDom.innerHTML = initialState.join("");
}
Brandon()

function favourite(){
    localStorage.setItem("ManzNotAdmin", JSON.stringify(itemArr));

    //storing data into existing array
    itemArr = JSON.parse(localStorage.getItem("ManzNotAdmin"));
}

function rmv(atPosition){
    itemArr.splice(atPosition,1);
    favourite();
    Brandon();
}

let delBtn = document.querySelector(".Del");

adminDom.addEventListener("click", function(){
    if (event.target.classList.contains("Del")){
        rmv(event.target.value, Brandon())
        // alert(event.target.value)
        // console.log(itemArr)
    }
})
