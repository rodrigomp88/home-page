import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbListaGasto from '../public/images/proyects/lista-gastos.png'
import thumbPasarela from '../public/images/proyects/stripe-mercado-pago.png'
import thumbShopAdmin from '../public/images/proyects/react-shop-admin.png'
import thumbMemorama from '../public/images/proyects/memorama.png'
import thumbGifSearch from '../public/images/proyects/gif-search.png'
import thumbMemoramaNumber from '../public/images/proyects/memorama-1.0.png'
import thumbJuegoSuma from '../public/images/proyects/juego-suma.png'
import thumbSnakeGame from '../public/images/proyects/snake-game.png'
import thumbEnviarMailJs from '../public/images/proyects/formulario-envio-email-js.png'
import thumbFiltrarBusquedaJs from '../public/images/proyects/buscador-autos-por-filtro-js.png'
import thumbToDoListJs from '../public/images/proyects/todo-list-js.png'
import thumbCarritoCompraJs from '../public/images/proyects/carrito-compra-js.png'
import thumbCotizadorSegurosJs from '../public/images/proyects/cotizador-seguros-js.png'
import thumbGastosSemanalesJs from '../public/images/proyects/gastos-semanales-js.png'
import thumbAdministraPacientesJs from '../public/images/proyects/administra-pacientes-js.png'
import thumbAdministraClientesJs from '../public/images/proyects/administra-clientes-js.png'
import thumbBuscarClimaJs from '../public/images/proyects/buscar-clima-js.png'
import thumbBuscarCancionesLetraJs from '../public/images/proyects/buscar-canciones-letra-js.png'
import thumbBuscarImagenesJs from '../public/images/proyects/buscar-imagenes-js.png'
import thumbCotizarCriptomonedasJs from '../public/images/proyects/cotizador-criptomonedas-js.png'
import thumbCalculadoraPropinasJs from '../public/images/proyects/calculadora-propinas-js.png'

const Proyects = () => (
  <Layout title="Proyectos">
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          Aplicaciones
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="lista-de-gastos"
            title="Lista de gastos"
            thumbnail={thumbListaGasto}
          >
            Una apicación para controlar los gastos e ingresos mensuales
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Otros
        </Heading>
      </Section>

      <SimpleGrid columns={[2, 2, 3]} gap={6}>
        <Section delay={0.4}>
          <WorkGridItem
            id="calculadora-propinas-js"
            thumbnail={thumbCalculadoraPropinasJs}
            title="Calculadora Propinas"
          >
            App para calcular las propinas en base a los platillos
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="cotizar-criptomonedas-js"
            thumbnail={thumbCotizarCriptomonedasJs}
            title="Cotizador Criptomonedas"
          >
            Api de CryptoCompare
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="buscar-imagenes-js"
            thumbnail={thumbBuscarImagenesJs}
            title="Buscar Imagenes"
          >
            Pixabay api
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="buscar-canciones-letra-js"
            thumbnail={thumbBuscarCancionesLetraJs}
            title="Buscar Canciones letra"
          >
            Api de lyrics
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="buscar-clima-js"
            thumbnail={thumbBuscarClimaJs}
            title="Buscar Clima"
          >
            Open Weather api
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="administra-clientes-js"
            thumbnail={thumbAdministraClientesJs}
            title="Administra clientes"
          >
            CRUD de clientes en indexDB
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="administra-pacientes-js"
            thumbnail={thumbAdministraPacientesJs}
            title="Administra pacientes"
          >
            CRUD de paceintes de veterinaria
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="gastos-semanales-js"
            thumbnail={thumbGastosSemanalesJs}
            title="Gastos semanales"
          >
            Control de gastos semanales
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="cotizador-seguros-js"
            thumbnail={thumbCotizadorSegurosJs}
            title="Cotizador de seguros"
          >
            Cotiza tu seguro de automovil
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="carrito-compra-js"
            thumbnail={thumbCarritoCompraJs}
            title="Carrito de compra"
          >
            Guardar cursos en el carrito con localStorage
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="todo-list-js"
            thumbnail={thumbToDoListJs}
            title="ToDo List"
          >
            Guardar notas en localStorage
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="buscador-autos-por-filtro-js"
            thumbnail={thumbFiltrarBusquedaJs}
            title="Buscador de auto por filtro"
          >
            Filtrar busqueda por propiedades
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="formulario-envio-email-js"
            thumbnail={thumbEnviarMailJs}
            title="Formulario enviar email"
          >
            Formulario para el envio de emails
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="pasarela-de-pago"
            thumbnail={thumbPasarela}
            title="Pasarela de pago"
          >
            Pasarela de pago integrada con Mercado pago y Stripe
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="react-shop-admin"
            thumbnail={thumbShopAdmin}
            title="Reac shop admin"
          >
            Crud de datos con api
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="memorama-1.0"
            thumbnail={thumbMemoramaNumber}
            title="Memorama 1.0"
          >
            Juego de memoria con números
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem
            id="gif-search"
            thumbnail={thumbGifSearch}
            title="Gif search"
          >
            Busqueda de gifs con la api de GIPHY
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="memorama"
            thumbnail={thumbMemorama}
            title="Memorama"
          >
            Juego de memoria con íconos
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="juego-suma"
            thumbnail={thumbJuegoSuma}
            title="Juego suma"
          >
            Juego de suma didáctico, para niños
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
            id="snake-game"
            thumbnail={thumbSnakeGame}
            title="Snake game"
          >
            El clásico juego de la viborita
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Proyects
