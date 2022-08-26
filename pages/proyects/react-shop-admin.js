import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Heading,
  SimpleGrid
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Paragraph } from '../../components'

const Proyect = () => (
  <Layout title="React shop admin">
    <Container>
      <Title>React shop admin</Title>
      <Paragraph>
        <Badge>React shop admin</Badge> componente realizado con api de prueba
        para acciones de crud, muestra de graficos con Chartjs, Login/Logout,
        muestra de datos con paginación, eliminacion y edicion.
      </Paragraph>
      <Paragraph>
        La plantilla es un diseño tomado de la pagina de tailwind.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://react-shop-admin-n0rsc8b0q-rodrigomp88.vercel.app/"
            target="_blank"
          >
            View online demo
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwindcss, ChartJs</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/react-shop-admin"
            target="_blank"
          >
            View code
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage
        src="/images/proyects/react-shop-admin.png"
        alt="react-shop-admin"
      />
      <WorkImage
        src="/images/proyects/react-shop-admin-0.png"
        alt="react-shop-admin"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/proyects/react-shop-admin-1.png"
          alt="react-shop-admin"
        />
        <WorkImage
          src="/images/proyects/react-shop-admin-3.png"
          alt="react-shop-admin"
        />
      </SimpleGrid>
      <WorkImage
        src="/images/proyects/react-shop-admin-2.png"
        alt="react-shop-admin"
      />
    </Container>
  </Layout>
)

export default Proyect
