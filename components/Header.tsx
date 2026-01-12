
import React, { useState } from 'react';
import { Menu, ChevronDown, User, Trophy, Eye, Users, Home } from 'lucide-react';
import { LESSONS, LOGO_URL } from '../data';
import { Lesson, UserStats } from '../types';

interface HeaderProps {
  stats: UserStats;
  activeLesson: Lesson | null;
  onSelectLesson: (lesson: Lesson) => void;
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ stats, activeLesson, onSelectLesson, onGoHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onGoHome}>
          <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-sm" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-black text-blue-900 leading-tight">متعة الرياضيات</h1>
            <p className="text-sm text-blue-600 font-bold">مع الأستاذ أحمد هجرس</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={onGoHome}
            className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-bold transition-colors"
          >
            <Home size={18} />
            الرئيسية
          </button>
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 font-bold transition-colors">
              الوحدة الخامسة
              <ChevronDown size={18} />
            </button>
            <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-blue-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-0 translate-y-2">
              {LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson)}
                  className={`w-full text-right px-4 py-3 hover:bg-blue-50 text-sm font-semibold transition-colors ${activeLesson?.id === lesson.id ? 'text-blue-600 bg-blue-50' : 'text-slate-700'}`}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Stats */}
        <div className="flex items-center gap-4 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
          <div className="flex items-center gap-1 text-amber-600" title="نقاط الطالب">
            <Trophy size={18} />
            <span className="font-bold text-lg">{stats.points}</span>
          </div>
          <div className="h-6 w-[1px] bg-blue-200"></div>
          <div className="flex items-center gap-1 text-blue-600" title="المستخدمون حالياً">
            <Users size={18} />
            <span className="font-bold">{stats.activeUsers}</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-slate-500" title="إجمالي الزوار">
            <Eye size={18} />
            <span className="font-semibold text-sm">{stats.visitorCount.toLocaleString()}</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 p-4 shadow-lg absolute w-full animate-fadeIn">
           <button 
            onClick={() => { onGoHome(); setIsOpen(false); }}
            className="w-full text-right py-3 px-4 text-slate-700 font-bold border-b border-slate-100"
          >
            الرئيسية
          </button>
          <div className="py-2">
            <p className="px-4 text-blue-600 font-black text-xs uppercase mb-1">الوحدة الخامسة</p>
            {LESSONS.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => { onSelectLesson(lesson); setIsOpen(false); }}
                className="w-full text-right py-3 px-4 text-slate-700 font-semibold text-sm hover:bg-blue-50"
              >
                {lesson.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
