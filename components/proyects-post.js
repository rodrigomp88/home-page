import { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Container,
  Image,
  Text,
  Icon,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Tooltip
} from '@chakra-ui/react'
import { IoClipboardOutline, IoTrashOutline } from 'react-icons/io5'
import {
  collection,
  // deleteDoc,
  // doc,
  orderBy,
  onSnapshot,
  query,
  doc
  // updateDoc
} from 'firebase/firestore'
// import Image from 'next/image'
import { db } from '../config/firebase'
import { FormAddProyect } from './'
import { FormUpdateProyect } from './form-update-proyect'

export const ProyectsPost = () => {
  const [proyects, setProyects] = useState([])

  console.log(proyects.images?.map(f => ({ f })))

  useEffect(() => {
    getProyects()
  }, [])

  const getProyects = () => {
    const collectionRef = collection(db, 'proyects')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const unsubscribe = onSnapshot(q, querySnapshot => {
      setProyects(
        querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime()
        }))
      )
    })
    return unsubscribe
  }

  const deleteProyect = async id => {
    const proyectDoc = doc(collection(db, 'proyects'), id)
    await deleteDoc(proyectDoc)
  }

  return (
    <Container>
      <FormAddProyect />

      {proyects.length > 0 ? (
        <>
          <TableContainer boxShadow="lg" p="1" rounded="md">
            <Table variant="striped" colorScheme="teal">
              <TableCaption>{`Proyectos subidos: "${proyects.length}"`}</TableCaption>
              <Thead>
                <Tr>
                  <Th>Titulo</Th>
                  <Th display={{ base: 'none', md: 'flex' }}>Portada</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {proyects.map(proyect => (
                  <Tr key={proyect.id}>
                    <Td>{proyect.title.slice(0, 13)}</Td>
                    <Td display={{ base: 'none', md: 'flex' }}>
                      <Image
                        src={proyect.images}
                        alt=""
                        rounded="md"
                        height={50}
                        width={50}
                      />
                    </Td>
                    <Td>
                      <FormUpdateProyect />
                      <Tooltip label="Eliminar" placement="top">
                        <Button
                          ml={5}
                          colorScheme="red"
                          onClick={() => {
                            deleteProyect(proyect.id)
                          }}
                        >
                          <IoTrashOutline />
                        </Button>
                      </Tooltip>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              {/* <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot> */}
            </Table>
          </TableContainer>
        </>
      ) : (
        <Grid p={2} my={5} align="center" fontSize={24}>
          <Text>Agregue proyectos para comenzar</Text>
          <Box align="center" mt={5}>
            <Icon fontSize={34} as={IoClipboardOutline} />
          </Box>
        </Grid>
      )}
    </Container>
  )
}
