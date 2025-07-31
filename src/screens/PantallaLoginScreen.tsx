import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'
const image = require('../images/fondo_login.jpg')
export const PantallaLoginScreen = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.background} >
            <View style={styles.containerLogin}>
                <Text style={styles.titulo}>INGRESE SUS DATOS</Text>
                <Text style={styles.texts}>NOMBRE COMPLETO</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Ingrese su nombre completo"
                />
                <Text style={styles.texts}>TELÉFONO</Text>
                <TextInput
                style={styles.inputs}
                    placeholder="Ingrese su teléfono"
                    keyboardType="numeric"
                />
                <Text style={styles.texts}>CORREO</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Ingrese su correo"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.texts}>USUARIO</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Nombre de usuario"
                />
                <Text style={styles.texts}>CONTRASEÑA</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="Ingrese una contraseña"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} 
                >
                    <Text style={styles.textosBotones}>CREAR</Text>
                </TouchableOpacity>
                <View style={styles.registrarLogin}>
                    <Text style={styles.textoPregunta}>¿Ya tienes una cuenta? Inicia secion</Text>
                    <TouchableOpacity style={styles.buttonIniciarLogin}
                        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Inicio' }))}>
                        <Text style={styles.textosBotones}>INICIA SECCION</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

