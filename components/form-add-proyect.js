import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack
} from '@chakra-ui/react'
import { AtSignIcon } from '@chakra-ui/icons'
import { AuthContext } from '../context'

export const FormAddProyect = () => {
  const router = useRouter()
  const { login } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    try {
      await login(data.email, data.password)
      router.push('/admin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} w={{ base: 'auto', md: 'sm' }}>
          <FormControl>
            <FormLabel htmlFor="name">Nombre del proyecto</FormLabel>
            <Input
              id="name"
              type="name"
              name="name"
              {...register('name', {
                required: 'El proyecto es requerido'
              })}
            />
            {errors.name && (
              <Alert status="warning" top={-1}>
                <AlertIcon />
                {errors.name.message}
              </Alert>
            )}
          </FormControl>
          <Button type="submit" leftIcon={<AtSignIcon />} colorScheme="teal">
            Ingresar
          </Button>
        </VStack>
      </form>
    </>
  )
}
