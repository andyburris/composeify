import {
  Button,
  Columns,
  Container,
  render,
  Tabs,
  Text,
  TextboxNumeric,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { CloseHandler, CreateRectanglesHandler } from './types'
import { Home } from './ui/home'

function Plugin() {
  return Home()
}

export default render(Plugin)

function Default() {
  const [count, setCount] = useState<number | null>(5)
  const [countString, setCountString] = useState('5')
  const handleCreateRectanglesButtonClick = useCallback(
    function () {
      if (count !== null) {
        emit<CreateRectanglesHandler>('CREATE_RECTANGLES', count)
      }
    },
    [count]
  )
  const handleCloseButtonClick = useCallback(function () {
    emit<CloseHandler>('CLOSE')
  }, [])
  return (
    <Container>
      
      <VerticalSpace space="large" />
      <Text muted>Count</Text>
      <VerticalSpace space="small" />
      <TextboxNumeric
        onNumericValueInput={setCount}
        onValueInput={setCountString}
        value={countString}
      />
      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateRectanglesButtonClick}>
          Create
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space="small" />
    </Container>
  )
}