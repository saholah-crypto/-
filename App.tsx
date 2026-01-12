
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Youtube, 
  Gamepad2, 
  Trophy, 
  ChevronDown, 
  Clock, 
  RotateCcw, 
  Flag, 
  Users, 
  Eye,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Video
} from 'lucide-react';
import { LESSONS, SOCIAL_LINKS, LOGO_URL } from './data';
import { Lesson, UserStats } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LessonContent from './components/LessonContent';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [stats, setStats] = useState<UserStats>({
    points: 0,
    lessonsCompleted: [],
    visitorCount: 12450,
    activeUsers: 84
  });

  // Persist points from localStorage
  useEffect(() => {
    const savedPoints = localStorage.getItem('mathFunPoints');
    if (savedPoints) {
      setStats(prev => ({ ...prev, points: parseInt(savedPoints) }));
    }
    
    // Simulate real-time updates for active users
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeUsers: Math.floor(Math.random() * (120 - 70) + 70)
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const addPoints = (amount: number) => {
    setStats(prev => {
      const newPoints = prev.points + amount;
      localStorage.setItem('mathFunPoints', newPoints.toString());
      return { ...prev, points: newPoints };
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden">
      <Header 
        stats={stats} 
        activeLesson={activeLesson}
        onSelectLesson={setActiveLesson}
        onGoHome={() => setActiveLesson(null)}
      />

      <main className="flex-grow pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1">
          {activeLesson ? (
            <LessonContent 
              lesson={activeLesson} 
              onQuizComplete={() => addPoints(50)}
            />
          ) : (
            <HeroSection onStart={() => setActiveLesson(LESSONS[0])} />
          )}
        </div>

        {/* Sidebar Components */}
        <div className="w-full md:w-80 flex flex-col gap-6">
          <Sidebar 
            activeLesson={activeLesson} 
            stats={stats}
          />
        </div>
      </main>

      <Footer />
      
      {/* Repeating Logo Motif in Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] overflow-hidden">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-20 p-10 transform rotate-12">
          {Array.from({ length: 32 }).map((_, i) => (
            <img key={i} src={LOGO_URL} alt="Background Logo" className="w-32 h-32" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
