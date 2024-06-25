Navbar("../../index.html", "./products.html", "../cart/cart.html", "../account/account.html");

authenticateUser();

document.addEventListener("DOMContentLoaded", function () {
  const ProductsContainer = document.querySelector(".products-container");

  // fetch("http://localhost:5000/getAllProducts")
  fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((products) => {
      products.forEach((product) => {
        const anchor = document.createElement("a");
        anchor.href = `../product/product.html?id=${product.id}`;
        anchor.style.textDecoration = "none";

        const product_con = document.createElement("div");
        product_con.className = "product-container";
        const imageCon = document.createElement("div");
        const Image = document.createElement("img");
        //  Image.src = "../../assets/Postman.png";
        Image.src = product.image;
        Image.alt = product.title;
        imageCon.className = "imageContainer";
        imageCon.appendChild(Image);

        const contentCon = document.createElement("div");
        contentCon.className = "content-container";
        const title = document.createElement("div");
        title.className = "title";
        title.innerText = product.title;
        const price = document.createElement("div");
        price.innerText = `$${product.price}`;
        price.className = "price";
        contentCon.appendChild(title);
        contentCon.appendChild(price);
        product_con.appendChild(imageCon);
        product_con.appendChild(contentCon);
        anchor.appendChild(product_con);

        ProductsContainer.appendChild(anchor);

        product_con.style.cursor = "pointer";
      });
    })
    .catch((error) => {
      console.error("Error fetching the products:", error);
    });
});
