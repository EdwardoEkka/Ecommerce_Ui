document.addEventListener("DOMContentLoaded", function () {
    const ProductsContainer = document.querySelector(".products-container");
  
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        products.forEach((product) => {
          const anchor = document.createElement("a");
          anchor.href = `../product/product.html?id=${product.id}`;
          anchor.style.textDecoration = "none";
  
          const product_con = document.createElement("div");
          product_con.className = "product-container";
  
          const list_item0 = document.createElement("img");
          list_item0.src = product.image;
          list_item0.alt = product.title;
  
          const list_item1 = document.createElement("div");
          list_item1.innerText = product.title;
  
          product_con.appendChild(list_item0);
          product_con.appendChild(list_item1);
          anchor.appendChild(product_con);
  
          ProductsContainer.appendChild(anchor);
  
          product_con.style.cursor = "pointer";
        });
      })
      .catch((error) => {
        console.error('Error fetching the products:', error);
      });
  });
  