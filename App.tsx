
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AttendanceTracker from './components/AttendanceTracker';
import { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.DASHBOARD);

  const renderContent = () => {
    switch (activeView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.TAKE_ATTENDANCE:
        return <AttendanceTracker />;
      case View.HISTORY:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <i className="fas fa-folder-open text-6xl mb-4 opacity-20"></i>
            <p className="text-lg font-medium">Session History is coming soon.</p>
            <p className="text-sm">You can currently view insights on the Dashboard.</p>
          </div>
        );
      case View.SETTINGS:
        return (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xl font-bold border-b pb-4">General Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">Google Sheets Auto-Sync</p>
                  <p className="text-sm text-slate-500">Automatically save data every 5 minutes</p>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">AI Insights</p>
                  <p className="text-sm text-slate-500">Enable Gemini to analyze student trends</p>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                Save Preferences
              </button>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeView={activeView} onViewChange={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
