import React from 'react';
import './DropdownMenu.css';
import { Tab } from '../types';

interface DropdownMenuProps {
  onNavClick: (tab: Tab) => void;
  onSignOut: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onNavClick, onSignOut }) => (
  <div className="dropdown-menu">
    <button className="dropdown-item" onClick={() => onNavClick('Profile')}>Profile</button>
    <button className="dropdown-item" onClick={() => onNavClick('Settings')}>Settings</button>
    <button className="dropdown-item" onClick={() => onNavClick('UserLogs')}>User Logs</button>
    <hr className="dropdown-divider" />
    <button className="dropdown-item" onClick={onSignOut}>Logout</button>
  </div>
);

export default DropdownMenu;
