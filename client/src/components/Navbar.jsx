import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Menu, User } from 'lucide-react';
import ProfileSidebar from './ProfileSidebar';
import LocationModal from './LocationModal';
import LoginModal from './LoginModal';
import { useLocation } from '../context/LocationContext';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { selectedCity, setSelectedCity } = useLocation();
    const { user } = useAuth();

    return (
        <header className="bg-white w-full border-b border-gray-200 sticky top-0 z-40">
            {/* Top Bar: Logo, Search, Location, Profile */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Left: Logo + Search */}
                    <div className="flex items-center flex-1 space-x-6">
                        {/* Logo */}
                        <Link to="/" className="flex items-center shrink-0">
                            <img src={logo} alt="BookMySalon" className="h-10 w-auto object-contain mix-blend-multiply" />
                        </Link>

                        {/* Search Bar */}
                        <div className="hidden md:flex relative flex-1 max-w-2xl">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-500" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-colors text-ellipsis"
                                placeholder="Search for Salons, Services, Appointments"
                            />
                        </div>
                    </div>

                    {/* Right: Location + Auth/Profile */}
                    <div className="flex items-center space-x-6 shrink-0 ml-6">
                        
                        {/* Location Selector */}
                        <div 
                            onClick={() => setIsLocationModalOpen(true)}
                            className="hidden md:flex items-center space-x-2 cursor-pointer group hover:bg-gray-50 px-3 py-2 rounded-md transition-colors border border-transparent hover:border-gray-200"
                        >
                            <span className="text-[15px] font-medium text-gray-700 group-hover:text-gray-900">{selectedCity}</span>
                            <ChevronDown className="h-4 w-4 text-gray-500" />
                        </div>

                        {/* Sign In Button / Profile Row */}
                        <div className="flex items-center space-x-4">
                            {!user ? (
                                <button 
                                    onClick={() => setIsLoginModalOpen(true)}
                                    className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded font-medium text-[14px] transition-colors shadow-sm"
                                >
                                    Sign in / Sign up
                                </button>
                            ) : (
                                <div className="flex items-center space-x-3 group">
                                    <span className="hidden sm:block text-[15px] font-medium text-gray-700 group-hover:text-primary transition-colors cursor-default">
                                        Hi, {user.name.split(' ')[0]}
                                    </span>
                                    {/* Profile Icon Button */}
                                    <button 
                                        onClick={() => setIsProfileOpen(true)}
                                        className="w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex justify-center items-center overflow-hidden transition-colors border border-gray-200 shadow-sm"
                                        aria-label="Open Profile Menu"
                                    >
                                        <User className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Icon */}
                        <button className="md:hidden text-gray-700">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Categories & Quick Links */}
            <div className="hidden md:block bg-gray-50 border-t border-gray-100">
                <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between h-10">
                    
                    {/* Main Categories (Left) */}
                    <div className="flex items-center space-x-6 text-[14px]">
                        <Link to="/category/hair" className="text-gray-600 hover:text-primary transition-colors">Hair</Link>
                        <Link to="/category/spa" className="text-gray-600 hover:text-primary transition-colors">Spa</Link>
                        <Link to="/category/nails" className="text-gray-600 hover:text-primary transition-colors">Nails</Link>
                        <Link to="/category/massage" className="text-gray-600 hover:text-primary transition-colors">Massage</Link>
                        <Link to="/packages" className="text-gray-600 hover:text-primary transition-colors">Packages</Link>
                        <Link to="/offers" className="text-gray-600 hover:text-primary transition-colors font-medium">Offers</Link>
                    </div>

                    {/* Quick Links (Right) */}
                    <div className="flex items-center space-x-6 text-[12px] text-gray-500">
                        <Link to="/corporate" className="hover:text-gray-800 transition-colors">Corporate Bookings</Link>
                        <Link to="/giftcards" className="hover:text-gray-800 transition-colors">Gift Cards</Link>
                        <Link to="/special" className="hover:text-gray-800 transition-colors">Special Offers</Link>
                    </div>

                </div>
            </div>

            <ProfileSidebar isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
            <LocationModal 
                isOpen={isLocationModalOpen} 
                onClose={() => setIsLocationModalOpen(false)} 
                selectedCity={selectedCity}
                onSelectCity={setSelectedCity}
            />
            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)} 
            />
        </header>
    );
};

// Simple User Icon component for the avatar placeholder to avoid importing User from lucide-react if not needed globally
const UserIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default Navbar;
