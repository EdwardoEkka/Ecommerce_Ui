Navbar("../../index.html", "../products/products.html", "../cart/cart.html", "../account/account.html");

authenticateUser();

const currentPageUrl = window.location.href;
const urlObject = new URL(currentPageUrl);
const params = new URLSearchParams(urlObject.search);
const page = params.get("id");
const user = JSON.parse(sessionStorage.getItem("user"));

document.addEventListener("DOMContentLoaded", function () {
  const ProductsContainer = document.querySelector(".single-product");

  //  fetch(`https://ecommerce-server-wdin.onrender.com/getSingleProduct/${page}`)
  fetch(`https://fakestoreapi.com/products/${page}`)
    .then((res) => res.json())
    .then((product) => {
      const product_con = document.createElement("div");
      product_con.className = "product-container";

      const imageCon = document.createElement("div");
      imageCon.className = "image-container";
      const Image = document.createElement("img");
      //  Image.src = '../../assets/Postman.png';
      Image.src = product.image;
      Image.alt = product.title;
      imageCon.appendChild(Image);
      const Content = document.createElement("div");
      Content.className = "content-container";
      const list_item_c1 = document.createElement("div");
      list_item_c1.innerText = product.title;
      list_item_c1.className = "title";
      const list_item_c2 = document.createElement("div");
      list_item_c2.innerText = product.description;
      list_item_c2.className = "description";
      const list_item_c3 = document.createElement("div");
      list_item_c3.innerText = `Price: $${product.price}`;
      list_item_c3.className = "price";
      const bookButton = document.createElement("button");
      bookButton.className = "book-button";
      bookButton.innerText = "Book Product";
      bookButton.addEventListener("click", function () {
        bookProduct(product.id);
      });

      Content.appendChild(list_item_c1);
      Content.appendChild(list_item_c2);
      Content.appendChild(list_item_c3);
      Content.appendChild(bookButton);

      product_con.appendChild(imageCon);
      product_con.appendChild(Content);
      ProductsContainer.appendChild(product_con);
      product_con.style.cursor = "pointer";
    })
    .catch((error) => {
      console.error("Error fetching the product:", error);
    });
});


async function bookProduct(productId){
  if(!user)
    {
      notification("You need to login first.",false);
      return;
    }
    try {
      const response = await fetch(`https://ecommerce-server-wdin.onrender.com/addProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId:user.id, username:user.username, productId:productId  }),
      });
      const data = await response.json();
      if (data.ok) {
        notification(data.message, data.ok);
      } else {
        notification(data.message, data.ok);
      }
    } catch (error) {
      console.error("Error adding to the cart:", error);
    }
}