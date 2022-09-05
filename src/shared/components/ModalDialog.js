import { useTheme } from "@react-navigation/native";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { theme } from "../Theme";

const ModalDialog = ({visible, onPress}) => {
    const theme = useTheme();
    return (
        <View style={styles.mainContainer}>
            <Modal
                visible={visible}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.mainContainer}>
                    <View style={styles.modalContainer}>
                        <Text>Ini Modal</Text>
                        <Button title="Dismiss" onPress={onPress} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : "center"
    },
    modalContainer : {
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        height : '60%',
        backgroundColor : 'white',
        borderWidth : 1,
        borderColor : theme.color.primary,
        alignSelf : "stretch",
        padding : 24
    }
})

export default ModalDialog;