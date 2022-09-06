import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AppButton from '../../shared/components/AppButton'
import { MainContainer } from '../../shared/components/MainContainer'
import { useTheme } from '../../shared/context/ThemeContext'
import { PinButton } from './components/PinButton'
import { PinInputIndicator } from './components/PinInputIndicator'

export const PinPage = () => {
    const theme = useTheme()
    const styles = styling(theme)
    const navigation = useNavigation()
    const [pin, setPin] = useState([])
    const route = useRoute()
    const [pinParam, setPinParam] = useState({})
    const [pinButton, setPinButton] = useState([])

    useEffect(() => {
        if (route.params?.userId && route.params?.prevPage) {
            setPinParam({
                userId: route.params.userId,
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    useEffect(() => {
        setPinButton(renderPinButton())
    }, [])

    const renderPins = ({item}) => {
        return <PinButton text={item} onPress={setPin}/>
    }

    const renderPinButton = () => {
        const pinLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

        const shuffledPinLabels = pinLabels
                .map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value)
        shuffledPinLabels.splice(9,0, '-1')
        shuffledPinLabels.push('<')

        const pins = []
        for (let i = 0; i < shuffledPinLabels.length; i++) {
            const startIndex = (i * 3)
            const endIndex = (i * 3  + 3)
            const buttons = shuffledPinLabels.slice(startIndex, endIndex)
            const b = (
                <FlatList key={i}
                          data={buttons}
                          horizontal
                          renderItem={renderPins}
                          keyExtractor={item => item}
                          contentContainerStyle={{flex:1, justifyContent: 'space-evenly'}}  
                />
            )
            pins.push(b)
        }
        return pins
    }

    return (
        <MainContainer>
            <View style={{alignItems: 'center'}}>
                <View style={{width: '50%'}}>
                    <Text style={[theme.text.subtitle, {textAlign:'center'}]}>Please input PIN {'\n'} (User id : {pinParam.userId})</Text>
                    {/* biar bentuknya titik-titik */}
                    <View style={{margin: theme.spacing.l}}>
                        <PinInputIndicator pinVal={pin}/>
                    </View>
                    
                    {/* <TextInput keyboardType='numeric' maxLength={6} style={{
                        borderBottomColor: theme.color.foreground,
                        borderBottomWidth: 1,
                        marginVertical: theme.spacing.l,
                        fontSize: 32,
                        textAlign: 'center'
                    }} value={pin} onChangeText={setPin}/> */}
                </View>
            </View>

            <View style={{flex:1, justifyContent: 'center'}}>
                {pinButton}
            </View>
            <AppButton onClick={() => {
                console.log(pin)
                navigation.navigate(pinParam.prevPage, {
                    message: 'OK'
                })
            }} label={'Submit'}></AppButton>
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
    },
    container : {
        borderWidth : 1,
        borderColor : theme.color.secondary,
        borderRadius : 24,
        width : 80,
        height : 80,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : theme.color.light,
        margin : theme.spacing.m,
        padding : theme.spacing.s
    },
    textMenu : {
        color : theme.color.primary,
        fontFamily : 'Poppins-Medium',
        marginTop : 3
    }
})