import { useContext } from 'react'
import { Container, Button, Link, Flex, Box, Text } from '@chakra-ui/react'
import { LockIcon, AtSignIcon } from '@chakra-ui/icons'
import { AuthContext } from '../context'
import { ProyectsPost } from '../components'
import Layout from '../components/layouts/article'

const Admin = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout title="Admin">
      {user ? (
        <Container>
          <Text fontSize={34} mb={4} mt={8}>
            Bienvenido: {user?.email}
          </Text>

          <Flex align="center" justify="center" mb={8}>
            <ProyectsPost />
          </Flex>
        </Container>
      ) : (
        <Container>
          <Box align="center" fontSize={35}>
            <Text textDecoration="underline" my={8}>
              ¡Página solo para el administrador!
            </Text>
            <Box my={5}>
              <LockIcon fontSize={60} />
            </Box>
            <Link href="/login" my={10}>
              <Button leftIcon={<AtSignIcon />}>Login</Button>
            </Link>
          </Box>
          <Text
            textAlign={{ base: 'right', md: 'center' }}
            fontSize={20}
            my={10}
          >
            ¡Tranquilo! Clonando esté repositorio en{' '}
            <Link
              target="_blank"
              href="https://github.com/rodrigomp88/home-page"
              fontWeight={500}
              textDecoration="underline"
            >
              github
            </Link>
            , tendrás acceso total al código, para modificarlo a tu gusto y/o
            estilo. Favor de seguir los pasos del archivo README.md, para su
            funionamiento
          </Text>
        </Container>
      )}
    </Layout>
  )
}

export default Admin
