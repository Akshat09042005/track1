import './Chart.css';
import { Card } from '../Card/Card';

interface DataPoint {
    [key: string]: string | number;
}

interface ChartProps {
    title: string;
    data: DataPoint[];
    xKey: string;
    yKeys: string[];
    type?: 'bar' | 'line';
    colors?: string[];
}

export const Chart: React.FC<ChartProps> = ({
    title,
    data,
    xKey,
    yKeys,
    type = 'bar',
    colors = ['var(--color-primary)', 'var(--color-secondary)', 'var(--color-accent)']
}) => {
    const maxValue = Math.max(
        ...data.flatMap(item => yKeys.map(key => Number(item[key]) || 0))
    );

    return (
        <Card className="chart-container">
            <h3 className="chart-title">{title}</h3>
            <div className="chart">
                <div className="chart-grid">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="grid-line" style={{ bottom: `${i * 25}%` }}>
                            <span className="grid-label">
                                {Math.round((maxValue / 4) * i).toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="chart-bars">
                    {data.map((item, index) => (
                        <div key={index} className="bar-group">
                            <div className="bars">
                                {yKeys.map((key, keyIndex) => {
                                    const value = Number(item[key]) || 0;
                                    const height = (value / maxValue) * 100;
                                    return (
                                        <div
                                            key={key}
                                            className={`bar ${type}`}
                                            style={{
                                                height: `${height}%`,
                                                backgroundColor: colors[keyIndex % colors.length],
                                                animationDelay: `${(index * yKeys.length + keyIndex) * 50}ms`
                                            }}
                                            title={`${key}: ${value.toLocaleString()}`}
                                        />
                                    );
                                })}
                            </div>
                            <div className="bar-label">{item[xKey]}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="chart-legend">
                {yKeys.map((key, index) => (
                    <div key={key} className="legend-item">
                        <div
                            className="legend-color"
                            style={{ backgroundColor: colors[index % colors.length] }}
                        />
                        <span className="legend-label">{key}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};
