import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Card from './components/Card';
import SidebarContent from './components/SidebarContent';
import ActivityChart from './components/ActivityChart';
import SidebarContent1 from './components/SidebarContent1';
import MainContent from './components/MainContent';
import Feedback from './components/Feedback';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content-container">
        <Topbar />
        <div className="row row1">
          <div className="column main-column">
            <div className="content1">
              <Card
                iconType="orders"
                title="Total Orders"
                value="75"
                percentage="3%"
                isUpward={true}
              />
              <Card
                iconType="delivery"
                title="Total Delivered"
                value="70"
                percentage="-3%"
                isUpward={false}
              />
              <Card
                iconType="cancelled"
                title="Total Cancelled"
                value="5"
                percentage="1%"
                isUpward={true}
              />
              <Card
                iconType="revenue"
                title="Total Revenue"
                value="$12k"
                percentage="5%"
                isUpward={false}
              />
            </div>
          </div>
          <div className="column side-column">
            <SidebarContent />
          </div>
        </div>
        <div className="row row2">
          <div className="column main-column">
            <div className="content2">
              <ActivityChart/>
            </div>
          </div>
          <div className="column side-column">
            <div className="sidebar-content">
              <SidebarContent1/>
            </div>
          </div>
        </div>
        <div className="row row3">
          <div className="column main-column">
            <div className="content">
              <MainContent/>
            </div>
          </div>
          <div className="column side-column">
            <div className="sidebar-content">
              <Feedback/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
