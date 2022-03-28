import { Box, Text, Badge } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Badge mt={4}>Hecho con | Next.js | Chakra.ui</Badge>
      <Text mt={4}>
        &copy; {new Date().getFullYear()} Pinea Rodrigo. All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer
