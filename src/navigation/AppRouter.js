import  CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import HomePage from "../features/Home/HomePage";
import MainPage from "../features/Home/Main/MainPage";
import { LoginPage } from "../features/Login/LoginPage";
import { PinPage } from "../features/Pin/PinPage";
import ProductList from "../features/Product/ProductList";
import { WelcomePage } from "../features/Welcome/WelcomePage";
import { ROUTE } from "../shared/constants";
import { useTheme } from "../shared/context/ThemeContext";
import {FontAwesome} from '@expo/vector-icons'

const Stack = CreateStackNavigator();

const AppRouter = () => {
    const theme = useTheme()
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Group screenOptions={{headerShown : false}}>
                <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage}/>
                <Stack.Screen name={ROUTE.LOGIN} component={LoginPage}/>
                <Stack.Screen name={ROUTE.HOME} component={HomePage}/>
            </Stack.Group>
            <Stack.Screen name={ROUTE.PIN} component={PinPage} options={{
                headerTitle: '',
                headerBackImage: () => <FontAwesome size={24} name='chevron-left' color={theme.color.foreground}/>
            }}/>
        </Stack.Navigator>
    )
}

export default AppRouter