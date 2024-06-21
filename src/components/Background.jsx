"use client";
import { useEffect, useState } from 'react';
import useWindowSize from '../hooks/windowSize';

const BackgroundComponent = ({ imagesDesktop, imagesMobile }) => {
  const [index, setIndex] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < imagesDesktop.length; i++) {
        setIndex(index + 1);
        if (index == imagesDesktop.length - 1) setIndex(0);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [index, imagesDesktop.length]);

  const backgroundImage = width >= 1024 ? imagesDesktop[index] : imagesMobile[index];

  return (
    <div
      className="w-screen h-screen bg-cover transition-[background] ease-linear duration-[800ms] animate-fade-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default BackgroundComponent;
