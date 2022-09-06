const pallete = {
    white : '#fff',
    black : 'black',
    lightGrey: 'rgb(234, 236, 241)',
    blue : '#3258a8',
}

export const theme = {
    background : require('./../../assets/img/background.jpg'),
    color : {
        primary : pallete.blue,
        secondary : pallete.lightGrey,
        light : pallete.white,
        dark : pallete.black
    },
    spacing : {
        xs : 4,
        s : 8,
        m : 16,
        l : 24,
        xl : 32,
        xxl : 40
    },
    radius : {
        s : 6,
        m : 12,
        l : 18,
    },
    text : {
        title : {
            fontSize : 48,
            color : pallete.blue,
            fontFamily : 'Poppins-Bold'
        },
        subtitle : {
            fontSize : 24,
            color : pallete.black,
            fontFamily : 'Poppins-Medium'
        },
        subtitle2 : {
            fontSize : 20,
            color : pallete.black,
            fontFamily : 'Poppins-Regular'
        },
        normalText : {
            fontSize : 16,
            color : pallete.black,
            fontFamily : 'Poppins-Regular'
        },
    },
}
