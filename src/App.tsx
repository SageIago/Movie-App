import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // On Mobile Devices
        lg: `"nav nav" "aside main"`, // On Large Devices
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
