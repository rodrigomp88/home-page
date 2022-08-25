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
  Tooltip,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useTranslation } from 'react-i18next'
import { WorkGridItem } from '../components/grid-item'
import thumbEcommerce from '../public/images/proyects/ecommerce.png'
import thumbTwitter from '../public/images/proyects/twitter-0.png'

const Home = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Container mt={8} delay={0.5}>
        <Box display={{ md: 'flex' }} mb={2}>
          <Box flexGrow={1}>
            <Heading>Rodrigo Pinea</Heading>
            <p>( {t('home.title')} )</p>
            <NextLink href="">
              <Link
                fontWeight="bold"
                href="/curriculum.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('home.cv')} <ExternalLinkIcon />
              </Link>
            </NextLink>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <NextLink href="login">
              <Link>
                <Tooltip label="LogIn" placement="left">
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
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          React | Next | JavaScript | NodeJs | MySql | MongoDB | Firebase
        </Box>

        <Section delay={0.7}>
          <Box align="center" my={4}>
            <NextLink href="/contact">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                {t('home.endBtn')}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('home.exp')}
          </Heading>
          <BioSection>
            <BioYear>2018 - {t('home.expBioYear')}</BioYear>
            {t('home.expBioSection')}
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('home.aboutTitle')}
          </Heading>
          <Paragraph>{t('home.aboutSection')}</Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            {t('home.education')}
          </Heading>
          <BioSection>
            <BioYear>2017</BioYear>
            {t('home.educationUtn')} UTN(Universidad-tecnológica-nacional).
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            {t('home.educationHenry')} Henry
          </BioSection>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            {t('home.courses')}
          </Heading>
          <UnorderedList>
            <ListItem>
              Next.js: El framework de React para producción(Fernando Herrera)
              Udemy
            </ListItem>
            <ListItem>
              JavaScript Moderno Guía Definitiva Construye +15 Proyectos (Juan
              Pablo De la torre Valdez) Udemy
            </ListItem>
            <ListItem>
              Next JS: Crea tu tienda online completa (Agustin Navarro Galdon)
              Udemy
            </ListItem>
            <ListItem>
              La Web Empieza Aquí: TypeScript, Angular , Storage, Firebase
              (Tomas Garay) Udemy
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
          </UnorderedList>
        </Section>

        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            {t('home.hobbies')} ♥
          </Heading>
          <Paragraph>{t('home.hobbiesP')}</Paragraph>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="ecommerce"
              title="Ecommerce"
              thumbnail={thumbEcommerce}
            >
              Ecommrece en nextJs, tailwindCss, mongoDB
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="twitter-clone"
              title="Twitter clone"
              thumbnail={thumbTwitter}
            >
              Clone de twitter con las funcionalidades básicas
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Box align="center" mt={10} mb={6}>
          <NextLink href="/proyects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              {t('home.topButton')}
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Home
