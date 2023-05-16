import styles from './header.module.css'

export const Header = () => {
    return (
        <header>
          <div className={styles.logo}>DogFood</div>
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