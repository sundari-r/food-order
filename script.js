let menu = document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function message(){
    alert("Your order Placed thank you for making the order with us!")
}