import React from 'react'
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import Paragraph from './paragraph'
import { useRouter } from 'next/router'
import { useAuth } from '../context/Authontext'

export const FormLogin = () => {
  const router = useRouter()
  const { login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    console.log({ data })
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
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              name="email"
              {...register('email', {
                required: 'El correo es requerido'
              })}
            />
            {errors.email && <Paragraph>{errors.email.message}</Paragraph>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              name="password"
              {...register('password', {
                required: 'El password es requerido'
              })}
            />
            {errors.email && <Paragraph>{errors.password.message}</Paragraph>}
          </FormControl>

          <Button type="submit" colorScheme="teal" isFullWidth>
            Ingresar
          </Button>
        </VStack>
      </form>
    </>
  )
}
