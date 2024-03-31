import React, { useState, useEffect } from 'react';


function Visitors() {
    const [userCount, setUserCount] = useState(0);
    const [salesCount, setSalesCount] = useState(0);
    const [liveRating, setLiveRating] = useState(4.5); // Initial live rating

    // Function to update the counters and live rating with random increment
    const updateData = () => {
        // Incrementing the counters with a random number between 1 and 10
        const userIncrement = Math.floor(Math.random() * 100) + 1;
        const salesIncrement = Math.floor(Math.random() * 100) + 1;

        setUserCount(prevCount => prevCount + userIncrement);
        setSalesCount(prevCount => prevCount + salesIncrement);

        // Update live rating with a random change between -0.5 and 0.5
        setLiveRating(prevRating => {
            const change = Math.random() - 0.5;
            return Math.max(0, Math.min(5, prevRating + change));
        });
    };

    // Update data every 3 seconds (for demonstration)
    useEffect(() => {
        const interval = setInterval(updateData, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="counter">{userCount}</div>
                <div className="label font-aleg italic text-2xl">Users Visiting Today</div>
            </div>
            <div className="card">
                <div className="counter">{salesCount}</div>
                <div className="label font-aleg italic text-2xl">Product Sales Today</div>
            </div>
            <div className="card bg-[#84019F]">
                <div className="counter text-white font-roboto font-extrabold">{liveRating.toFixed(1)}</div>
                <div className='label text-white font-roboto'>Live Rating</div>
            </div>
        </div>
    );
}

export default Visitors;
