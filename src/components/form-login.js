import React from 'react'
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

export const FormLogin = () => {
  const methods = useForm()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = methods
  const router = useRouter()
  const { logIn } = useAuth()

  const onSubmit = async data => {
    try {
      await logIn(data.email, data.password)
      router.push('/admin')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="">Email</FormLabel>
              <Input
                type="email"
                {...register('email', { required: 'Email es requerido' })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                {...register('password', { required: 'Password es requerido' })}
              />
              {errors.email && <p>{errors.password.message}</p>}
            </FormControl>
            <Button type="submit" colorScheme="teal" isFullWidth>
              Ingresar
            </Button>
          </VStack>
        </form>
      </FormProvider>
    </>
  )
}
