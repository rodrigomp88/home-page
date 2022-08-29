import { useContext } from 'react'
import { Container, Link, Button, Box } from '@chakra-ui/react'
import { NotAllowedIcon } from '@chakra-ui/icons'
import { AuthContext } from '../context'
import { FormLogin, HeadingText, WarningText } from '../components'
import Layout from '../components/layouts/article'

const LoginPage = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout title="Login">
      <Container>
        <HeadingText
          title={'Login'}
          subTitle={'¡Solo para el administrador! '}
          icon={<NotAllowedIcon />}
        />
        <Box w={{ base: '100%', md: '80%' }} rounded="md" align="center">
          {user ? (
            <Link href="/admin">
              <Button colorScheme="teal" isFullWidth>
                Ya estas logeado
              </Button>
            </Link>
          ) : (
            <Container>
              <FormLogin />
              <WarningText />
            </Container>
          )}
        </Box>
      </Container>
    </Layout>
  )
}
export default LoginPage
