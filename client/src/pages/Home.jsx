import { Star, Navigation, ThumbsUp, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from '../context/LocationContext';
import Carousel from '../components/Carousel';

const Home = () => {
    const { selectedCity, setSelectedCity } = useLocation();
    const scrollContainerRef = useRef(null);

    // Dummy data for recommended salons (10 items)
    const recommendedSalons = [
        { id: 1, name: 'Toni & Guy Hairdressing', city: 'Bandra, Mumbai', likes: '12.5k', rating: '4.9', image: 'https://www.playsalon.in/wp-content/uploads/2024/11/Play-Salon-at-Phoenix-Mall-of-Asia-5-1.jpg' },
        { id: 2, name: 'Lakme Salon Pro', city: 'Koramangala, Bengaluru', likes: '8.2k', rating: '4.7', image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 3, name: 'Envi Salon & Spa', city: 'Jubilee Hills, Hyderabad', likes: '15k', rating: '4.8', image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 4, name: 'Geetanjali Salon', city: 'Connaught Place, Delhi', likes: '5.4k', rating: '4.6', image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 5, name: 'BBlunt Preimum', city: 'Viman Nagar, Pune', likes: '9.1k', rating: '4.9', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 6, name: 'Jawed Habib Hair & Beauty', city: 'Salt Lake, Kolkata', likes: '11.2k', rating: '4.5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2RMg7PSLg71Q17QxV4c0n9IOnWaQmtK4vQ&s' },
        { id: 7, name: 'Looks Salon High End', city: 'Chandigarh Sector 17', likes: '7.8k', rating: '4.8', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 8, name: 'Naturals Lounge VIP', city: 'Anna Nagar, Chennai', likes: '14.1k', rating: '4.7', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 9, name: 'Green Trends Elite', city: 'Kakkanad, Kochi', likes: '4.5k', rating: '4.6', image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=400&h=600' },
        { id: 10, name: 'Truefitt & Hill', city: 'Colaba, Mumbai', likes: '22k', rating: '5.0', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400&h=600' },
    ];

    // Dummy data for home services
    const homeServices = [
        { id: 1, name: 'Hair Care', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=400&h=400' },
        { id: 2, name: 'Massage', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=400&h=400' },
        { id: 3, name: 'Facials', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400&h=400' },
        { id: 4, name: 'Nail Care', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDeDR9GCDrUQePOyWVPEPxpZKTHQqx2l1oKA&s' },
    ];

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -600, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 600, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-8 animate-fade-in pb-20">
            {/* Banner Carousel */}
            <div className="-mx-4 sm:-mx-6 lg:-mx-8 mt-[-1.5rem]">
                <Carousel />
            </div>

            {/* Recommended Salons Section */}
            <div className="pt-2 relative group/section">
                <div className="flex items-center justify-between mb-4 px-2">
                    <h2 className="text-2xl font-bold text-gray-800">Recommended Salons</h2>
                    <Link to="/salons" className="text-primary font-medium hover:underline flex items-center text-sm">
                        See All <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                {/* Left Scroll Button */}
                <button 
                    onClick={scrollLeft}
                    className="absolute left-0 top-[60%] -translate-y-1/2 -ml-4 w-12 h-12 bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-full hidden md:flex items-center justify-center text-gray-700 hover:text-primary transition-all opacity-0 group-hover/section:opacity-100 z-10"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6 mr-0.5" />
                </button>

                {/* Horizontal Scroll Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-2"
                >
                    {recommendedSalons.map((salon) => (
                        <Link 
                            key={salon.id} 
                            to={`/salon/${salon.id}`}
                            className="flex-none w-[160px] sm:w-[200px] md:w-[220px] group snap-start"
                        >
                            {/* Portrait Image Container */}
                            <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-gray-200 shadow-sm mb-3">
                                <img 
                                    src={salon.image} 
                                    alt={salon.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Bottom Gradient & Rating Strip (BookMyShow Style) */}
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between px-3 pb-2 pt-4">
                                    <div className="flex items-center text-white text-xs font-semibold">
                                        <Star className="w-3.5 h-3.5 text-red-500 fill-current mr-1" />
                                        <span>{salon.rating}/5</span>
                                    </div>
                                    <div className="flex items-center text-white text-xs font-medium">
                                        <span>{salon.likes}</span>
                                        <span className="text-gray-300 ml-1 text-[10px]">Votes</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Text Info */}
                            <h3 className="font-bold text-gray-900 leading-tight truncate px-1">
                                {salon.name}
                            </h3>
                            <p className="text-sm text-gray-500 truncate px-1 mt-0.5">
                                {salon.city}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <button 
                    onClick={scrollRight}
                    className="absolute right-0 top-[60%] -translate-y-1/2 -mr-4 w-12 h-12 bg-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-full hidden md:flex items-center justify-center text-gray-700 hover:text-primary transition-all opacity-0 group-hover/section:opacity-100 z-10"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6 ml-0.5" />
                </button>
            </div>

            {/* Home Services Section */}
            <div className="pt-8 relative group/services">
                <div className="flex items-center justify-between mb-6 px-2">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Home Services</h2>
                        <p className="text-sm text-gray-500 mt-1">Salon-like experience at your doorstep</p>
                    </div>
                    <Link to="/services" className="text-primary font-medium hover:underline flex items-center text-sm">
                        See All <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                    {homeServices.map((service) => (
                        <div key={service.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-md transition-all">
                                <img 
                                    src={service.image} 
                                    alt={service.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-3 left-4 text-white z-10">
                                    <h3 className="font-bold text-lg leading-tight tracking-wide">{service.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column (Salons & Horizontal Banner) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">Top Rated Salons</h2>
                        <Link to="/salons" className="text-primary font-semibold hover:underline">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Salon Card 1 */}
                        <div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition flex items-center space-x-4">
                            <div className="w-24 h-24 bg-gray-200 rounded-2xl flex-shrink-0 overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=200&h=200" alt="Salon" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <Link to="/salon/1" className="block hover:text-primary transition">
                                    <h3 className="text-lg font-bold text-gray-800">Stylo Unisex Salon</h3>
                                </Link>
                                <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                                    <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                                    <span className="font-semibold text-gray-700 mr-1">4.9</span>
                                    <span>(320 reviews)</span>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Navigation className="h-4 w-4 mr-1" /> 0.5 km away
                                    </div>
                                    <Link to="/booking/1" className="bg-primary hover:bg-primary-hover text-white px-4 py-1.5 rounded-full text-sm font-semibold transition inline-block">Book Now</Link>
                                </div>
                            </div>
                        </div>

                        {/* Salon Card 2 */}
                        <Link to="/salon/2" className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition flex flex-col justify-between">
                            <div className="flex items-start space-x-4">
                                <div className="w-20 h-20 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=200&h=200" alt="Salon" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Glamour Hair Studio</h3>
                                    <p className="text-xs text-gray-500 mt-1">Sat, 27 Apr: 12:30 PM</p>
                                    <div className="flex items-center text-xs text-gray-500 mt-1">
                                        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                                        <span className="font-semibold text-gray-700 mr-1">4.7</span>
                                        <span>(270 reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 flex space-x-1">
                                {/* Dummy badges */}
                                <span className="w-5 h-5 bg-green-100 rounded flex items-center justify-center text-[10px]">🌿</span>
                                <span className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center text-[10px]">V</span>
                                <span className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center text-[10px]">✨</span>
                            </div>
                        </Link>
                    </div>

                    {/* Horizontal Banner */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-6 relative overflow-hidden flex items-center shadow-sm">
                        <div className="z-10 relative max-w-sm">
                            <h3 className="text-xl font-medium text-gray-600">Weekend Offer</h3>
                            <div className="text-4xl font-extrabold text-gray-800 my-2">20% OFF <span className="text-xl font-semibold text-gray-600">On All Services</span></div>
                            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold mt-2 shadow-sm transition">Book Now</button>
                        </div>
                        {/* Background elements */}
                        <div className="absolute right-0 top-0 h-full w-1/2 opacity-90" style={{ backgroundImage: 'radial-gradient(circle at right, #fff5eb 0%, transparent 100%)' }}></div>
                    </div>
                </div>

                {/* Right Column (Vertical Banner) */}
                <div className="bg-gradient-to-b from-orange-50 to-white rounded-3xl p-8 relative overflow-hidden shadow-sm flex flex-col">
                    <h3 className="text-2xl font-medium text-gray-700">Weekend Offer</h3>
                    <div className="text-5xl font-extrabold text-gray-800 mt-2 mb-1">20% OFF</div>
                    <div className="text-lg font-medium text-gray-600 mb-auto">On All Services</div>

                    <div className="w-full aspect-square mt-8 rounded-2xl mb-8 relative border-4 border-white shadow-sm overflow-hidden bg-gray-100">
                        <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400&h=400" alt="Offer" className="w-full h-full object-cover" />
                    </div>

                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold w-full text-lg shadow-md transition">Book Now</button>
                </div>

            </div>

        </div>
    );
};

export default Home;
