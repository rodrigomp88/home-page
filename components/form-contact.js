// import { useRouter } from 'next/router'
import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export const FormContact = () => {
  // const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // const onSubmit = () => {
  //   router.push('/success')
  // }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit()}
    >
      <input type="hidden" name="form-name" value="contact" />
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            variant="filled"
            {...register('name', {
              required: 'El nombre es requerido'
            })}
          />
          {errors.name && (
            <Alert status="warning" top={-1}>
              <AlertIcon />
              {errors.name.message}
            </Alert>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Correo</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            variant="filled"
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
          <FormLabel htmlFor="message">Mensaje</FormLabel>
          <Textarea
            id="message"
            name="message"
            type="text"
            variant="filled"
            {...register('message', {
              required: 'El mensaje es requerido'
            })}
          />
          {errors.message && (
            <Alert status="warning" top={-1}>
              <AlertIcon />
              {errors.message.message}
            </Alert>
          )}
        </FormControl>
        <Button type="submit" colorScheme="teal" isFullWidth>
          Enviar
        </Button>
      </VStack>
    </form>
  )
}
