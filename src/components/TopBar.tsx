import React, { useState, useRef, useEffect } from 'react';
import './TopBar.css';
import DropdownMenu from './DropdownMenu';
import { Tab } from '../types';

interface TopBarProps {
  onNavClick: (tab: Tab) => void;
  onSignOut: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onNavClick, onSignOut }) => {
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
    onNavClick(tab);
    setMenuOpen(false);
  };

  return (
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
        {menuOpen && <DropdownMenu onNavClick={handleNavClick} onSignOut={onSignOut} />}
      </div>
    </header>
  );
};

export default TopBar;
