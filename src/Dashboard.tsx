import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import './Dashboard.css';

const Dashboard = () => {
  const { signOut } = useAuthenticator();

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div>
          <div className="logo-container">Logo</div>

          <div className="menu-label">Main</div>
          <ul style={{ padding: 0, margin: 0 }}>
            <li className="menu-item">Dashboard</li>
            <li className="menu-item">Content</li>
            <li className="menu-item">Analytics</li>
            <li className="menu-item">User</li>
          </ul>

          <div className="menu-label">System</div>
          <ul style={{ padding: 0, margin: 0 }}>
            <li className="menu-item">Settings</li>
          </ul>
        </div>

        <button onClick={signOut} className="sign-out-button">
           Sign out
        </button>
      </div>

      {/* Main Content Area */}
      <div className="main-area">
        {/* Top Navigation Bar */}
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search bar"
            className="search-bar"
          />
          <div className="notification-bell">
            Bell
          </div>
        </div>

        {/* Dynamic Content Page */}
        <div className="content-section">
          <h1 className="content-title">Content Management</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
