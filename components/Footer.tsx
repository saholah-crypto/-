
import React from 'react';
import { LOGO_URL } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-blue-100 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <img src={LOGO_URL} alt="Logo" className="w-16 h-16 rounded-full border-2 border-blue-100" />
        
        <div className="text-center">
          <h3 className="text-2xl font-black text-blue-900 mb-2">متعة الرياضيات مع أحمد هجرس</h3>
          <p className="text-slate-500 font-bold max-w-lg mx-auto">
            منصة تعليمية متكاملة لخدمة طلابنا المتميزين، تهدف لتبسيط علوم الرياضيات وتحفيز الإبداع والتعلم الذاتي.
          </p>
        </div>

        <div className="w-24 h-1 bg-blue-100 rounded-full"></div>

        <p className="text-slate-400 font-bold text-sm">
          جميع الحقوق محفوظة © {new Date().getFullYear()} - تصميم وتطوير المنصة للأستاذ أحمد هجرس
        </p>
      </div>
    </footer>
  );
};

export default Footer;
