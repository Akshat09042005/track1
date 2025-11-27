import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { StatCard } from './components/StatCard/StatCard';
import { Chart } from './components/Chart/Chart';
import { ActivityFeed } from './components/ActivityFeed/ActivityFeed';
import mockData from './data/mockData.json';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <Header
        user={mockData.user}
        onThemeToggle={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <main className="main-content">
        <div className="container">
          <section className="welcome-section">
            <h2 className="welcome-title">
              Welcome back, <span className="gradient-text">{mockData.user.name.split(' ')[0]}</span>! 👋
            </h2>
            <p className="welcome-subtitle">
              Here's what's happening with your projects today.
            </p>
          </section>

          <section className="stats-grid grid grid-cols-4">
            <StatCard
              title="Total Revenue"
              value={`$${mockData.stats.totalRevenue.toLocaleString()}`}
              change={23.5}
              icon="💰"
            />
            <StatCard
              title="Total Users"
              value={mockData.stats.totalUsers.toLocaleString()}
              change={18.2}
              icon="👥"
            />
            <StatCard
              title="Active Projects"
              value={mockData.stats.activeProjects}
              change={-5.3}
              icon="📊"
            />
            <StatCard
              title="Completion Rate"
              value={`${mockData.stats.completionRate}%`}
              change={12.7}
              icon="✓"
            />
          </section>

          <section className="charts-grid grid grid-cols-2">
            <Chart
              title="Revenue Overview"
              data={mockData.revenueData}
              xKey="month"
              yKeys={['revenue', 'expenses', 'profit']}
              colors={[
                'hsl(250, 84%, 54%)',
                'hsl(340, 82%, 52%)',
                'hsl(142, 71%, 45%)'
              ]}
            />
            <Chart
              title="User Growth"
              data={mockData.userGrowth}
              xKey="month"
              yKeys={['users']}
              colors={['hsl(180, 77%, 47%)']}
            />
          </section>

          <section className="bottom-grid grid grid-cols-2">
            <ActivityFeed activities={mockData.recentActivities} />

            <div className="products-section">
              <div className="card">
                <h3 className="section-title">Top Products</h3>
                <div className="products-list">
                  {mockData.topProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="product-item"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="product-rank">#{index + 1}</div>
                      <div className="product-info">
                        <div className="product-name">{product.name}</div>
                        <div className="product-category">{product.category}</div>
                      </div>
                      <div className="product-stats">
                        <div className="product-revenue">
                          ${product.revenue.toLocaleString()}
                        </div>
                        <div className={`product-growth ${product.growth > 0 ? 'positive' : 'negative'}`}>
                          {product.growth > 0 ? '↑' : '↓'} {Math.abs(product.growth)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
