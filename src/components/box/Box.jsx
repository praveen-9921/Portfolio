import React from 'react';
import './Box.css';

const Box = ({ children, className = '', ...props }) => {
  return (
    <div className={`glass-box ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Box;