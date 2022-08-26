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
import { Title, WorkImage, Meta, Paragraph } from '../../components'

const Proyect = () => (
  <Layout title="Buscador Autos Por Filtros">
    <Container>
      <Title>Buscador Autos Por Filtros</Title>
      <Paragraph>
        <Badge>Buscador Autos Por Filtros</Badge> Filtrar busqueda de datos por
        Marca, precio maximo y minimo, año, puertas, transmision y color
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/Buscador-autos-por-filtros-JavaScript/"
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
            href="https://github.com/rodrigomp88/Buscador-autos-por-filtros-JavaScript"
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
        src="/images/proyects/buscador-autos-por-filtro-js.png"
        alt="Buscador Autos Por Filtros"
      />
      <WorkImage
        src="/images/proyects/buscador-autos-por-filtro-js-0.png"
        alt="Buscador Autos Por Filtros"
      />
    </Container>
  </Layout>
)

export default Proyect
