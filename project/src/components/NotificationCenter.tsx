import React from 'react';
import { X, Bell, CheckCircle, Clock, Trophy, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NotificationCenter() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Notification Center</h1>
      <p>Your latest updates and reminders will appear here.</p>
    </div>
  );
}

export default NotificationCenter;