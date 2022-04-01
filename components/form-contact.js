import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack
} from '@chakra-ui/react'
import React from 'react'

export const FormContact = () => {
  return (
    <>
      <form
        name="contact"
        action="../success"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              required
              variant="filled"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Correo</FormLabel>
            <Input name="email" type="email" required variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message">Mensaje</FormLabel>
            <Textarea name="message" type="text" required variant="filled" />
          </FormControl>
          <Button type="submit" colorScheme="teal" isFullWidth>
            Enviar
          </Button>
        </VStack>
      </form>
    </>
  )
}
