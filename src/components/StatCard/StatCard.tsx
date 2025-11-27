import './StatCard.css';
import { Card } from '../Card/Card';

interface StatCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon?: string;
    variant?: 'default' | 'gradient';
}

export const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    change,
    icon,
    variant = 'default'
}) => {
    const isPositive = change && change > 0;
    const isNegative = change && change < 0;

    return (
        <Card variant={variant} className="stat-card">
            <div className="stat-card-header">
                <div className="stat-card-title">{title}</div>
                {icon && <div className="stat-card-icon">{icon}</div>}
            </div>
            <div className="stat-card-value">{value}</div>
            {change !== undefined && (
                <div className={`stat-card-change ${isPositive ? 'positive' : isNegative ? 'negative' : ''}`}>
                    <span className="change-indicator">
                        {isPositive ? '↑' : isNegative ? '↓' : '→'}
                    </span>
                    <span>{Math.abs(change)}%</span>
                    <span className="change-label">vs last month</span>
                </div>
            )}
        </Card>
    );
};
