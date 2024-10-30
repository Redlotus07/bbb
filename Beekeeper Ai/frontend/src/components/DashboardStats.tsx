import React, { useEffect, useState } from 'react';

// Sample data for demonstration; replace with real API data
const sampleStats = {
    activeHives: 10,
    honeyProduction: 150, // in liters
    beePopulation: 50000, // total bees
    activeBeekeepers: 5,
};

const DashboardStats = () => {
    // State for statistics
    const [stats, setStats] = useState(sampleStats); // Replace with real data fetching
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching
        const fetchStats = async () => {
            try {
                // Replace with your API call
                // const response = await fetch('/api/beekeeper-stats');
                // const data = await response.json();
                // setStats(data);
                setLoading(false); // Simulate loading complete
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <div>Loading statistics...</div>;
    if (error) return <div>Error fetching statistics: {error.message}</div>;

    return (
        <div className="dashboard-stats">
            <h3>Beekeeper Statistics</h3>
            <div className="stats-container">
                <div className="stat-item">
                    <h4>Active Hives</h4>
                    <p>{stats.activeHives}</p>
                </div>
                <div className="stat-item">
                    <h4>Honey Production</h4>
                    <p>{stats.honeyProduction} liters</p>
                </div>
                <div className="stat-item">
                    <h4>Total Bee Population</h4>
                    <p>{stats.beePopulation}</p>
                </div>
                <div className="stat-item">
                    <h4>Active Beekeepers</h4>
                    <p>{stats.activeBeekeepers}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;