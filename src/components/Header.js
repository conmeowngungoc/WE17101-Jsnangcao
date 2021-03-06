import Cart from "./Cart";
import Nav from "./Nav";
 const Header ={
   render:()=>
   `<header class="p-3 bg-dark text-white">
   <div class="container">
     <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         <img src= "https://i.pinimg.com/736x/37/3e/ea/373eea673a0315fa47060c089d0ff72e.jpg" withd ="50px" height="50px"></img>
       </a>

       <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
         <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
         <li><a href="/news" class="nav-link px-2 text-white">News</a></li>
         <li><a href="/students" class="nav-link px-2 text-white">Student</a></li>
         <li><a href="/products" class="nav-link px-2 text-white">Product</a></li>
         <li><a href="/about" class="nav-link px-2 text-white">About</a></li>
       </ul>
          <div id="cart"> ${Cart.render()}</div>
       <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
         <input type="search" class="form-control form-control-dark text-white bg-dark" placeholder="Search..." aria-label="Search">
       </form>

       <div class="text-end">
         <button type="button" class="btn btn-outline-light me-2">Login</button>
         <button type="button" class="btn btn-warning">Sign-up</button>
       </div>
     </div>
   </div>
 </header>`
 }


export default Header;
