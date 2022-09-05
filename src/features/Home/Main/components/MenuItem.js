import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useTheme } from "../../../../shared/context/ThemeContext"
import { FontAwesome } from '@expo/vector-icons';

const MenuItem = ({menu}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TouchableOpacity>
            <View style={styles.menuContainer}>
                <FontAwesome name={menu.icon} size={24} color={theme.color.primary} />
                <Text style={styles.textMenu}>{menu.menu}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styling = (theme) => StyleSheet.create({
    menuContainer : {
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

export default MenuItem;