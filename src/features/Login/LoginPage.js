import { useState } from "react"
import { Keyboard, StyleSheet, View } from "react-native"
import { MainContainer } from "../../shared/components/MainContainer"
import AppTitleLabel from "../../shared/components/AppTitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import AppButton from "../../shared/components/AppButton";
import FormInput from "../../shared/components/FormInput";
import FormPassword from "../../shared/components/FormPassword";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../shared/constants";
import {useDepedency} from '../../shared/hook/UseDepedency'
import { useTheme } from "../../shared/context/ThemeContext";
import useViewState from "../../shared/hook/UseViewState";
import { Spinner } from "../../shared/components/Spinner";
import { SnackBar } from "../../shared/components/SnackBar";
import { UseAuth } from "../../shared/hook/UseAuth";

export const LoginPage = () => {
    const theme = useTheme()
    const styles = styling(theme)
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {viewState, setLoading, setError} = useViewState()
    const {onLogin} = UseAuth()

    const onAuthenticate = async () => {
        Keyboard.dismiss()
        setLoading()
        try {
            const response = await onLogin({userName: userName, password: password})
            if (response) {
                navigation.replace(ROUTE.HOME)
            }else{
                setError(new Error('Unauthorized'))
            }
        } catch (e) {
            setError(e)
        }
    }

    return (
      <MainContainer>
        {viewState.isLoading && <Spinner/>}
        <AppBackground>
            <View style={styles.header}>
                <AppTitleLabel subTitle text={'Welcome!'}/>
            </View>
            <View>
                <FormInput placeholder="Input your email" onChangeValue={setUserName} value={userName}/>
                <FormPassword placeholder="Input your password" onChangeValue={setPassword} value={password}/>
                <AppButton label={'Login'} onClick={onAuthenticate}/>
            </View>
        </AppBackground>
        {viewState.error !== null && <SnackBar message={'Unauthorized'}/>}
      </MainContainer>
    )
}

const styling = (theme) => (StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 16
    },
    form: {
        alignSelf: 'stretch',
        flex: 2,
    },
    buttonSpace: {
        marginTop: theme.spacing.l
    },
    background: {
        flex: 1,
    },
    iconButton: {
        color: theme.color.white,
        fontSize: 14,
        marginRight: theme.spacing.s
    }
}));