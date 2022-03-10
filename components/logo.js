import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 400ms ease;
  }

  &:hover img {
    transform: rotate(-90deg);
  }
`

const Logo = () => {
  const laptopPrintImg = `/images/laptop${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={laptopPrintImg} width={25} height={20} m={5} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
          >
            Pinea Rodrigo
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
