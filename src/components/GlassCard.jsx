import React from 'react';

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <div className={`
      bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6
      ${hover ? 'hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20' : ''}
      transition-all duration-500 transform
      ${className}
    `}>
      {children}
    </div>
  );
};

export default GlassCard;