import React from 'react';
import { WireframeButton } from './WireframeButton';

interface PageOneProps {
  onNext: () => void;
  showGrid?: boolean;
}

export const PageOne: React.FC<PageOneProps> = ({ onNext, showGrid = false }) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none ${
        showGrid ? 'wireframe-canvas-grid' : ''
      }`}
    >
      {/* Page 1: Empty page with only the button "avanti" */}
      <WireframeButton label="avanti" onClick={onNext} direction="forward" />
    </div>
  );
};
