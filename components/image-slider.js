import { Center, Heading, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ImageSlider = ({ slides }) => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showArrows
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {slides.map(slide => {
        return (
          <div key={slide.id}>
            <Image
              src={slide.image}
              height="auto"
              width="auto"
              alt={slide.id}
            />
            <Heading mt={8} mb={4}>
              {slide.id}
            </Heading>
            <Center mb={4} text-align="center">
              {slide.descripcion}
            </Center>
          </div>
        )
      })}
    </Carousel>
  )
}

export default ImageSlider
