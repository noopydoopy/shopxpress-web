import { FC, ReactNode } from "react";
import TopNavBar from "../components/layout/TopNavBar";
import { Container } from "react-bootstrap";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <TopNavBar />
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default MainLayout;