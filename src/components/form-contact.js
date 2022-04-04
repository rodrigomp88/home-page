import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export const FormContact = () => {
  const toast = useToast()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm()

  function onSubmit(data) {
    return new Promise(resolve => {
      resolve()
      toast({
        title: 'Su mensaje fue enviado correctamente!',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      setData(data)
    })
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="contact"
        action="../success"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              variant="filled"
              {...register('name', {
                required: 'El nombre es requerido',
                minLength: {
                  value: 4,
                  message: 'El nombre debe contener al menos 4 letras'
                }
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Correo</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              {...register('email', {
                required: 'El email es requerido',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Ingrese un email valido'
                }
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.message}>
            <FormLabel htmlFor="message">Mensaje</FormLabel>
            <Textarea
              id="message"
              name="message"
              type="text"
              variant="filled"
              {...register('message', {
                required: 'El mensaje es requerido',
                minLength: {
                  value: 10,
                  message: 'El mensaje debe contener al menos 10 letras'
                }
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            isLoading={isSubmitting}
            colorScheme="teal"
            isFullWidth
          >
            Enviar
          </Button>
        </VStack>
      </form>
    </>
  )
}
