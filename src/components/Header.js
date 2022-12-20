import React, { useContext } from 'react'
import { Flex, Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router'
import { goToLoginPage} from "../routes/coordinator"
import { GlobalContext} from "../contexts/GlobalContext"

const Header = () => {

    const context = useContext(GlobalContext)
    const navigate = useNavigate()

    const logout = () =>{
        window.localStorage.removeItem("cookenu-token")
        context.setIsAuth(false)
        goToLoginPage(navigate)
    }

  return (
    <Flex h= "80px" alignItems={"center"} justifyContent={"end"}>
        <Button onClick={logout} colorScheme="red" >Deslogar</Button>
    </Flex>
  )
}

export default Header