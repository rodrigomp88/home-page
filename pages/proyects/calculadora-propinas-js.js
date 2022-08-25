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
  <Layout title="Calculadora Propinas">
    <Container>
      <Title>Calculadora Propinas</Title>
      <P>
        <Badge>Calculadora Propinas</Badge>Una app con json server creando
        nuestra propia api, selecione una mesa y la hora, agregue platillos a la
        mesa selecionada, lista el total de los platillos y administre que tipo
        de propina entrega, 10%, 25%, 50%.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/Calculadora-propinas-javascript"
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
        src="/images/proyects/calculadora-propinas-js.png"
        alt="Calculadora Propinas"
      />
      <WorkImage
        src="/images/proyects/calculadora-propinas-js.gif"
        alt="Calculadora Propinas"
      />
    </Container>
  </Layout>
)

export default Proyect
