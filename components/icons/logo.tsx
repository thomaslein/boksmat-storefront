import React from 'react';

export default function Logo(props: React.ComponentProps<"svg">) {
  return (
    <div className="flex flex-col items-center">
      <div className="transform transition-transform duration-300 hover:scale-85 scale-80">
        <div className="tin-logo-body">
          <div className="tin-score-line"></div>
          <span className="tin-label">Boksmat</span>
          <div className="tin-opener-container">
            <div className="tin-pull-tab">
              <div className="flex items-center justify-center w-[10px] h-[100%]">
                <div className="tin-rivet"></div>
              </div>
              <div className="tin-tab-divider"></div>
              <div className="tin-finger-hole"></div>
            </div>
          </div>
        </div>
      </div>
      <span className="font-serif text-lg font-semibold -mt-2">Gourmet på boks</span>
  </div>
  );
}