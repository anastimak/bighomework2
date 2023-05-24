import styles from './header.module.css'
import { Search } from '../../components/Search'
import { AUTH_DOG_TOKEN, TOKEN } from '../../utils/constants'
import { NavLink, useNavigate } from 'react-router-dom'

export const Header = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem(AUTH_DOG_TOKEN)

  const handleExit = () => {
    localStorage.removeItem(AUTH_DOG_TOKEN)
    return navigate('signin')
  }

    return (
        <header>
          <div className={styles.logo}><h1>DogFood</h1></div>
          <Search />
    
          <nav>
            <NavLink to={"/products"}>
              Каталог
            </NavLink>
            <NavLink to={"/cart"}>
              Корзина
            </NavLink>
            <NavLink to={"/user/me"}>
              User
            </NavLink>
            <NavLink to={"/favorites"}>
              Избранное
            </NavLink>
            
            {token && <button onClick={() => handleExit()}>Выход</button>}
          </nav>
    
        </header>
      )
}