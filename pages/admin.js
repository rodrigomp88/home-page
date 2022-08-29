import { useContext } from 'react'
import { Container, Button, Box, Link } from '@chakra-ui/react'
import { NotAllowedIcon, ArrowBackIcon, EditIcon } from '@chakra-ui/icons'
import { AuthContext } from '../context'
import Layout from '../components/layouts/article'
import { HeadingText, WarningText, ProyectsPost } from '../components'

const AdminPage = () => {
  const { user } = useContext(AuthContext)

  return (
    <Layout title="Dashboard">
      <Container>
        {!user ? (
          <>
            <HeadingText
              title={'Dashboard'}
              subTitle={'¡Solo para el administrador! '}
              icon={<NotAllowedIcon />}
            />
            <Box my={10} align="center">
              <Link href="/login">
                <Button colorScheme="teal" leftIcon={<ArrowBackIcon />}>
                  Login
                </Button>
              </Link>
            </Box>
            <WarningText />
          </>
        ) : (
          <Box mb={10}>
            <HeadingText
              title={'Dashboard'}
              subTitle={`Bienvenido: "${user.email}"`}
              icon={<EditIcon />}
            />
            <ProyectsPost />
          </Box>
        )}
      </Container>
    </Layout>
  )
}

export default AdminPage
