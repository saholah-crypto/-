
import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 'product-rule',
    title: 'مشتقة حاصل ضرب دالتين',
    mathFunNote: 'https://drive.google.com/file/d/1frq_sUQegu6NTTNjP6GBk08GohtijFX2/view?usp=drivesdk',
    videoUrl: 'https://www.youtube.com/embed/yD3Kb3ZMAK8',
    studentBook: 'https://drive.google.com/file/d/1y9vIN5fzAcf94IGx3IOSKAdP4rzJPX9y/view?usp=drivesdk',
    activityBook: 'https://drive.google.com/file/d/1VVoIUqCsCPatisApPlnaAE1T-1Z2lW0n/view?usp=drivesdk',
    mindMap: 'https://drive.google.com/file/d/1OWKGHcwOr5vT6Cr8f2tMiWIndkN2bSI1/view?usp=drivesdk',
    games: {
      testYourself: 'https://ta.padlet.com/multiple-choice/60Km46y1p7/play',
      matching: 'https://ta.padlet.com/matching/94rwn3bXKq/play',
      flipCards: 'https://ta.padlet.com/flashcards/Rej9l1AWrd/play',
    },
    quiz: [
      { question: 'ما هي مشتقة حاصل ضرب دالتين ص = ع × ل؟', options: ['ع\' ل + ع ل\'', 'ع\' ل - ع ل\'', 'ع\' / ل\'', 'ع + ل'], correctAnswer: 0 },
      { question: 'إذا كانت ص = س × جا(س)، فإن ص\' تساوي:', options: ['جا(س) + س جتا(س)', 'جتا(س)', 'س جتا(س)', '1'], correctAnswer: 0 },
      { question: 'مشتقة س² في س³ هي:', options: ['5 س⁴', '6 س⁵', 'س⁵', '2س'], correctAnswer: 0 },
      { question: 'عند اشتقاق دالة مضروبة في ثابت ج، فإن المشتقة هي:', options: ['ج × مشتقة الدالة', 'صفر', 'الثابت فقط', 'الدالة فقط'], correctAnswer: 0 },
      { question: 'قاعدة الضرب تستخدم عندما:', options: ['تكون الدالة حاصل ضرب دالتين قابلتين للاشتقاق', 'تكون الدالة كسرية', 'تكون الدالة ثابتة', 'لا شيء مما سبق'], correctAnswer: 0 }
    ],
    identity: {
      info: 'سلطنة عمان هي أول دولة عربية تشرق عليها الشمس، وتتميز بتنوعها الجغرافي الفريد.',
      image: 'https://picsum.photos/id/1018/400/300'
    }
  },
  {
    id: 'quotient-rule',
    title: 'مشتقة خارج قسمة دالتين',
    mathFunNote: 'https://drive.google.com/file/d/1u_rXwKWe3SX2yfp7DaRNKjftaueRvlFP/view?usp=drivesdk',
    videoUrl: 'https://www.youtube.com/embed/_F3eVIvbmEw',
    studentBook: 'https://drive.google.com/file/d/1_e9U7s_QXaVuuyqHduCH1DHsFza44Whk/view?usp=drivesdk',
    activityBook: 'https://drive.google.com/file/d/1C72TF6xi-oMx3Fq-BpAyzisnwpaSKQ-u/view?usp=drivesdk',
    mindMap: 'https://drive.google.com/file/d/1rWcVrjcptmmB31IOTne6Bj-6IeWVTahj/view?usp=drivesdk',
    games: {
      testYourself: 'https://ta.padlet.com/multiple-choice/v5j1zJPgpW/play',
      matching: 'https://ta.padlet.com/matching/zqrv2BbVr1/play',
      flipCards: 'https://ta.padlet.com/flashcards/aBKQgddmjZ/play',
    },
    quiz: [
      { question: 'مشتقة خارج قسمة دالتين (البسط/المقام) تبدأ بـ:', options: ['(مشتقة البسط × المقام)', '(مشتقة المقام × البسط)', 'البسط فقط', 'المقام فقط'], correctAnswer: 0 },
      { question: 'المقام في مشتقة خارج القسمة يكون دائماً:', options: ['مربع المقام الأصلي', 'نفس المقام', 'جذر المقام', 'صفر'], correctAnswer: 0 },
      { question: 'إذا كانت ص = 1/س، فإن ص\' هي:', options: ['-1/س²', '1/س²', 'لو س', 'س'], correctAnswer: 0 },
      { question: 'العملية بين (مشتقة البسط × المقام) و (مشتقة المقام × البسط) هي:', options: ['طرح', 'جمع', 'ضرب', 'قسمة'], correctAnswer: 0 },
      { question: 'مشتقة س/س هي:', options: ['صفر', '1', 'س', '1/س'], correctAnswer: 0 }
    ],
    identity: {
      info: 'قلعة بهلاء في عمان مسجلة ضمن قائمة التراث العالمي لليونسكو منذ عام 1987.',
      image: 'https://picsum.photos/id/1019/400/300'
    }
  },
  {
    id: 'exponential-rule',
    title: 'مشتقة الدالة الأسية',
    mathFunNote: 'https://drive.google.com/file/d/1tgazA5DPOfN3syRRvOwY_HbcOT5YwiJn/view?usp=drivesdk',
    videoUrl: 'https://www.youtube.com/embed/cbZ5MIa53Nk',
    studentBook: 'https://drive.google.com/file/d/14oLtztTZJ6pA4KRFxm29xZ3mI8elGk_z/view?usp=drivesdk',
    activityBook: 'https://drive.google.com/file/d/1YAdds-oZCiGHBjA-J3qQuh7DIWY9ZdQy/view?usp=drivesdk',
    mindMap: 'https://drive.google.com/file/d/1_Xk2TLQL8OtPp1euTCk_hny-Rz2C0Xll/view?usp=drivesdk',
    games: {
      testYourself: 'https://ta.padlet.com/multiple-choice/zVKZgDqBrm/play',
      matching: 'https://ta.padlet.com/matching/AXpGnkJ2jw/play',
      flipCards: 'https://ta.padlet.com/flashcards/6gjDOaaXrD/play',
    },
    quiz: [
      { question: 'مشتقة الدالة هـ^س هي:', options: ['هـ^س', 'س هـ^(س-1)', 'لو هـ', '1/س'], correctAnswer: 0 },
      { question: 'مشتقة هـ^(2س) هي:', options: ['2 هـ^(2س)', 'هـ^(2س)', '2س', '2'], correctAnswer: 0 },
      { question: 'الدالة الأسية د(س) = أ^س مشتقتها تشمل ضربها في:', options: ['لو أ', 'أ', 'س', '1'], correctAnswer: 0 },
      { question: 'مشتقة 5^س هي:', options: ['5^س لو 5', 'س 5^(س-1)', '5^س', 'لو 5'], correctAnswer: 0 },
      { question: 'هـ تسمى بالثابت:', options: ['النيبيري', 'الفيزيائي', 'الهندسي', 'العشوائي'], correctAnswer: 0 }
    ],
    identity: {
      info: 'يعد الجبل الأخضر في سلطنة عمان من أجمل المناطق السياحية وتشتهر بزراعة الورد والرمان.',
      image: 'https://picsum.photos/id/1020/400/300'
    }
  },
  {
    id: 'ln-rule',
    title: 'مشتقة دالة اللوغاريتم الطبيعي',
    mathFunNote: 'https://drive.google.com/file/d/1EWbCxVI3CyDp8kLlvoievWOWdEFhC0aC/view?usp=drivesdk',
    videoUrl: 'https://www.youtube.com/embed/MDlG_MkSfSI',
    studentBook: 'https://drive.google.com/file/d/1L22onE_31Jy6OFuz8HW7SVsj_rqqdi-F/view?usp=drivesdk',
    activityBook: 'https://drive.google.com/file/d/1UhY_iAf2N9XEkHkxIQWZftjsTClEtbsi/view?usp=drivesdk',
    mindMap: 'https://drive.google.com/file/d/1a2lzbGZQFV2YASZ2yK3OeCSVpKAcc_rc/view?usp=drivesdk',
    games: {
      testYourself: 'https://ta.padlet.com/multiple-choice/yGjxkqExr6/play',
      matching: 'https://ta.padlet.com/matching/WvKPRDVWjg/play',
      flipCards: 'https://ta.padlet.com/flashcards/M5K5N99orY/play',
    },
    quiz: [
      { question: 'مشتقة لو س هي:', options: ['1/س', 'س', 'لو س', 'هـ^س'], correctAnswer: 0 },
      { question: 'مشتقة لو (س² + 1) هي:', options: ['2س / (س² + 1)', '1 / (س² + 1)', '2س', 'لو 2س'], correctAnswer: 0 },
      { question: 'لو (هـ) تساوي:', options: ['1', 'صفر', 'هـ', 'س'], correctAnswer: 0 },
      { question: 'مشتقة لو (أ س) حيث أ ثابت هي:', options: ['1/س', 'أ/س', '1/أ س', 'أ'], correctAnswer: 0 },
      { question: 'قاعدة اشتقاق اللوغاريتم هي مشتقة ما بداخل اللوغاريتم مقسوماً على:', options: ['ما بداخل اللوغاريتم نفسه', 'مربع ما بداخل اللوغاريتم', 'اللوغاريتم نفسه', '1'], correctAnswer: 0 }
    ],
    identity: {
      info: 'الخنجر العماني هو رمز الأصالة والمواطنة، ويوضع في شعار الدولة الرسمي.',
      image: 'https://picsum.photos/id/1021/400/300'
    }
  },
  {
    id: 'trig-rule',
    title: 'مشتقة الدوال المثلثية',
    mathFunNote: 'https://drive.google.com/file/d/1xzPoB08dM_nCqKke6dYyMhsgrHf30j6d/view?usp=drivesdk',
    videoUrl: 'https://www.youtube.com/embed/XVv1NkbC-So',
    studentBook: 'https://drive.google.com/file/d/1pUqnuUbzS0vJWC2Fyf4-sHTGEoaPS23T/view?usp=drivesdk',
    activityBook: 'https://drive.google.com/file/d/1iFDbotoL2rpFSAH9kU6JVs_B_TA5KX-_/view?usp=drivesdk',
    mindMap: 'https://drive.google.com/file/d/1t8NLNWOwU1xaQdFYqBvZ6ooic4_H-4RE/view?usp=drivesdk',
    games: {
      testYourself: 'https://ta.padlet.com/multiple-choice/zVKZgDyBrm/play',
      matching: 'https://ta.padlet.com/matching/Vxjd8W1qjD/play',
      flipCards: 'https://ta.padlet.com/flashcards/nwrWgDg0rl/play',
    },
    quiz: [
      { question: 'مشتقة جا س هي:', options: ['جتا س', '- جتا س', 'ظا س', 'قا² س'], correctAnswer: 0 },
      { question: 'مشتقة جتا س هي:', options: ['- جا س', 'جا س', 'قتا س', 'ظتا س'], correctAnswer: 0 },
      { question: 'مشتقة ظا س هي:', options: ['قا² س', 'قتا² س', 'جتا س', 'ظتا س'], correctAnswer: 0 },
      { question: 'مشتقة جا (2س) هي:', options: ['2 جتا (2س)', 'جتا (2س)', '-2 جتا (2س)', '2 جا (2س)'], correctAnswer: 0 },
      { question: 'أي دالة مثلثية تبدأ بحرف "ت" مشتقتها تكون مسبوقة بـ:', options: ['إشارة سالبة', 'إشارة موجبة', 'ثابت', 'صفر'], correctAnswer: 0 }
    ],
    identity: {
      info: 'دار الأوبرا السلطانية مسقط هي أول دار أوبرا في منطقة الخليج العربي وتتميز بتصميم معماري فريد.',
      image: 'https://picsum.photos/id/1022/400/300'
    }
  }
];

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@.math.fun0?_r=1&_t=ZS-91dgpyJgeYB',
  facebook: 'https://www.facebook.com/share/1BqRrjbgXj/',
  instagram: 'https://www.instagram.com/hjrs7947?igsh=aXUwd2hsOXlndXh1',
  twitter: 'https://x.com/AhmedHa68696050?t=-trQ92za5HfS2ZPuCZcnjA&s=09',
  whatsapp: 'https://wa.me/96878399108',
  linkedin: 'https://www.linkedin.com/in/أحمد-هجرس-30a765204?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  snapchat: 'https://www.snapchat.com/add/mtlrydyt25?share_id=dPJS5jVsleI&locale=ar-OM',
  whatsappChannel: 'https://whatsapp.com/channel/0029VbCCuHlISTkQFAZP6T0B',
  youtube: 'https://youtube.com/c/saholah?sub_confirmation=1'
};

export const LOGO_URL = 'https://i.ibb.co/r2kqp3qK/9753.jpg';
