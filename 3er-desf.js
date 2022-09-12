class Producto {
	constructor(nombre,precio,id,calidCantidad,) {
		this.nombre = nombre
		this.precio = precio
		this.id = id
		this.detalle = calidCantidad
	}

}

const stock = [
    {nombre:"grano Liberico ", precio:200, id:1, calidCantidad: " (100gr) calidad Premium"},
    {nombre:"grano Robusto ", precio:300, id:2,  calidCantidad:"(100gr) calidad Premium"},
    {nombre:"grano Arabico ", precio:150, id:3,  calidCantidad: " (100gr) calidad Premium"},
]
stock.push(new Producto("nesCafe ", 700, 4, '500gr',))
stock.push(new Producto("3 Hermanos ", 800, 5, "500gr",))
stock.push(new Producto("Batidor de Cafe" ,700, 6, "Unidad", ))
stock.push(new Producto("set taza de cafe Blanca ", 1800, 7, "6 Unidades", ))

// console.log(stock)

alert("      Hola Bienvenido a Coffe House! \n  \n Aqui encontratas todos los insumos y accesorios que un amantes del cafe podria desear")

let listado = "Lista de productos \n"
stock.map((element)=> {
	listado += `${element.id} - ${element.nombre}  $${element.precio} x ${element.calidCantidad} \n`
})

alert(listado)

let carrito = []

let option = prompt(`Desea comprar algo:
SI
NO
`);

while (option != "si" && option != "SI" && option != "Si" && option != "no" && option != "No" && option != "NO") {
    alert("por favor ingrese una opcion valida")
    option = prompt(`Desea comprar algo:
SI
NO
`);
}

alert(" Gracias por visitarnos vuelva pronto...")
