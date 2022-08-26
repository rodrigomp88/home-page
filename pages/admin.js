import { useContext } from 'react'
import { Container, Button, Heading, Link, Flex } from '@chakra-ui/react'
import { AuthContext } from '../context'
import { ProyectsPost } from '../components'
import Layout from '../components/layouts/article'

const Admin = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout title="Admin">
      {user ? (
        <Container>
          <Heading as="h1" fontSize={25} mb={4} mt={8}>
            Bienvenido: {user?.email}
          </Heading>

          <Flex align="center" justify="center" mb={8}>
            <ProyectsPost />
          </Flex>
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
