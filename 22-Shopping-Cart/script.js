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

const categories = [...new Set(products.map((product) => product))];
console.log(categories);

document.querySelector(".productList").innerHTML = categories
    .map((item) => {
        const { id, title, image, price } = item;
        return `
            <div class="box" kety="${id}">
                    <div class="img-box">
                        <img src="${image}" alt="product img" class="images">
                    </div>
                    <div class="bottom">
                        <p>${title}</p>
                        <h2>$ ${price}</h2>
                    <button onclick='${addToCart(id)}'> add to cart </button>
                    </div>
            </div>`;
    })
    .join("");

// add to cart
// function addToCart(a) {
//     console.log("add to cart " + a);
// }

// const cart = [];

// function displayCart() {
//     let j = 0;
//     if (cart.length == 0) {
//     }
// }
