import { useEffect } from "react"
import { AUTH_DOG_TOKEN } from "../../utils/constants"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem(AUTH_DOG_TOKEN)
    
        if (token) return navigate('/products')
      }, [navigate])
    

    return(
        <>
        <h1>Регистрация</h1>
        
        </>
    )
}