
import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Grid templateAreas= {{
      base: `"nav" "main"`, // On Mobile Devices
      lg: `"nav nav" "aside main"` // On Large Devices
    }}>
      <GridItem area="nav">Nav</GridItem>
      <Show above="lg">
      <GridItem area="nav">Aside</GridItem>
      </Show>
      <GridItem area="nav">Main</GridItem>
    </Grid>
  )
}

export default App
