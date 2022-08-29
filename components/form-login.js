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

export const FormLogin = () => {
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
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="email">Correo</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              {...register('email', {
                required: 'El correo es requerido'
              })}
            />
            {errors.email && (
              <Alert status="warning" top={-1}>
                <AlertIcon />
                {errors.email.message}
              </Alert>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
              id="password"
              type="password"
              name="password"
              {...register('password', {
                required: 'La contraseña es requerida'
              })}
            />
            {errors.email && (
              <Alert status="warning" top={-1}>
                <AlertIcon />
                {errors.password.message}
              </Alert>
            )}
          </FormControl>
          <Button
            type="submit"
            leftIcon={<AtSignIcon />}
            colorScheme="teal"
            isFullWidth
          >
            Ingresar
          </Button>
        </VStack>
      </form>
    </>
  )
}
