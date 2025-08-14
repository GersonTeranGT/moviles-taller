import React from 'react'
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Cart } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';

//interfaz para las propiedades
interface Props {
    visible: boolean;
    setShowModal: () => void;
    cart: Cart[];
    resetCart: () => void;

}
export const ModalCart = ({ visible, setShowModal, cart, resetCart }: Props) => {
    //hook useindowDimention
    const { width } = useWindowDimensions();

    //funcion para calcular total a pagar
    const totalPay = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.total
        });
        return total;
    }

    const closeModal = () => {
        setShowModal();
        resetCart();
    }

    return (
        <Modal visible={visible} animationType='slide' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{
                    ...styles.modal,
                    width: width * 0.80
                }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.titleModal}>Mis productos</Text>
                        <View style={styles.containerIcon}>
                            <Icon name='cancel' size={17} color={'black'} onPress={setShowModal} />
                        </View>
                    </View>

                    <View style={localStyles.headerTable}>
                        <Text style={localStyles.textHeaderTable}>Producto</Text>
                        <View style={localStyles.headerTableInfo}>
                            <Text style={{
                                ...localStyles.textHeaderTable,
                                marginRight: 7
                            }}>Precio</Text>
                            <Text style={localStyles.textHeaderTable}>Cant.</Text>
                            <Text style={{
                                ...localStyles.textHeaderTable,
                                marginLeft: 10
                            }}>Total</Text>
                        </View>
                    </View>

                    <View>
                        <FlatList
                            data={cart}
                            renderItem={({ item }) =>
                                <View style={localStyles.headerTable}>
                                    <Text style={localStyles.textProduct}>{item.name}</Text>
                                    <View style={localStyles.headerTableInfo}>
                                        <Text style={{
                                            ...localStyles.textProduct,
                                            paddingHorizontal: 9
                                        }}>${item.price.toFixed(2)}</Text>
                                        <Text style={{
                                            ...localStyles.textProduct,
                                            paddingHorizontal: 15
                                        }}>{item.quantity}</Text>
                                        <Text style={{
                                            ...localStyles.textProduct,
                                            paddingLeft: 10
                                        }}>${item.total.toFixed(2)}</Text>
                                    </View>
                                </View>
                            }
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                    <View style={localStyles.containerTotalPay}>
                        <Text style={localStyles.textTotalPay}>Total pagar: ${totalPay().toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonAddCart} onPress={closeModal}>
                        <Text style={styles.buttonCartText}>Comprar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const localStyles = StyleSheet.create({
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',


    },
    headerTableInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        marginRight: 10
    },
    textProduct: {
        fontSize: 14,
        color: '#333',
        marginVertical: 4,
        maxWidth: '90%'
    },
    containerTotalPay: {
        alignItems: 'flex-end',
        marginTop: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#e6f7ff',
        borderRadius: 10

    },
    textTotalPay: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF'
    }
})