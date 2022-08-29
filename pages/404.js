import NextLink from 'next/link'
import { Box, Container, Button } from '@chakra-ui/react'
import { NotAllowedIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { HeadingText } from '../components'
import Layout from '../components/layouts/article'

const NotFound = () => {
  return (
    <Layout title="Página no encontrada">
      <Container>
        <HeadingText
          title={'404'}
          subTitle={'¡Página no encontrada! '}
          icon={<NotAllowedIcon />}
        />
        <Box my={10} align="center">
          <NextLink href="/">
            <Button colorScheme="teal" leftIcon={<ArrowBackIcon />}>
              Volver al inicio
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
