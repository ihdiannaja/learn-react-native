const { useFonts } = require("expo-font")

const useAppFont = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Regular' : require('./../../../assets/fonts/Poppins-Regular.otf'),
        'Poppins-Thin' : require('./../../../assets/fonts/Poppins-Thin.otf'),
        'Poppins-Bold' : require('./../../../assets/fonts/Poppins-Bold.otf'),
        'Poppins-Medium' : require('./../../../assets/fonts/Poppins-Medium.otf'),
        'Poppins-Italic' : require('./../../../assets/fonts/Poppins-Italic.otf'),
    });

    return fontsLoaded
}

export default useAppFont;