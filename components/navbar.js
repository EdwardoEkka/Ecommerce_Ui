function Navbar(home,shop,cart,account) {
  const Nav = document.querySelector(".navbar");
  // Create logo
  const top_nav = document.createElement("div");
  top_nav.className = "Top-nav";
  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "Wardo-Store";

  // Create menu button for mobile view
  const menuBtn = document.createElement("div");
  const menuItem1 = document.createElement("div");
  const menuItem2 = document.createElement("div");
  menuItem1.innerHTML = "&#9776;";
  menuItem1.className = "m1";
  menuItem2.innerHTML = "&#10006;";
  menuItem2.className = "m2";
  menuBtn.className = "menu-btn";
  menuItem2.style.display = "none";
  menuBtn.appendChild(menuItem1);
  menuBtn.appendChild(menuItem2);

  // Create navigation links container
  const navLinks = document.createElement("div");
  navLinks.className = "nav-links";

  // Create individual navigation links
  let links = [
    { text: "Home", href: home },
    { text: "Shop", href: shop },
    { text: "Cart", href: cart },
    { text: "Account", href: account },
  ];

  // Create individual navigation links
  links.forEach((linkObject) => {
    const link = document.createElement("a");
    link.href = linkObject.href;
    link.textContent = linkObject.text;
    navLinks.appendChild(link);
  });

  // Append all elements to the navbar
  top_nav.appendChild(logo);
  top_nav.appendChild(menuBtn);
  Nav.appendChild(top_nav);
  Nav.appendChild(navLinks);

  // Add styles
  const styles = `
        .navbar {
          width: 100%;
          height: 100px;
          background-color:#2A3132;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          box-sizing: border-box;
          position:relative;
        }
  
        .Top-nav{
        width:100%;
        display:flex;
        justify-content:space-between;
        }
  
  
        .navbar .logo {
          font-size: 24px;
          color: white;
          font-weight: bold;
        }
  
        .navbar .nav-links {
          display: flex;
          gap: 20px;
        }
  
        .navbar .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 18px;
          transition: color 0.3s ease;
        }
  
        .navbar .nav-links a:hover {
          color: lightgray;
        }
  
        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            height: auto;
            padding: 10px 20px;
          }
  
          .navbar .nav-links {
            flex-direction: column;
            align-items: center;
            width: 100%;
            position:absolute;
            background-color:#2A3132;
            top:50px;
          }
  
          .navbar .nav-links a {
            padding: 10px 0;
          }
        }
  
        .navbar .menu-btn {
          display: none;
        }
  
        @media (max-width: 768px) {
          .navbar .menu-btn {
            display: block;
            color: white;
            font-size: 24px;
            cursor: pointer;
            
          }
  
          .navbar .nav-links {
            display: none;
            flex-direction: column;
            width: 100%;
          }
  
          .navbar .nav-links.active {
            display: flex;
          }
        }
      `;

  // Append styles to the document head
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // Toggle menu on mobile
  menuItem1.addEventListener("click", () => {
    navLinks.classList.toggle("active", true);
    menuItem1.style.display = "none";
    menuItem2.style.display = "block";
  });

  menuItem2.addEventListener("click", () => {
    navLinks.classList.toggle("active", false);
    menuItem2.style.display = "none";
    menuItem1.style.display = "block";
  });
}
