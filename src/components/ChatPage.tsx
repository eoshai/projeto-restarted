import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, Save, AlertCircle, Wifi, WifiOff, RotateCcw } from 'lucide-react';
import { groqService } from '../services/groqService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Olá! Sou o Restarted, seu companheiro para recomeçar. Estou aqui para te apoiar nessa jornada de renovação e crescimento. Posso te ajudar com estratégias práticas, orientação empática e te guiar sobre quando buscar ajuda profissional. Todo recomeço é possível - como você está se sentindo hoje?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [apiError, setApiError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setApiError(false);

    try {
      const aiResponseText = await groqService.sendMessage(inputText);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setApiError(true);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Desculpe, estou tendo dificuldades para me conectar no momento. Mas estou aqui para você. Pode tentar novamente ou, se for urgente, por favor entre em contato com o CVV no 188.",
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    groqService.clearHistory();
    setMessages([
      {
        id: '1',
        text: "Olá! Sou o MenteCuidado, seu companheiro de apoio à saúde mental. Como você está se sentindo hoje?",
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Chat Header */}
      <div className="bg-blue-800/90 backdrop-blur-sm border-b border-blue-700 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/image.png" 
              alt="Restarted Logo" 
              className="w-8 h-8 object-contain"
            />
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-semibold text-white">Restarted IA</h1>
                {isOnline ? (
                  <Wifi className="h-4 w-4 text-green-500" />
                ) : (
                  <WifiOff className="h-4 w-4 text-red-500" />
                )}
                {apiError && (
                  <AlertCircle className="h-4 w-4 text-yellow-500" title="Problemas de conexão com a IA" />
                )}
              </div>
              <p className="text-sm text-slate-400">
                {isOnline ? 'Conectado e pronto para ajudar' : 'Modo offline - funcionalidade limitada'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearChat}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              title="Limpar conversa"
            >
              <RefreshCw className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-blue-500'
                }`}
              >
                {message.sender === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <RotateCcw className="h-4 w-4" />
                )}
              </div>
              
              <div
                className={`max-w-2xl p-4 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white rounded-br-md'
                    : 'bg-slate-700 text-slate-100 rounded-bl-md shadow-sm border border-slate-600'
                }`}
              >
                <p className="leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center">
                <RotateCcw className="h-4 w-4" />
              </div>
              <div className="bg-slate-700 p-4 rounded-2xl rounded-bl-md shadow-sm border border-slate-600">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-blue-800/90 backdrop-blur-sm border-t border-blue-700 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end space-x-3">
            <div className="flex-1 relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem aqui..."
                className="w-full p-4 pr-12 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none min-h-[50px] max-h-32"
                rows={1}
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="absolute right-2 bottom-2 p-2 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 text-white rounded-xl transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2 text-center">
            Esta IA fornece orientação de apoio, mas não substitui cuidados profissionais. Em emergências, ligue 188 (CVV).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;