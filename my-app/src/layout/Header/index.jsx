import styles from './header.module.css'
import { Search } from '../../components/Search'
import { TOKEN } from '../../utils/constants'

export const Header = () => {
    return (
        <header>
          <div className={styles.logo}> DogFood </div>
          <Search />
    
          <nav>
            <button>Корзина</button>
            <button>Избранное</button>
            <button>Личный кабинет</button>
          </nav>
    
        </header>
      )
}