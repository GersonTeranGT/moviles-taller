import { createStackNavigator } from '@react-navigation/stack';
import { PantallaInicioScreen } from '../screens/PantallaInicioScreen';
import { PantallaLoginScreen } from '../screens/PantallaLoginScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:'#008cffff',
            }
        }}
        >
            <Stack.Screen name="Inicio" options={{animation:'scale_from_center'}} component={PantallaInicioScreen} />
            <Stack.Screen name="Login" options={{animation:'scale_from_center'}} component={PantallaLoginScreen} />
        </Stack.Navigator>
    );
}
