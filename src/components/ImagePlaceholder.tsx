import React from 'react';

const ImagePlaceholder: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
      <div className="flex gap-1.5">
        <div 
          className="h-2 w-2 animate-bounce rounded-full bg-primary" 
          style={{ animationDelay: '0ms' }} 
        />
        <div 
          className="h-2 w-2 animate-bounce rounded-full bg-primary" 
          style={{ animationDelay: '150ms' }} 
        />
        <div 
          className="h-2 w-2 animate-bounce rounded-full bg-primary" 
          style={{ animationDelay: '300ms' }} 
        />
      </div>
    </div>
  );
};

export default ImagePlaceholder;
