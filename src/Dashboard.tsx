import React, { useState, useRef, useEffect } from 'react';
import './Dashboard.css';
import { useAuthenticator } from '@aws-amplify/ui-react';
import logo from './assets/Logo.png';

type Tab = 'Dashboard' | 'UserManagement' | 'ContentManager' | 'SystemLogs' | 'Analytics' | 'Profile' | 'Settings' | 'UserLogs';

const Dashboard: React.FC = () => {
  const { signOut } = useAuthenticator();
  const [activeTab, setActiveTab] = useState<Tab>('Dashboard');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (tab: Tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <section className="content-area">
            <h1>Dashboard Overview</h1>
            <div className="content-placeholder">
              <p>Welcome to your admin dashboard summary.</p>
            </div>
          </section>
        );
      case 'UserManagement':
        return (
          <section className="content-area">
            <h1>User Management</h1>
            <div className="content-placeholder">
              <p>Control user roles and permissions.</p>
            </div>
          </section>
        );
      case 'ContentManager':
        return (
          <section className="content-area">
            <h1>Content Manager</h1>
            <div className="content-placeholder">
              <p>Manage your posts, images, and other media here.</p>
            </div>
          </section>
        );
      case 'SystemLogs':
        return (
          <section className="content-area">
            <h1>System Logs</h1>
            <div className="content-placeholder">
              <p>View system activity and audit logs.</p>
            </div>
          </section>
        );
      case 'Analytics':
        return (
          <section className="content-area">
            <h1>Analytics</h1>
            <div className="content-placeholder">
              <p>View your traffic and user engagement metrics.</p>
            </div>
          </section>
        );
      case 'Profile':
        return (
          <section className="content-area">
            <h1>Profile</h1>
            <div className="content-placeholder">
              <p>Manage your personal information.</p>
            </div>
          </section>
        );
      case 'Settings':
        return (
          <section className="content-area">
            <h1>Settings</h1>
            <div className="content-placeholder">
              <p>Configure system preferences and account settings.</p>
            </div>
          </section>
        );
      case 'UserLogs':
        return (
          <section className="content-area">
            <h1>User Logs</h1>
            <div className="content-placeholder">
              <p>View user activity logs.</p>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="logo-box" onClick={() => setActiveTab('Dashboard')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="MWJ Logo" className="sidebar-logo" />
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li
              className={activeTab === 'Dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('Dashboard')}
            >
              Dashboard
            </li>
            <li
              className={activeTab === 'UserManagement' ? 'active' : ''}
              onClick={() => setActiveTab('UserManagement')}
            >
              User Management
            </li>
            <li
              className={activeTab === 'ContentManager' ? 'active' : ''}
              onClick={() => setActiveTab('ContentManager')}
            >
              Content Manager
            </li>
            <li
              className={activeTab === 'SystemLogs' ? 'active' : ''}
              onClick={() => setActiveTab('SystemLogs')}
            >
              System Logs
            </li>
            <li
              className={activeTab === 'Analytics' ? 'active' : ''}
              onClick={() => setActiveTab('Analytics')}
            >
              Analytics
            </li>
          </ul>
        </nav>

        <div className="sidebar-bottom">
          <button className="sign-out-btn" onClick={signOut}>
            <span className="icon">↪</span> Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
          <div className="hamburger-wrapper" ref={menuRef}>
            <button className="hamburger-btn" onClick={() => setMenuOpen(prev => !prev)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            {menuOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => handleNavClick('Profile')}>Profile</button>
                <button className="dropdown-item" onClick={() => handleNavClick('Settings')}>Settings</button>
                <button className="dropdown-item" onClick={() => handleNavClick('UserLogs')}>User Logs</button>
                <hr className="dropdown-divider" />
                <button className="dropdown-item dropdown-logout" onClick={signOut}>Logout</button>
              </div>
            )}
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
