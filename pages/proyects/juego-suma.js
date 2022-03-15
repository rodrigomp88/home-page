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
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Proyect = () => (
  <Layout title="Juego suma">
    <Container>
      <Title>Juego suma</Title>
      <P>
        <Badge>Juego suma</Badge> juego de suma para niños, realizado con cariño
        para los niños de mi familia.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://rodrigomp88.github.io/JuegoSuma/" target="_blank">
            View online demo
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JS</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link href="https://github.com/rodrigomp88/JuegoSuma" target="_blank">
            View code
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/proyects/juego-suma.png" alt="juego suma" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/proyects/juego-suma-0.png" alt="juego suma" />
        <WorkImage src="/images/proyects/juego-suma-1.png" alt="juego suma" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Proyect
