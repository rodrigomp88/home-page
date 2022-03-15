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
  <Layout title="Memorama 1.0">
    <Container>
      <Title>Memorama 1.0</Title>
      <P>
        <Badge>Memorama 1.0</Badge> juego de memoria de numeros. Al final
        muestra la cantidas de aciertos, el tiempo tomado y los movimientos
        realizados
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/Memorama-1.0/"
            target="_blank"
          >
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
          <Link
            href="https://github.com/rodrigomp88/Memorama-1.0"
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
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/proyects/memorama-1.0-1.jpeg"
          alt="memorama-1.0"
        />
        <WorkImage
          src="/images/proyects/memorama-1.0-2.jpeg"
          alt="memorama-1.0"
        />
      </SimpleGrid>
      <WorkImage src="/images/proyects/memorama-1.0.png" alt="memorama-1.0" />
    </Container>
  </Layout>
)

export default Proyect
