import { useEffect, useState } from "react";
import ProductContract from "../../../contracts/ProductContract";
import { toast } from "react-toastify";
import productService from "../../../services/product.service";

const useProductList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductContract[]>([]);

    useEffect(() => {
        try {
            const fetchProduct = async () => {
                const { data: products } = await productService.getProducts();
                setProducts(products);
            }
            fetchProduct();

        } catch (error: any) {
            toast.error(error?.message);
        } finally {
            setLoading(false);
        }
    }, [setLoading, setProducts, toast])

    return {
        loading,
        products
    }
}

export default useProductList;