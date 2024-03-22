import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fakeApiCall } from "../utils/fakeApiCall";

const ItemListContainer = () => {
    const { id } = useParams();
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fakeApiCall().then(res => { 
            setResponse(res); 
            setLoading(false); 
        }).catch(err => {
            setError(err);
            setLoading(false);
        });
    }, []);

    if (loading) return <h1>Cargando...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    const getProductosByCategory = (catId) => {
        if (response && response.productos && catId) {
            return response.productos.filter((product) => product.categoria === parseInt(catId));
        }
        return [];
    }

    const productsPorCategoria = getProductosByCategory(id);

    return (
        <>
            <div>
                <h1>Categorias</h1>
                <div>
                    {response.categorias.map((cat) => (
                        <Link key={cat.id} to={`/category/${cat.id}`}>
                            <h2>{cat.nombre}</h2>
                        </Link>
                    ))}
                </div>
            </div>
            {productsPorCategoria && productsPorCategoria.map((producto) => (
                <Link key={producto.id} to={`/item/${producto.id}`}>
                    <h2>{producto.nombre}</h2>
                </Link>
            ))}
        </>
    );
}

export default ItemListContainer;