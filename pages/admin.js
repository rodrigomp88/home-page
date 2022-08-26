import { Container, Button, Heading, Link, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useAuth } from '../context/AuthContext'

const Admin = () => {
  const { user } = useAuth()

  return (
    <Layout title="Admin">
      {user ? (
        <Container>
          <Heading as="h1" fontSize={25} mb={4} mt={8}>
            Bienvenido: {user?.email}
          </Heading>

          <Flex align="center" justify="center" mb={8}></Flex>
        </Container>
      ) : (
        <Container>
          <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
            Ingrese para administrar
          </Heading>
          <Link href="/login">
            <Button colorScheme="teal">Ingresar</Button>
          </Link>
        </Container>
      )}
    </Layout>
  )
}

export default Admin
