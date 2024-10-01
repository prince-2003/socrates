export default function Pricing() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-800">
        <h1 className="text-4xl font-bold text-white">Pricing</h1>
        <p className="text-white">Choose a plan that works for you</p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10 ">
            <div className="flex flex-col items-center justify-center p-5 rounded-lg shadow-lg m-5 fancyGlass">
            <h2 className="text-2xl font-bold text-gray-800">Basic</h2>
            <p className="text-gray-600">For beginners</p>
            <p className="text-gray-600">Free forever</p>
            <p className="text-gray-600">Access to all features</p>
            <button className="px-5 py-2 mt-5 bg-gray-800 text-white rounded-lg">Get Started</button>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-lg m-5">
            <h2 className="text-2xl font-bold text-gray-800">Pro</h2>
            <p className="text-gray-600">For professionals</p>
            <p className="text-gray-600">Free for 30 days</p>
            <p className="text-gray-600">Access to all features</p>
            <button className="px-5 py-2 mt-5 bg-gray-800 text-white rounded-lg">Get Started</button>
            </div>
            <div className="flex flex-col items-center justify-center p-5 bg-white rounded-lg shadow-lg m-5">
            <h2 className="text-2xl font-bold text-gray-800">Enterprise</h2>
            <p className="text-gray-600">For large teams</p>
            <p className="text-gray-600">Custom pricing</p>
            <p className="text-gray-600">Access to all features</p>
            <button className="px-5 py-2 mt-5 bg-gray-800 text-white rounded-lg">Contact Sales</button>
            </div>
        </div>
        </div>
    );
    }