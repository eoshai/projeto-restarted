import React from 'react';
import { Heart, Mail, Phone, MapPin, Shield, FileText, RotateCcw } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white border-t border-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/image.png" 
                alt="Restarted Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold">Restarted</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Reiniciando seu bem-estar com orientação empática que conecta coração e mente, 
              oferecendo recursos práticos e conexões com profissionais especializados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">Chat de Apoio IA</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">Encontrar um Terapeuta</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">Recursos para Recomeçar</a></li>
              <li><a href="#" className="text-slate-400 hover:text-emerald-300 transition-colors">Apoio de Crise</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2025 Restarted
            </div>
            
            {/* Important Disclaimer */}
            <div className="text-center md:text-right">
              <div className="bg-amber-900/30 border border-amber-600/50 rounded-lg px-4 py-2">
                <p className="text-amber-200 text-sm font-medium">
                  ⚠️ Este site não substitui o tratamento profissional.
                </p>
                <p className="text-amber-300 text-xs mt-1">
                  Por favor, sempre busque ajuda especializada quando necessário.
                </p>
              </div>
            </div>
          </div>

          {/* Crisis Resources */}
          <div className="mt-6 p-4 bg-red-900/30 border border-red-600/50 rounded-lg">
            <p className="text-red-200 font-medium text-sm mb-2">
              🚨 Recursos de Crise - Disponível 24/7
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <span className="text-red-300">
                Brasil: Centro de Valorização da Vida (CVV) - 188
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;