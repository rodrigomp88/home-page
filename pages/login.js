import { useContext } from 'react'
import { Container, Heading, Link, Button, Box, Flex } from '@chakra-ui/react'
import { AuthContext } from '../context'
import { FormLogin } from '../components'
import Layout from '../components/layouts/article'

const Login = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout title="Login">
      <Container>
        <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
          Login
        </Heading>

        <Flex align="center" justify="center" mb={8}>
          <Box p={8} w={{ base: '100%', md: '80%' }} rounded="md">
            {user ? (
              <Link href="/admin">
                <Button colorScheme="teal" isFullWidth>
                  Ya estas logeado
                </Button>
              </Link>
            ) : (
              <FormLogin />
            )}
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
export default Login
