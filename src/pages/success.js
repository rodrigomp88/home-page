import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const Success = () => {
  return (
    <Container>
      <Heading as="h1">Mensaje enviado!!!</Heading>
      <Text>
        El mensaje fue enviado correctamente, pronto me pondré en contacto.
      </Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Volver al inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Success
