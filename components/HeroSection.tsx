
import React from 'react';
import { BookOpen, Award, Zap, Smile } from 'lucide-react';
import { LOGO_URL } from '../data';

interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
        <img src={LOGO_URL} alt="Math Fun" className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white shadow-2xl" />
      </div>
      
      <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-4 drop-shadow-sm">
        متعة الرياضيات مع أحمد هجرس
      </h2>
      <p className="text-xl md:text-2xl text-slate-600 max-w-2xl font-semibold mb-10 leading-relaxed">
        اكتشف جمال الرياضيات بأسلوب مبتكر وتفاعلي. رحلة تعليمية ممتعة تبدأ من هنا!
      </p>

      <button 
        onClick={onStart}
        className="group relative px-10 py-5 bg-blue-600 text-white rounded-full text-2xl font-black shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
      >
        ابدأ رحلة التعلم الآن
        <span className="absolute -top-3 -right-3 bg-amber-400 text-amber-900 text-xs px-2 py-1 rounded-full animate-bounce">
          مجاناً
        </span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full">
        <FeatureCard 
          icon={<Zap className="text-blue-500" size={32} />}
          title="تعلم مبتكر"
          desc="شروحات فيديو تفاعلية وألعاب تعليمية شيقة لكل الدروس."
        />
        <FeatureCard 
          icon={<Award className="text-amber-500" size={32} />}
          title="تحديات وجوائز"
          desc="تحدي الـ 50 نقطة واختبارات فورية مع شهادات تقدير."
        />
        <FeatureCard 
          icon={<BookOpen className="text-emerald-500" size={32} />}
          title="مصادر شاملة"
          desc="مذكرات، كتب الطالب، كتب النشاط وخرائط ذهنية في مكان واحد."
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg border border-blue-50 hover:shadow-2xl transition-all">
    <div className="mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-black text-blue-900 mb-2">{title}</h3>
    <p className="text-slate-600 font-semibold">{desc}</p>
  </div>
);

export default HeroSection;
