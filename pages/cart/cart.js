const user = JSON.parse(sessionStorage.getItem('user'));
const cartContainer = document.querySelector(".cart");

function FetchProduct(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
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

      product_con.appendChild(list_item0);
      product_con.appendChild(list_item1);
      product_con.appendChild(list_item2);
      product_con.appendChild(list_item3);
      cartContainer.appendChild(product_con);

      product_con.style.cursor = "pointer";
    })
    .catch((error) => {
      console.error("Error fetching the product:", error);
    });
}

async function getCart(userId) {
  try {
    const response = await fetch(`http://localhost:5000/getCart/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    if (response.ok) {
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
  idArray.forEach(product => {
    FetchProduct(product.productId);
  });
}

loadCartProducts();