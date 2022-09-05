import { StyleSheet, TouchableOpacity, Text } from "react-native"
import { useTheme } from "../context/ThemeContext"

const AppButton = ({label, onClick}) => {
    const theme = useTheme();
    const styles = styling(theme)
    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

const styling = (theme) => (
    StyleSheet.create({
        button : {
            alignItems: 'center',
            backgroundColor : theme.color.primary,
            padding : theme.spacing.s,
            borderRadius : theme.radius.m,
            alignSelf : 'stretch',
            margin : theme.spacing.m,
            height : 40
        },
        textButton : {
            fontSize : 16,
            color : theme.color.light,
            fontWeight : "bold"
        }
    })
)

export default AppButton;