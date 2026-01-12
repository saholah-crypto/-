
import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';

const SpinWheel: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const newRotation = rotation + 1440 + Math.random() * 360;
    setRotation(newRotation);

    setTimeout(() => {
      const luckyNumber = Math.floor(Math.random() * 30) + 1;
      setResult(luckyNumber);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-40 h-40">
        {/* Simplified Wheel Visual */}
        <div 
          className="w-full h-full rounded-full border-8 border-slate-100 bg-white relative flex items-center justify-center transition-transform duration-[2000ms] cubic-bezier(0.1, 0, 0.1, 1)"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <div className="bg-blue-500/20 border-r border-b border-white/50"></div>
            <div className="bg-amber-500/20 border-l border-b border-white/50"></div>
            <div className="bg-emerald-500/20 border-r border-t border-white/50"></div>
            <div className="bg-purple-500/20 border-l border-t border-white/50"></div>
          </div>
          <div className="relative bg-white w-10 h-10 rounded-full flex items-center justify-center font-black text-blue-900 border-2 border-slate-100">
            ?
          </div>
        </div>
        {/* Pointer */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-red-500 clip-path-triangle z-10"></div>
      </div>

      <div className="text-center">
        {result !== null && !isSpinning && (
          <p className="text-2xl font-black text-blue-600 mb-2 animate-bounce">
             الرقم: {result}
          </p>
        )}
        <button 
          onClick={spin}
          disabled={isSpinning}
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <RotateCw size={18} className={isSpinning ? 'animate-spin' : ''} />
          {isSpinning ? 'جاري السحب...' : 'اسحب رقم الحظ'}
        </button>
      </div>
    </div>
  );
};

export default SpinWheel;
