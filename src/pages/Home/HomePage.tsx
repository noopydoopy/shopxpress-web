import { Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <h1>
        Welcome to home page{' '}
        {isAuthenticated ? 'You are authenticated' : 'You are not authenticated'}
      </h1>
      <div>
        <Button variant='outline-primary'>Primary Button</Button>
        <Button variant='outline-secondary'>Secondary Button</Button>
        <Button variant='outline-success'>Success Button</Button>
        <Button variant='outline-info'>Info Button</Button>
        <Button variant='outline-warning'>Warning Button</Button>
        <Button variant='outline-danger'>Danger Button</Button>
        <Button variant='outline-light'>Light Button</Button>
        <Button variant='outline-dark'>Dark Button</Button>
      </div>
      <div>
        <Button variant='primary'>Primary Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='success'>Success Button</Button>
        <Button variant='info'>Info Button</Button>
        <Button variant='warning'>Warning Button</Button>
        <Button variant='danger'>Danger Button</Button>
        <Button variant='light'>Light Button</Button>
        <Button variant='dark'>Dark Button</Button>
      </div>
    </div>
  );
};

export default HomePage;
