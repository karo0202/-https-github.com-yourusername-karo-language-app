import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useEvents } from '../context/EventContext';
import { Plus, X } from 'lucide-react';

function StudyPlanner() {
  const { events, addEvent } = useEvents();
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [showModal, setShowModal] = useState(false);
  const [eventName, setEventName] = useState('');

  const handleAddEvent = () => {
    if (eventName && selectedDay) {
      addEvent({
        date: selectedDay,
        title: eventName,
      });
      setEventName('');
      setShowModal(false);
    }
  };
  
  const dayPickerStyles = `
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: #F0F0F8; }
    .rdp-day_selected { background-color: #4A46C6 !important; color: white !important; }
  `;

  return (
    <div className="max-w-4xl mx-auto">
      <style>{dayPickerStyles}</style>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Study Planner</h1>
        <p className="text-lg text-text-secondary mt-2">Organize your study sessions and track your commitments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-card">
          <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            modifiers={{ scheduled: events.map(e => new Date(e.date)) }}
            modifiersStyles={{ scheduled: { fontWeight: 'bold', color: '#4A46C6' } }}
          />
          <div className="text-center mt-4">
            <button
              onClick={() => setShowModal(true)}
              disabled={!selectedDay}
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:bg-gray-400"
            >
              <Plus size={20} />
              Add Study Session
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-card">
          <h2 className="text-2xl font-bold mb-4">Scheduled Sessions</h2>
          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div key={`${event.date.toISOString()}-${index}`} className="bg-secondary p-4 rounded-lg">
                  <p className="font-semibold text-primary">{new Date(event.date).toLocaleDateString()}</p>
                  <p className="text-text-primary">{event.title}</p>
                </div>
              ))
            ) : (
              <p className="text-text-secondary">No sessions scheduled.</p>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">New Study Session</h2>
              <button onClick={() => setShowModal(false)} className="text-text-secondary hover:text-primary">
                <X size={24} />
              </button>
            </div>
            <p className="text-text-secondary mb-4">
              Date: <span className="font-semibold text-text-primary">{selectedDay?.toLocaleDateString()}</span>
            </p>
            <input
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="e.g., 'Chapter 5 Grammar Review'"
              className="w-full p-3 border-2 border-gray-200 rounded-lg mb-6 focus:outline-none focus:border-primary"
            />
            <button
              onClick={handleAddEvent}
              className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Save Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudyPlanner;