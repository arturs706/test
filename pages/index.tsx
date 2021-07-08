import { Flex, Heading, useColorModeValue, Button, Circle, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Pic from '../public/massage.png'
import Round from '../public/round.svg'

export default function Home() {
  const background = useColorModeValue("personal.50", "personal.900")
  const fontcolor =  useColorModeValue("personal.900", "personal.50")



  return (
    <Flex width = "100%" alignItems = "center" pl={16} pb={24} height="83vh" background={background} color={fontcolor} justifyContent="flex-start">
    <Flex direction="column" pl={14}>
    <Heading size="2xl">Fancy a massage</Heading>
    <Heading size="2xl">without leaving</Heading>
    <Heading size="2xl" pb={10}>home?</Heading>

    <Text size="3xl">Get a mobile massage therapist in London to</Text>
    <Text size="3xl"pb={10}>your home right now. </Text>
    <Button 
    bg={fontcolor} 
    color={background} 
    size="sm" 
    width="36"
    height="12" 
    boxShadow="base"
    _active={{
      bg:{background}, 
      color:{fontcolor}  
    }}

    >BOOK NOW</Button>
    </Flex>
    <Flex pl={22} pt={51}>
    <Circle 
      top="230"
      left="440"
      position="absolute"
      size="480px"
      sx={{ filter: "blur(180px)" }}
      bgColor={fontcolor}
    ></Circle>
    <Image 
            src = {Pic}
            alt="Picture of the author" 
            width = {440}
            height = {630}
            layout = "fixed"
            quality = {100}
    />

    </Flex>
    </Flex>

  

       

  )
}
