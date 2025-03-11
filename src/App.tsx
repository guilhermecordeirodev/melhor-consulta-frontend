// src/App.tsx
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './shared/context/AuthContext';
import { OrderProvider } from './shared/context/OrderContext';

function App() {
  console.log("v1")
  return (
    <GoogleOAuthProvider clientId="698486776110-njalm788mhjms4nr2h7bucfsgrf5r65g">
       <AuthProvider>
        <OrderProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        </OrderProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;