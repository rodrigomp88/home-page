import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Proyect = () => (
  <Layout title="Ecommerce">
    <Container>
      <Title>Ecommerce</Title>
      <P>
        <Badge>Ecommerce</Badge> Ecommerce cuenta con context para el manejo del
        estado de la aplicacion, cookies para el almacenamiento de carrito, Next
        Auth para la sesion de usuario, Paypal para la pasarela de pago.
      </P>
      <P>
        Panel de administracion para ver el inventario totalde productos ordenes
        y usuarios y cambio de privilegios de los usuarios
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://ecommerce-nextjs-tailwindcss.vercel.app/"
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
            href="https://github.com/rodrigomp88/ecommerce-nextjs-tailwindcss"
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

      <WorkImage src="/images/proyects/ecommerce.png" alt="ecommerce" />
      <WorkImage src="/images/proyects/ecommerce-1.png" alt="ecommerce" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/proyects/ecommerce-6.jpeg" alt="ecommerce" />
        <WorkImage src="/images/proyects/ecommerce-7.jpeg" alt="ecommerce" />
        <WorkImage src="/images/proyects/ecommerce-8.jpeg" alt="ecommerce" />
        <WorkImage src="/images/proyects/ecommerce-9.jpeg" alt="ecommerce" />
      </SimpleGrid>
      <WorkImage src="/images/proyects/ecommerce-2.png" alt="ecommerce" />
      <WorkImage src="/images/proyects/ecommerce-3.png" alt="ecommerce" />
      <WorkImage src="/images/proyects/ecommerce-4.png" alt="ecommerce" />
      <WorkImage src="/images/proyects/ecommerce-5.png" alt="ecommerce" />
    </Container>
  </Layout>
)

export default Proyect
