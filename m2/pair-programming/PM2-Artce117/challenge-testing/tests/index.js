class CarritoCompra {
    // * constructor(): Inicializa el carrito como un array vacío.
    constructor(){
        this.productos = [];
        this.total = 0;
    };

    // * agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
    agregarProducto(producto){
        if(typeof producto !== "object" || producto === null){
            throw Error("El parámetro debe ser un objeto")
        }

        this.productos.push(producto);
    };

    // * calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
    calcularTotal(){
        for(let item of this.productos) {
            this.total += item.quantity * item.price;
        }

        return this.total;
    };

    validarObjetos(array){
        return array.every(obj => obj.hasOwnProperty('price') && obj.hasOwnProperty('quantity'));
    }

    // * aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
    aplicarDescuento(porcentaje){
        if(typeof porcentaje !== "number" || porcentaje === null){
            throw Error("El parámetro debe ser un numero");
        };        
        
        if(porcentaje > 50){
            throw Error("El descuento no puede ser mayor al 50%");
        };
                
        let descuento = this.total * porcentaje / 100;
        return this.total - descuento;
    };
};

module.exports = CarritoCompra;