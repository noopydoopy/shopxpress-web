import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import NavigationBreadcrumb, { PageLink } from "../../../components/control/NavigationBreadcrumb";
import useProductList from "../hooks/useProductList";
import ProductCardPlaceHolder from "../../../components/control/ProductCardPlaceHolder";
import ProductCard from "../../../components/control/ProductCard";

const ProductList = () => {
    const { products, loading } = useProductList();
    const pageLinks = useMemo((): Array<PageLink> => {
        return [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Products',
                to: '/products',
                active: true
            }
        ];
    }, [])

    return (
        <>
            <NavigationBreadcrumb pageLinks={pageLinks} />
            <h3>Product List</h3>
            <hr />
            <div className="d-flex gap-4">
                {
                    loading ? [1, 2, 3, 4].map((c, i) => <ProductCardPlaceHolder key={i} />)
                        : (
                            products.map((p, i) => <ProductCard key={i} productId={p.productId}
                                description={p.description}
                                productName={p.name}
                                imageUrl={p.imageUrl} />
                            )
                        )
                }
            </div>
        </>
    )
}

export default ProductList;