import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';
import BASE_URL from '../BASE_URL';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path={`/${BASE_URL}`} element={<Home />} />
              <Route path={`/${BASE_URL}/login/*`} element={<Login />} />
              <Route
                path={`/${BASE_URL}/conta/*`}
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path={`/${BASE_URL}/foto/:id`} element={<Photo />} />
              <Route path={`/${BASE_URL}/perfil/:user`} element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
