
import React from 'react';
import { Lesson, UserStats } from '../types';
import Timer from './widgets/Timer';
import SpinWheel from './widgets/SpinWheel';
import SocialMedia from './widgets/SocialMedia';
import IdentityWidget from './widgets/IdentityWidget';

interface SidebarProps {
  activeLesson: Lesson | null;
  stats: UserStats;
}

const Sidebar: React.FC<SidebarProps> = ({ activeLesson, stats }) => {
  return (
    <aside className="space-y-6 animate-fadeIn">
      {/* Social Media Links */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
        <h3 className="text-xl font-black text-slate-800 mb-4 text-center">تواصل معنا</h3>
        <SocialMedia />
      </div>

      {/* Timer Widget */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 overflow-hidden relative">
        <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
          سابق الزمن
        </h3>
        <Timer />
      </div>

      {/* Spin Wheel Widget */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
        <h3 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
          العجلة الدوارة
        </h3>
        <SpinWheel />
      </div>

      {/* Identity Information (if no active lesson) */}
      {!activeLesson && (
        <IdentityWidget />
      )}
    </aside>
  );
};

export default Sidebar;
