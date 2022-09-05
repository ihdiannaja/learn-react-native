import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MainContainer } from '../../shared/components/MainContainer'
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import AppBackground from '../../shared/components/AppBackground';
import { useTheme } from '../../shared/context/ThemeContext';
import AppTitleLabel from '../../shared/components/AppTitleLabel';
import AppButton from '../../shared/components/AppButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../shared/constants';

export const WelcomePage = () => {
    // const animation = useRef(null);
    const theme = useTheme();
    const navigation = useNavigation();

  return (
    <MainContainer>
        <AppBackground style={{
             justifyContent : 'space-evenly',
             alignItems : 'center',
        }}>
            <LottieView 
                autoPlay  
                // ref={animation}
                style={{
                    width: 400,
                    height : 400,
                }}
                source={require('../../../assets/img/lottie-login.json')}
            />
            <View style={styles.titleContainer}>
                <AppTitleLabel text='Pos System'/>
                <AppTitleLabel subTitle text='Simple Poin of Sales' />
            </View>
            <AppButton label='Sign In' onClick={() => navigation.replace(ROUTE.LOGIN)}/>
        </AppBackground>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
    titleContainer : {
        alignItems :'center',
    },    
})