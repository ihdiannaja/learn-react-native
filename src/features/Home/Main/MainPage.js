import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AppBackground from "../../../shared/components/AppBackground"
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel"
import { MainContainer } from "../../../shared/components/MainContainer"
import {FontAwesome} from "@expo/vector-icons"
import { useTheme } from "../../../shared/context/ThemeContext";
import PromoView from "./components/PromoView";
import MenuView from "./components/MenuView";
import { ScrollView } from "react-native-gesture-handler"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ROUTE } from "../../../shared/constants"
import { useEffect, useState } from "react"
import ModalDialog from "../../../shared/components/ModalDialog"
import { UseAuth } from "../../../shared/hook/UseAuth"

const MainPage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
    const route = useRoute()
    const {onLogout, getUserName} = UseAuth()
    const [name, setName] = useState()

    useEffect(() => {
        if (route.params?.message) {
            console.log(route.params.message);
        }
    }, [route.params])

    useEffect(() => {
        onGetName()
    }, [])

    const handleLogout = async () => {
        try {
            const resp = await onLogout();
            if (resp) {
                navigation.replace(ROUTE.LOGIN)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const onGetName = async () => {
        try {
            const resp = await getUserName()
            setName(resp)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text="WMB" avatarImg="https://picsum.photos/200/300" showBorder/>
                {modalVisible && <ModalDialog visible={modalVisible} onPress={() => setModalVisible(false)} />}
                <ScrollView>
                    <View style={{flex : 1, margin : theme.spacing.s}}>
                        <HeaderPageLabel text={'POS'} />
                        <View style={styles.container}>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchable} onPress={() => setModalVisible(true)}>
                                    <FontAwesome name="sticky-note-o" size={24} color={theme.color.primary}/>
                                    <Text style={styles.text}>Add{'\n'}Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchable}>
                                    <FontAwesome name="user-plus" size={24} color={theme.color.primary}/>
                                    <Text style={styles.text}>Customer{'\n'}Registration</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchable} onPress={() => {
                                    navigation.navigate(ROUTE.PIN, {
                                        userId : 123,
                                        prevPage: ROUTE.HOME,
                                    })
                                }}>
                                    <FontAwesome name="money" size={24} color={theme.color.primary}/>
                                    <Text style={styles.text}>Bill{'\n'}Payment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View >
                            <HeaderPageLabel text={'Promo'} />
                            <PromoView />
                        </View>
                        <View >
                            <HeaderPageLabel text={'Menu'} />
                            <MenuView />
                        </View>
                        <View >
                            <HeaderPageLabel text={'Profile'} />
                            <View style={{margin : theme.spacing.m}}>
                                <TouchableOpacity 
                                // onPress={() => navigation.replace(ROUTE.LOGIN)}
                                onPress={() => handleLogout()}
                                >
                                    <Text>Logout {name}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </AppBackground>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderWidth : 1,
        borderColor : theme.color.secondary,
        borderRadius : theme.radius.m,
        backgroundColor : theme.color.light
    },
    menuContainer : {
        flex : 1, 
        height : 64,
        justifyContent : 'center'
    },
    text : {
        textAlign : 'center',
        fontSize : 12,
        color : theme.color.primary,
        fontFamily : 'Poppins-Regular'
    },
    touchable : {
        alignItems : 'center'
    }
})

export default MainPage;