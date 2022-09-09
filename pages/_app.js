import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from '../context'
import { Fonts } from '../components'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../translate'

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
