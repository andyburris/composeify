import { Container, Stack, Tabs, TabsOption, Text, TextboxAutocomplete, TextboxAutocompleteOption, VerticalSpace } from "@create-figma-plugin/ui";
import { h, JSX } from 'preact'
import { useCallback, useState } from "preact/hooks";

export function Home() {
    const [value, setValue] = useState('Components')
    const options: Array<TabsOption> = [
        { children: Components(), value: 'Components' },
        { children: Theme(), value: 'Theme' }
      ]

    function handleTabChange(event: JSX.TargetedEvent<HTMLInputElement>) {
        console.log(`tab changed to ${event.currentTarget.value}`)
        setValue(event.currentTarget.value);
    }

    return <Stack>
        <Tabs onChange={handleTabChange} options={options} value={value}/>
    </Stack>
}

function Components() {
    return <Container space="medium">
            <VerticalSpace space="large"/>
            <Text bold>Parents</Text>
            <VerticalSpace space="small"/>
            {/* <FrameSelectTextbox/> */}
            <VerticalSpace space="large"/>
            <Text bold>Dependencies</Text>
        </Container>
}

function FrameSelectTextbox() {
    const [value, setValue] = useState('')
    
    function handleInput(event: JSX.TargetedEvent<HTMLInputElement>) {
      const newValue = event.currentTarget.value
      console.log(newValue)
      setValue(newValue)
    }
    return (
      <TextboxAutocomplete
        onInput={handleInput}
        options={options}
        value={value}
        placeholder="Add a frame..."
      />
    )
}

function Theme() {
    return <Container space="medium">
    <VerticalSpace space="large" />
    <Text bold>Typography</Text>
    </Container>
}