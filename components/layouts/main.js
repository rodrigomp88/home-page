import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={10}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pinea's homepage" />
        <meta name="author" content="Pinea Rodrigo" />
        <meta name="author" content="Pinea Rodrigo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/laptop.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Pinea Rodrigo's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Pinea Rodrigo - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.xl" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
