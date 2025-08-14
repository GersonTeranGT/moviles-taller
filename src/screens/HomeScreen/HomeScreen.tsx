import React, { useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import { CardProduct } from './components/CardProduct'
import { styles } from '../../theme/appTheme'
import { ModalProduct } from './components/ModalProduct'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCart } from './components/ModalCart'
//interfaz para el arreglo de productos
export interface Product {
    id: number,
    name: string,
    price: number,
    stock: number,
    pathImage: string
}

//interface para el arreglo carrito
export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}
export const HomeScreen = () => {
    //arreglo con la lista de productos
    const products: Product[] = [
        { id: 1, name: 'Sartén 24cm', price: 15.00, stock: 0, pathImage: 'https://www.electrohogar.net/1309-large_default/aire-4645-25.jpg' },
        { id: 2, name: 'Olla de 3L', price: 18.00, stock: 5, pathImage: 'https://groupesebcol.vtexassets.com/arquivos/ids/170498/2100137803-1.jpg' },
        { id: 3, name: 'Cuchillo de 8”', price: 12.00, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/648054124862-1.jpg' },
        { id: 4, name: 'Licuadora 600W', price: 35.00, stock: 5, pathImage: 'https://mancihogar.com.ar/wp-content/uploads/2021/02/D_NQ_NP_686273-MLA27584011220_062018-O.jpg' },
        { id: 5, name: 'Tabla de picar', price: 10.00, stock: 5, pathImage: 'https://www.boyaca.com/wp-content/themes/boyaca/vista/imagenes/graf_zoom/107075.jpg' },
        { id: 6, name: 'Batidora de mano', price: 28.00, stock: 5, pathImage: 'https://warenhaus.com.ec/wp-content/uploads/2025/01/M35904.jpg' },
        { id: 7, name: 'Afilador manual', price: 8.00, stock: 5, pathImage: 'https://www.modregohogar.com/243676-large_default/afilador-manual-arcos-610600-abs-tpe-rojo.jpg' },
        { id: 8, name: 'Wok de hierro', price: 25.00, stock: 5, pathImage: 'https://m.media-amazon.com/images/I/51AN9DauTgL.jpg' },
        { id: 9, name: 'Hervidor eléctric.', price: 20.00, stock: 5, pathImage: 'https://www.todohogar.com/298757-medium_default/holstein-hervidor-electrico-17l-hh-090206-con-apagado-automatico-1000w.jpg' },
        { id: 10, name: 'Procesador', price: 40.00, stock: 5, pathImage: 'https://www.supermaxi.com/wp-content/uploads/2024/08/items2Figm2F1000x10002F813966022777-1-1.jpg' },
    ]

    //hook useState para manejar el estado de los productos
    const [listProducts, setListProducts] = useState<Product[]>(products); //arreglo del producto

    //useState para controar os procdutos del carrito
    const [cart, setCart] = useState<Cart[]>([]);   //arreglo con las productos del carrito

    //hook useSate para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false)

    //hook para 
    //funcion para actalizar el stock
    const updateStock = (id: number, quantity: number): void => {
        const updateProducts = listProducts.map(product => product.id == id
            ? { ...product, stock: product.stock - quantity }
            : product);
        //actualizar producto en el arreglo
        setListProducts(updateProducts);
        //llamar a la fucnion para añaadir al carrito
        addProduct(id, quantity);
    }

    //funcion parea agregar los productos al carrito
    const addProduct = (id: number, quantity: number): boolean => {
        const product = listProducts.find(product => product.id == id);
        //validar si exite el producto
        if (!product) {
            return false;
        }

        //validacion de producto repetido
        const existProduct = cart.some(item => item.id == id)
        if (existProduct) {
            Alert.alert('Producto ya agregado', 'Este producto ya fue agregado, por favor agrege otro producto', [{ text: 'OK' }])
            return false;
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
        return true;
        //console.log(cart);
    }

    const resetCart = () => {
        setCart([]);
    }

    return (
        <View style={{ marginTop: -19, backgroundColor: '#e0f7fa' }}>
            <View style={styles.containerProducts}>
                <View style={localStyles.headerHome}>
                    <Text style={localStyles.textMessage}>Tenemos los mejores productos.</Text>
                    <View style={localStyles.containerIcon}>
                        <Text style={localStyles.textIconCart}>{cart.length}</Text>
                        <Icon name='shopping-cart'
                            size={27} color={'black'}
                            onPress={() => {
                                if (cart.length > 0) {
                                    setShowModal(!showModal)
                                }
                            }} />
                    </View>
                </View>

                <FlatList
                    data={listProducts}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock} addProduct={addProduct} />}
                    keyExtractor={item => item.id.toString()}
                //numColumns={2}
                //columndWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </View>
            <ModalCart visible={showModal} setShowModal={() => setShowModal(!showModal)} cart={cart} resetCart={resetCart} />
        </View>

    )
}

const localStyles = StyleSheet.create({
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 30,
    },
    textIconCart: {
        color: 'white',
        backgroundColor: 'red',
        fontWeight: 'bold',
        borderRadius: 25,
        paddingHorizontal: 5,
        fontSize: 13,
    },
    textMessage: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
        marginLeft: 10
    }
})
