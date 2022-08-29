import { useContext } from 'react'
import { Container, Button, Box, Link } from '@chakra-ui/react'
import { NotAllowedIcon, AtSignIcon, EditIcon } from '@chakra-ui/icons'
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
            <Box w={{ base: '100%', md: '80%' }} rounded="md" align="center">
              <Link href="/login" my={5}>
                <Button
                  colorScheme="teal"
                  isFullWidth
                  leftIcon={<AtSignIcon />}
                >
                  Login
                </Button>
              </Link>
              <WarningText />
            </Box>
          </>
        ) : (
          <>
            <HeadingText
              title={'Dashboard'}
              subTitle={`Bienvenido`}
              icon={<EditIcon />}
            />
            <ProyectsPost />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default AdminPage
