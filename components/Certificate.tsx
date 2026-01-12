
import React from 'react';
import { LOGO_URL } from '../data';

interface CertificateProps {
  studentName: string;
  lessonTitle: string;
}

const Certificate: React.FC<CertificateProps> = ({ studentName, lessonTitle }) => {
  return (
    <div className="relative p-1 bg-gradient-to-br from-amber-400 via-yellow-200 to-amber-600 rounded-lg shadow-inner">
      <div className="bg-white p-8 border-[10px] border-double border-amber-500 rounded-sm text-center relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100/50 rounded-full translate-y-16 -translate-x-16"></div>
        
        <img src={LOGO_URL} alt="Logo" className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-amber-200 shadow-lg" />
        
        <h1 className="text-4xl font-black text-blue-900 mb-6 font-serif">شهادة تقدير</h1>
        
        <p className="text-xl text-slate-700 font-bold mb-8">
          مقدمة من الأستاذ <span className="text-blue-600">أحمد هجرس</span>
        </p>
        
        <p className="text-lg text-slate-600 mb-4">تقديراً للطالب / ـة:</p>
        <h2 className="text-3xl font-black text-amber-700 mb-6 underline decoration-amber-300 decoration-wavy underline-offset-8">
          {studentName}
        </h2>
        
        <p className="text-lg text-slate-700 font-semibold mb-10 leading-relaxed max-w-md mx-auto">
          تقديراً لفهمه المتميز لدرس <span className="text-blue-700 font-black">({lessonTitle})</span> في مادة الرياضيات، متمنياً له مزيداً من التفوق والنجاح.
        </p>

        <div className="flex justify-between items-end mt-12 px-8">
          <div className="text-right">
            <p className="text-xs text-slate-400">التاريخ</p>
            <p className="font-bold text-slate-700">{new Date().toLocaleDateString('ar-EG')}</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-2"></div>
            <p className="font-black text-blue-900">توقيع المعلم</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
