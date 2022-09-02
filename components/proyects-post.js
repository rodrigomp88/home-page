import { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Container,
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
  Image,
  Button,
  Tooltip
} from '@chakra-ui/react'
import { IoClipboardOutline, IoCreate, IoTrashOutline } from 'react-icons/io5'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase'
import { FormAddProyect } from './'

const dbInstance = collection(db, 'proyects')

export const ProyectsPost = () => {
  const [proyectsArray, setProyectsArray] = useState([])

  useEffect(() => {
    getProyects()
  }, [])

  const getProyects = () => {
    getDocs(dbInstance).then(data => {
      setProyectsArray(
        data.docs.map(item => {
          return { ...item.data(), id: item.id }
        })
      )
    })
  }

  return (
    <Container>
      <FormAddProyect />

      {proyectsArray.length > 0 ? (
        <>
          <TableContainer boxShadow="lg" p="1" rounded="md">
            <Table variant="striped" colorScheme="teal">
              <TableCaption>{`Proyectos subidos: "${proyectsArray.length}"`}</TableCaption>
              <Thead>
                <Tr>
                  <Th>Titulo</Th>
                  <Th display={{ base: 'none', md: 'flex' }}>Portada</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {proyectsArray.map(proyect => (
                  <Tr key={proyect.id}>
                    <Td>{proyect.title.slice(0, 13)}</Td>
                    <Td display={{ base: 'none', md: 'flex' }}>
                      <Image
                        src={proyect.image}
                        alt=""
                        boxSize="70px"
                        rounded="md"
                      />
                    </Td>
                    <Td>
                      <Tooltip label="Editar" placement="top">
                        <Button colorScheme="yellow">
                          <IoCreate />
                        </Button>
                      </Tooltip>
                      <Tooltip label="Eliminar" placement="top">
                        <Button ml={5} colorScheme="red">
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
