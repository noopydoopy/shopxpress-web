import { FC, useCallback, useMemo, useState } from "react";
import { Badge, Card, ListGroup, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import emptyImage from '../../assets/images/emptyImage.png';
import ConfirmDialog from "../../components/dialog/ConfirmDialog";
import { toast } from "react-toastify";
import NavigationBreadcrumb, { PageLink } from "../../components/control/NavigationBreadcrumb";

const CartPage: FC = () => {
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const pageLinks = useMemo((): Array<PageLink> => {
        return [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Cart',
                to: '',
                active: true
            }
        ];
    }, [])

    const checkOutCart = useCallback(() => {
        setShowConfirm(true);
        console.log('Call checkOutCart')
    }, [setShowConfirm])

    const removeProduct = useCallback((id: number) => {
        setShowConfirm(true);
        console.log('Remove product')
    }, [setShowConfirm])

    const handleOnHide = useCallback((type: 'delete' | 'checkout') => {
        setShowConfirm(false);
    }, [setShowConfirm])

    const handleConfirm = useCallback((type: 'delete' | 'checkout') => {
        // TODO : Call checkout api.
        setShowConfirm(false);
        toast.success('Checkout completed.')
    }, [setShowConfirm, toast])

    return (
        <>
            <NavigationBreadcrumb pageLinks={pageLinks} />
            <h1>
                Cart Detail
            </h1>
            <div>
                <Card bg="white">
                    <Card.Body>
                        <ListGroup variant="flush" color="white" className="gap-2">
                            {
                                [1, 2, 3, 4, 5].map((p, i) =>
                                    <ListGroup.Item action className="d-flex flex-wrap justify-content-between align-items-center flex-column flex-md-row" key={i}>
                                        <div>
                                            <Image src="" className="object-fit-contain" style={{ height: '6em' }} onError={e => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = emptyImage;
                                            }} />

                                        </div>
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Product Name {p}</div>
                                            <div className="small">Description...</div>
                                            <div className="small">Price 18$</div>
                                        </div>
                                        <Badge bg="primary" pill>
                                            14
                                        </Badge>
                                        <Button variant="outline-link" onClick={() => removeProduct(p)} ><FontAwesomeIcon icon={faTrash} color='grey' /></Button>
                                    </ListGroup.Item>
                                )
                            }
                        </ListGroup>
                        <div className="pt-4 d-flex">
                            <span className="ms-auto">Total 0$</span>
                        </div>
                    </Card.Body>
                    <Card.Body className="d-flex justify-content-end">
                        <Button variant="primary" onClick={checkOutCart} >Checkout<FontAwesomeIcon icon={faCartShopping} className="ms-2" /></Button>
                    </Card.Body>
                </Card>
                <ConfirmDialog show={showConfirm} message="Are you sure to checkout products?" onHide={() => handleOnHide('checkout')} onConfirm={() => handleConfirm('checkout')} />
            </div>
        </>
    )
}

export default CartPage;