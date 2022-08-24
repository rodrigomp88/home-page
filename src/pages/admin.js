import { Container, Heading, Box, Button, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/article'
import PrivateRoute from '../components/privateRoute'
import { useAuth } from '../context/AuthContext'

const Admin = () => {
  const { logOut } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logOut()
      router.push('/login')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <PrivateRoute>
      <Layout title="Contacto">
        <Container>
          <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
            Admin
          </Heading>

          <Flex align="center" justify="center" mb={8}>
            <Box p={8} w="80%" rounded="md">
              solo lo ve el usuario admin
            </Box>
            <Button onClick={handleLogout} colorScheme="teal">
              Logout
            </Button>
          </Flex>
        </Container>
      </Layout>
    </PrivateRoute>
  )
}
export default Admin
