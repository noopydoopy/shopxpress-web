import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routers/PrivateRoute';
import './scss/main.scss';

import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import { ProtectedRoutes, PublicRoutes } from './constants/ApplicationRoutes';


const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
          <Route path={ProtectedRoutes.DASHBOARD} element={<PrivateRoute />}>
            <Route path='' element={<DashboardPage />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
