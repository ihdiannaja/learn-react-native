import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AppButton from '../../shared/components/AppButton'
import AppTitleLabel from '../../shared/components/AppTitleLabel'
import FormInput from '../../shared/components/FormInput'
import FormPassword from '../../shared/components/FormPassword'
import { MainContainer } from '../../shared/components/MainContainer'
// import { ROUTE } from '../../shared/Constants'
import { useTheme } from '../../shared/context/ThemeContext'
import { theme } from '../../shared/Theme'

export const PinPage = () => {
    const theme = useTheme()
    const styles = styling(theme)
    const navigation = useNavigation()
    const [pin, setPin] = useState()
    const route = useRoute()
    const [pinParam, setPinParam] = useState({})

    useEffect(() => {
        if (route.params?.prevPage) {
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    return (
        <MainContainer>
            <View style={styles.pinContainer}>
                <View style={styles.pinView}>
                    <Text style={[theme.text.subtitle, styles.pinLabel]}>
                        Please Input PIN
                    </Text>
                    <TextInput secureTextEntry keyboardType='numeric' maxLength={6} style={styles.pinInput} value={pin} onChangeText={setPin}/>
                </View>
            </View>
            <AppButton label={'Submit'} onClick={() => {
                navigation.navigate(pinParam.prevPage, {
                    message: 'OK'
                })
            }}/>
        </MainContainer>
    )
}

const styling = (theme) => StyleSheet.create({
    pinInput:{
        borderBottomColor: theme.color.foreground,
        borderBottomWidth: 1,
        marginVertical: theme.spacing.l,
        fontSize: 32,
        textAlign: 'center'
    },
    pinLabel:{
        textAlign: 'center'
    },
    pinView:{
        width: '50%'
    },
    pinContainer:{
        alignItems: 'center'
    }
})