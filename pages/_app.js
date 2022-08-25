import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import '../translate'
import { AuthProvider } from '../context/Authontext'

function Website({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </AuthProvider>
  )
}

export default Website
