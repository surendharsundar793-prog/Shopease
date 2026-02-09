import React, { createContext, useState, useEffect } from 'react';

export const RealTimeContext = createContext();

export const RealTimeProvider = ({ children }) => {
    const [activeViewers, setActiveViewers] = useState({});
    const [stockUpdates, setStockUpdates] = useState({});
    const [notifications, setNotifications] = useState([]);

    // Simulate active viewers changing randomly
    useEffect(() => {
        const interval = setInterval(() => {
            // Pick a random product ID (simulated 1-20)
            const productId = Math.floor(Math.random() * 20) + 1;
            const viewers = Math.floor(Math.random() * 50) + 5; // 5 to 55 viewers

            setActiveViewers(prev => ({
                ...prev,
                [productId]: viewers
            }));
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, []);

    // Simulate recent purchases (Toast notifications)
    useEffect(() => {
        const locations = ["New York", "London", "Tokyo", "Paris", "Berlin", "Sydney","Chennai","Mumbai","Delhi","Bangalore"];
        const products = ["Stylish Jacket", "Leather Bag", "Smart Watch", "Running Shoes", "Sunglasses"];

        const interval = setInterval(() => {
            if (Math.random() > 0.7) { // 30% chance to trigger
                const location = locations[Math.floor(Math.random() * locations.length)];
                const product = products[Math.floor(Math.random() * products.length)];

                const newNotification = {
                    id: Date.now(),
                    message: `Someone in ${location} just bought ${product}!`
                };

                setNotifications(prev => [newNotification, ...prev].slice(0, 3)); // Keep last 3

                // Auto remove after 5 seconds
                setTimeout(() => {
                    setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
                }, 5000);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <RealTimeContext.Provider value={{ activeViewers, stockUpdates, notifications }}>
            {children}
        </RealTimeContext.Provider>
    );
};
