import { HStack, Image} from "@chakra-ui/react"
import logo from "../assets/ee94bbc9-6b20-4784-90cd-08e3ecd07a16.webp"
import ColorModeSwitch from "./ColorModeSwitch"
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
    <Image src={logo} boxSize="60px" borderRadius="5px"/>
    <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar