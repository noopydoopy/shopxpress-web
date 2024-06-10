import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './scss/main.scss';
import AdminRoute from './routers/AdminRoute';
import UserRoute from './routers/UserRoute';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/admin/*' element={<AdminRoute />} />
          <Route path='/error/404' element={<>Not found.</>} />
          <Route path='/*' element={<UserRoute />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
