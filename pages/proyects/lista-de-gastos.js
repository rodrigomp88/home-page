import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Proyect = () => (
  <Layout title="Lista de gastos">
    <Container>
      <Title>Lista de gastos</Title>
      <P>
        <Badge>Lista de gastos</Badge> es una aplicación para controlar egresos
        e ingresos mensuales, de distintos tipos de servicios y productos
        adquiridos o gastados a lo largo de cada mes.
      </P>
      <P>
        La aplicaión cuenta con dos secciones: una para visualizar el historial
        de todos los ingresos y egresos realizados, y la segunda para observar
        las categorias de los distintos tipos de egresos
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://lista-gasto.web.app/" target="_blank">
            View online demo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase, Styled Components</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/lista-gastos"
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

      <WorkImage src="/images/proyects/lista-gastos.png" alt="lista-gastos" />
      <WorkImage src="/images/proyects/lista-gastos-0.png" alt="lista-gastos" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/proyects/lista-gastos-1.jpeg"
          alt="lista-gastos"
        />
        <WorkImage
          src="/images/proyects/lista-gastos-2.jpeg"
          alt="lista-gastos"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Proyect
