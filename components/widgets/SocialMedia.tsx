
import React from 'react';
import { SOCIAL_LINKS } from '../../data';

const SocialMedia: React.FC = () => {
  const platforms = [
    { name: 'يوتيوب', url: SOCIAL_LINKS.youtube, icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png' },
    { name: 'تيك توك', url: SOCIAL_LINKS.tiktok, icon: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png' },
    { name: 'انستجرام', url: SOCIAL_LINKS.instagram, icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png' },
    { name: 'فيس بوك', url: SOCIAL_LINKS.facebook, icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' },
    { name: 'تويتر', url: SOCIAL_LINKS.twitter, icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
    { name: 'واتساب', url: SOCIAL_LINKS.whatsapp, icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png' },
    { name: 'سناب شات', url: SOCIAL_LINKS.snapchat, icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111615.png' },
    { name: 'لينكد ان', url: SOCIAL_LINKS.linkedin, icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
    { name: 'قناة واتساب', url: SOCIAL_LINKS.whatsappChannel, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png' }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {platforms.map((p) => (
        <a 
          key={p.name} 
          href={p.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 group"
          title={p.name}
        >
          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white group-hover:shadow-md border border-slate-100">
            <img src={p.icon} alt={p.name} className="w-6 h-6 object-contain" />
          </div>
          <span className="text-[10px] font-bold text-slate-500 group-hover:text-blue-600">{p.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
