import React, { useEffect, useState } from 'react';

import './Greeting.scss'

const Greeting: React.FC = () => {
  const [message, setMessage] = useState('');

  // Определение времени на устройстве
  const getDeviceTime = (): string => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 6) {
      return 'Good Night';
    } else if (currentTime >= 6 && currentTime < 12) {
      return 'Good morning';
    } else if (currentTime >= 12 && currentTime < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  useEffect(() => {
    setMessage(getDeviceTime());
  }, []);

  return <p className='greeting-text'>{message + ', Maxim'}</p>;
};

export default Greeting;