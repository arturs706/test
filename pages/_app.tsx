import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import Layout from '../components/Layout'
import { myNewTheme } from '../styles/theme'
import Head from 'next/head'
import "@fontsource/philosopher/400.css"
import "@fontsource/montserrat/300.css"

function MyApp({ Component, pageProps }: AppProps ) {
  return (
    <ChakraProvider resetCSS theme={myNewTheme}>
      <Layout>
        <Head>
            <meta name="description" content="Free Web tutorials"/>
            <meta name="keywords" content="massage barnet, massage in london, spa, day off "/>
            <meta name="author" content="Arthur"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Component {...pageProps} />
      </Layout>

    </ChakraProvider>
  )
}

export default MyApp