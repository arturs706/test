import Image from 'next/image'
import LogoDark from '../public/niceone2.svg'
import LogoLight from '../public/logodark.png'
import { Flex, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { MoonIcon, SunIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'

const Nav = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const background = useColorModeValue("personal.50", "personal.900")
    const fontcolor =  useColorModeValue("personal.900", "personal.50")
    return (
        <Flex height = "17vh" background = {background} alignItems = "center" justifyContent="space-between" color = {fontcolor}>

            <Flex width = "100%" alignItems = "flex-start" pl={20} justifyContent="space-evenly">
               <h4>Home</h4>
               <h4>Services</h4>
               <h4>Prices</h4>
               <h4>Contact Me</h4>
            </Flex>

            <Flex width = "100%" alignItems="center" justifyContent = "center" position="relative">
            <Image 
            src = {colorMode === 'light' ? LogoDark : LogoLight}
            alt="Picture of the author" 
            width = {120}
            height = {110}
            layout = "fixed"
            />
            </Flex>

            <Flex width = "100%" justifyContent="space-evenly" alignItems= "center" pr={20}>
                <IconButton
                variant ="primary"
                aria-label="Toggle Dark Mode"
                icon={colorMode === 'dark' ? <SunIcon/>: <MoonIcon/>}
                onClick ={toggleColorMode}>Toggle</IconButton>
                {colorMode === 'dark' ? <h4>Light</h4>:<h4>Dark</h4>}
                <PhoneIcon/><h4>+447460162893</h4>
                <EmailIcon/><h4>ksjukis@gmail.com</h4>
            </Flex>
            
        </Flex>
    )
}

export default Nav
