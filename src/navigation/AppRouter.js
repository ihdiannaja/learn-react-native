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
import { theme } from "../shared/Theme";
import { UseAuth } from "../shared/hook/UseAuth";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Stack = CreateStackNavigator();

const AppRouter = () => {
    const {isTokenExist} = UseAuth()
    const [initialRoute, setInitialRoute] = useState(null)

    useEffect(() => {
        const onValidToken = async () => {
            try {
                const resp = await isTokenExist()
                console.log('token', resp);
                if (resp) {
                    setInitialRoute(ROUTE.HOME)
                } else {
                    setInitialRoute(ROUTE.WELCOME)
                }
            } catch (e) {
                setInitialRoute(ROUTE.WELCOME)
            }
        }
        onValidToken()
    }, [])

    return initialRoute !== null ? (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Group screenOptions={{headerShown : false}}>
                <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage}/>
                <Stack.Screen name={ROUTE.LOGIN} component={LoginPage}/>
                <Stack.Screen name={ROUTE.HOME} component={HomePage}/>
                {/* <Stack.Screen name={ROUTE.MAIN} component={MainPage}/> */}
            </Stack.Group>
            <Stack.Screen name={ROUTE.PIN} component={PinPage} options={{
                headerTitle: '',
                headerBackImage: () => <FontAwesome size={24} name='chevron-left' color={theme.color.foreground}/>
            }}/>
        </Stack.Navigator>
    )
    :   (
            <View></View>
        )
}

export default AppRouter