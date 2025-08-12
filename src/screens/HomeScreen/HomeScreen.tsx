import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { CardProduct } from './components/CardProduct'
import { styles } from '../../theme/appTheme'
import { ModalProduct } from './components/ModalProduct'

//interfaz para el arreglo de productos
export interface Products {
    id: number,
    name: string,
    price: number,
    stock: number,
    pathImage: string
}

export const HomeScreen = () => {
    //arreglo con la lista de productos
    const products: Products[] = [
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

    return (
        <View style={styles.containerProducts}>
            <FlatList
                data={products}
                renderItem={({ item }) => <CardProduct item={item} />}
                keyExtractor={item => item.id.toString()}
            //numColumns={2}
            //columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
        </View>
    )
}

