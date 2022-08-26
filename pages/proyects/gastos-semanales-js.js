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
  <Layout title="Gastos semanales">
    <Container>
      <Title>Gastos semanales</Title>
      <Paragraph>
        <Badge>Gastos semanales</Badge> controla gastos semanales, tiene alertas
        dependiendo si te queda menos del 50% del presupuesto(amarrillo) y si te
        queda menos del 25% del presupuesto(rojo), Proyecto realizado con
        clases.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://rodrigomp88.github.io/Gasto-semanal-clases-javascript/"
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
            href="https://github.com/rodrigomp88/Gasto-semanal-clases-javascript"
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
      <WorkImage
        src="/images/proyects/gastos-semanales-js.png"
        alt="Gastos semanales"
      />
      <WorkImage
        src="/images/proyects/gastos-semanales-js-0.png"
        alt="Gastos semanales"
      />
    </Container>
  </Layout>
)

export default Proyect
