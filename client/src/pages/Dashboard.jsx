import React from 'react';
import { 
    MessageCircle, Bell, ShoppingBag, Youtube, 
    CreditCard, HelpCircle, Settings, Gift, 
    Share2, ChevronRight, User
} from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="max-w-xl mx-auto bg-white min-h-[calc(100vh-100px)] flex flex-col pt-4">
            
            {/* Header section */}
            <div className="flex items-center justify-between px-6 pb-6 border-b border-gray-100">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Hey!</h1>
                    <button className="text-gray-500 flex items-center mt-1 hover:text-primary transition-colors">
                        Edit Profile <ChevronRight className="w-4 h-4 ml-0.5" />
                    </button>
                </div>
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    <User className="w-8 h-8 text-white" />
                </div>
            </div>

            {/* Orange Highlighted Item */}
            <div className="bg-orange-50/70 border-b border-orange-100/50 cursor-pointer hover:bg-orange-100/50 transition-colors">
                <div className="flex items-start px-6 py-4">
                    <div className="w-6 flex justify-center mt-0.5">
                        <MessageCircle className="w-5 h-5 text-gray-500 stroke-[1.5]" />
                    </div>
                    <div className="ml-4 flex-1">
                        <div className="font-medium text-gray-800">Get updates on WhatsApp/SMS!</div>
                        <div className="text-sm text-gray-500 mt-0.5">Add your Mobile Number</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
            </div>

            {/* Menu List */}
            <div className="flex-1 flex flex-col">
                <MenuItem 
                    icon={<Bell className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Notifications" 
                />
                
                <MenuItem 
                    icon={<ShoppingBag className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Your Bookings" 
                    subtitle="View all your upcoming & past appointments" 
                />
                
                <MenuItem 
                    icon={<Youtube className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Saved Styles" 
                    subtitle="Haircuts & looks you've bookmarked" 
                />
                
                <MenuItem 
                    icon={<CreditCard className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Salon Wallet" 
                    subtitle="View your balance, cards and offers" 
                />
                
                <MenuItem 
                    icon={<HelpCircle className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Help & Support" 
                    subtitle="View commonly asked queries and Chat" 
                />
                
                <MenuItem 
                    icon={<Settings className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Accounts & Settings" 
                    subtitle="Location, Payments, Permissions & More" 
                />
                
                <MenuItem 
                    icon={<Gift className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Rewards" 
                    subtitle="View your rewards & unlock new ones"
                    badge="2 Unopened"
                />
                
                <MenuItem 
                    icon={<Share2 className="w-5 h-5 text-gray-600 stroke-[1.5]" />} 
                    title="Refer a Friend" 
                    hasBorder={false}
                />
            </div>

            {/* Logout Button */}
            <div className="p-6 mt-auto">
                <button className="w-full py-3.5 rounded-xl border border-red-200 text-red-500 font-medium bg-white hover:bg-red-50 transition-colors shadow-sm">
                    Sign out
                </button>
            </div>

        </div>
    );
};

// Reusable Menu Item Component
const MenuItem = ({ icon, title, subtitle, badge, hasBorder = true }) => (
    <div className={`flex items-center px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors ${hasBorder ? 'border-b border-gray-100' : ''}`}>
        <div className="w-6 flex justify-center">
            {icon}
        </div>
        <div className="ml-4 flex-1">
            <div className="flex items-center">
                <span className="font-medium text-gray-800">{title}</span>
                {badge && (
                    <span className="ml-3 text-[10px] font-bold bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded uppercase tracking-wider">
                        {badge}
                    </span>
                )}
            </div>
            {subtitle && <div className="text-sm text-gray-500 mt-0.5">{subtitle}</div>}
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
    </div>
);

export default Dashboard;
