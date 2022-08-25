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
  <Layout title="APV">
    <Container>
      <Title>APV</Title>
      <P>
        <Badge>APV</Badge> Administra pacientes de veterinaria y los guarda en
        Mongo Atlas, el proyecto esta separado por backend y frontend
      </P>
      <P>
        Para probar la carga de paceintes ingrese con el usuario,
        -correo@correo.com. Y la contraseña, -password
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://glittery-mousse-70f293.netlify.app/"
            target="_blank"
          >
            View online demo
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Taildwindcss, MongoDb, Express</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/apv-frontend"
            target="_blank"
          >
            View code frontend
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/apv-backend"
            target="_blank"
          >
            View code backend
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/proyects/apv.png" alt="apv" />
      <WorkImage src="/images/proyects/apv-1.png" alt="apv" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/proyects/apv-2.jpeg" alt="apv" />
        <WorkImage src="/images/proyects/apv-3.jpeg" alt="apv" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Proyect
