import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'
import { CheckCircleIcon, EmailIcon, ArrowBackIcon } from '@chakra-ui/icons'

const Success = () => {
  return (
    <Container mt={10} fontFamily={'mono'} align="center">
      <Heading as="h1">Gracias!!!</Heading>
      <Divider mt={5} />
      <Container fontSize={20}>
        <Text my={5}>
          El mensaje fue enviado correctamente
          <CheckCircleIcon ml={2} />
        </Text>
        <Text my={2}>¡Pronto me pondré en contacto!</Text>
        <EmailIcon fontSize={40} />
      </Container>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button leftIcon={<ArrowBackIcon />}>Volver al inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Success
