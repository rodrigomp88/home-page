import { useContext } from 'react'
import {
  useDisclosure,
  Modal,
  Box,
  Container,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { FormAddProyect } from './'
import { ProyectsContext } from '../context'

export const ProyectsPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { proyectos } = useContext(ProyectsContext)

  return (
    <Container>
      <Box align="center">
        <Button
          rightIcon={<AddIcon />}
          colorScheme="teal"
          isFullWidth
          justifyContent="space-between"
          onClick={onOpen}
        >
          Cargar nuevo proyecto
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cargar nuevo proyecto</ModalHeader>
          <ModalCloseButton colorScheme="red" />
          <ModalBody>
            <FormAddProyect />
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" colorScheme="red" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="teal">Agregar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {proyectos.length > 0 ? (
        <>
          {proyectos.map(proyecto => (
            <div key={proyecto.id}>
              <h1>{proyecto.name}</h1>
              <p>{proyecto.description}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Sin datos</p>
      )}
    </Container>
  )
}
