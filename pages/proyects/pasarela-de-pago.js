import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Heading
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Proyect = () => (
  <Layout title="Pasarela de pago">
    <Container>
      <Title>Pasarela de pago</Title>
      <P>
        <Badge>Pasarela de pago</Badge> componente realizado para entender el
        funcionamiento de la pasarela de pago de Mercado pago y Stripe.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link
            href="https://sistema-mercado-pago-stripe-r3zj8z2ot-rodrigomp88.vercel.app/"
            target="_blank"
          >
            View online demo
            <ExternalLinkIcon mx="4px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Tailwindcss</span>
        </ListItem>
        <ListItem>
          <Meta>
            <IoLogoGithub />
          </Meta>
          <Link
            href="https://github.com/rodrigomp88/sistema-mercadoPago-stripe"
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
        src="/images/proyects/stripe-mercado-pago.png"
        alt="pasarela-de-pago"
      />
    </Container>
  </Layout>
)

export default Proyect
