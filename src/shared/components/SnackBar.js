import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../context/ThemeContext'

export const SnackBar = ({message}) => {
    const theme = useTheme()
    const styles = styling(theme)
    return (
        <View style={styles.snackContainer}>
            <Text>{message}</Text>
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    snackContainer:{
        backgroundColor: theme.color.white,
        alignSelf: 'stretch',
        elevation: 5,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: theme.spacing.m
    }
})