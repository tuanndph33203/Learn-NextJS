"use client";
import Image from "next/image";
import { Image1, Image2, Image3, Image4, Image5 } from "./assets";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [Image1, Image2, Image3, Image4, Image5];
  const [currentImage, setCurrentImage] = useState<number>(0);
  useEffect(() => {
    const slide = setInterval(() => {
      setCurrentImage((prev: number) =>
        prev < images.length - 1 ? prev + 1 : 0
      );
    }, 1000);
    return () => clearInterval(slide);
  }, []);
  return (
    <div className="text-white text-center">
      <div className="flex items-center justify-center gap-12">
        <Image
          className="w-72 aspect-square"
          src={images[currentImage]}
          alt="banner"
        />
        <h3 className="text-6xl   font-medium">
          One Share Passion :
          <span className="bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 inline-block text-transparent bg-clip-text">
            Food
          </span>
        </h3>
      </div>
      <div className="space-y-12 mt-5">
        <p>Join our community and share your favorite recipes !</p>
        <h3 className="text-3xl">Community Perks</h3>
        <h4 className="text-2xl">Share and discover recipes</h4>
        <Image className="w-40 mx-auto" src={Image4} alt="banner" />
      </div>
    </div>
  );
}
