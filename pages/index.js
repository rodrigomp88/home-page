import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import thumbListaGasto from '../public/images/proyects/lista-gastos.png'
import thumbPago from '../public/images/proyects/stripe-mercado-pago.png'

const Home = () => (
  <Layout>
    <Container>
      <SimpleGrid columns={[1, 2, 2]} gap={6} m={6}>
        <GridItem
          href="https://lista-gasto.web.app/"
          title="Lista gastos"
          thumbnail={thumbListaGasto}
        >
          Aplicación de gastos mensuales
        </GridItem>
        <GridItem
          href="https://sistema-mercado-pago-stripe-r3zj8z2ot-rodrigomp88.vercel.app/"
          title="Pasarela de pago"
          thumbnail={thumbPago}
        >
          Mercado pago y Stripe
        </GridItem>
      </SimpleGrid>
      <Box align="center" my={4} mb={6}>
        <NextLink href="/proyects">
          <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Todos los proyectos
          </Button>
        </NextLink>
      </Box>

      <Box display={{ md: 'flex' }} mb={2}>
        <Box flexGrow={1}>
          <Heading>Pinea Rodrigo</Heading>
          <p>( Fron-End / Back-End )</p>
          <NextLink href="">
            <Link
              fontWeight="bold"
              href="/curriculum.pdf"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descarga mi CV <ExternalLinkIcon />
            </Link>
          </NextLink>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-img.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, Soy desarrollador web!
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hola! soy Rodrigo, desarrollador web de Argentina, Mendoza. Me gusta
          aprender nuevas tecnologías, construir servicios web, desde el diseño
          amigable a modelado de datos. Apasionado por las tecnologias, en mi
          tiempo libre me gusta hacer juegos web, mirar tutoriales, aprender
          nuevos lenguajes de programación e implementaciones de apis, además de
          estar frente a una pantalla me gusta hacer ejercicios fisico
          (Ciclismo/gimnasio/senderismo) y compartir con familia e amigos.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biografía
        </Heading>
        <BioSection>
          <BioYear>1988</BioYear>
          Nacido en Mendoza, Argentina.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Comienzo estudios de programación en
          UTN(Universidad-tecnológica-nacional).
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Desarrollo de sitios web de manera freelance
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Bootcamp en henry
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Me gusta ♥
        </Heading>
        <Paragraph>
          Arte, Musica, Dibujar, Fotografía, Juegos, Deportes
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Habilidades
        </Heading>
        <Paragraph>
          React, JavaScript, Node, MySql, Firebase, HTML, CSS
        </Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Sigueme en la web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/rodrigomp88" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @rodrigomp88
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/rodrigo-pinea/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @rodrigo-pinea
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/contact">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Contáctame
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
