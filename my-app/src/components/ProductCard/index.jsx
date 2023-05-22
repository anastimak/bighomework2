export const ProductCard = ({ product }) => {

return (
    <div> 
        <ul class="thumbnails">
        <img src="" />
        <li>{product.name}</li>
        <li><b>Цена:</b> {product.price}</li>
        <li><b>В наличии:</b> {product.stock}</li> 
        <button type="button" class="btn btn-success">B корзину</button>
        </ul>
    </div>
)
}