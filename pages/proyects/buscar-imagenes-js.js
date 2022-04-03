import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Proyect = () => (
  <Layout title="Bucar Imagenes">
    <Container>
      <Title>Bucar Imagenes</Title>
      <P>
        <Badge>Bucar Imagenes</Badge>Buscar imagenes con la api de pixabay. El
        proyecto esta realizado con paginacion.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/Buscador-de-imagenes-pixabay-javascript/"
            target="_blank"
          >
            View online demo
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/Buscador-de-imagenes-pixabay-javascript"
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
        src="/images/proyects/buscar-imagenes-js.png"
        alt="Bucar Imagenes"
      />
      <WorkImage
        src="/images/proyects/buscar-imagenes-js-0.png"
        alt="Bucar Imagenes"
      />
    </Container>
  </Layout>
)

export default Proyect
