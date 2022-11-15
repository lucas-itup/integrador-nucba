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
    var shopItem = button.parentElement.parentElement.parentElement;
    if (shopItem.getElementsByClassName('_titulo_producto')[0] == undefined) shopItem = button.parentElement.parentElement;


    var title = shopItem.getElementsByClassName('_titulo_producto')[0].innerText;
    var descripcion = shopItem.getElementsByClassName('_descripcion_producto')[0].innerText;
    var price = shopItem.getElementsByClassName('_precio_producto')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('_recomendacion_container_img')[0].src;

    addItemToCart(title, price, imageSrc, descripcion);
    // updateQuantityBtnsCart()
}

function addItemToCart(title, price, imageSrc, descripcion, cantidad) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')


    const modalAdd1 = document.querySelector(".modalAdd1");
    const modalAdd2 = document.querySelector(".modalAdd2");
    const removeClass1 = () => modalAdd1.classList.remove("showModal");
    const removeClass2 = () => modalAdd2.classList.remove("showModal");
    var cartItems = document.getElementsByClassName('_carrito_container_products')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    var cartItemCuantity = cartItems.getElementsByClassName('cantidad');

    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {

            // Funcion que suma cantidad al elegir el mismo elemento
            const actualCuantity = cartItemCuantity[i].getAttribute('value');
            const sumar = Number(actualCuantity) + 1;
            cartItemCuantity[i].setAttribute(`value`, `${sumar}`);
            modalAdd2.classList.add("showModal");
            modalAdd2.innerHTML = `Se sumó otro <span> ${title} </span> al carrito de compras`
            var found = objetosEnCarritoLS.find(e => e.titulo == title);
            found.cantidad = sumar
            saveLocalStorage(objetosEnCarrito);


            // const modif = (found) => { found.defineProperty(this, "cantidad", "3") }
            // modif(found)
            setTimeout(removeClass2, 2000);
            return;
        }
    }

    var cartRowContents = `
    <div class="_carrito_container_products_product">
                        <img src="${imageSrc}" alt="${title}" class="_recomendacion_container_pizza_img">
                        <div>
                            <h5  class="cart-item-title">${title}</h5>
                            <p>${descripcion}</p>
                            <h4 class="cart-price">${price}</h4>
                        </div>
                        <div class="_carrito_container_btns">
                            <button class="btnRemoveProductCart disable">-</button>
                            <input type="number" class="cantidad" value=1>
                            <button class="btnAddProductCart">+</button>
                        </div>
                    </div>
        `
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    crearObjeto(title, price, imageSrc, descripcion, cantidad);
    saveLocalStorage(objetosEnCarrito);
    objetosEnCarritoLS = objetosEnCarrito


    // objetosEnCarritoLS.forEach(e => mostrarLS(e))

    modalAdd1.classList.add("showModal");
    modalAdd1.innerHTML = `Se agregó un <span> ${title} </span> al carrito de compras`;


    updateQuantityBtnsCart();

    setTimeout(removeClass1, 2000);
};