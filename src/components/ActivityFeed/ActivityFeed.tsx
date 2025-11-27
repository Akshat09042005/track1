import './ActivityFeed.css';
import { Card } from '../Card/Card';

interface Activity {
    id: number;
    user: string;
    action: string;
    target: string;
    timestamp: string;
    type: string;
}

interface ActivityFeedProps {
    activities: Activity[];
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
    const getActivityIcon = (type: string) => {
        switch (type) {
            case 'success': return '✓';
            case 'info': return 'ℹ';
            case 'comment': return '💬';
            case 'upload': return '📤';
            case 'review': return '👁';
            default: return '•';
        }
    };

    const getActivityColor = (type: string) => {
        switch (type) {
            case 'success': return 'var(--color-success)';
            case 'info': return 'var(--color-primary)';
            case 'comment': return 'var(--color-accent)';
            case 'upload': return 'var(--color-warning)';
            case 'review': return 'var(--color-secondary)';
            default: return 'var(--color-text-tertiary)';
        }
    };

    return (
        <Card className="activity-feed">
            <h3 className="activity-feed-title">Recent Activity</h3>
            <div className="activity-list">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className="activity-item"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        <div
                            className="activity-icon"
                            style={{ backgroundColor: getActivityColor(activity.type) }}
                        >
                            {getActivityIcon(activity.type)}
                        </div>
                        <div className="activity-content">
                            <div className="activity-text">
                                <span className="activity-user">{activity.user}</span>
                                <span className="activity-action">{activity.action}</span>
                                <span className="activity-target">{activity.target}</span>
                            </div>
                            <div className="activity-timestamp">{activity.timestamp}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};
