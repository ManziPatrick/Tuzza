import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton">
      <div className="loading-skeleton-item" style={{ width: '100px', height: '20px' }}></div>
      <div className="loading-skeleton-item" style={{ width: '80px', height: '20px' }}></div>
      <div className="loading-skeleton-item" style={{ width: '120px', height: '20px' }}></div>
   
    </div>
  );
};

export default LoadingSkeleton;