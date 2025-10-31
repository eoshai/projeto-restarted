import React from 'react';
import { MessageCircle, Heart, Shield, Users, ArrowRight, RotateCcw } from 'lucide-react';

interface HomePageProps {
  onStartChat: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStartChat }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative mx-auto mb-6 w-24 h-24">
              <img 
                src="/image.png" 
                alt="Restarted Logo" 
                className="w-24 h-24 object-contain mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Recomeçar é Possível
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Reiniciando seu bem-estar. Apoio empático que conecta coração e mente 
              para reconstruir sua vida com esperança e equilíbrio.
            </p>
          </div>

          <button
            onClick={onStartChat}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
          >
            <RotateCcw className="h-6 w-6" />
            <span>Comece Seu Recomeço</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Sem necessidade de cadastro • Completamente anônimo • Disponível 24/7
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Como Te Ajudamos a Recomeçar
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-700/30 hover:bg-blue-700/50 transition-colors duration-200 border border-blue-600">
              <MessageCircle className="h-12 w-12 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Companheiro IA</h3>
              <p className="text-slate-300 leading-relaxed">
                Converse com nossa IA empática que te ajuda a dar os primeiros passos 
                para recomeçar, com estratégias práticas e apoio constante.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-700/30 hover:bg-blue-700/50 transition-colors duration-200 border border-blue-600">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Rede Profissional</h3>
              <p className="text-slate-300 leading-relaxed">
                Conecte-se com profissionais especializados em recomeços, 
                que entendem sua jornada e podem te guiar com segurança.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-700/30 hover:bg-blue-700/50 transition-colors duration-200 border border-blue-600">
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Espaço Seguro</h3>
              <p className="text-slate-300 leading-relaxed">
                Um ambiente seguro e sem julgamentos onde você pode compartilhar 
                suas dificuldades e construir uma nova versão de si mesmo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Pronto para Recomeçar?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Todo recomeço começa com um primeiro passo. Você não precisa fazer isso sozinho.
          </p>
          <button
            onClick={onStartChat}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Comece Seu Recomeço Agora
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-amber-900/30 border-t border-amber-700/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <p className="text-amber-200 font-medium">
            ⚠️ Importante: Este site não substitui o tratamento profissional. 
            Por favor, sempre busque ajuda especializada quando necessário.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;