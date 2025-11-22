import React from 'react';
import { IconBBVA } from './Icons';

interface SlideFrameProps {
  children: React.ReactNode;
  pageNumber: number;
  title?: string;
  layout?: 'cover' | 'content' | 'section';
  subtitle?: string;
}

const SlideFrame: React.FC<SlideFrameProps> = ({ children, pageNumber, title, layout = 'content', subtitle }) => {
  
  // Cover Slide Layout
  if (layout === 'cover') {
    return (
      <div className="w-full h-full bg-bbva-gradient text-white relative overflow-hidden flex flex-col shadow-2xl rounded-lg">
        {/* Decorative Spark */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-b from-bbva-medium-blue/20 to-transparent -skew-x-12 transform translate-x-20"></div>
        
        <div className="flex-1 p-16 flex flex-col justify-center relative z-10">
          <div className="mb-8 text-bbva-aqua">
             <IconBBVA className="h-8 w-auto" />
          </div>
          {children}
        </div>
        
        <div className="h-2 bg-bbva-aqua w-full"></div>
      </div>
    );
  }

  // Section Break Layout
  if (layout === 'section') {
    return (
      <div className="w-full h-full bg-bbva-navy text-white relative overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl rounded-lg">
         <div className="absolute top-0 left-0 w-full h-2 bg-bbva-aqua"></div>
         <div className="p-20 max-w-4xl relative z-10">
            {title && <h2 className="text-5xl font-bold mb-6">{title}</h2>}
            {children}
         </div>
         <div className="absolute bottom-8 right-12 opacity-50">
            <IconBBVA className="h-6 w-auto text-white" />
         </div>
      </div>
    );
  }

  // Standard Content Layout
  return (
    <div className="w-full h-full bg-white text-bbva-navy relative overflow-hidden flex flex-col shadow-2xl rounded-lg">
      {/* Header */}
      <div className="h-24 px-12 flex items-end justify-between pb-4 border-b border-gray-100 relative">
        <div>
          {title && <h2 className="text-3xl font-bold text-bbva-navy">{title}</h2>}
          {subtitle && <p className="text-bbva-medium-blue text-sm font-medium mt-1">{subtitle}</p>}
        </div>
        <div className="absolute top-0 right-0 w-32 h-2 bg-bbva-navy"></div>
        <div className="absolute top-8 right-12">
           <IconBBVA className="h-6 w-auto text-bbva-navy" />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 px-12 py-8 relative z-10 overflow-hidden">
        {children}
      </div>

      {/* Footer */}
      <div className="h-10 px-12 flex justify-between items-center text-[10px] text-gray-400 bg-white border-t border-gray-100">
        <div className="font-semibold tracking-wider uppercase">Engineering Engineering</div>
        <div className="flex items-center gap-4">
          <span>INTERNAL USE</span>
          <span className="w-px h-3 bg-gray-300"></span>
          <span>{pageNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default SlideFrame;