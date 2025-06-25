import React from 'react';
import { X, Bell, CheckCircle, Clock, Trophy, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NotificationCenter() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Notifications</h1>
        <p className="text-lg text-text-secondary mt-2">Stay updated with your learning progress and community news.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-card p-8 text-center">
        <p className="text-text-secondary">You have no new notifications.</p>
      </div>
    </div>
  );
}

export default NotificationCenter;