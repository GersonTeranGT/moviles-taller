import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CardProduct } from './components/CardProduct'
import { styles } from '../../theme/appTheme'
import { ModalProduct } from './components/ModalProduct'

//interfaz para el arreglo de productos
export interface Product {
    id: number,
    name: string,
    price: number,
    stock: number,
    pathImage: string
}

//interface para el arreglo carrito
interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}
export const HomeScreen = () => {
    //arreglo con la lista de productos
    const products: Product[] = [
        { id: 1, name: 'Sartén antiadherente 24 cm', price: 15.00, stock: 5, pathImage: 'https://www.electrohogar.net/1309-large_default/aire-4645-25.jpg' },
        { id: 2, name: 'Olla de acero inoxidable 3L', price: 18.00, stock: 5, pathImage: 'https://groupesebcol.vtexassets.com/arquivos/ids/170498/2100137803-1.jpg' },
        { id: 3, name: 'Cuchillo de chef 8”', price: 12.00, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/648054124862-1.jpg' },
        { id: 4, name: 'Licuadora 600W', price: 35.00, stock: 5, pathImage: 'https://mancihogar.com.ar/wp-content/uploads/2021/02/D_NQ_NP_686273-MLA27584011220_062018-O.jpg' },
        { id: 5, name: 'Tabla de cortar de bambú', price: 10.00, stock: 5, pathImage: 'https://www.boyaca.com/wp-content/themes/boyaca/vista/imagenes/graf_zoom/107075.jpg' },
        { id: 6, name: 'Sartén antiadherente 24 cm', price: 15.00, stock: 5, pathImage: 'https://www.electrohogar.net/1309-large_default/aire-4645-25.jpg' },
        { id: 7, name: 'Olla de acero inoxidable 3L', price: 18.00, stock: 5, pathImage: 'https://groupesebcol.vtexassets.com/arquivos/ids/170498/2100137803-1.jpg' },
        { id: 8, name: 'Cuchillo de chef 8”', price: 12.00, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/648054124862-1.jpg' },
        { id: 9, name: 'Licuadora 600W', price: 35.00, stock: 5, pathImage: 'https://mancihogar.com.ar/wp-content/uploads/2021/02/D_NQ_NP_686273-MLA27584011220_062018-O.jpg' },
        { id: 10, name: 'Tabla de cortar de bambú', price: 10.00, stock: 5, pathImage: 'https://www.boyaca.com/wp-content/themes/boyaca/vista/imagenes/graf_zoom/107075.jpg' },
    ]

    //hook useState para manejar el estado de los productos
    const [listProducts, setListProducts] = useState<Product[]>(products); //arreglo del producto

    //useState para controar os procdutos del carrito
    const [cart, setCart] = useState<Cart[]>([]);   //arreglo con las productos del carrito

    //funcion para actalizar el stock
    const updateStock = (id: number, quantity: number): void => {
        const updateProducts = listProducts.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar producto enel arreglo
        setListProducts(updateProducts);
        //llamar a la fucnion para añaadir al carrito
        addProduct(id, quantity);
    }

    //funcion parea agregar los productos al carrito
    const addProduct=(id: number, quantity: number): void=>{
        const product = listProducts.find(product => product.id == id);

        //validar si exite el producto
        if(!product){
            return;
        }

        //crear producto para el carrito
        const newProductCart: Cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }

        //añadir al el carrito
        setCart([...cart, newProductCart]);
        console.log(cart);
    }

    return (
        <View style={styles.containerProducts}>
            <FlatList
                data={listProducts}
                renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock}/>}
                keyExtractor={item => item.id.toString()}
            //numColumns={2}
            //columndWrapperStyle={{ justifyContent: 'space-between' }}
            />
        </View>
    )
}

