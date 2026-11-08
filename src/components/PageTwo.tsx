import React from 'react';
import { WireframeButton } from './WireframeButton';

interface PageTwoProps {
  onBack: () => void;
  showGrid?: boolean;
}

export const PageTwo: React.FC<PageTwoProps> = ({ onBack, showGrid = false }) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-6 bg-white select-none ${
        showGrid ? 'wireframe-canvas-grid' : ''
      }`}
    >
      {/* Page 2: Empty page with only the button "indietro" */}
      <WireframeButton label="indietro" onClick={onBack} direction="back" />
    </div>
  );
};
