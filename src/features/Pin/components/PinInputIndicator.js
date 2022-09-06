import React from 'react'
import { useTheme } from '../../../shared/context/ThemeContext'
import { theme } from '../../../shared/Theme'
import {FontAwesome} from '@expo/vector-icons'
import { View } from 'react-native'

export const PinInputIndicator = ({pinVal}) => {
    const theme = useTheme()
    const renderIndicator = () => {
        let indicator = []
        for (let i = 0; i < 6; i++) {
            indicator.push(
                <FontAwesome key={i}
                             name={pinVal[i] ? 'circle' : 'circle-o'}
                             size={24}
                             color={theme.color.foreground}
                             style={{marginHorizontal: theme.spacing.l}}
                />
            )
        }
        return indicator
    }

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {renderIndicator()}
        </View>
    )
}
