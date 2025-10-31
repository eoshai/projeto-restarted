import React, { useState } from 'react';
import { Heart, MessageCircle, Users, BookOpen, AlertTriangle, RotateCcw } from 'lucide-react';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';
import PsychologistsPage from './components/PsychologistsPage';
import BlogPage from './components/BlogPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import EmergencyModal from './components/EmergencyModal';
import ApiKeySetup from './components/ApiKeySetup';

type Page = 'inicio' | 'chat' | 'psicologos' | 'blog';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('inicio');
  const [showEmergency, setShowEmergency] = useState(false);
  const [apiKeyConfigured, setApiKeyConfigured] = useState(() => {
    return !!(import.meta.env.VITE_GROQ_API_KEY || localStorage.getItem('groq_api_key'));
  });

  const handlePageChange = (page: Page) => {
    // If trying to access chat without API key, show setup
    if (page === 'chat' && !apiKeyConfigured) {
      // Will be handled by the conditional rendering below
    }
    setCurrentPage(page);
  };

  // Show API key setup if accessing chat without configured key
  if (currentPage === 'chat' && !apiKeyConfigured) {
    return <ApiKeySetup onApiKeySet={() => setApiKeyConfigured(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <Navigation 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        onEmergency={() => setShowEmergency(true)}
      />
      
      <main className="pt-16">
        {currentPage === 'inicio' && <HomePage onStartChat={() => setCurrentPage('chat')} />}
        {currentPage === 'chat' && <ChatPage />}
        {currentPage === 'psicologos' && <PsychologistsPage />}
        {currentPage === 'blog' && <BlogPage />}
      </main>

      <Footer />

      {showEmergency && (
        <EmergencyModal onClose={() => setShowEmergency(false)} />
      )}
    </div>
  );
}

export default App;