/* eslint-disable @next/next/no-img-element */
// import { useContext } from 'react'
import {
  Button,
  FormControl,
  Container,
  Input,
  VStack,
  useDisclosure,
  Modal,
  Box,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { AtSignIcon, AddIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'
import { db, storage } from '../config/firebase'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { useRouter } from 'next/router'
// import { ProyectsContext } from '../context'

const dbInstance = collection(db, 'proyects')

export const FormAddProyect = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [stack, setStack] = useState('')
  const [urlDeploy, setUrlDeploy] = useState('')
  const [urlRepo, setUrlRepo] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const fileRef = useRef(null)

  const addProyect = async () => {
    const docRef = await addDoc(dbInstance, {
      title,
      description,
      stack,
      urlDeploy,
      urlRepo,
      timestamp: serverTimestamp()
    })

    // const imageRef = ref(storage, `Post-Ad/${docRef?.id}/image`)
    // Images[imageTarget]?.map(Img =>
    //   uploadBytes(imageRef, Img, 'data_url').then(async () => {
    //     const downloadURL = await getDownloadURL(imageRef)
    //     await updateDoc(doc(db, 'posts', docRef.id), {
    //       image: downloadURL
    //     })
    //   })
    // )

    const imageRef = ref(storage, `proyects/${docRef.id}/image`)

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'proyects', docRef.id), {
          image: downloadURL
        })
      })
    }

    setTitle('')
    setDescription('')
    setStack('')
    setUrlDeploy('')
    setUrlRepo('')
    setSelectedFile(null)
    onClose()
    router.reload()
  }

  const addFile = e => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = readerEvent => {
      setSelectedFile(readerEvent.target.result)
    }
  }

  return (
    <>
      <Box align="center" mb={4}>
        <Button
          boxShadow="lg"
          p="2"
          rightIcon={<AddIcon ml={4} />}
          colorScheme="teal"
          justifyContent="space-between"
          onClick={onOpen}
        >
          Cargar nuevo proyecto
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalHeader>Cargar nuevo proyecto</ModalHeader>
            <ModalCloseButton colorScheme="red" />
            <ModalBody>
              <VStack spacing={4} w={{ base: 'auto', md: 'sm' }}>
                <FormControl>
                  <FormLabel htmlFor="title">Título del proyecto</FormLabel>
                  <Input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <Button onClick={() => fileRef.current.click()}>
                    <Input
                      type="file"
                      hidden
                      required
                      accept=".png, .jpeg, .webp, .jpg"
                      ref={fileRef}
                      onChange={addFile}
                    />
                    Cargar imagen
                  </Button>
                  {selectedFile && (
                    <Container>
                      <Grid>
                        <GridItem>
                          <Box mt={2} onClick={() => setSelectedFile(null)}>
                            <Button variant="ghost" colorScheme="red">
                              Borrar
                            </Button>
                          </Box>
                        </GridItem>
                        <GridItem>
                          <Image
                            src={selectedFile}
                            alt=""
                            objectFit="cover"
                            boxSize="100px"
                          />
                        </GridItem>
                      </Grid>
                    </Container>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="description">
                    Descripción del proyecto
                  </FormLabel>
                  <Input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="stack">Stack</FormLabel>
                  <Input
                    value={stack}
                    type="stack"
                    onChange={e => setStack(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="urlDeploy">URL Deploy</FormLabel>
                  <Input
                    value={urlDeploy}
                    type="urlDeploy"
                    onChange={e => setUrlDeploy(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="urlRepo">URL del Repositorio</FormLabel>
                  <Input
                    value={urlRepo}
                    type="urlRepo"
                    onChange={e => setUrlRepo(e.target.value)}
                  />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                leftIcon={<AtSignIcon />}
                colorScheme="teal"
                disabled={!title.trim() || !description.trim() || !stack.trim()}
                onClick={addProyect}
              >
                Agregar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}
