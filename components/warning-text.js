import { Container, Link, Text, Divider } from '@chakra-ui/react'

export const WarningText = () => {
  return (
    <Container>
      <Divider my={6} />
      <Text textAlign={{ base: 'right', md: 'left' }} my={10}>
        ¡Tranquila/o! Clonando esté repositorio en{' '}
        <Link
          target="_blank"
          href="https://github.com/rodrigomp88/home-page"
          fontWeight={500}
          textDecoration="underline"
        >
          github
        </Link>
        , tendrás acceso total al código de este proyecto, para modificarlo a tu
        gusto. Favor de seguir los pasos del archivo{' '}
        <Link
          target="_blank"
          href="https://github.com/rodrigomp88/home-page/blob/main/README.md"
          fontWeight={500}
          textDecoration="underline"
        >
          README.md
        </Link>
        , para su posterior funionamiento.
      </Text>
    </Container>
  )
}
