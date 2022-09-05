import { View, Text } from "react-native"
import { useTheme } from "../context/ThemeContext"

const AppTitleLabel = ({text, subTitle = false}) => {
    const theme = useTheme()
    return (
        <View>
            {subTitle ? 
            <Text style={theme.text.subtitle} >{text}</Text> : 
            <Text style={theme.text.title}>{text}</Text>}
        </View>
    )
}

export default AppTitleLabel