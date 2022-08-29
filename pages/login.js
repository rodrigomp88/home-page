import { useContext } from 'react'
import { Container, Link, Button, Box } from '@chakra-ui/react'
import { NotAllowedIcon, ArrowBackIcon } from '@chakra-ui/icons'
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
          subTitle={
            !user ? '¡Solo para el administrador!' : '¡Ya estás logueado!'
          }
          icon={<NotAllowedIcon />}
        />
        <Box my={10} align="center">
          {!user ? (
            <Container>
              <FormLogin />
              <WarningText />
            </Container>
          ) : (
            <Link href="/admin">
              <Button colorScheme="teal" leftIcon={<ArrowBackIcon />}>
                Admin
              </Button>
            </Link>
          )}
        </Box>
      </Container>
    </Layout>
  )
}
export default LoginPage
