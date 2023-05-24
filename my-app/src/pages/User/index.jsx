import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_DOG_TOKEN } from "../../utils/constants"

export const User = () => {
 
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem(AUTH_DOG_TOKEN)
    
        if (token) return navigate('/products')
      }, [navigate])

    return(
        <>
        <h1>User Me</h1>
        </>
    )
}