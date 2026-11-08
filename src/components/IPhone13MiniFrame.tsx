import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface IPhone13MiniFrameProps {
  children: React.ReactNode;
  currentPage: 1 | 2;
  showDimensions?: boolean;
  showNotchAndBar?: boolean;
}

export const IPhone13MiniFrame: React.FC<IPhone13MiniFrameProps> = ({
  children,
  currentPage,
  showDimensions = true,
  showNotchAndBar = true,
}) => {
  return (
    <div className="relative flex items-center justify-center py-6 px-4">
      {/* Dimension Line - Left (Height: 812px) */}
      {showDimensions && (
        <div className="hidden lg:flex flex-col items-center justify-between absolute -left-12 top-6 bottom-6 w-8 text-neutral-400 font-mono text-[11px] select-none pointer-events-none">
          <div className="w-full flex items-center justify-end">
            <span className="w-3 h-[1px] bg-neutral-300" />
          </div>
          <div className="flex items-center gap-1.5 -rotate-90 origin-center whitespace-nowrap text-neutral-500">
            <span>812 px</span>
            <span className="text-[9px] text-neutral-400">(iPhone 13 mini)</span>
          </div>
          <div className="w-full flex items-center justify-end">
            <span className="w-3 h-[1px] bg-neutral-300" />
          </div>
          {/* Vertical guideline */}
          <div className="absolute top-2 bottom-2 right-0 w-[1px] border-r border-dashed border-neutral-300" />
        </div>
      )}

      {/* Dimension Line - Top (Width: 375px) */}
      {showDimensions && (
        <div className="hidden lg:flex items-center justify-between absolute left-4 right-4 -top-3 h-6 text-neutral-400 font-mono text-[11px] select-none pointer-events-none max-w-[375px] mx-auto">
          <span className="h-3 w-[1px] bg-neutral-300" />
          <div className="flex items-center gap-1.5 text-neutral-500">
            <span>375 px</span>
          </div>
          <span className="h-3 w-[1px] bg-neutral-300" />
          <div className="absolute left-2 right-2 top-3 h-[1px] border-t border-dashed border-neutral-300" />
        </div>
      )}

      {/* Outer iPhone 13 mini Chassis */}
      <div className="relative">
        {/* Hardware Buttons - Left Side (Mute switch, Volume Up, Volume Down) */}
        <div className="absolute -left-[5px] top-[108px] w-[5px] h-[24px] bg-neutral-800 rounded-l-sm border border-neutral-900" />
        <div className="absolute -left-[5px] top-[152px] w-[5px] h-[44px] bg-neutral-800 rounded-l-sm border border-neutral-900" />
        <div className="absolute -left-[5px] top-[208px] w-[5px] h-[44px] bg-neutral-800 rounded-l-sm border border-neutral-900" />

        {/* Hardware Button - Right Side (Side / Power Button) */}
        <div className="absolute -right-[5px] top-[160px] w-[5px] h-[64px] bg-neutral-800 rounded-r-sm border border-neutral-900" />

        {/* Phone Body with Bezels */}
        <div
          className="relative w-[375px] h-[812px] bg-black rounded-[46px] p-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.1)] border border-neutral-800"
          style={{ boxSizing: 'content-box' }}
        >
          {/* Internal Screen Container (375 × 812 pt viewport) */}
          <div className="relative w-[375px] h-[812px] bg-white rounded-[38px] overflow-hidden flex flex-col border border-neutral-200">
            {/* Status Bar Wireframe */}
            {showNotchAndBar && (
              <header className="relative z-30 w-full h-[44px] shrink-0 flex items-center justify-between px-6 pt-1 text-black font-mono text-[12px] font-semibold select-none bg-transparent">
                {/* Time Display */}
                <span className="tracking-tight text-[13px]">9:41</span>

                {/* iPhone 13 mini Notch */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[125px] h-[26px] bg-black rounded-b-[18px] flex items-center justify-center">
                  {/* Speaker Ear Piece */}
                  <div className="w-[42px] h-[3.5px] bg-neutral-800 rounded-full mb-1" />
                  {/* Camera lens hole */}
                  <div className="absolute right-3.5 w-2.5 h-2.5 rounded-full border border-neutral-700 bg-neutral-900" />
                </div>

                {/* Status Bar Right (Cellular, Wifi, Battery) in Wireframe style */}
                <div className="flex items-center gap-1.5 text-black">
                  {/* Signal bars */}
                  <div className="flex items-end gap-[1.5px] h-2.5" title="Signal">
                    <span className="w-[2.5px] h-[3px] bg-black" />
                    <span className="w-[2.5px] h-[5px] bg-black" />
                    <span className="w-[2.5px] h-[7px] bg-black" />
                    <span className="w-[2.5px] h-[9px] bg-black" />
                  </div>

                  {/* WiFi icon wireframe */}
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                    <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                  </svg>

                  {/* Battery icon wireframe */}
                  <div className="flex items-center gap-[1px]">
                    <div className="w-5 h-2.5 border border-black rounded-[2px] p-[1px] flex items-center">
                      <div className="h-full w-3.5 bg-black rounded-[1px]" />
                    </div>
                    <div className="w-[1.5px] h-1 bg-black rounded-r-[1px]" />
                  </div>
                </div>
              </header>
            )}

            {/* Screen Content Area (Pages with transition) */}
            <main className="relative flex-1 w-full overflow-hidden bg-white">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentPage}
                  initial={{
                    opacity: 0,
                    x: currentPage === 2 ? 40 : -40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: currentPage === 2 ? -40 : 40,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full h-full flex flex-col"
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Home Indicator Safe Area Bottom */}
            {showNotchAndBar && (
              <footer className="relative z-30 w-full h-[34px] shrink-0 flex items-center justify-center select-none bg-transparent pointer-events-none">
                <div className="w-[134px] h-[4px] bg-black rounded-full" />
              </footer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
