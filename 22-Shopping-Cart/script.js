const productListEl = document.querySelector(".productList");

const products = [
    {
        id: 1,
        title: "Mercural Futsal Shoes For Men By Jutta Ghar Nepal",
        image: "https://static-01.daraz.com.np/p/f7610aef1e17958866687f33d0c84376.jpg_750x750.jpg_.webp",
        price: 999,
    },
    {
        id: 2,
        title: "Non-Stretchable Summer Cotton Pants For Women",
        image: "https://static-01.daraz.com.np/p/491151fc679b17a8091f128ab05340ea.jpg_750x750.jpg_.webp",
        price: 1319,
    },
    {
        id: 3,
        title: "Golden Frame & Black Lens Sunglasses For Men & Women",
        image: "https://static-01.daraz.com.np/p/04036e4af19d0db93edec186559387c6.jpg_750x750.jpg_.webp",
        price: 600,
    },
    {
        id: 4,
        title: "Naviforce NF9203 Men Quartz Luxury Fashion Casual ",
        image: "https://static-01.daraz.com.np/p/67f6f28d52fc24f3b65f346087526946.jpg_750x750.jpg_.webp",
        price: 1200,
    },
    {
        id: 5,
        title: "Mercural Futsal Shoes For Men By Jutta Ghar Nepal",
        image: "https://static-01.daraz.com.np/p/f7610aef1e17958866687f33d0c84376.jpg_750x750.jpg_.webp",
        price: 10,
    },
    {
        id: 6,
        title: "Mercural Futsal Shoes For Men By Jutta Ghar Nepal",
        image: "https://static-01.daraz.com.np/p/f7610aef1e17958866687f33d0c84376.jpg_750x750.jpg_.webp",
        price: 10,
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

function addToCart(key) {
    if (listCarts[key] == null) {
        listCarts[key] = products[key];
        listCarts[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart() {
    cartItem.innerHTML = "Your Cart is empty";
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value !== null) {
            let newDiv = document.createElement("div");
        } else {
            console.log("Hello world!");
        }
    });
}

addToCart(3);
