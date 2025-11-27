import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false 
}) => {
  const variantClass = variant === 'glass' ? 'card-glass' : variant === 'gradient' ? 'card-gradient' : '';
  const hoverClass = hover ? 'card-hover' : '';
  
  return (
    <div className={`card ${variantClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
