import React from 'react';

interface PremiumModalProps {
  open: boolean;
  onClose: () => void;
  feature: string;
  description: string;
  benefits: string[];
  upgradeAction: () => Promise<void>;
  isPremium: boolean;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ open, onClose, feature, description, benefits, upgradeAction, isPremium }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl">&times;</button>
        <h2 className="text-2xl font-bold text-primary mb-2">Unlock Premium: {feature}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="mb-6 list-disc pl-6 text-gray-600">
          {benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        {isPremium ? (
          <div className="w-full text-green-600 font-bold text-center py-3">Premium Unlocked!</div>
        ) : (
          <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors" onClick={upgradeAction}>Upgrade to Premium</button>
        )}
      </div>
    </div>
  );
};

export default PremiumModal; 