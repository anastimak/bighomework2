import styles from './header.module.css'
import { Search } from '../../components/Search'
import { TOKEN } from '../../utils/constants'
<link href="css/bootstrap.min.css" rel="stylesheet"></link>

export const Header = () => {
    return (
        <header>
          <div className={styles.logo}><h1>DogFood</h1></div>
          <Search />
    
          <nav>
            <button class="btn btn-warning">Корзина</button>
            <button class="btn btn-warning">Избранное</button>
            <button class="btn btn-warning">Личный кабинет</button>
          </nav>
    
        </header>
      )
}