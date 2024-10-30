import React, { useEffect, useState } from 'react';
import DashboardStats from './DashboardStats';
import ExpensesList from './ExpensesList';
import RevenueChart from './RevenueChart';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/dashboard-data'); // Replace with your API endpoint
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading dashboard...</div>;
    if (error) return <div>Error fetching dashboard data: {error.message}</div>;

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <DashboardStats stats={data.stats} />
            <div className="charts-and-lists">
                <RevenueChart revenueData={data.revenue} />
                <ExpensesList expenses={data.expenses} />
            </div>
        </div>
    );
};

export default Dashboard;