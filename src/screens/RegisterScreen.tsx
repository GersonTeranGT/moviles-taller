import React, { useState } from 'react'
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { InputComponent } from '../components/InputComponent'
const image = require('../images/fondo_login.jpg')

//interface para el objeto del formulario
interface FormRegister {
    name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
}

//INTERFACE PATRA LOS OBJETOS DE MI ARREGLO USERS
interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
}

//ARREGLO CON LA LISTA DE USUARIOS
// const users: User[] = [
//     { id: 1, name: 'Gerson Teran', phone: '0984886447', email: 'guapygt543@gmail.com', username: 'GuapyGT', password: '123456' },
// ]

export const RegisterScreen = () => {
    //hook useState para navegacion
    const navigation = useNavigation()

    const [formRegister, setFormRegister] = useState<FormRegister>({
        name: '',
        phone: '',
        email: '',
        username: '',
        password: ''
    })

    //funcion para modificar el estado del formulario - property es e valor de la constante a modificar
    const changeForm = (property: string, value: string): void => {
        setFormRegister({ ...formRegister, [property]: value })
    }



    //funcion para permitir guardar los datos
    const handleRegister = (): void => {
        if (formRegister.name == '' || formRegister.phone == '' || formRegister.email == '' || formRegister.username == '' || formRegister.password == '') {
            Alert.alert('Error', `Por favor, llene todos los campos. \u{1F600}` );
            return;
        }
        console.log(formRegister);
    }

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.background} >
            <View style={styles.containerLogin}>
                <Text style={styles.titulo}>INGRESE SUS DATOS</Text>
                <Text style={styles.texts}>NOMBRE COMPLETO</Text>
                <InputComponent placeholder='Ingrese su nombre' keyboardType='default' changeForm={changeForm} property='name'/>
                <Text style={styles.texts}>TELÉFONO</Text>
                <InputComponent placeholder='Ingrese su número' keyboardType='numeric' changeForm={changeForm} property='phone'/>
                <Text style={styles.texts}>CORREO</Text>
                <InputComponent placeholder='Ingrese su correo' keyboardType='email-address' changeForm={changeForm} property='email'/>
                <Text style={styles.texts}>USUARIO</Text>
                <InputComponent placeholder='Ingrese su usuario' keyboardType='default' changeForm={changeForm} property='username'/>
                <Text style={styles.texts}>CONTRASEÑA</Text>
                <InputComponent placeholder='Ingrese su contraseña' keyboardType='default' changeForm={changeForm} property='password'/>
                <TouchableOpacity style={styles.button}
                onPress={()=> handleRegister()}>
                    <Text style={styles.textosBotones}>CREAR</Text>
                </TouchableOpacity>
                <View style={styles.registrarLogin}>
                    <Text style={styles.textoPregunta}>¿Ya tienes una cuenta? Inicia secion</Text>
                    <TouchableOpacity style={styles.buttonIniciarLogin}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.textosBotones}>INICIA SECCION</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
}

