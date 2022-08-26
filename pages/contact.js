import {
  Container,
  Heading,
  Box,
  Button,
  Flex,
  ListItem,
  List,
  Link,
  Icon
} from '@chakra-ui/react'
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { FormContact } from '../components'
import Layout from '../components/layouts/article'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Layout title="Contacto">
      <Container>
        <Heading as="h1" variant="section-title" fontSize={25} mb={4} mt={8}>
          {t('contact.heading')}
        </Heading>

        <Flex align="center" justify="center" mb={8}>
          <Box p={8} w={{ base: '100%', md: '80%' }} rounded="md">
            <FormContact />
          </Box>
        </Flex>
        <Heading as="h3" variant="section-title">
          {t('contact.hading2')}
        </Heading>
        <List mb={8}>
          <ListItem>
            <Link href="mailto:rodrigomp88@gmail.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={EmailIcon} />}
              >
                rodrigomp88@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={PhoneIcon} />}
              >
                +5492612522667
              </Button>
            </Link>
            {t('contact.link')}
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}
export default Contact
