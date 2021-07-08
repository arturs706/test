import { extendTheme } from '@chakra-ui/react'

export const myNewTheme = extendTheme ({
    colors: {
        primary: "#5600A0",
        secondary: "#0050D7",
        highlight: "#007AF3",
        warning: "#009DF2",
        danger: "#00D7BC",
        personal: {
            50: "#FAF5FF",
            100: "#D2BCF4",
            200: "#BEA5E7",
            300: "#865EC6",
            400: "#6D40B3",
            500: "#5E2FA8",
            600: "#511FA1",
            700: "#48149B",
            800: "#360385",
            900: "#2A006C",
        }
    },
    fonts: {
        heading: "Philosopher",
        body: "Philosopher"
    }

})