/*import { useEffect } from "react";
const ItemDetailContainer = () => {
    return();
}
export default ItemDetailContainer;*/
import { useEffect, useState } from "react";
import { mockProducts } from '../utils/MocksAsync';
import { ItemDetail } from "./ItemDetail";
import { fakeApiCall } from "../utils/fakeApiCall";

const ItemDetailContainer = () => {
  const [productsCharged, setProductsCharged] = useState({})
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)
    fakeApiCall(products).then(resp => { setProductsCharged(resp); setLoading(false) })


  }, [])

  if (loading) return <h1> Loading... </h1>


  return (<>
    <div>
      {
        productsCharged.productos.length > 0 && productsCharged.productos.map((item, index) => {
          return <ItemDetail item={item} />
        }

        )
      }
    </div>


  </>);
}

export default ItemDetailContainer;