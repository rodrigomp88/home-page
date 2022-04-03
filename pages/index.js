import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  ListItem,
  useColorModeValue,
  UnorderedList,
  Tooltip
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
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
          <p>( Desarrollador web )</p>
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
          <Tooltip label="OUCH!" placement="left">
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
          </Tooltip>
        </Box>
      </Box>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        JavaScript | React | NodeJs | MySql | MongoDB | NextJs
      </Box>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experiencia
        </Heading>
        <BioSection>
          <BioYear>2018 - Actualidad</BioYear>
          Desarrollo web freelance, ayuda con la
          creación y tutorías para el manejo de correos electrónicos
          corporativos. Soporte y asesoría para la compra de software para el
          posicionamiento de unidades y administracion de la organización.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Sobre mi
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

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Formación
        </Heading>
        <BioSection>
          <BioYear>2017</BioYear>
          Comienzo estudios de programación en
          UTN(Universidad-tecnológica-nacional).
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Bootcamp en henry
        </BioSection>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Cursos
        </Heading>
        <UnorderedList>
          <ListItem>
            La Web Empieza Aquí: TypeScript, Angular , Storage, Firebase (Tomas
            Garay) Udemy
          </ListItem>
          <ListItem>
            Web Personal MERN Full Stack: MongoDB, Express, React y Node
            (Agustin Navarro Galdon) Udemy
          </ListItem>
          <ListItem>
            React Native Expo: Creando un TripAdvisor de Restaurantes (Agustin
            Navarro Galdon) Udemy
          </ListItem>
          <ListItem>
            React De cero a experto (Hooks y MERN) (Fernando Herrera) Udemy
          </ListItem>
          <ListItem>
            React Hooks & Firebase & Material Design Fullstack Extremo (Vaxi
            Drez, Javier Calizaya Melendrez) Udemy
          </ListItem>
          <ListItem>
            React y Firebase El Curso Completo, Práctico y desde Cero (Carlos
            Arturo Esparza) Udemy
          </ListItem>
          <ListItem>
            Next JS: Crea tu tienda online completa (Agustin Navarro Galdon)
            Udemy
          </ListItem>
          <ListItem>
            JavaScript Moderno Guía Definitiva Construye +15 Proyectos (Juan
            Pablo De la torre Valdez) Udemy
          </ListItem>
        </UnorderedList>
      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Aficiones ♥
        </Heading>
        <Paragraph>Arte, Musica, Fotografía, Juegos, Deportes</Paragraph>
      </Section>

      <Section delay={0.7}>
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
