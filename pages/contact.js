// import { useFormik } from 'formik'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack
} from '@chakra-ui/react'

export default function contact() {
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     name: '',
  //     rememberMe: false
  //   },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2))
  //   }
  // })
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box p={6} rounded="md">
        <form
          // onSubmit={formik.handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                // onChange={formik.handleChange}
                // value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="name">name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                variant="filled"
                // onChange={formik.handleChange}
                // value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">message</FormLabel>
              <Textarea
                id="message"
                name="message"
                type="text"
                variant="filled"
                // onChange={formik.handleChange}
                // value={formik.values.name}
              />
            </FormControl>
            <Button type="submit" colorScheme="purple" isFullWidth>
              Enviar
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  )
}
