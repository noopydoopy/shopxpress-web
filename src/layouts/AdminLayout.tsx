
import TopNavBar from "../components/layout/TopNavBar";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <TopNavBar />
            <h1>Admin Layout</h1>
            <Container>
                <Outlet />
            </Container>
        </div>
    );
}

export default AdminLayout;