import { useContext } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  IoLogoGithub,
  IoHomeOutline,
  IoExit,
  IoMailOpenOutline,
  IoSettingsOutline,
  IoFolderOutline
} from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '../context'
import { Logo, ThemeToggleButton } from './'

const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray900', 'whiteAlpha.700')
  return (
    <NextLink href={href} passHref>
      <Link
        display="flex"
        p={2}
        bg={active ? 'grassTeal' : undefined}
        rounded={{ base: 'none', md: 'md' }}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export const Navbar = props => {
  const { t } = useTranslation()
  const { path } = props
  const { user, logout } = useContext(AuthContext)

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
      boxShadow="lg"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/proyects" path={path}>
            {t('navBar.projects')}
          </LinkItem>
          <LinkItem href="/contact" path={path}>
            {t('navBar.contact')}
          </LinkItem>
          {user && (
            <LinkItem href="/admin" path={path}>
              {t('navBar.admin')}
            </LinkItem>
          )}
          <LinkItem
            target="_blank"
            href="https://github.com/rodrigomp88/home-page"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            {t('navBar.code')}
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          {user && (
            <Tooltip label="Salir" placement="bottom">
              <IconButton colorScheme={'red'} onClick={handleLogout} mr={2}>
                <IoExit />
              </IconButton>
            </Tooltip>
          )}
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <LinkItem href="/" path={path}>
                  <MenuItem gap={2}>
                    <IoHomeOutline />
                    {t('navBar.about')}
                  </MenuItem>
                </LinkItem>
                <LinkItem href="/proyects" path={path}>
                  <MenuItem gap={2}>
                    <IoFolderOutline />
                    {t('navBar.projects')}
                  </MenuItem>
                </LinkItem>
                <LinkItem href="/contact" path={path}>
                  <MenuItem gap={2}>
                    <IoMailOpenOutline />
                    {t('navBar.contact')}
                  </MenuItem>
                </LinkItem>
                {user && (
                  <LinkItem href="/admin" path={path}>
                    <MenuItem gap={2}>
                      <IoSettingsOutline />
                      {t('navBar.admin')}
                    </MenuItem>
                  </LinkItem>
                )}
                <LinkItem
                  path={path}
                  target="_blank"
                  href="https://github.com/rodrigomp88/home-page"
                >
                  <MenuItem gap={2}>
                    <IoLogoGithub />
                    {t('navBar.code')}
                  </MenuItem>
                </LinkItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
