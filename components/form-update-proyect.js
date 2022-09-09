import { useCallback, useState } from 'react'
import {
  Button,
  FormControl,
  // Container,
  Input,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Tooltip
  // Image,
  // Grid,
  // GridItem
} from '@chakra-ui/react'
import { AtSignIcon, AddIcon } from '@chakra-ui/icons'
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useDropzone } from 'react-dropzone'
import { db, storage } from '../config/firebase'

export const FormUpdateProyect = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [stack, setStack] = useState('')
  const [urlDeploy, setUrlDeploy] = useState('')
  const [urlRepo, setUrlRepo] = useState('')
  const [selectedFiles, setSelectedFiles] = useState([])

  const addProyect = async () => {
    const docRef = await addDoc(collection(db, 'proyects'), {
      title,
      description,
      stack,
      urlDeploy,
      urlRepo
    })
    await Promise.all(
      selectedFiles.map(image => {
        const imageRef = ref(storage, `proyects/${docRef.id}/${image.path}`)
        uploadBytes(imageRef, image, 'data_url').then(async () => {
          const downloadURL = await getDownloadURL(imageRef)
          await updateDoc(doc(db, 'proyects', docRef.id), {
            images: arrayUnion(downloadURL)
          })
        })
      })
    )

    setTitle('')
    setDescription('')
    setStack('')
    setUrlDeploy('')
    setUrlRepo('')
    setSelectedFiles([])
    onClose()
  }

  const onDrop = useCallback(acceptedFiles => {
    setSelectedFiles(
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    )
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const removeFile = file => () => {
    const newFiles = [...selectedFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setSelectedFiles(newFiles)
  }

  const selected_images = selectedFiles?.map(file => (
    <div key={file.path} className="flex-auto">
      <img src={file.preview} alt="" style={{ height: '100px' }} />
      <button onClick={removeFile(file)}>borrar</button>
    </div>
  ))

  // const addFile = e => {
  //   const reader = new FileReader()
  //   if (e.target.files[0]) {
  //     reader.readAsDataURL(e.target.files[0])
  //   }

  //   reader.onload = readerEvent => {
  //     setSelectedFile(readerEvent.target.result)
  //   }
  // }

  return (
    <>
      <Tooltip label="Editar" placement="top">
        <Button ml={5} colorScheme="yellow" onClick={onOpen}>
          <AddIcon />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form>
            <ModalHeader>Actualizar proyecto</ModalHeader>
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
                  <div className="mt-10">
                    <div
                      {...getRootProps()}
                      className="p-3 my-3 border-dashed border-2 border-slate-500 cursor-pointer rounded-md"
                    >
                      <input {...getInputProps()} className="w-52" />
                      {isDragActive ? (
                        <p>Suelte los archivos dentro de esta area.</p>
                      ) : (
                        <p>Arrastra o selecciona varios archivos.</p>
                      )}
                    </div>
                    <div className="grid">{selected_images}</div>
                  </div>
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
