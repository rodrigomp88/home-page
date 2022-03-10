import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Emmm! No</Heading>
      <Text>La página que estas buscando no fue encontrada.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Volver al inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
