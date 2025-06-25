import React, { useState } from 'react';
import { Video, Calendar, Clock, Star, User, MessageCircle, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { liveTutoringData } from '../data/liveTutoringData';

function LiveTutoring() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Find Your Perfect Tutor</h1>
        <p className="text-lg text-text-secondary mt-2">Get one-on-one help from our expert language tutors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {liveTutoringData.map((tutor) => (
          <div key={tutor.id} className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
            <div className="p-6 text-center">
              <img src={tutor.avatar} alt={tutor.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-secondary group-hover:border-primary transition-colors" />
              <h2 className="text-2xl font-bold text-text-primary">{tutor.name}</h2>
              <div className="flex items-center justify-center mt-2">
                <Star className="w-5 h-5 text-accent" fill="currentColor" />
                <span className="ml-1 font-semibold text-text-primary">{tutor.rating}</span>
                <span className="text-text-secondary ml-2">({tutor.reviews} reviews)</span>
              </div>
            </div>

            <div className="p-6 bg-secondary">
              <h3 className="font-semibold text-text-primary mb-3 text-center">Specialties:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {tutor.specialties.map((specialty, index) => (
                  <span key={index} className="px-3 py-1 bg-white text-primary text-sm font-semibold rounded-full shadow-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex flex-col items-center">
               <p className="text-2xl font-bold text-text-primary">${tutor.pricePerHour}<span className="text-base font-medium text-text-secondary">/hr</span></p>
               <button className="mt-4 w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                  Book Session
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveTutoring;