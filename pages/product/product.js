const currentPageUrl = window.location.href;
const urlObject = new URL(currentPageUrl);
const params = new URLSearchParams(urlObject.search);
const page = params.get("id");
const user=JSON.parse(sessionStorage.getItem('user'));



document.addEventListener("DOMContentLoaded", function () {
  const ProductsContainer = document.querySelector(".single-product");

  fetch(`https://fakestoreapi.com/products/${page}`)
    .then((res) => res.json())
    .then((product) => {
      const product_con = document.createElement("div");
      product_con.className = "product-container";

      const list_item0 = document.createElement("img");
      list_item0.src = product.image;
      list_item0.alt = product.title;

      const list_item1 = document.createElement("div");
      list_item1.innerText = product.title;

      const list_item2 = document.createElement("div");
      list_item2.innerText = product.description;

      const list_item3 = document.createElement("div");
      list_item3.innerText = `$${product.price}`;

      const bookButton = document.createElement("button");
      bookButton.innerText = "Book Product";
      bookButton.addEventListener("click", function() {
        bookProduct(product.id);
      });

      product_con.appendChild(list_item0);
      product_con.appendChild(list_item1);
      product_con.appendChild(list_item2);
      product_con.appendChild(list_item3);
      product_con.appendChild(bookButton);
      ProductsContainer.appendChild(product_con);

      product_con.style.cursor = "pointer";
    })
    .catch((error) => {
      console.error("Error fetching the product:", error);
    });
});



async function bookProduct(productId) {
  const formData={
    productId:productId,
    userId:user.id,
    username:user.username,
  }
  try {
    var response = await fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data=await response.json();
    if (response.ok) {
      notification(data.message);
    } else {
      notification(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getCart(userId) {
  try {
    var response = await fetch(`http://localhost:5000/getCart/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      console.log(data.data);
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

getCart(user.id);