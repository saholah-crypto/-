
import React from 'react';
import { Flag } from 'lucide-react';

const IdentityWidget: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-6 rounded-3xl shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Flag size={20} />
        <h3 className="text-xl font-black">هويتي العمانية</h3>
      </div>
      <img 
        src="https://picsum.photos/id/1015/300/200" 
        alt="Oman Identity" 
        className="w-full h-32 object-cover rounded-xl mb-4 border-2 border-emerald-400" 
      />
      <p className="text-sm font-semibold leading-relaxed">
        سلطنة عمان تاريخ عريق وحاضر مشرق. نعتز بهويتنا العمانية وقيمنا الأصيلة في كل مكان وزمان.
      </p>
    </div>
  );
};

export default IdentityWidget;
