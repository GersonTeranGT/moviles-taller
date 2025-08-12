import React, { useState } from 'react'
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InputComponent } from '../components/InputComponent';
import { User } from '../navigator/StackNavigator';

//interfaz para las propiedades
interface Props{
    users: User[];
}

const image = require('../images/portatil-y-bolsas-de-la-compra-concepto-de-compras-en-linea.jpg')

interface FormLogin {
    username: string;
    password: string;
}




export const LoginScreen = ({users}: Props) => {

    const navigation = useNavigation()

    //hook useState para manejar el estado del formulario
    //trabajando el formularios como objetos
    const [formLogin, setFormLogin] = useState<FormLogin>({
        username: '',
        password: ''
    });
    //manejar el estado de la contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

    //funcion para modificar el estado del formulario - property es e valor de la constante a modificar
    const changeForm = (property: string, value: string): void => {
        //sacar una copia para hacer la modificacion
        setFormLogin({ ...formLogin, [property]: value })
    }

    //FUNCION PARA VALIDAR EL USUSARIO Y CONTRASEÑA
    const verifyUser = (): User | undefined => {
        const existUser= users.find(user => user.username == formLogin.username && user.password == formLogin.password);
        return existUser;
    }

    //funcion para permitir iniciar sesion
    const handleLogin =():void=>{
        if (formLogin.username == '' || formLogin.password == ''){
            Alert.alert('Error', 'Ingrese su usuario y contraseña \u26A0')
            return;
        }
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos \u274C');
            return;
        }
        navigation.dispatch(CommonActions.navigate({name: 'Home'}));
        //console.log(formLogin);
    }

    return (

        <ImageBackground source={image} resizeMode="cover" style={styles.background} >
            <View style={styles.container}>
                <Text style={estilos.textoBienve}>BIENVENIDO</Text>
                <Text style={styles.titulo}>Inicie sesión</Text>
                <View style={styles.containerForm}>
                    <Text style={styles.texts}>USUARIO</Text>
                <InputComponent placeholder='Ingrese su usuario' keyboardType='default' changeForm={changeForm} property='username'/>
                <Text style={styles.texts}>CONTRASEÑA</Text>
                <InputComponent placeholder='Ingrese su contraseña' keyboardType='default' changeForm={changeForm} property='password' isPassword={hiddenPassword}/>
                <Icon
                    name={hiddenPassword ? 'visibility' : 'visibility-off'}
                    size={20}
                    style={styles.iconForm}
                    onPress={()=> setHiddenPassword(!hiddenPassword)} />
                </View>
                
                <TouchableOpacity style={styles.button} onPress={()=> handleLogin()}>
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
    textoBienve: {
        marginBottom: 10,
        fontSize: 30,
        color: '#007BFF',
        fontWeight: 'bold'
    }
})
