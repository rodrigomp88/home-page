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
  <Layout title="Cotizador Seguros">
    <Container>
      <Title>Cotizador Seguros</Title>
      <Paragraph>
        <Badge>Cotizador Seguros</Badge> Cotizador de seguros de autos, la app
        cuenta con validaciones para no enviar datos vacios calculos en base el
        tipo del seguro, el año y si es completo o basico. Esta realizado con
        Prototypes.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/Cotizador-seguros-autos-Prototype-javasript/"
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
            href="https://github.com/rodrigomp88/Cotizador-seguros-autos-Prototype-javasript"
            target="_blank"
          >
            View code
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshot</Center>
      </Heading>
      <WorkImage
        src="/images/proyects/cotizador-seguros-js.png"
        alt="Cotizador seguros"
      />
    </Container>
  </Layout>
)

export default Proyect
