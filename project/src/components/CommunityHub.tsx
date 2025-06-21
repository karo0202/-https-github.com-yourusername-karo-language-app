import React, { useState } from 'react';
import { MessageCircle, Users, Trophy, ThumbsUp, Share, BookOpen, Globe, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

function CommunityHub() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Community Hub</h1>
      <p>Connect with other learners, join discussion groups, and find language partners here.</p>
    </div>
  );
}

export default CommunityHub;