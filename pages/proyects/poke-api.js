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
  <Layout title="Pokemon">
    <Container>
      <Title>Pokemon</Title>
      <Paragraph>
        <Badge>Pokemon</Badge> Pruebas con la api de poke-api, next themes,
        localStorage
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://pokeapi-nextjs.vercel.app/" target="_blank">
            View online demo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs, Taildwindcss</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/pokeapi-nextjs"
            target="_blank"
          >
            View code
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/proyects/pokemon-api.png" alt="popkemon" />
      <WorkImage src="/images/proyects/pokemon-api-1.png" alt="pokemon" />
    </Container>
  </Layout>
)

export default Proyect
