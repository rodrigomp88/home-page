import NextLink from 'next/link'
import styled from '@emotion/styled'
import { Text, useColorModeValue, Link } from '@chakra-ui/react'
import { IoDesktopSharp } from 'react-icons/io5'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  gap: 2px;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: 400ms ease;
  }

  &:hover svg {
    transform: rotate(-90deg);
  }
`

export const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <LogoBox>
          <IoDesktopSharp />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            as="h1"
          >
            RP
          </Text>
        </LogoBox>
      </Link>
    </NextLink>
  )
}
