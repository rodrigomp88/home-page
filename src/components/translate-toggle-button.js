import { Select, Tooltip } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const TranslateToggleButton = () => {
  const { i18n } = useTranslation()

  const handleSelect = e => {
    if (e.target.value === 'es') {
      i18n.changeLanguage('es')
    } else {
      i18n.changeLanguage('en')
    }
  }

  return (
    <Tooltip label="Language" placement="bottom">
      <Select onChange={handleSelect} bg="teal" width={75} height={10}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </Select>
    </Tooltip>
  )
}

export default TranslateToggleButton
