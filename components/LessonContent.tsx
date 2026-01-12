
import React, { useState } from 'react';
import { 
  FileText, 
  Play, 
  Book, 
  Layout, 
  Map, 
  Gamepad2, 
  X,
  FileSearch,
  CheckCircle2,
  Trophy
} from 'lucide-react';
import { Lesson } from '../types';
import Quiz from './Quiz';

interface LessonContentProps {
  lesson: Lesson;
  onQuizComplete: () => void;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson, onQuizComplete }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Lesson Header */}
      <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-blue-600">
        <h2 className="text-3xl font-black text-blue-900 mb-4">{lesson.title}</h2>
        <div className="flex flex-wrap gap-4">
          <ResourceLink href={lesson.mathFunNote} label="مذكرة متعة الرياضيات" icon={<FileText />} color="blue" />
          <ResourceLink href={lesson.studentBook} label="كتاب الطالب" icon={<Book />} color="emerald" />
          <ResourceLink href={lesson.activityBook} label="كتاب النشاط" icon={<FileSearch />} color="indigo" />
          <ResourceLink href={lesson.mindMap} label="الخريطة الذهنية" icon={<Map />} color="purple" />
          <button 
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-5 py-3 rounded-2xl font-bold hover:bg-red-100 transition-colors"
          >
            <Play size={20} fill="currentColor" />
            فيديو الشرح
          </button>
        </div>
      </div>

      {/* Learn & Play Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50">
          <div className="flex items-center gap-2 mb-6">
            <Gamepad2 className="text-blue-600" size={28} />
            <h3 className="text-2xl font-black text-slate-800">العب وتعلم</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GameButton href={lesson.games.testYourself} label="اختبر نفسك" icon={<CheckCircle2 />} color="blue" />
            <GameButton href={lesson.games.matching} label="طابق البطاقات" icon={<Layout />} color="purple" />
            <GameButton href={lesson.games.flipCards} label="اقلب البطاقة" icon={<RotateCcw size={20} />} color="emerald" />
            <button 
              onClick={() => setShowQuiz(true)}
              className="flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-4 rounded-2xl font-black shadow-lg hover:bg-amber-600 transition-all hover:scale-105"
            >
              <Trophy size={20} />
              تحدي الـ 50 نقطة
            </button>
          </div>
        </div>

        {/* Informational Widget Area */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center">
          <img src={lesson.identity.image} alt="Oman Info" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-inner" />
          <h4 className="text-xl font-black mb-2 flex items-center gap-2">
             هويتي: هل تعلم؟
          </h4>
          <p className="text-blue-50 font-semibold leading-relaxed">
            {lesson.identity.info}
          </p>
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl overflow-hidden w-full max-w-4xl shadow-2xl relative">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="aspect-video">
              <iframe 
                className="w-full h-full"
                src={lesson.videoUrl}
                title="Lesson Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 bg-blue-600 text-white font-bold text-center">
              فيديو الشرح: {lesson.title}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Challenge Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md overflow-y-auto">
          <div className="w-full max-w-2xl">
            <Quiz 
              lesson={lesson} 
              onClose={() => setShowQuiz(false)} 
              onComplete={() => {
                onQuizComplete();
                setShowQuiz(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const ResourceLink: React.FC<{ href: string; label: string; icon: React.ReactNode; color: string }> = ({ href, label, icon, color }) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    emerald: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
    indigo: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
    purple: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold transition-all ${colors[color]}`}
    >
      {icon}
      {label}
    </a>
  );
};

const GameButton: React.FC<{ href: string; label: string; icon: React.ReactNode; color: string }> = ({ href, label, icon, color }) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    emerald: 'bg-emerald-600 hover:bg-emerald-700',
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 text-white px-6 py-4 rounded-2xl font-bold transition-all hover:scale-105 shadow-md ${colors[color]}`}
    >
      {icon}
      {label}
    </a>
  );
};

const RotateCcw: React.FC<{size?: number}> = ({size = 20}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
);

export default LessonContent;
