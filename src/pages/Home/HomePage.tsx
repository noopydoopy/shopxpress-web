import { Button, Card, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../context/AuthContext';
import Promotion1 from '../../assets/images/promotion-1.png';
import Promotion2 from '../../assets/images/promotion-2.webp';
import Promotion3 from '../../assets/images/promotion-3.png';
import emptyImage from '../../assets/images/emptyImage.png'


const HomePage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <h1>
        Welcome to home page{' '}
        {isAuthenticated ? 'You are authenticated' : 'You are not authenticated'}
      </h1>
      <div id='promotion'>
        <Carousel
          indicators={false}
          nextIcon={<FontAwesomeIcon icon={faAngleRight} size='2x' color='grey' />}
          prevIcon={<FontAwesomeIcon icon={faAngleLeft} size='2x' color='grey' />}>
          <Carousel.Item interval={1000}>
            <img src={Promotion1} className='d-block w-100 carousel-image' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src={Promotion2} className='d-block w-100 carousel-image' />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={Promotion3} className='d-block w-100 carousel-image' />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div id='topSellProducts' className='mt-3'>
        <div className='border-bottom w-100 d-flex align-items-center'>
          <span>Top Seller</span>
          <Link to='/products?category=top-sell' className='btn btn-outline-link ms-auto'>View all</Link>
        </div>
        <div className='p-3 d-flex gap-4 flex-wrap'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((id, i) =>
              <Card style={{ width: '18rem' }} className='bg-white'>
                <Card.Img variant="top" className='object-fit-contain' as={Image} height={150} rounded
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818"
                  alt='Image 01'
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = emptyImage;
                  }} />
                <Card.Body>
                  <Card.Title>Product {i}</Card.Title>
                  <Card.Text>
                    Excellent Product {i}
                  </Card.Text>
                </Card.Body>
                <Card.Body className='text-end'>
                  <Link className='btn btn-outline-primary' to={`/products/${id}`}>View</Link>
                </Card.Body>
              </Card>)
          }
        </div>
      </div>
      <div id='mostRecent' className='mt-3'>
        <div className='border-bottom w-100 d-flex align-items-center'>
          <span>Most Recent</span>
          <Link to='/products?category=most-recent' className='btn btn-outline-link ms-auto'>View all</Link>
        </div>
        <div className='p-3 d-flex gap-4 flex-wrap'>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((id, i) =>
              <Card style={{ width: '18rem' }} className='bg-white'>
                <Card.Img variant="top" className='object-fit-contain' as={Image}
                  height={150} rounded
                  src=""
                  alt='Image 01'
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = emptyImage;
                  }} />
                <Card.Body>
                  <Card.Title>Product {i}</Card.Title>
                  <Card.Text>
                    Excellent Product {i}
                  </Card.Text>

                </Card.Body>
                <Card.Body className='text-end'>
                <Link className='btn btn-outline-primary' to={`/products/${id}`}>View</Link>
                </Card.Body>
              </Card>)
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
