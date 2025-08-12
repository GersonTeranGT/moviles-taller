import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Products } from '../HomeScreen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProduct } from './ModalProduct';
//interface para las propiedades
interface Props {
    item: Products;
}

export const CardProduct = ({ item }: Props) => {
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
                    onPress={()=> setShowModal(!showModal)}/>
                </View>
            </View>
            <ModalProduct visible={showModal} item={item} setShowModal={()=> setShowModal(!showModal)}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#92ceffff',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 7,
        margin: 8,
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold'

    },
    image: {
        height: 100,
        width: 100,
        marginRight: 10
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    }

})