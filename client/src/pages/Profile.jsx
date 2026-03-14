import React from 'react';
import { User, CalendarCheck, Heart, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 animate-fade-in">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                <p className="text-gray-500 mt-1">Manage your details, bookings, and saved salons.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Left Sidebar Navigation */}
                <div className="w-full md:w-1/4">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* User Summary */}
                        <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex items-center space-x-4">
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-2xl uppercase">
                                {user ? user.name.charAt(0) : 'G'}
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{user?.name || 'Guest User'}</h2>
                                <p className="text-sm text-gray-500">{user?.email || 'Not logged in'}</p>
                            </div>
                        </div>

                        {/* Nav Links */}
                        <nav className="p-4 space-y-1">
                            <button className="w-full flex items-center justify-between p-3 rounded-xl bg-primary/5 text-primary font-medium transition-colors">
                                <span className="flex items-center space-x-3"><User className="w-5 h-5" /> <span>Account Details</span></span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                                <span className="flex items-center space-x-3"><CalendarCheck className="w-5 h-5 text-gray-400" /> <span>My Bookings</span></span>
                                <ChevronRight className="w-4 h-4 text-gray-300" />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                                <span className="flex items-center space-x-3"><Heart className="w-5 h-5 text-gray-400" /> <span>Saved Salons</span></span>
                                <ChevronRight className="w-4 h-4 text-gray-300" />
                            </button>
                            <button className="w-full flex items-center justify-between p-3 rounded-xl text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                                <span className="flex items-center space-x-3"><Settings className="w-5 h-5 text-gray-400" /> <span>Settings</span></span>
                                <ChevronRight className="w-4 h-4 text-gray-300" />
                            </button>
                        </nav>
                        
                        <div className="p-4 border-t border-gray-100">
                            <button 
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center space-x-2 p-3 rounded-xl text-red-500 hover:bg-red-50 font-medium transition-colors"
                            >
                                <LogOut className="w-5 h-5" /> <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Content Area (Account Details View) */}
                <div className="w-full md:w-3/4">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Details</h2>

                        <form className="space-y-6 max-w-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" defaultValue={user ? user.name.split(' ')[0] : 'Guest'} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" defaultValue={user && user.name.split(' ').length > 1 ? user.name.split(' ')[1] : 'User'} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" defaultValue={user?.email || 'guest@example.com'} disabled className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
                                <input type="tel" defaultValue={user?.phone || ''} placeholder="+91 9876543210" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button type="button" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold shadow-md transition-all">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
