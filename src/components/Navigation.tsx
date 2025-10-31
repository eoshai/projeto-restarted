import React, { useState } from 'react';
import { Heart, MessageCircle, Users, BookOpen, Menu, X, AlertTriangle, RotateCcw } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: 'inicio' | 'chat' | 'psicologos' | 'blog') => void;
  onEmergency: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange, onEmergency }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início', icon: RotateCcw },
    { id: 'chat', label: 'Apoio IA', icon: MessageCircle },
    { id: 'psicologos', label: 'Encontrar Terapeuta', icon: Users },
    { id: 'blog', label: 'Recursos', icon: BookOpen },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-blue-900/95 backdrop-blur-sm border-b border-blue-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => onPageChange('inicio')}
            >
              <img 
                src="/image.png" 
                alt="Restarted Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white">Restarted</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id as any)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'text-slate-300 hover:text-blue-300 hover:bg-blue-800'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Emergency Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onEmergency}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 text-sm shadow-lg"
              >
                <AlertTriangle className="h-4 w-4" />
                <span className="hidden sm:inline">Preciso de ajuda agora</span>
                <span className="sm:hidden">Emergência</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-300 hover:text-emerald-300 hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900 border-t border-blue-700">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id as any);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'text-slate-300 hover:text-blue-300 hover:bg-blue-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;