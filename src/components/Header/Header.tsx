import './Header.css';
import { useState } from 'react';

interface HeaderProps {
    user: {
        name: string;
        avatar: string;
        role: string;
    };
    onThemeToggle: () => void;
    isDarkMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ user, onThemeToggle, isDarkMode }) => {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <h1 className="header-logo">
                        <span className="gradient-text">Dashboard</span>
                    </h1>
                </div>

                <div className="header-right">
                    <button
                        className="icon-button"
                        onClick={onThemeToggle}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    <button
                        className="icon-button notification-button"
                        onClick={() => setShowNotifications(!showNotifications)}
                        aria-label="Notifications"
                    >
                        🔔
                        <span className="notification-badge">3</span>
                    </button>

                    <div className="user-menu">
                        <img src={user.avatar} alt={user.name} className="user-avatar" />
                        <div className="user-info">
                            <div className="user-name">{user.name}</div>
                            <div className="user-role">{user.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
