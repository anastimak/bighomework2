export const ProductCard = ({ product }) => {

return (
    <div> 
        <img src="" />
        <span>Цена: {product.price}</span>
        <span>Название {product.name}</span>
        <span>Количество {product.stock}</span> 
        <button type="button">B корзину</button>
    </div>
)
}