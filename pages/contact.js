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
  Text,
  ListItem,
  List,
  Link,
  Icon
} from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'

const Contact = () => {
  return (
    <Layout title="Contacto">
      <Container>
        <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
          Formulario de contacto
        </Heading>
        <Text>
          Para contactarme, por favor completar el siguiente formulario de
          contacto, acepto cualquier consulta o sugerencia.
        </Text>

        <Flex align="center" justify="center" mb={8}>
          <Box p={8} rounded="md">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Nombre</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Correo</FormLabel>
                  <Input name="email" type="email" required variant="filled" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="message">Mensaje</FormLabel>
                  <Textarea
                    name="message"
                    type="text"
                    required
                    variant="filled"
                  />
                </FormControl>
                <Button type="submit" colorScheme="teal" isFullWidth>
                  Enviar
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
        <Heading as="h3" variant="section-title">
          Otras formas de contactarme:
        </Heading>
        <List mb={8}>
          <ListItem>
            <Link href="mailto:rodrigomp88@gmail.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={EmailIcon} />}
              >
                rodrigomp88@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={PhoneIcon} />}
              >
                +5492612522667
              </Button>
            </Link>
            (solo WhatsApp)
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}
export default Contact
