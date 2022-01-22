import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        text: {
            'dark': '#393939'
        },
        green: {
            'dark': '#3D7B79',
            'dark.hover': '#2f615f'
        },
        blue: {
            'light': '#6388B4',
            'dark': '#335068',
            'dark.hover': '#203342'
        }
    },
    initalColorMode: 'light',
    useSystemColorMode: false
})


export default theme