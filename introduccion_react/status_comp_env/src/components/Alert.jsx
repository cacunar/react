import React from 'react';

const Alert = ({ message, type }) => {
  if (message === undefined || type === undefined) {
    return null;
  }

  const alertClasses = `alert alert-${type} ${message ? 'alert-show' : ''}`;

  return (
    <div className={alertClasses}>
      {message}
    </div>
  );
};

export default Alert;