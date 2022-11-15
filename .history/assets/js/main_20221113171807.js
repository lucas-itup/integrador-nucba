//const _navbar
//const _cart
//const _btn_mas
//const _btn_menos
//const _btn_comprar
//const _cerrar_cart
//const _number_cart
//const _ventana_cart
//const _btn_categorias
//const _btn_agregar

const showResults = document.querySelector("._results_container");
const categoryContainer = document.querySelector("._categorias_container");
let categoryContainerOpcion = document.querySelectorAll("._categorias_container_opcion");
let resultsTitle = document.querySelector("._results_title");
const btnOpen = document.querySelector("._carrito_btnOpen");
const btnClose = document.querySelector("._carrito_btnClose");
const btnClose2 = document.querySelector("._carrito_container_end_close");
const cart = document.querySelector("._carrito");
const overlay = document.querySelector(".overlay");
const comprar = document.querySelector(".comprar");



const openAndCloseCart = () => {
    cart.classList.toggle("open-cart");
    overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
    if (!cart.classList.contains("open-cart"))
        return;
    cart.classList.remove("open-cart")
    overlay.classList.remove("show-overlay")
};

btnOpen.addEventListener("click", openAndCloseCart);
btnClose.addEventListener("click", openAndCloseCart);
btnClose2.addEventListener("click", openAndCloseCart);
window.addEventListener("scroll", closeOnScroll);

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//funcion boton agregar 
function ready() {
    var addToCartButtons = document.getElementsByClassName('btnAddProduct');

    for (let i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement;
    if (shopItem.getElementsByClassName('_titulo_producto')[0] == undefined) shopItem = button.parentElement.parentElement;


    var title = shopItem.getElementsByClassName('_titulo_producto')[0].innerText;
    var descripcion = shopItem.getElementsByClassName('_descripcion_producto')[0].innerText;
    var price = shopItem.getElementsByClassName('_precio_producto')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('_recomendacion_container_pizza_img')[0].src;

    addItemToCart(title, price, imageSrc, descripcion);
    updateQuantityBtnsCart()
}