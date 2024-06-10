import { FC } from 'react';
import TopNavBar from '../components/layout/TopNavBar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <div>
      <TopNavBar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
