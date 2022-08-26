import {
  Box,
  Text,
  Badge,
  List,
  ListItem,
  Button,
  Link,
  Icon,
  SimpleGrid,
  Tooltip
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <SimpleGrid row={[2]} gap={2}>
        <List>
          <ListItem>
            <Tooltip label="GitHub" placement="top">
              <Link href="https://github.com/rodrigomp88" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                ></Button>
              </Link>
            </Tooltip>
            <Tooltip label="LinkedIn" placement="top">
              <Link
                href="https://www.linkedin.com/in/rodrigo-pinea/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                ></Button>
              </Link>
            </Tooltip>
          </ListItem>
        </List>
      </SimpleGrid>
      <Badge mt={4}>{t('footer.badge')} | Next.js | Chakra.ui</Badge>
      <Text mt={4}>
        &copy; {new Date().getFullYear()} Rodrigo Pinea. {t('footer.text')}
      </Text>
    </Box>
  )
}
