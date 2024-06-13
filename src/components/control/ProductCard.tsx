import { FC } from "react";
import { Card, Image } from "react-bootstrap";

import emptyImage from '../../assets/images/emptyImage.png';
import { Link } from "react-router-dom";

interface IProductCardProps {
    productName : string
    description : string
    productId : number
    imageUrl : string
}

const ProductCard: FC<IProductCardProps> = ({productId, productName, description, imageUrl}) => {

    return (
        <Card style={{ width: '18rem' }} className='bg-white'>
            <Card.Img variant="top" className='object-fit-contain' as={Image} height={150} rounded
                src={imageUrl ?? ''}
                alt={productName}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = emptyImage;
                }} />
            <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Body className='d-flex justify-content-end align-items-end'>
                <Link className='btn btn-outline-primary' to={`/products/${productId}`}>View</Link>
            </Card.Body>
        </Card>
    )
}
export default ProductCard;