import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contact = () => (
  <Layout title="Contacto">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Contacto
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <form name="contact" action="POST" data-netlify="true">
            <p>
              <label>
                Name <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Email <input type="email" name="email" />
              </label>
            </p>
            <div className="actions">
              <div data-netlify-recaptcha></div>
            </div>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Contact
