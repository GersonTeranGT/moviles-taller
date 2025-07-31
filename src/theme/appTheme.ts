import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    container: {
        height:500,
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(252, 252, 252, 0.75)',
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 30,
    },
    inputs: {
        height: 45,
        width: '60%',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#F8F9FA',
        color: '#333333',

    },
    texts: {
        fontSize: 16,
        color: '#007BFF',
        marginBottom: 5,
        fontWeight: '600',
        textAlign: 'center'

    },
    vista: {
        backgroundColor: 'white'
    },
    registrar: {
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        alignItems: 'center',
    },
    textosBotones: {
        color: 'white'
    },
    containerLogin:{
        //marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(252, 252, 252, 0.14)',
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 15,
    },
    registrarLogin:{
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoPregunta:{
        fontSize:18,
        color: 'black',
        fontWeight:'bold',
        textShadowColor: '#36557985', // Color de la sombra
    textShadowOffset: { width: 0, height: 0 }, // Dirección
    textShadowRadius: 9, // Difuminado

    },
    buttonIniciarLogin:{
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 8,
        alignItems: 'center',
    },
    titulo:{
        marginBottom:20,
        fontSize:20,
        color: 'black',
        fontWeight:'bold'

    }

})