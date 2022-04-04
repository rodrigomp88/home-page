import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React from 'react'

export const FormLogin = () => {
  return (
    <>
      <form>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="name">Email</FormLabel>
            <Input name="name" type="text" required variant="filled" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input name="password" type="password" required variant="filled" />
          </FormControl>
          <Button type="submit" colorScheme="teal" isFullWidth>
            Ingresar
          </Button>
        </VStack>
      </form>
    </>
  )
}
