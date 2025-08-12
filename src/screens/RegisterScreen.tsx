import React, { useState } from 'react'
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { InputComponent } from '../components/InputComponent'
import { User } from '../navigator/StackNavigator'
const image = require('../images/fondo_login.jpg')

//interfaz para las propiedades
interface Props{
    users: User[];
    addUser: (user: User)=>void;
}
//interface para el objeto del formulario
interface FormRegister {
    name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
}


export const RegisterScreen = ({users, addUser}: Props) => {
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

        if (property === 'phone') {
            value = value.replace(/[^0-9]/g, '');
        }
        setFormRegister({ ...formRegister, [property]: value });
    }

    //funcion para verificar si el usuario existe
    const verifyUsername =()=>{
        const existUsename = users.find(user => user.username == formRegister.username);
        return existUsename;
    }

    //funcion para generar los ids de los nuevos usuarios
    const getIdUser =(): number=>{
        const getId = users.length + 1;    //devuelve el numero de elementos en el arreglo
        return getId;
    }
    

    //funcion para permitir guardar los datos
    const handleRegister = (): void => {
        if (formRegister.name == '' || formRegister.phone == '' || formRegister.email == '' || formRegister.username == '' || formRegister.password == '') {
            Alert.alert('Error', `Por favor, llene todos los campos. \u{1F600}`);
            return;
        }
        if (formRegister.phone.length < 10 || formRegister.phone.length > 10) {
            Alert.alert('Error', 'El número de teléfono debe tener al menos 10 dígitos.');
            return;
        }

        //validar que no exista el usuario
        if(verifyUsername() != undefined){
            Alert.alert('Error', 'El usuario que ingreso ya existe, porfavor ingrese otro usuario.')
            return;
        }

        //crear el nuevo usuario
        const newUser : User ={
            id: getIdUser(),
            name: formRegister.name,
            phone: formRegister.phone,
            email: formRegister.email,
            username: formRegister.username,
            password: formRegister.password
        }

        //agregar el nuevo usuario0 en el arreglo
        addUser(newUser);
        Alert.alert('Registro exitoso', 'El usuario registrado correctamente');
        navigation.goBack();
        //console.log(formRegister);
    }


    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.background} >
            <View style={styles.containerLogin}>
                <Text style={styles.titulo}>INGRESE SUS DATOS</Text>
                <Text style={styles.texts}>NOMBRE COMPLETO</Text>
                <InputComponent placeholder='Ingrese su nombre' keyboardType='default' changeForm={changeForm} property='name' />
                <Text style={styles.texts}>TELÉFONO</Text>
                <InputComponent placeholder='Ingrese su número' keyboardType='phone-pad' changeForm={changeForm} property='phone' value={formRegister.phone} />
                <Text style={styles.texts}>CORREO</Text>
                <InputComponent placeholder='Ingrese su correo' keyboardType='email-address' changeForm={changeForm} property='email' />
                <Text style={styles.texts}>USUARIO</Text>
                <InputComponent placeholder='Ingrese su usuario' keyboardType='default' changeForm={changeForm} property='username' />
                <Text style={styles.texts}>CONTRASEÑA</Text>
                <InputComponent placeholder='Ingrese su contraseña' keyboardType='default' changeForm={changeForm} property='password' />
                <TouchableOpacity style={styles.button}
                    onPress={() => handleRegister()}>
                    <Text style={styles.textosBotones}>CREAR</Text>
                </TouchableOpacity>
                <View style={styles.registrarLogin}>
                    <Text style={styles.textoPregunta}>¿Ya tienes una cuenta? Inicia sesión</Text>
                    <TouchableOpacity style={styles.buttonIniciarLogin}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.textosBotones}>INICIA SESÍON</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

