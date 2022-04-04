import { Container, Heading, Box, Flex } from '@chakra-ui/react'
import { FormLogin } from '../components/form-login'
import Layout from '../components/layouts/article'

const Login = () => {
  return (
    <Layout title="Contacto">
      <Container>
        <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
          Login
        </Heading>

        <Flex align="center" justify="center" mb={8}>
          <Box p={8} w="80%" rounded="md">
            <FormLogin />
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
export default Login
