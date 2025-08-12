import React from 'react'
import { Modal, Text, View } from 'react-native'
import { styles } from '../../../theme/appTheme'
import { Products } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
//inyterface para las propiedades
interface Props{
    visible: boolean;
    item: Products;
    setShowModal: ()=>void;
}

export const ModalProduct = ({item, visible, setShowModal}: Props) => {
    return (
        <Modal visible={visible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={styles.modal}>
                    <View>
                    <Icon name='cancel' size={17}
                    onPress={setShowModal}/>
                </View>
                    <Text>{item.name}</Text>
                </View>
                
            </View>
        </Modal>
    )
}
