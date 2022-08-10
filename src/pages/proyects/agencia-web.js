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
  <Layout title="Agencia web">
    <Container>
      <Title>Agencia web</Title>
      <P>
        <Badge>Agencia web</Badge>Diseño de una agencia, para comprender el
        funcionamiento de tailwindcss y typescript
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://agency-web-next.vercel.app/" target="_blank">
            View online demo
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nextjs, Tailwindcss, TypeScript</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/agency-web-next"
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
      <WorkImage src="/images/proyects/agency-web.png" alt="Agencia web" />
      <WorkImage src="/images/proyects/agency-web-1.png" alt="Agencia web" />
    </Container>
  </Layout>
)

export default Proyect
