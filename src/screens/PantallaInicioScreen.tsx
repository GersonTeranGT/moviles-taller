import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

const image = require('../images/portatil-y-bolsas-de-la-compra-concepto-de-compras-en-linea.jpg')
export const PantallaInicioScreen = () => {

    const navigation = useNavigation()
    return (

        <ImageBackground source={image} resizeMode="cover" style={styles.background} >
            <View style={styles.container}>
                <Text style={estilos.textoBienve}>BIENVENIDO</Text>
                <Text style={styles.titulo}>Inicie seción</Text>
                <Text style={styles.texts}>USUARIO</Text>
                <TextInput
                    style={styles.inputs}
                    //onChangeText={onChangeText}
                    //value={text}
                    placeholder="Ingrese su usuario"
                />
                <Text style={styles.texts}>CONTRASEÑA</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Ingrese su contraseña"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.textosBotones}>INGRESAR</Text>
                </TouchableOpacity>
                <View style={styles.registrar}>
                    <Text style={styles.textoPregunta}>¿No tienes una cuenta? Registrate</Text>
                    <TouchableOpacity style={styles.buttonIniciarLogin}
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                        <Text style={styles.textosBotones}>REGISTRATE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>

    )
}
const estilos = StyleSheet.create({
    textoBienve:{
        marginBottom:10,
        fontSize:30,
        color: '#007BFF',
        fontWeight:'bold'
    }
})
