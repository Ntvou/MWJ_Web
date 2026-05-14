import React from 'react';
import './Sidebar.css';
import logo from '../assets/Logo.png';
import { Tab } from '../types';

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  onSignOut: () => void;
}

const NAV_ITEMS: { tab: Tab; label: string }[] = [
  { tab: 'Dashboard',      label: 'Dashboard'       },
  { tab: 'UserManagement', label: 'User Management' },
  { tab: 'ContentManager', label: 'Content Manager' },
  { tab: 'SystemLogs',     label: 'System Logs'     },
  { tab: 'Analytics',      label: 'Analytics'       },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, onSignOut }) => (
  <aside className="sidebar">
    <div className="sidebar-top">
      <div className="logo-box" onClick={() => onTabChange('Dashboard')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="MWJ Logo" className="sidebar-logo" />
      </div>
    </div>

    <nav className="sidebar-nav">
      <ul>
        {NAV_ITEMS.map(({ tab, label }) => (
          <li
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => onTabChange(tab)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>

    <div className="sidebar-bottom">
      <button className="sign-out-btn" onClick={onSignOut}>
        <span className="icon">↪</span> Sign out
      </button>
    </div>
  </aside>
);

export default Sidebar;
