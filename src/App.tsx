/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { IPhone13MiniFrame } from './components/IPhone13MiniFrame';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { Smartphone, Grid, ZoomIn, ZoomOut, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [zoomScale, setZoomScale] = useState<number>(0.92);
  const [deviceFrameMode, setDeviceFrameMode] = useState<boolean>(true);

  // Keyboard shortcut support for quick prototyping review
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input/textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' && currentPage === 1) {
        setCurrentPage(2);
      } else if (e.key === 'ArrowLeft' && currentPage === 2) {
        setCurrentPage(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  // Adjust default zoom on smaller height screens so whole device is visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 920) {
        setZoomScale(0.82);
      } else if (window.innerHeight < 1050) {
        setZoomScale(0.9);
      } else {
        setZoomScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`min-h-screen w-full flex flex-col bg-[#fafafa] text-black ${
        showGrid ? 'wireframe-grid' : ''
      }`}
    >
      {/* Top Technical Wireframe Bar */}
      <header className="w-full shrink-0 border-b border-black bg-white/95 backdrop-blur-sm z-40 px-4 md:px-8 py-3 flex items-center justify-between gap-4 select-none">
        {/* Left: Project & Device Info */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border-2 border-black flex items-center justify-center font-mono font-bold text-xs bg-black text-white">
            W
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold tracking-tight">
                PROTOTYPE // WIREFRAME
              </span>
              <span className="hidden sm:inline font-mono text-[11px] px-1.5 py-0.5 border border-black bg-neutral-100">
                iPhone 13 mini (375 × 812)
              </span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500">
              Formato mobile 19.5:9 • Stile Bianco & Nero
            </span>
          </div>
        </div>

        {/* Center: Current Screen Indicator */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-black font-mono text-xs">
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                currentPage === 1 ? 'bg-black text-white font-bold' : 'hover:bg-neutral-100'
              }`}
              title="Passa a Pagina 1"
            >
              Pagina 1
            </button>
            <div className="w-[1px] h-full bg-black" />
            <button
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1 cursor-pointer transition-colors ${
                currentPage === 2 ? 'bg-black text-white font-bold' : 'hover:bg-neutral-100'
              }`}
              title="Passa a Pagina 2"
            >
              Pagina 2
            </button>
          </div>
        </div>

        {/* Right: Technical Viewport Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden md:flex items-center border border-neutral-300 font-mono text-xs bg-white">
            <button
              onClick={() => setZoomScale((prev) => Math.max(0.65, Number((prev - 0.1).toFixed(2))))}
              className="px-2 py-1 hover:bg-neutral-100 border-r border-neutral-300"
              title="Riduci zoom"
              aria-label="Riduci zoom"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 py-1 text-[11px] text-neutral-600 w-12 text-center tabular-nums">
              {Math.round(zoomScale * 100)}%
            </span>
            <button
              onClick={() => setZoomScale((prev) => Math.min(1.2, Number((prev + 0.1).toFixed(2))))}
              className="px-2 py-1 hover:bg-neutral-100 border-l border-neutral-300"
              title="Aumenta zoom"
              aria-label="Aumenta zoom"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Toggle Grid */}
          <button
            onClick={() => setShowGrid((v) => !v)}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border transition-colors cursor-pointer ${
              showGrid
                ? 'border-black bg-neutral-100 font-medium'
                : 'border-neutral-300 text-neutral-500 hover:border-black'
            }`}
            title="Mostra / Nascondi Griglia Wireframe"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Griglia</span>
          </button>

          {/* Reset View */}
          <button
            onClick={() => {
              setCurrentPage(1);
              setZoomScale(0.9);
            }}
            className="p-1.5 border border-neutral-300 hover:border-black text-neutral-600 hover:text-black transition-colors cursor-pointer"
            title="Reimposta visuale"
            aria-label="Reimposta visuale"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Workspace with Centered iPhone 13 mini */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4 md:p-8">
        <div
          className="transition-transform duration-200 origin-center"
          style={{ transform: `scale(${zoomScale})` }}
        >
          <IPhone13MiniFrame
            currentPage={currentPage}
            showDimensions={true}
            showNotchAndBar={true}
          >
            {currentPage === 1 ? (
              <PageOne onNext={() => setCurrentPage(2)} showGrid={showGrid} />
            ) : (
              <PageTwo onBack={() => setCurrentPage(1)} showGrid={showGrid} />
            )}
          </IPhone13MiniFrame>
        </div>
      </div>

      {/* Bottom Information Footer */}
      <footer className="w-full shrink-0 border-t border-neutral-300 bg-white/90 backdrop-blur-sm px-4 md:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-neutral-500 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full border border-black bg-black" />
          <span>
            Stato Attuale:{' '}
            <strong className="text-black font-semibold">
              Pagina {currentPage} (
              {currentPage === 1 ? 'con bottone “avanti”' : 'con bottone “indietro”'})
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Navigazione tastiera: [←] [→]</span>
          <span>Viewport: 375 × 812 pt</span>
        </div>
      </footer>
    </div>
  );
}
