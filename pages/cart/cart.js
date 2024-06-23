Navbar("../../index.html", "../products/products.html", "./cart.html", "../account/account.html");

authenticateUser();
const user = JSON.parse(sessionStorage.getItem("user"));
const cartContainer = document.querySelector(".cart");

function FetchProduct(productId) {
  // fetch(`https://ecommerce-server-wdin.onrender.com/getSingleProduct/${productId}`)
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((product) => {
      const product_con = document.createElement("div");
      product_con.className = "product-container";
      product_con.dataset.productId = productId;
      const imageCon = document.createElement("div");
      const Image = document.createElement("img");
      // Image.src = '../../assets/Postman.png';
      Image.src = product.image;
      Image.alt = product.title;
      imageCon.className = "imageContainer";
      imageCon.appendChild(Image);
      const contentCon = document.createElement("div");
      contentCon.className = "contentContainer";
      const title = document.createElement("div");
      title.innerText = product.title;
      title.className = "title";
      const price = document.createElement("div");
      price.className = "price";
      price.innerText = `Price:$${product.price}`;
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.addEventListener("click", () =>
        deleteProduct(productId, product_con)
      );
      contentCon.appendChild(title);
      contentCon.appendChild(price);
      contentCon.appendChild(deleteButton);
      product_con.appendChild(imageCon);
      product_con.appendChild(contentCon);
      cartContainer.appendChild(product_con);
      product_con.style.cursor = "pointer";
    })
    .catch((error) => {
      console.error("Error fetching the product:", error);
    });
}

async function deleteProduct(productId, productElement) {
  try {
    const response = await fetch(
      `https://ecommerce-server-wdin.onrender.com/deleteProduct`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.id, productId: productId }),
      }
    );
    const data = await response.json();
    if (data.ok) {
      // Remove product element from the DOM
      productElement.remove();
      notification(data.message, data.ok);
    } else {
      notification(data.message, data.ok);
    }
  } catch (error) {
    console.error("Error deleting the product:", error);
  }
}

async function getCart(userId) {
  try {
    const response = await fetch(
      `https://ecommerce-server-wdin.onrender.com/getCart/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.ok) {
      return data.data;
    } else {
      console.log(data.message);
      return [];
    }
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function loadCartProducts() {
  const idArray = await getCart(user.id);
  idArray.forEach((product) => {
    FetchProduct(product.productId);
  });
}

loadCartProducts();
