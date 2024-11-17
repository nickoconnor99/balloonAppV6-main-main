import SingleProduct from "./SingleProduct";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

const SingleProductPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    id && setProduct(data.find((prod) => prod.id == id))
  }, [id]) // runs whenever the id changed and updates the product

  return product ? <SingleProduct product={product} /> : null
}

export default SingleProductPage;