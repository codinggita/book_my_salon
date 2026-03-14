const Login = () => {
    return (
        <div className="flex justify-center mt-12">
            <div className="bg-white p-8 rounded-3xl shadow-sm w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Login / Register</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary focus:border-none outline-none" placeholder="Enter email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary focus:border-none outline-none" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-full transition shadow-md">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
