import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';

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
            <Stack.Screen name="Inicio" options={{animation:'scale_from_center'}} component={LoginScreen} />
            <Stack.Screen name="Login" options={{animation:'scale_from_center'}} component={RegisterScreen} />
        </Stack.Navigator>
    );
}
