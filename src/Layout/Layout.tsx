import Navbar from "../Components/Navbar"

interface Props {
    children?: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
    <Navbar />
    <main>
    {children}
    </main>
    </>
  )
}

export default Layout