const productListEl = document.querySelector(".productList");

const products = [
    {
        id: 1,
        title: "Deerway Sport Shoes (Slv Grey/ Blue) 24513505-5",
        image: "img/product-1.webp",
        price: 2139,
    },
    {
        id: 2,
        title: "Upgrade CPU for G31/G41 Mainboards Intel Core2 Quad Q8400 @ 2.66GHz",
        image: "img/product-6.webp",
        price: 2200,
    },
    {
        id: 3,
        title: "Sunlite 04 Black Goldstar Shoes For Men",
        image: "img/product-2.webp",
        price: 1000,
    },
    {
        id: 4,
        title: "Morning Walk Grey Sports Milano Casual Running Shoes For Men",
        image: "img/product-3.webp",
        price: 600,
    },
    {
        id: 5,
        title: "Ddr3 8 Gb Pc3 Laptop Ram",
        image: "img/product-4.webp",
        price: 2100,
    },
    {
        id: 6,
        title: "V8 Audio USB Headset Microphone Webcast Live Sound Card",
        image: "img/product-5.webp",
        price: 979,
    },
];
let listCarts = [];

const initApp = () => {
    products.map((product, key) => {
        const { id, title, image, price } = product;
        let box = document.createElement("div");
        box.className = "box";
        box.innerHTML = `
        <div class="img-box">
                        <img src="${image}" alt="product img" class="images">
                    </div>
                    <div class="bottom">
                        <p>${title}</p>
                        <h2>$ ${price}</h2>
                    <button onclick='addToCart(${key})'> Add to cart </button>
                    </div>
        `;
        productListEl.appendChild(box);
    });
};

initApp();
console.log(listCarts);
function addToCart(key) {
    if (listCarts[key] == null) {
        listCarts[key] = products[key];
        // console.log(listCarts[key] == null);
        console.log(products[key]);
        listCarts[key].quantity = 1;
        console.log(key);
    }
    reloadCart();
}

function reloadCart() {
    cartItems.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        console.log(value);

        if (value !== null) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("cartItem");
            newDiv.innerHTML = `
                <div class="item_img">
                    <img src="${value.image}" />
                </div>
                <div>${value.title.slice(0, 20)}</div>
                <div>$ ${value.price}  </div>
            `;
            cartItems.appendChild(newDiv);
        } else {
            console.log("Hello world!");
        }
    });
}

addToCart(3);
