import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SalonDetails from './pages/SalonDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { LocationProvider } from './context/LocationContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <LocationProvider>
        <Router>
          <div className="min-h-screen bg-base pb-20 md:pb-0 font-sans text-gray-800">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/salon/:id" element={<SalonDetails />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LocationProvider>
  </AuthProvider>
  );
}

export default App;
