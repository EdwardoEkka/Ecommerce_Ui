Navbar("../../index.html", "../products/products.html", "../cart/cart.html", "./account.html");

authenticateUser();

const Account=document.querySelector('.account-container');


function GetUserDetails(user){
    if(user)
        {
            Account.innerHTML="";
            const container=document.createElement('div');
            container.innerText=`Logged in as:${user.username}`;
            Account.appendChild(container);
            const Button=document.createElement('button');
            Button.innerText="Logout";
            Account.appendChild(Button);
            Button.addEventListener('click',()=>{sessionStorage.removeItem('user');localStorage.removeItem('token');RunAgain()})
        }
        else{
            Account.innerHTML="";
            const anchor=document.createElement('a');
            const container=document.createElement('div');
            container.innerText="Sign In here";
            anchor.href="../sign_in/sign_in.html";
            anchor.appendChild(container);
            Account.appendChild(anchor);
        }
}


function RunAgain(){
GetUserDetails(JSON.parse(sessionStorage.getItem("user")));    
}

GetUserDetails(JSON.parse(sessionStorage.getItem("user")));