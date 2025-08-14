import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        marginBottom: 30,
    },
    container: {
        height: 500,
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
        width: '80%',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#007BFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#F8F9FA',
        color: '#333333',
        alignSelf: 'center'
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
    containerLogin: {
        //marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(252, 252, 252, 0.14)',
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingVertical: 15,
    },
    registrarLogin: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoPregunta: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textShadowColor: '#36557985',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 9,
    },
    buttonIniciarLogin: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 8,
        alignItems: 'center',
    },
    titulo: {
        marginBottom: 20,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    iconForm: {
        position: 'absolute',
        bottom: 36,
        right: 70
    },
    containerForm: {
        marginVertical: 10,
        marginHorizontal: 10,
        alignSelf: 'stretch',
        paddingHorizontal: 25
    },
    containerProducts: {
        marginBottom: 119,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    modal: {
        borderRadius: 19,
        backgroundColor: '#92ceffff',
        padding: 20,
        margin: 15
    },
    headerModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: '#007BFF',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    titleModal: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        flex: 3,
        textAlign: 'center'
    },
    imageModal: {
        width: 150,
        height: 150,
        marginTop: 20,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: '#007BFF'
    },
    containerImage: {
        alignItems: 'center',
        marginVertical: 10
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: '#65add6',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2
    },
    buttonQuantityText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    buttonAddCart: {
        backgroundColor: '#ffffff',
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 25,
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3
    },
    buttonCartText: {
        color: '#007BFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    textNoAvailable: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    }
})