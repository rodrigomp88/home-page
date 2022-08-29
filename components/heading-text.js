import {
  Divider,
  Container,
  Grid,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react'

export const HeadingText = ({ title, subTitle, icon }) => {
  return (
    <Container>
      <Grid>
        <Heading as="h1" variant="section-title" fontSize={28} mb={4} mt={8}>
          {title} <Icon ml={5}>{icon}</Icon>
        </Heading>

        <Text>{subTitle}</Text>
      </Grid>

      <Divider my={6} />
    </Container>
  )
}
