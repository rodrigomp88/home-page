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
  <Layout title="Twitter clone">
    <Container>
      <Title>Twitter clone</Title>
      <Paragraph>
        <Badge>Twitter clone</Badge> permite twitter, comentar y borrar, manejo
        del estado con recoil.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://twitter-two-blond.vercel.app/" target="_blank">
            View online demo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs, Taildwindcss, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/twitter-next-firebase-tailwind"
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

      <WorkImage src="/images/proyects/twitter-0.png" alt="twitter clone" />
      <WorkImage src="/images/proyects/twitter-1.png" alt="twitter clone" />
    </Container>
  </Layout>
)

export default Proyect
