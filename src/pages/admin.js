import { Container, Heading, Box, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Admin = () => {
  return (
    <Layout title="Contacto">
      <Container>
        <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
          Admin
        </Heading>

        <Flex align="center" justify="center" mb={8}>
          <Box p={8} w="80%" rounded="md">
            solo lo ve el usuario admin
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
export default Admin
