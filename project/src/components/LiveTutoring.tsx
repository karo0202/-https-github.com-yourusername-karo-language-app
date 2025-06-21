import React, { useState } from 'react';
import { Video, Calendar, Clock, Star, User, MessageCircle, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LiveTutoringProps {
  userLevel: string;
}

function LiveTutoring({ userLevel }: LiveTutoringProps) {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  const tutors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviews: 234,
      specialties: ['Business English', 'Conversation', 'IELTS Prep'],
      languages: ['English (Native)', 'Spanish'],
      experience: '8 years',
      price: 25,
      availability: 'Available now',
      description: 'Experienced English teacher specializing in business communication and exam preparation.',
      country: 'United States'
    },
    {
      id: 2,
      name: 'James Wilson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      reviews: 189,
      specialties: ['Grammar', 'Pronunciation', 'Academic Writing'],
      languages: ['English (Native)', 'French'],
      experience: '6 years',
      price: 22,
      availability: 'Next available: 2:00 PM',
      description: 'Patient and encouraging tutor focused on grammar fundamentals and clear pronunciation.',
      country: 'United Kingdom'
    },
    {
      id: 3,
      name: 'Emily Chen',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviews: 312,
      specialties: ['Conversation', 'Cultural English', 'Beginner Friendly'],
      languages: ['English (Native)', 'Mandarin', 'Japanese'],
      experience: '10 years',
      price: 28,
      availability: 'Available now',
      description: 'Multilingual tutor with expertise in helping beginners build confidence in speaking.',
      country: 'Canada'
    }
  ];

  const upcomingSessions = [
    {
      tutor: 'Sarah Johnson',
      date: 'Today',
      time: '3:00 PM - 4:00 PM',
      topic: 'Business Presentation Skills',
      type: 'Video Call'
    },
    {
      tutor: 'James Wilson',
      date: 'Tomorrow',
      time: '10:00 AM - 11:00 AM',
      topic: 'Grammar Review Session',
      type: 'Video Call'
    }
  ];

  const sessionHistory = [
    {
      tutor: 'Emily Chen',
      date: 'Yesterday',
      duration: '60 min',
      topic: 'Conversation Practice',
      rating: 5,
      feedback: 'Great session! Emily helped me improve my pronunciation significantly.'
    },
    {
      tutor: 'Sarah Johnson',
      date: '3 days ago',
      duration: '45 min',
      topic: 'Business Email Writing',
      rating: 5,
      feedback: 'Very professional and helpful. Learned practical business communication skills.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Live Tutoring</h2>
          <p className="text-gray-600 mt-2">Connect with certified English tutors for personalized learning</p>
        </div>
        
        <motion.button
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Video className="w-5 h-5" />
          <span>Instant Session</span>
        </motion.button>
      </motion.div>

      {/* Upcoming Sessions */}
      {upcomingSessions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Sessions</h3>
          <div className="space-y-3">
            {upcomingSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{session.topic}</h4>
                    <p className="text-sm text-gray-600">
                      with {session.tutor} • {session.date} • {session.time}
                    </p>
                  </div>
                </div>
                <motion.button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Session
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Available Tutors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Available Tutors</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedTutor(tutor)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Tutor Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{tutor.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>{tutor.country}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{tutor.rating}</span>
                    <span className="text-sm text-gray-500">({tutor.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Tutor Info */}
              <p className="text-sm text-gray-600 mb-4">{tutor.description}</p>

              {/* Specialties */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-700 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {tutor.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-700 mb-2">Languages:</p>
                <p className="text-sm text-gray-600">{tutor.languages.join(', ')}</p>
              </div>

              {/* Availability & Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="text-sm font-medium">{tutor.experience}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Per hour</p>
                  <p className="text-lg font-bold text-green-600">${tutor.price}</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-green-600 font-medium mb-3">{tutor.availability}</p>
                <motion.button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowBooking(true);
                    setSelectedTutor(tutor);
                  }}
                >
                  Book Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Session History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Sessions</h3>
        
        <div className="space-y-4">
          {sessionHistory.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{session.topic}</h4>
                  <p className="text-sm text-gray-600">
                    with {session.tutor} • {session.date} • {session.duration}
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(session.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                "{session.feedback}"
              </p>
              
              <div className="flex items-center space-x-4 mt-3">
                <motion.button
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Book Again
                </motion.button>
                <motion.button
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  View Recording
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default LiveTutoring;