import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/ee94bbc9-6b20-4784-90cd-08e3ecd07a16.webp"
const Navbar = () => {
  return (
    <HStack>
    <Image src={logo} boxSize="60px" borderRadius="5px"/>
    <Text>Navbar</Text>
    </HStack>
  )
}

export default Navbar