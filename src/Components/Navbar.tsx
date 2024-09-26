import { Box, Container, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
   <Box mb={2} py={4}>
    <Container maxW="container.xl">
      <Flex justifyContent={"space-between"}>
        <Link to={"/"}>
          <Box fontFamily={"Inter, sans-serif"} fontSize={"2xl"} fontWeight={"bold"}>
            MOVIFY
          </Box>
        </Link>

        <Flex>
        <Link to={"/"}>Home</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/shows"}>TV Shows</Link>
        <Link to={"/search"}>Search</Link>
        <ColorModeSwitch />
        </Flex>
      </Flex>
    </Container>
   </Box>
  )
}

export default Navbar