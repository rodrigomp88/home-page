import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  UnorderedList
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import ImageSlider from '../components/image-slider'
import { SlideData } from '../data/slide-data'

const Home = () => (
  <Layout>
    <Container mt={8} delay={0.5}>
      <ImageSlider slides={SlideData} />
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
          <p>( Front-End / Back-End )</p>
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
        <UnorderedList>
          <ListItem>JavaScript</ListItem>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>React</ListItem>
          <ListItem>NodeJs</ListItem>
          <ListItem>MySql</ListItem>
          <ListItem>MongoDB</ListItem>
        </UnorderedList>
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
