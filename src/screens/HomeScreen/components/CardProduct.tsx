import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Product } from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
//interface para las propiedades
interface Props {
    item: Product;
    updateStock: (id: number, quantity: number) => void;
    addProduct: (id: number, quantity: number) => boolean;
}

export const CardProduct = ({ item, updateStock, addProduct }: Props) => {
    //hok useState para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <View>
            <View style={styles.container}>
                <Image
                    source={{ uri: item.pathImage }} style={styles.image} />
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text>Precio: ${item.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart' size={30} color={'black'}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} setShowModal={() => setShowModal(!showModal)} updateStock={updateStock} addProduct={addProduct} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#92CEFF',
        borderRadius: 16,
        marginHorizontal: 12,
        marginVertical: 8,
        elevation: 7,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        flex: 1

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flexShrink: 1,
        marginRight: 10

    },
    image: {
        height: 100,
        width: 100,
        marginRight: 10,
        borderRadius: 8,
        resizeMode: 'cover',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: '#f0f0f0'

    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }

})