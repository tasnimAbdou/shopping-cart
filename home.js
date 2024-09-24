document.addEventListener("DOMContentLoaded", () => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth) {
        console.log(auth)

        userId = auth.id;

    } else { console.log('noauth') }

    const storedData = JSON.parse(localStorage.getItem(`carts ${userId}`));
    console.log(storedData);

    if (storedData) {
        console.log('there is data');
        storedData.forEach((storedcart) => cart.push(storedcart));
        updateCart();
    }

    console.log(cart)
    number.innerHTML = cart.length;
    updateCart();

}

)

const products = [
    {
        "id": "1",
        "name": "Wireless Mouse",
        "price": 25.99,
        "amount": 1,
        "imgUrl": "./img/wirlessmouse.JPG",
        "description": "Ergonomic wireless mouse with adjustable DPI."
    },
    {
        "id": "2",
        "name": "Bluetooth Headphones",
        "price": 59.99,
        "amount": 1,
        "imgUrl": "./img/BluetoothHeadphones.jpg",
        "description": "Noise-cancelling headphones with a comfortable fit."
    },
    {
        "id": "3",
        "name": "Smartphone Stand",
        "price": 15.49,
        "amount": 1,
        "imgUrl": "./img/SmartphoneStand.jpg",
        "description": "Adjustable stand compatible with all smartphones."
    },
    {
        "id": "4",
        "name": "Laptop Backpack",
        "price": 45.00,
        "amount": 1,
        "imgUrl": "./img/LaptopBackpack.jpg",
        "description": "Stylish and spacious backpack for laptops up to 15 inches."
    },
    {
        "id": "5",
        "name": "4K UHD Monitor",
        "price": 299.99,
        "amount": 1,
        "imgUrl": "./img/4KUHDMonitor.jpg",
        "description": "High-resolution monitor with vibrant colors."
    },
    {
        "id": "6",
        "name": "Portable Charger",
        "price": 29.99,
        "amount": 1,
        "imgUrl": "./img/PortableCharger.jpg",
        "description": "Compact power bank with fast charging capabilities."
    },
    {
        "id": "7",
        "name": "Wireless Keyboard",
        "price": 39.99,
        "amount": 1,
        "imgUrl": "./img/WirelessKeyboard.jpg",
        "description": "Sleek wireless keyboard with a quiet typing experience."
    },
    {
        "id": "8",
        "name": "Fitness Tracker",
        "price": 49.99,
        "amount": 1,
        "imgUrl": "./img/FitnessTracker.JPG",
        "description": "Monitor your health and fitness with ease."
    }

];
var cart = [];
userId = '';
const user = document.getElementById("username");
const mycart = document.getElementById('mycart');

const productcontainer = document.getElementById("productcontainer");
const tot = document.getElementById('total');
const number = document.getElementById('number');
const cartbtn=document.getElementById("cartbtn");


const addToCart = (item) => {
    console.log(item);
    console.log(user.innerHTML);
    cart.push(item);
    localStorage.setItem(`carts ${userId}`, JSON.stringify(cart));
    console.log(cart);
    document.getElementById("number").innerHTML = cart.length;
    updateCart();

}


if (productcontainer) {
    user.innerHTML = auth.firstName + "  " + auth.lastName;

    products.forEach((item) => {
        console.log(item.name);
        let productCard = document.createElement("div")
        productCard.setAttribute("class", "card productCard ");
        let productImg = document.createElement("img");
        productImg.setAttribute("class", "card-img-top ");
        productImg.setAttribute("alt", "imgUrl");
        productImg.setAttribute("src", item.imgUrl);

        let cardbody = document.createElement("div")
        cardbody.setAttribute("class", "card-body ");
        let cardtitle = document.createElement("h5")
        cardtitle.setAttribute("class", "card-title ");
        cardtitle.innerHTML = item.name;

        let cardsubtitle = document.createElement("h6")
        cardsubtitle.setAttribute("class", "card-subtitle mb-2 text-muted ");
        cardsubtitle.innerHTML = item.price;

        let cardtext = document.createElement("p")
        cardtext.setAttribute("class", "card-text ");
        cardtext.innerHTML = item.description;


        let cardbutn = document.createElement("a")
        cardbutn.setAttribute("class", "btn btn-primary ");
        cardbutn.setAttribute("id", "addtocart ");
        cardbutn.innerHTML = 'AddToCart';
        cardbutn.addEventListener("click", function (e) { addToCart(item) });
        productCard.appendChild(productImg);
        productCard.appendChild(cardbody);

        cardbody.appendChild(cardtitle);
        cardbody.appendChild(cardsubtitle);
        cardbody.appendChild(cardtext);
        cardbody.appendChild(cardbutn);


        productcontainer.appendChild(productCard);

    });
}




const updateCart = () => {
    if (mycart) {
        let cartcontainer = document.getElementById('carts');
        cartcontainer.innerHTML = '';

        if (cart) {

            let total = 0;

            mycart.innerHTML = 'you have ' + cart.length + ' items in your cart ';
            const table = document.createElement('table');

            table.setAttribute('class', 'table');
            table.innerHTML = `
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">product </th>
      <th scope="col">name</th>
            <th scope="col">amount</th>
      <th scope="col">price</th>

      <th scope="col"><th>
    </tr>
  </thead>
  
`

            cart.forEach((item, index) => {
                console.log(item);
                total = total + item.price;
                let tablebdy = document.createElement('tbody');
                tablebdy.innerHTML = `
   
    <tr>
      <th scope="row">${index + 1}</th>
      <td>${item.price}</td>
      <td>${item.name}</td>
          <td >${item.amount}</td>

      <td>${item.price}</td>

      <td><button id="del" onclick="remove(${index})">del</button><td>
    </tr>
    `

                table.appendChild(tablebdy);


            });
            cartcontainer.appendChild(table);
            console.log(total);
            console.log(cart.length);
            tot.innerHTML = `total: ${total}`;

        }
        else { mycart.innerHTML = 'there is no item in cart' }
    }
}

const remove = (index) => {
    console.log(index);
    cart.splice(index, 1);
    localStorage.setItem(`carts ${userId}` , JSON.stringify(cart));

    updateCart();

    console.log(cart)
}
