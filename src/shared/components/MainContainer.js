import { StatusBar, View, StyleSheet } from 'react-native'

export const MainContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'black'}/>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
    },
});
  
