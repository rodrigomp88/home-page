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
  <Layout title="ToDoApp">
    <Container>
      <Title>ToDoApp</Title>
      <Paragraph>
        <Badge>ToDoApp</Badge> creacion y edicion de tareas con arrastre para
        cambiar el estado de las mismas, que se almacenan de mongoDB
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://gestor-proyectos-next.vercel.app/"
            target="_blank"
          >
            View online demo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs, Taildwindcss, MongoDb</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/gestor-proyectos-next"
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

      <WorkImage src="/images/proyects/todo-app.png" alt="todo app" />
      <WorkImage src="/images/proyects/todo-app-1.png" alt="todo app" />
    </Container>
  </Layout>
)

export default Proyect
