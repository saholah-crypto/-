
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [isActive, setIsActive] = useState(false);
  // Fix: changed NodeJS.Timeout to any to avoid "Cannot find namespace 'NodeJS'" error in browser environments
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(120);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
         <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64" cy="64" r="58"
            stroke="currentColor" strokeWidth="8"
            fill="transparent"
            className="text-slate-100"
          />
          <circle
            cx="64" cy="64" r="58"
            stroke="currentColor" strokeWidth="8"
            fill="transparent"
            strokeDasharray={364}
            strokeDashoffset={364 - (364 * timeLeft) / 120}
            strokeLinecap="round"
            className="text-blue-500 transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-black text-slate-800 tabular-nums">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={toggleTimer}
          className={`p-3 rounded-xl transition-all ${isActive ? 'bg-amber-100 text-amber-600 hover:bg-amber-200' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          {isActive ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
        </button>
        <button 
          onClick={resetTimer}
          className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
};

export default Timer;
