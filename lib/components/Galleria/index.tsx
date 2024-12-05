import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../utils";

const getVisibleImagesCount = (containerWidth: number) => {
  const imageWidth = 88;
  return Math.floor(containerWidth / imageWidth);
};

interface Props {
  images: string[];
  animation?: boolean;
  className?: string;
}

const Galleria: React.FC<Props> = ({ images, animation = true, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef<number>(0);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState<number>(5);
  const [changedCount, setChangedCount] = useState<number>(0);

  useEffect(() => {
    const updateScrollPosition = (
      containerWidth: number,
      visibleImages: number
    ) => {
      const container = containerRef.current!;
      const itemWidth = containerWidth / visibleImages;
      const scrollLeft = itemWidth * currentIndexRef.current;
      container.scrollTo({
        left: scrollLeft,
        behavior: "instant",
      });
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const containerWidth = entry.contentRect.width;
        const visibleImages = getVisibleImagesCount(containerWidth);
        setVisibleImages(visibleImages);
        updateScrollPosition(containerWidth, visibleImages);
      });
    });

    observer.observe(containerRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current!.clientWidth;
    const visibleImages = getVisibleImagesCount(containerWidth);
    setVisibleImages(visibleImages);
  }, []);

  useEffect(() => {
    const container = containerRef.current!;
    const itemWidth = container.clientWidth / visibleImages;
    const scrollLeft = itemWidth * currentIndexRef.current;
    container.scrollTo({
      left: scrollLeft,
      behavior: "instant",
    });
  }, [visibleImages]);

  const changeCurrentIndex = (index: number) => {
    setChangedCount((prev) => prev + 1);
    setCurrentIndex(index);
    currentIndexRef.current = index;
  };

  const handleNext = (step: number) => {
    if (currentIndex >= images.length - step) return;

    const newIndex = currentIndex + step;

    const container = containerRef.current!;

    const scrollLeft =
      container.scrollLeft + (step * container.clientWidth) / visibleImages;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    changeCurrentIndex(newIndex);
  };

  const handlePrev = (step: number) => {
    if (currentIndex < step) return;

    const newIndex = currentIndex - step;

    const container = containerRef.current!;

    const scrollLeft =
      container.scrollLeft - (step * container.clientWidth) / visibleImages;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    changeCurrentIndex(newIndex);
  };

  const handleClick = (index: number) => {
    if (index === currentIndex) return;
    if (index < currentIndex) handlePrev(currentIndex - index);
    else handleNext(index - currentIndex);
  };

  return (
    <div
      style={{ aspectRatio: 1 }}
      className={cn(
        "w-full min-w-[32rem] bg-neutral-900 flex flex-col",
        className
      )}
    >
      <div className="flex-auto relative">
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-cover"
        />
        {animation && changedCount > 0 && (
          <div
            key={changedCount}
            className="absolute inset-0 bg-white animate-splash fill-mode-forwards"
          />
        )}
      </div>
      <div className="h-[5rem] flex items-center">
        <button
          className="bg-transparent text-white disabled:text-neutral-500 mx-2"
          disabled={currentIndex === 0}
          onClick={() => handlePrev(1)}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div
          ref={containerRef}
          className="flex-auto flex flex-nowrap overflow-auto scrollbar-hide"
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{ width: `${100 / visibleImages}%` }}
              className="px-2 flex-shrink-0 h-[3.5rem]"
            >
              <div
                className="w-full h-full relative cursor-pointer"
                onClick={() => handleClick(index)}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover cursor-pointer select-none"
                />
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-transparent text-white disabled:text-neutral-500 mx-2"
          disabled={currentIndex === images.length - 1}
          onClick={() => handleNext(1)}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Galleria;
