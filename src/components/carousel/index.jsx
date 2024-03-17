import { useEffect, useRef, useState } from 'react';

const SnapToEndCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const itemWidth = 700; // Adjust this according to your item width
  const containerWidth = items.length * itemWidth;

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = containerRef.current.scrollLeft;
      const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth;

      if (scrollLeft === maxScrollLeft) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(Math.floor(scrollLeft / itemWidth));
      }
    };

    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [items.length, itemWidth]);

  const scrollToIndex = index => {
    const scrollLeft = index === items.length - 1 ? containerWidth - containerRef.current.clientWidth : index * itemWidth;
    containerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div ref={containerRef} className="flex items-center space-x-4 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-${itemWidth} h-48 bg-gray-200 flex items-center justify-center rounded-lg shadow-md`}
            onClick={() => scrollToIndex(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SnapToEndCarousel;
