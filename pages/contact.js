import {
  Container,
  Heading,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Contact = () => {
  return (
    <Layout title="Contacto">
      <Container>
        <Heading as="h1" fontSize={25} mb={4}>
          Formulario de contacto
        </Heading>
        <Text>
          Póngase en contacto a traves del siguiente formulario de contacto.
          Cualquier consulta o sugerencia seran bienvenidas
        </Text>
        <Flex align="center" justify="center">
          <Box p={8} rounded="md">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Nombre</FormLabel>
                  <Input id="name" name="name" type="text" variant="filled" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Correo</FormLabel>
                  <Input name="email" type="email" variant="filled" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="message">Mensaje</FormLabel>
                  <Textarea name="message" type="text" variant="filled" />
                </FormControl>
                <Button type="submit" colorScheme="teal" isFullWidth>
                  Enviar
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
export default Contact
