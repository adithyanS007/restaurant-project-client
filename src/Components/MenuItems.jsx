import React, { useState, useEffect } from "react";

const MenuItems = () => {
    const [selectedCategory, setSelectedCategory] = useState(null); // Track the selected category
    const [items, setItems] = useState([]); // Store the fetched items
    const [error, setError] = useState(null); // Error handling

    // Fetch items data from the backend based on the selected category
    useEffect(() => {
        if (selectedCategory) {
            fetch(`https://restaurant-project-server-eight.vercel.app/api/${selectedCategory.toLowerCase()}`)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setItems(data);
                    } else {
                        setError(`Expected array, received ${typeof data}`);
                        setItems([]);
                    }
                })
                .catch(error => {
                    console.error(`Error fetching ${selectedCategory} data:`, error);
                    setError(error.message);
                    setItems([]);
                });
        }
    }, [selectedCategory]);

    return (
        <div 
            className="relative" 
            style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "60vh"
            }}
        >
            {/* Menu buttons */}
            <div className="top-0 bg-opacity-100 flex justify-center items-center">
                <div className="text-white space-x-5 border">
                    <button
                        onClick={() => setSelectedCategory('foods')}
                        className={`px-6 py-3 ${selectedCategory === 'foods' ? 'bg-blue-500' : 'bg-black'} text-white hover:bg-gray-500 transition duration-300`}
                    >
                        FOOD
                    </button>
                    <button
                        onClick={() => setSelectedCategory('drinks')}
                        className={`px-6 py-3 ${selectedCategory === 'drinks' ? 'bg-blue-500' : 'bg-black'} text-white hover:bg-gray-500 transition duration-300`}
                    >
                        DRINKS
                    </button>
                    <button
                        onClick={() => setSelectedCategory('brunches')}
                        className={`px-6 py-3 ${selectedCategory === 'brunches' ? 'bg-blue-500' : 'bg-black'} text-white hover:bg-gray-500 transition duration-300`}
                    >
                        BRUNCH
                    </button>
                </div>
            </div>

            {/* Display selected category items */}
            {selectedCategory && (
                <div className="mt-10 px-20 pb-5">
                    <h2 className="text-2xl text-center mt-10 text-white">{selectedCategory.toUpperCase()} Menu</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="text-gray-700">${item.price}</p>
                                    <p className="text-gray-500">{item.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No items available in this category.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuItems;
