import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import NavigationBreadcrumb, { PageLink } from "../../../components/control/NavigationBreadcrumb";

const ProductList = () => {
    const [param, _] = useSearchParams();
    const category = param.get('category');
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
            <h1>Product List with {category}</h1>
        </>
    )
}

export default ProductList;