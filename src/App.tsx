import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// ==========================================
// 1. IMPORT YOUR THREE ASSIGNMENTS HERE
// ==========================================
import Assignment1 from './components/StudentAttendanceTracker';
import Assignment2 from './components/ShoppingQuantityTracker';
import Assignment3 from './components/WorkoutTracker';

// ==========================================
// 2. MAIN APP COMPONENT
// ==========================================
const App: React.FC = () => {
  // State to track active assignment tab
  const [activeTab, setActiveTab] = useState<'assignment1' | 'assignment2' | 'assignment3'>('assignment1');
  
  // State to track mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabChange = (tab: 'assignment1' | 'assignment2' | 'assignment3') => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Close mobile menu when a tab is selected
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Assignment Dashboard
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2">
              <button
                onClick={() => handleTabChange('assignment1')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'assignment1'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Assignment 1
              </button>

              <button
                onClick={() => handleTabChange('assignment2')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'assignment2'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Assignment 2
              </button>

              <button
                onClick={() => handleTabChange('assignment3')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'assignment3'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Assignment 3
              </button>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-slate-800 bg-slate-900/95 px-4 pt-3 pb-4 flex flex-col space-y-2">
            <button
              onClick={() => handleTabChange('assignment1')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'assignment1'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Assignment 1
            </button>

            <button
              onClick={() => handleTabChange('assignment2')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'assignment2'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Assignment 2
            </button>

            <button
              onClick={() => handleTabChange('assignment3')}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'assignment3'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Assignment 3
            </button>
          </nav>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'assignment1' && <Assignment1 />}
        {activeTab === 'assignment2' && <Assignment2 />}
        {activeTab === 'assignment3' && <Assignment3 />}
      </main>
    </div>
  );
};

export default App;