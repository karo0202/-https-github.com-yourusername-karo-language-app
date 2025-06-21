import React, { useState } from 'react';
import { MessageCircle, Users, Trophy, ThumbsUp, Share, BookOpen, Globe, Flame, MessageSquare, PlusCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { communityData } from '../data/communityData';

function CommunityHub() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Community Hub</h1>
        <p className="text-lg text-text-secondary mt-2">Connect with fellow learners and share your progress.</p>
      </div>

      <div className="space-y-6">
        {communityData.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-card p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-text-primary">{post.author}</h3>
                <p className="text-sm text-text-secondary">{post.timestamp}</p>
              </div>
            </div>
            
            <p className="text-text-primary mb-4">{post.content}</p>

            <div className="flex items-center text-text-secondary space-x-6">
              <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                <ThumbsUp size={18} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                <MessageSquare size={18} />
                <span>{post.replies}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityHub;