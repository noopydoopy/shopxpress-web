import { Breadcrumb, Card, Col, Row, Image, Container, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import emptyImage from '../../../assets/images/emptyImage.png';
import LabelWithData from "../../../components/control/LabelWithData";
import { useCallback, useMemo, useState } from "react";
import NavigationBreadcrumb, { PageLink } from "../../../components/control/NavigationBreadcrumb";
import QuantityControl from "../../../components/control/QuantityControl";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

const ProductDetail = () => {
    const { id } = useParams();
    const { isAuthenticated } = useAuth();
    const [qty, setQty] = useState<number>(0);
    const pageLinks = useMemo((): Array<PageLink> => {
        return [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Products',
                to: '/products'
            },
            {
                title: id || '',
                to: '',
                active: true
            }
        ];
    }, [])

    const quantityChange = useCallback((qty: number) => {
        setQty(qty);
    }, [setQty])

    const addProductToCart = useCallback(() => {
        if(isAuthenticated) {
            toast.success(`Add Product ${qty} to card`, { closeOnClick: true })
        } else {
            toast.error("Please login before add product to cart.");
        }
    }, [qty, isAuthenticated, toast]);

    return (
        <>
            <NavigationBreadcrumb pageLinks={pageLinks} />
            <h1>

                Product Detail {id}
            </h1>
            <div>
                <Card bg="white">
                    <Card.Body>
                        <Container>
                            <Row className="mb-3">
                                <Col xs="12" className="d-flex justify-content-center">
                                    <Image src="" className="mx-auto" thumbnail onError={e => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = emptyImage;
                                    }} />

                                </Col>
                            </Row>
                            <LabelWithData label="Name" data={`Product ${id}`} />
                            <LabelWithData label="Description" data={`Description...`} />
                            <LabelWithData label="Category" data={`Category...`} />
                            <LabelWithData label="In Stock" data={`Stock...`} />
                            <LabelWithData label="Price" data={`0$`} />
                        </Container>

                    </Card.Body>
                    <Card.Body className="d-flex justify-content-end">
                        <QuantityControl min={0} max={10} onChange={quantityChange} />
                        <Button variant="outline-primary ms-2" disabled={qty < 1} onClick={addProductToCart}>Add To Card</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default ProductDetail;