
import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Trophy, Download } from 'lucide-react';
import { Lesson } from '../types';
import Certificate from './Certificate';

interface QuizProps {
  lesson: Lesson;
  onClose: () => void;
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ lesson, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [studentName, setStudentName] = useState('');

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (currentStep < lesson.quiz.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const score = answers.reduce((acc, ans, idx) => {
    return ans === lesson.quiz[idx].correctAnswer ? acc + 1 : acc;
  }, 0);

  const passed = score === lesson.quiz.length;

  if (isFinished) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
        {passed ? (
          <div className="space-y-6">
            <div className="flex justify-center">
              <Trophy size={80} className="text-amber-500 animate-bounce" />
            </div>
            <h2 className="text-4xl font-black text-blue-900">ألف مبروك!</h2>
            <p className="text-xl text-slate-600 font-bold">لقد أجبت على جميع الأسئلة بشكل صحيح وحصلت على 50 نقطة!</p>
            
            <div className="bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200">
              <label className="block text-blue-900 font-black mb-2">ادخل اسمك لاستلام شهادتك:</label>
              <input 
                type="text" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="اسم الطالب / الطالبة"
                className="w-full px-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-500 outline-none text-center font-bold text-lg"
              />
            </div>

            {studentName && (
              <div className="mt-8 border-4 border-double border-blue-100 p-2 rounded-lg bg-white overflow-hidden">
                 <Certificate studentName={studentName} lessonTitle={lesson.title} />
                 <p className="text-xs text-slate-400 mt-2 italic">يمكنك طباعة الصفحة أو التقاط صورة للشاشة</p>
              </div>
            )}

            <div className="flex gap-4">
              <button 
                onClick={() => { onComplete(); onClose(); }}
                className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all"
              >
                إغلاق التحدي
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center">
              <AlertCircle size={80} className="text-red-500" />
            </div>
            <h2 className="text-3xl font-black text-slate-800">حاول مرة أخرى!</h2>
            <p className="text-xl text-slate-600 font-bold">
              لقد أجبت على {score} من أصل {lesson.quiz.length} أسئلة بشكل صحيح.
              تحتاج للدرجة النهائية للحصول على الشهادة.
            </p>
            <button 
              onClick={() => {
                setCurrentStep(0);
                setAnswers([]);
                setIsFinished(false);
              }}
              className="w-full bg-slate-800 text-white py-4 rounded-2xl font-black text-xl hover:bg-slate-900 transition-all"
            >
              إعادة المحاولة
            </button>
            <button onClick={onClose} className="text-slate-500 font-bold">إلغاء</button>
          </div>
        )}
      </div>
    );
  }

  const currentQuestion = lesson.quiz[currentStep];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-black">
            {currentStep + 1}
          </div>
          <span className="text-slate-400 font-bold">من أصل {lesson.quiz.length}</span>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X />
        </button>
      </div>

      <h3 className="text-2xl font-black text-blue-900 mb-8 leading-relaxed">
        {currentQuestion.question}
      </h3>

      <div className="space-y-4">
        {currentQuestion.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full text-right p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 transition-all font-bold text-lg group flex items-center justify-between"
          >
            <span>{option}</span>
            <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-blue-500"></div>
          </button>
        ))}
      </div>

      <div className="mt-8 h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${((currentStep) / lesson.quiz.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Quiz;
