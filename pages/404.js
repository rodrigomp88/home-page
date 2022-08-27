import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { NotAllowedIcon, ArrowBackIcon } from '@chakra-ui/icons'

const NotFound = () => {
  return (
    <Container mt={10}>
      <Heading as="h1">Emmm? 404¡</Heading>
      <Text my={2}>La página que estas buscando no fue encontrada.</Text>
      <Divider my={6} />
      <Box align="center" my={10}>
        <NotAllowedIcon fontSize={80} />
      </Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button leftIcon={<ArrowBackIcon />}>Volver al inicio</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
