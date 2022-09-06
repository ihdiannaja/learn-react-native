import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {useTheme} from '../../shared/context/ThemeContext'

export const Spinner = ({text = 'Please Wait'}) => {
    const theme = useTheme()
    const styles = styling(theme)
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text>{text}</Text>
        </View>
      </View>
    )
}

const styling = (theme) => StyleSheet.create({
  container: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      borderWidth: 2,
      padding: theme.spacing.s,
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 100,
      justifyContent: 'center'
  },
  loadingContainer: {
      backgroundColor: theme.color.white,
      padding: theme.spacing.s,
      borderRadius: theme.radius.m
  },
  image: {
      width: 75,
      height: 75,
  },
  titleContainer: {},
});
