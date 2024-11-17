import data from "../data";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import "./Products.css";

const Products = () => {
  const products = data;

  return (
    <div
      id="products-page"
      className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 "
    >
      {products.map((prod) => {
        return (
          <Link to={`/product/${prod.id}`}>
            <SingleProduct product={prod}></SingleProduct>
          </Link>
        );
      })}
      <Link to="/home"></Link>
    </div>
  );
};

export default Products;
