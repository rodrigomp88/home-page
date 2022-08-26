import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, Paragraph } from '../../components'

const Proyect = () => (
  <Layout title="Administra clientes">
    <Container>
      <Title>Administra clientes</Title>
      <Paragraph>
        <Badge>Administra clientes</Badge>CRUD de clientes en indexDB. Da de
        alta nuevos clientes, muestra todos los clientes, edita clientes ya
        existentes y elimina
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/administra-cliente-indexDB-js/"
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
            href="https://github.com/rodrigomp88/administra-cliente-indexDB-js"
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
        src="/images/proyects/administra-clientes-js.png"
        alt="Administra clientes"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/proyects/administra-clientes-js-0.jpeg"
          alt="Administra clientes"
        />
        <WorkImage
          src="/images/proyects/administra-clientes-js-1.jpeg"
          alt="Administra clientes"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Proyect
