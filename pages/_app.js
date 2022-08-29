import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider, ProyectsProvider } from '../context'
import { Fonts } from '../components'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '../translate'

function Website({ Component, pageProps, router }) {
  return (
    <AuthProvider>
      <ProyectsProvider>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Layout router={router}>
            <AnimatePresence exitBeforeEnter initial={true}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </ChakraProvider>
      </ProyectsProvider>
    </AuthProvider>
  )
}

export default Website
