import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { MainContainer } from "../../shared/components/MainContainer"
import AppTitleLabel from "../../shared/components/AppTitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import AppButton from "../../shared/components/AppButton";
import FormInput from "../../shared/components/FormInput";
import FormPassword from "../../shared/components/FormPassword";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../shared/constants";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
      <MainContainer>
          <AppBackground style={{flex : 1}}>
              <View style={styles.header}>
                  <AppTitleLabel subTitle text='Welcome !' />
              </View>
              <View style={styles.form}>
                  <FormInput value={email} onChangeValue={setEmail} placeholder='Input Your Email' keyboard="email-address"/>
                  <FormPassword value={password} onChangeValue={setPassword} placeholder="Input Your Password" />
                  <AppButton label='Login' onClick={() => navigation.replace(ROUTE.HOME)} />
              </View>
          </AppBackground>
      </MainContainer>
    )
}

const styles = StyleSheet.create({
    header : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : 'flex-start',
        marginLeft : 16,
        marginBottom : 16,
    },
    form : {
        alignItems : 'stretch',
        flex : 2
    }
})