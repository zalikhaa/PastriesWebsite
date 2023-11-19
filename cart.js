let openCart = document.querySelector('.shopping');
let closeCart = document.querySelector('.closeCart');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openCart.onclick =  function() {
    body.classList.add('active');
}
closeCart.onclick = function (){ 
    body.classList.remove('active');
}
total.onclick = function() {
    window.location.replace("payment.html");
  }


let items = [
    {
        id: 1,
        name: 'Buttered Croissant',
        image: 'croissant.png',
        price: 7.90
    },
    {
        id: 2,
        name: 'Chocolate Cronut',
        image: 'cronut.png',
        price: 9.90
    },
    {
        id: 3,
        name: 'Pain Au Chocolate',
        image: 'pain.jpg',
        price: 8.90
    },
    {
        id: 4,
        name: 'Pistachio Supreme',
        image: 'supreme.jpg',
        price:  14.90
    },
    {
        id: 5,
        name: 'Strawberry Mille Feuille',
        image: 'millie.png',
        price: 15.90
    },
    {
        id: 6,
        name: 'Pain Suisse Praline',
        image: 'suesse.jpeg',
        price: 16.90
    },
    {
        id: 7,
        name: 'Blueberry Danish',
        image: 'danish.png', 
        price: 12.90
    },
    {
        id: 8,
        name: 'Tiramisu',
        image: 'tiramisu.png',
        price: 11.90
    }
];
let Carts  = [];
function App(){
    items.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="name">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
App();
function addToCart(key){
    if(Carts[key] == null){
        Carts[key] = JSON.parse(JSON.stringify(items[key]));
        Carts[key].quantity = 1;
    }
    addCart();
}
function addCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    Carts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete Carts[key];
    }else{
        Carts[key].quantity = quantity;
        Carts[key].price = quantity * items[key].price;
    }
    addCart();
}