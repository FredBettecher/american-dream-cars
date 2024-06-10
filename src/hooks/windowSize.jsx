"use client";
import { useEffect, useState } from "react";

function windowSize() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  useEffect(() => {
    function handleSize() {
      setWindowSize({ width: window.innerWidth });
    }

    window.addEventListener('resize', handleSize);

    handleSize();

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
}

export default windowSize;