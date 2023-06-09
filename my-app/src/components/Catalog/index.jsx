import { useEffect, useState } from "react";
import { TOKEN } from "../../utils/constants";
import { ProductCard } from "../ProductCard";

export const Catalog = () => {
    const [data, setData] = useState({total: 0, products: []})

// сначала нужно получить данные
useEffect(() => {
    const fetchData = async() => {
    
    const response = await fetch('https://api.react-learning.ru/products', {   method: 'GET',
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
    const res = await response.json()
    
    return setData(res)
    }
    fetchData();
 }, []);
  
// затем преобразовать (точнее: замапить, с помощью data.map()) эти данные в много карточек товаров)
return (
    <main>
        <h1>Каталог</h1>
        <div className="products_wrapper">
            {data.products.map(product  => {
                return <ProductCard key={product._id} product={product}/>
            })}
        </div>
    </main>
)
}