import { Container, Button, Heading, Box, Link, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { useAuth } from '../context/Authontext'

const Admin = () => {
  const { logout, user } = useAuth()

  console.log(user)
  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      {!user ? (
        <Layout title="Admin">
          <Heading>Ingrese para administrar</Heading>
          <Button colorScheme="teal" isFullWidth>
            <Link href="/login">Ingresar</Link>
          </Button>
        </Layout>
      ) : (
        <Layout title="Admin">
          <Container>
            <Heading
              as="h1"
              variant="section-title"
              fontSize={25}
              mb={4}
              mt={8}
            >
              Bienvenido
            </Heading>

            <Flex align="center" justify="center" mb={8}>
              <Box p={8} w="80%" rounded="md">
                Ingresaste como {user?.email}
              </Box>
              <Link colorScheme="teal" onClick={handleLogout}>
                Logout
              </Link>
            </Flex>
          </Container>
        </Layout>
      )}
    </>
  )
}

export default Admin
