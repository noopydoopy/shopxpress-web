import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './scss/main.scss';
import HomePage from './pages/Home/HomePage';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/error/404' element={<>Not found.</>} />
          <Route path='/*' element={<HomePage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
