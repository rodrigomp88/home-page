import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbListaGasto from '../public/images/proyects/lista-gastos.png'
import thumbPasarela from '../public/images/proyects/stripe-mercado-pago.png'
import thumbMemorama from '../public/images/proyects/memorama.png'
import thumbMemoramaNumber from '../public/images/proyects/memorama-1.0.png'
import thumbJuegoSuma from '../public/images/proyects/juego-suma.png'
import thumbSnakeGame from '../public/images/proyects/snake-game.png'

const Proyects = () => (
  <Layout title="Proyectos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Aplicaciones
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
            id="lista-de-gastos"
            title="Lista de gastos"
            thumbnail={thumbListaGasto}
          >
            Una apicación para controlar los gastos e ingresos mensuales
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Componentes
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="pasarela-de-pago"
            thumbnail={thumbPasarela}
            title="Pasarela de pago"
          >
            Pasarela de pago integrada con Mercado pago y Stripe
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Otros
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
            id="memorama-1.0"
            thumbnail={thumbMemoramaNumber}
            title="Memorama 1.0"
          >
            Memorama 1.0
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="memorama"
            thumbnail={thumbMemorama}
            title="Memorama"
          >
            Juego de memoria
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="juego-suma"
            thumbnail={thumbJuegoSuma}
            title="Juego suma"
          >
            Juego de suma para niños
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="snake-game"
            thumbnail={thumbSnakeGame}
            title="Snake game"
          >
            El clasico juego de la viborita
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Proyects
