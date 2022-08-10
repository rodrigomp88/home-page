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
  <Layout title="Traductor">
    <Container>
      <Title>Traductor</Title>
      <P>
        <Badge>Traductor</Badge>Clone del traductor de google con la api de
        google translate de rapidApi. Realizado con React, Node, Express, Axios
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Node, Express, Axios</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/traductor-google-react"
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
        src="/images/proyects/clone-traductor.png"
        alt="Calculadora Propinas"
      />
      <WorkImage
        src="/images/proyects/clone-traductor-1.gif"
        alt="Calculadora Propinas"
      />
    </Container>
  </Layout>
)

export default Proyect
