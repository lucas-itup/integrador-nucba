class producto {
    constructor(id, tipo, name, precio, comentario, productImg, popular, cantidad) {
        this.id = id;
        this.tipo = tipo;
        this.name = name;
        this.precio = precio;
        this.comentario = comentario;
        this.productImg = productImg;
        this.popular = popular;
        this.cantidad = cantidad;

    }
}

let _burguesa = new producto(1, 'canelones', 'Ham-burguesa', 1100, 'Clase alta', './img/img-array/burguesa.jpg', false, 1);
let _explosive = new producto(2, 'canelones', 'Explosive', 1560, 'Doble bomba', './img/img-array/explosive.jpg', false, 1);
let _family = new producto(3, 'canelones', 'Familiy-game', 2260, 'Para repartir', './img/img-array/family.jpg', false, 1);
let _chicken = new producto(6, 'canelones', 'Chicken-little', 1000, 'De pollo y cositas', './img/img-array/chicken.jpg', false, 1);
let _muzza = new producto(7, 'fideos', 'Muzzaraña', 950, 'Muzza inspiradora', './img/img-array/muzza.jpg', false, 1);
let _morron = new producto(8, 'fideos', 'Joe-Morrone', 1050, 'Pizza punk', './img/img-array/morron.jpg', false, 1);
let _tropi = new producto(9, 'fideos', 'Tropicalisima', 1220, 'Sabor y fiesta', './img/img-array/tropi.jpg', false, 1);
let _roquefort = new producto(12, 'fideos', 'Don-Roque', 1260, 'Roquefort a morir', './img/img-array/roquefort.jpg', false, 1);
let _solari = new producto(13, 'fritas', 'Solari', 600, 'Papa y nada mas', './img/img-array/solari.jpg', false, 1);
let _francisco = new producto(14, 'fritas', 'Papas-Francisco', 880, 'Argentinas y celestiales', './img/img-array/francisco.jpg', false, 1);
let _panceta = new producto(15, 'fritas', 'Panza-verde', 850, 'Panceta y verdeo', './img/img-array/panceta.jpg', false, 1);
let _cheddar = new producto(16, 'fritas', 'Cheese-potato', 900, 'Cheddar y mas cheddar', './img/img-array/cheddar.jpg', false, 1);
let _wrap_carne = new producto(19, 'wraps', 'Meat-wrap', 1100, 'A la antigua', './img/img-array/wrap-carne.jpg', true, 1);
let _wrap_cerdo = new producto(20, 'wraps', 'Pig-wrap', 1100, 'Si la vaca ya te harto', './img/img-array/wrap-cerdo.jpg', false, 1);
let _wrap_pollo = new producto(21, 'wraps', 'Chicken_wrap', 1100, 'Para cambiar un poco', './img/img-array/wrap-pollo.jpg', false, 1);


const _array_de_productos = [_burguesa, _explosive, _family, _chicken, _muzza,
_morron, _tropi, _roquefort, _solari, _francisco, _panceta, _cheddar,
_wrap_carne, _wrap_cerdo, _wrap_pollo
]
];