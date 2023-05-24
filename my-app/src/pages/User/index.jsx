import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchInfoAboutMe } from "../../api/user"
import { AUTH_DOG_TOKEN } from "../../utils/constants"

export const User = () => {
 
    const [user, setUser] = useState()
    const token = localStorage.getItem(AUTH_DOG_TOKEN)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) return navigate('/signin')
      }, [navigate])

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetchInfoAboutMe(token)
          const response = await res.json()
    
          console.log(response);

          return setUser(response)
        }
        fetchData()
    }, [token])

    return(
        <>
        <h1>User Me</h1>
        {user && <div>
            <p>Имя: {user.name}</p>
            <p>Описание: {user.about}</p>
            <p>Группа: {user.group}</p>
        </div>}
        </>
    )
}