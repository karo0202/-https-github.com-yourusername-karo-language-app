import { useProgress } from '../context/ProgressContext';
import { useEvents } from '../context/EventContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart2, CheckCircle, Calendar } from 'lucide-react';

function ProgressTracking() {
  const { quizHistory } = useProgress();
  const { events } = useEvents();

  const totalQuizzes = quizHistory.length;
  const averageScore = totalQuizzes > 0 
    ? (quizHistory.reduce((acc, h) => acc + (h.score / h.totalQuestions) * 100, 0) / totalQuizzes).toFixed(0)
    : 0;
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).length;

  const chartData = quizHistory.map((h, index) => ({
    name: `Quiz ${index + 1}`,
    score: (h.score / h.totalQuestions) * 100,
    date: new Date(h.date).toLocaleDateString(),
  }));

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Your Progress</h1>
        <p className="text-lg text-text-secondary mt-2">Track your growth and celebrate your achievements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-card flex items-center">
          <div className="p-3 bg-secondary rounded-full mr-4">
            <BarChart2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-text-secondary">Quizzes Taken</p>
            <p className="text-2xl font-bold">{totalQuizzes}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card flex items-center">
          <div className="p-3 bg-secondary rounded-full mr-4">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-text-secondary">Average Score</p>
            <p className="text-2xl font-bold">{averageScore}%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card flex items-center">
          <div className="p-3 bg-secondary rounded-full mr-4">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-text-secondary">Upcoming Events</p>
            <p className="text-2xl font-bold">{upcomingEvents}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-card">
        <h2 className="text-2xl font-bold mb-6 text-center">Quiz Score History</h2>
        {quizHistory.length > 0 ? (
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="date" stroke="#6B6B80" />
                <YAxis stroke="#6B6B80" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e0e0e0',
                    borderRadius: '1rem',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#4A46C6" strokeWidth={2} activeDot={{ r: 8 }} name="Score (%)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-secondary">No quiz data available. Take a quiz to see your progress!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressTracking;