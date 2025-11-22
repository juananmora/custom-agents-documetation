import React, { useState, useEffect, useCallback } from 'react';
import { slides } from '../content/slides';

const PresentationDeck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const CurrentSlideComponent = slides[currentSlideIndex].component;

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black p-4 sm:p-8">
      <div className="w-full max-w-[1280px] aspect-video relative">
        <CurrentSlideComponent isActive={true} />
        
        {/* Hover Controls */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-50">
          <button 
            onClick={goToPrevSlide}
            disabled={currentSlideIndex === 0}
            className="bg-black/50 text-white p-2 rounded hover:bg-black/70 disabled:opacity-30"
          >
            ←
          </button>
          <span className="bg-black/50 text-white px-3 py-2 rounded font-mono text-sm">
            {currentSlideIndex + 1} / {slides.length}
          </span>
          <button 
            onClick={goToNextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            className="bg-black/50 text-white p-2 rounded hover:bg-black/70 disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>
      <div className="text-gray-500 mt-4 text-xs font-mono hidden sm:block">
        Use Arrow Keys to Navigate
      </div>
    </div>
  );
};

export default PresentationDeck;