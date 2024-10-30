import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom if you haven't already

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h3>Sidebar</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;