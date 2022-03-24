import { Box, Badge } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <Badge>Hecho con ♥ con Next.js | Chakra.ui</Badge>
      &copy; {new Date().getFullYear()} Pinea Rodrigo. All Rights Reserved.
    </Box>
  )
}

export default Footer
