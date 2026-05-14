import React, { useState } from 'react';
import './Dashboard.css';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Tab } from './types';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import ContentManagerPage from './pages/ContentManagerPage';
import SystemLogsPage from './pages/SystemLogsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import UserLogsPage from './pages/UserLogsPage';

const PAGE_MAP: Record<Tab, React.FC> = {
  Dashboard:      DashboardPage,
  UserManagement: UserManagementPage,
  ContentManager: ContentManagerPage,
  SystemLogs:     SystemLogsPage,
  Analytics:      AnalyticsPage,
  Profile:        ProfilePage,
  Settings:       SettingsPage,
  UserLogs:       UserLogsPage,
};

const Dashboard: React.FC = () => {
  const { signOut } = useAuthenticator();
  const [activeTab, setActiveTab] = useState<Tab>('Dashboard');

  const ActivePage = PAGE_MAP[activeTab];

  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} onSignOut={signOut} />
      <main className="main-content">
        <TopBar onNavClick={setActiveTab} onSignOut={signOut} />
        <ActivePage />
      </main>
    </div>
  );
};

export default Dashboard;
