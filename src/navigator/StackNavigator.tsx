import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { use, useState } from 'react';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen';

//insterface para los usuarios
export interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
}
//arreglo con la lista de usuarios
const users: User[] = [
    { id: 1, name: 'Gerson Teran', phone: '0984886447', email: 'guapygt543@gmail.com', username: 'GuapyGT', password: '12345' },
    { id: 2, name: 'Michael Arévalo', phone: '0963268653', email: 'mba.arevalosabando@gmail.com', username: 'Mick', password: '67890' },
    { id: 3, name: 'Luis Salazar', phone: '0987981223', email: 'luisitoSala@gmail.com', username: 'Lusu', password: '24680' }
]

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //hook useState permitir gestionar el estado de los usuarios
    const [listUsers, setListUsers] = useState<User[]>(users)

    //funcion para agreagr nuevos usuarios
    const addUser = (user: User) => {
        //modificar el estado del arreglo
        setListUsers([...listUsers, user]);
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#008cffff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerShadowVisible: true,
            }}
        >
            <Stack.Screen name="Inicio" options={{ animation: 'scale_from_center' }} children={() => < LoginScreen users={listUsers} />} />
            <Stack.Screen name="Login" options={{ animation: 'scale_from_center' }} children={() => <RegisterScreen users={listUsers} addUser={addUser} />} />
            <Stack.Screen name="Home" options={{ title: 'Productos', animation: 'scale_from_center', }} component={HomeScreen} />
        </Stack.Navigator>
    );
}
