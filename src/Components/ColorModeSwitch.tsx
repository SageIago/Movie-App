import { Switch, Text, useColorMode } from "@chakra-ui/react"
import React from "react"

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()
  return (
    <React.Fragment>
        <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </React.Fragment>
  )
}

export default ColorModeSwitch