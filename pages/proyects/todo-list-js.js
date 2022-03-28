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
  <Layout title="ToDo List">
    <Container>
      <Title>ToDo List</Title>
      <P>
        <Badge>ToDo List</Badge> Agrega, elimina tweets y los almacena en
        localStorage.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/TODO-list-javascript/"
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
            href="https://github.com/rodrigomp88/TODO-list-javascript"
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
      <WorkImage src="/images/proyects/todo-list-js.png" alt="ToDo list" />
    </Container>
  </Layout>
)

export default Proyect
