import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH_DOG_TOKEN } from "../../utils/constants";
import { ProductCard } from "../ProductCard";

export const Catalog = () => {
  const [data, setData] = useState({ total: 0, products: [] });

  const navigate = useNavigate()
  const token = localStorage.getItem(AUTH_DOG_TOKEN)
    useEffect(() => {
        if (token) return navigate('/signin')
      }, [navigate, token])

  // сначала нужно получить данные
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.react-learning.ru/products", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await response.json();

      setData(res);
    };
    fetchData();
  }, [token]);

  // затем преобразовать (точнее: замапить, с помощью data.map()) эти данные в много карточек товаров)
  return (
    <main>
      <h1>Каталог</h1>
      <div className="products_wrapper">
        {data?.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};