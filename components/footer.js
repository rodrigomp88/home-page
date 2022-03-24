import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
Hecho con ♥ con Next.js | Chakra.ui
      &copy; {new Date().getFullYear()} Pinea Rodrigo. All Rights Reserved.
    </Box>
  )
}

export default Footer
