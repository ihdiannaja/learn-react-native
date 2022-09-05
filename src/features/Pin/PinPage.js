import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AppButton from '../../shared/components/AppButton'
import { MainContainer } from '../../shared/components/MainContainer'
import { useTheme } from '../../shared/context/ThemeContext'

export const PinPage = () => {
    const theme = useTheme()
    const styles = styling(theme)
    const navigation = useNavigation()
    const [pin, setPin] = useState([])
    const route = useRoute()
    const [pinParam, setPinParam] = useState({})
    const [numArray, setNumArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

    useEffect(() => {
        if (route.params?.prevPage) {
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params])

    useEffect(() => {
        setNumArray(prevState => prevState.sort(() => Math.random() - 0.5))
        setNumArray(prevState => [...prevState, '<'])
        setNumArray(prevState => [...new Set(prevState)])
    }, [])

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={pin.length >= 6 ?
                                                item === '<' ? 
                                                    () => setPin(prevState => prevState.filter((_, index) => index !== (prevState.length - 1))) 
                                                :   () => {} 
                                        : 
                                                item === '<' ? 
                                                    () => setPin(prevState => prevState.filter((_, index) => index !== (prevState.length - 1))) 
                                                :   () => setPin(prevState => [...prevState, item])
                                        }>
                <View style={styles.container}>
                    <Text style={styles.textMenu}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderNumberViews = () => {
        const renderArray = [] 
        for(let i=0 ; i < numArray.length/3; i++){
            const startIndex = (i * 3);
            const endIndex = (i * 3) + 3;
            const dataMenu = numArray.slice(startIndex, endIndex);
            let contentStyle = {flex: 1, justifyContent: 'space-between'}
            const m = (<FlatList
                key={i}
                horizontal
                data={dataMenu}
                renderItem={renderItem}
                keyExtractor={item=>item}
                contentContainerStyle={contentStyle}
                />
            )
            renderArray.push(m)
        }
        console.log(pin);
        return renderArray
    }

    return (
        <MainContainer>
            <View style={styles.pinContainer}>
                <View style={styles.pinView}>
                    <Text style={[theme.text.subtitle, styles.pinLabel]}>
                        Please Input PIN
                    </Text>
                    <TextInput secureTextEntry style={styles.pinInput} value={pin.join('')}/>
                </View>
            </View>
            <AppButton label={'Submit'} 
                // onClick={() => {
                // navigation.navigate(pinParam.prevPage, {
                //     message: 'OK',
                // })
                onClick={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{
                            name: pinParam.prevPage,
                            params: {message: 'OK'}
                        }]
                    })
            }}/>

            {renderNumberViews()}

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