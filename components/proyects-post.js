import {
  useDisclosure,
  Modal,
  Container,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { FormAddProyect } from './'

export const ProyectsPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container>
      <Button colorScheme="teal" onClick={onOpen}>
        Cargar Proyecto
      </Button>

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
    </Container>
  )
}
