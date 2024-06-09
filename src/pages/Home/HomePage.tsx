import { Button } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";

const HomePage = () => {


    return (
        <div>
            <MainLayout>
                <h1>Welcome to home page</h1>
                <div>
                    <Button variant="outline-primary">Primary Button</Button>
                    <Button variant="outline-secondary">Secondary Button</Button>
                    <Button variant="outline-success">Success Button</Button>
                    <Button variant="outline-info">Info Button</Button>
                    <Button variant="outline-warning">Warning Button</Button>
                    <Button variant="outline-danger">Danger Button</Button>
                    <Button variant="outline-light">Light Button</Button>
                    <Button variant="outline-dark">Dark Button</Button>
                </div>
                <div>
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="success">Success Button</Button>
                    <Button variant="info">Info Button</Button>
                    <Button variant="warning">Warning Button</Button>
                    <Button variant="danger">Danger Button</Button>
                    <Button variant="light">Light Button</Button>
                    <Button variant="dark">Dark Button</Button>
                </div>
            </MainLayout>
        </div>
    );
}

export default HomePage;