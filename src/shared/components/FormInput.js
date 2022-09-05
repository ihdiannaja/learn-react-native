import { StyleSheet, TextInput } from "react-native";
import { useTheme } from "../context/ThemeContext"
import { theme } from "../Theme";

const FormInput = ({value, onChangeValue ,placeholder = '', keyboard = 'default'}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TextInput 
            style={styles.input}
            placeholder ={placeholder}
            onChangeText={onChangeValue}
            value = {value}
            keyboardType = {keyboard}
        />
    )
}

const styling = (theme) => StyleSheet.create({
    input :{
        height : 40,
        marginLeft : theme.spacing.m,
        marginRight : theme.spacing.m,
        marginTop : theme.spacing.s,
        borderWidth : 1,
        borderRadius : theme.radius.m,
        padding : theme.spacing.s,
        backgroundColor : theme.color.light,
        borderColor : theme.color.primary,
        fontFamily : 'Poppins-Regular'
    }
})

export default FormInput