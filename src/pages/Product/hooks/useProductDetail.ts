import { useEffect, useState } from "react";
import ProductContract from "../../../contracts/ProductContract";
import productService from "../../../services/product.service";
import { toast } from "react-toastify";

const useProductDetail = (productId: number) => {
    const [product, setProduct] = useState<ProductContract>();
    const [loading, setLoading] = useState<boolean>(false);


    if (!productId)
        throw Error('Product id is not valid.')

    useEffect(() => {
        setLoading(true);
        const fetchProduct = async () => {
            try {
                const { data: product } = await productService.getProductById(productId);
                setProduct(product);
            } catch (error: any) {
                toast.error(error?.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [toast, productId]);

    return {
        loading,
        product
    }

}

export default useProductDetail;