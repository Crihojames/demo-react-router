import ProductPrevieuw from "../Components/ProductPrevieuw";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Single Product {id}</h1>
            <ProductPrevieuw />
        </div>
    );
};

export default SingleProduct;