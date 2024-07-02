"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Mustang from "../../public/images/car1.webp";
import BelAir from "../../public/images/car3.webp";

export default function Cars() {
  const cars = [
    { image: Mustang, description: 'Ford Mustang', backgroundColor: '#7B170F' },
    { image: BelAir, description: 'Chevrolet Bel Air', backgroundColor: '#046076' }
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % cars.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [index, cars.length]);

  return (
    cars.length > 0 && (
      <div
      key={index}
      className= "animate-fade-left animate-ease-in-out w-[20rem] h-[10rem] m-auto flex items-center justify-center relative lg:m-0 lg:w-[30rem] lg:h-[15rem] lg:mt-56"
      style={{ backgroundColor: cars[index].backgroundColor }}
      >
        <Image
          key={index}
          src={cars[index].image}
          alt={cars[index].description}
          className="w-[17rem] lg:w-[27rem] mb-[4rem] lg:mb-[6rem] shadow-[0px_5px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
    )
  );
}
