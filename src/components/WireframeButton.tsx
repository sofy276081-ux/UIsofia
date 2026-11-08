import React from 'react';

interface WireframeButtonProps {
  label: string;
  onClick: () => void;
  direction?: 'forward' | 'back';
}

export const WireframeButton: React.FC<WireframeButtonProps> = ({
  label,
  onClick,
  direction = 'forward',
}) => {
  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Wireframe Button with architectural blueprint/wireframe styling */}
      <button
        onClick={onClick}
        type="button"
        className="group relative cursor-pointer select-none bg-white px-8 py-3.5 border-2 border-black text-black font-mono text-base font-semibold tracking-wide transition-all duration-150 active:scale-[0.97] hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        aria-label={label}
      >
        <span className="flex items-center gap-2">
          {direction === 'back' && (
            <span
              className="text-lg transition-transform duration-150 group-hover:-translate-x-1"
              aria-hidden="true"
            >
              ←
            </span>
          )}
          <span className="capitalize">{label}</span>
          {direction === 'forward' && (
            <span
              className="text-lg transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          )}
        </span>

        {/* Wireframe corner tick marks */}
        <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-black pointer-events-none" />
        <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-black pointer-events-none" />
        <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-black pointer-events-none" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-black pointer-events-none" />
      </button>

      {/* Subtle wireframe coordinate / dimension micro-label */}
      <span className="mt-2 font-mono text-[10px] text-neutral-400 select-none tracking-wider uppercase">
        [btn:{label}]
      </span>
    </div>
  );
};
