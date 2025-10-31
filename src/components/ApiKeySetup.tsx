import React, { useState, useEffect } from 'react';
import { Key, Eye, EyeOff, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

interface ApiKeySetupProps {
  onApiKeySet: () => void;
}

const ApiKeySetup: React.FC<ApiKeySetupProps> = ({ onApiKeySet }) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<'valid' | 'invalid' | null>(null);

  useEffect(() => {
    // Check if API key is already set
    const existingKey = localStorage.getItem('groq_api_key');
    if (existingKey) {
      setApiKey(existingKey);
      onApiKeySet();
    }
  }, [onApiKeySet]);

  const validateAndSaveApiKey = async () => {
    if (!apiKey.trim()) return;

    setIsValidating(true);
    setValidationResult(null);

    try {
      // Store the API key temporarily for validation
      const originalKey = import.meta.env.VITE_GROQ_API_KEY;
      
      // Set the key in localStorage for the service to use
      localStorage.setItem('groq_api_key', apiKey.trim());
      
      // Try to make a simple API call to validate
      const response = await fetch('https://api.groq.com/openai/v1/models', {
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setValidationResult('valid');
        onApiKeySet();
      } else {
        setValidationResult('invalid');
        localStorage.removeItem('groq_api_key');
      }
    } catch (error) {
      console.error('Erro ao validar API key:', error);
      setValidationResult('invalid');
      localStorage.removeItem('groq_api_key');
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="bg-slate-800 rounded-2xl shadow-xl max-w-md w-full p-8 border border-slate-700">
        <div className="text-center mb-8">
          <Key className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Configurar IA</h1>
          <p className="text-slate-300">
            Para usar o chat com IA, você precisa configurar sua chave da API Groq
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Chave da API Groq
            </label>
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="gsk_..."
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-12"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
              >
                {showKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            
            {validationResult === 'valid' && (
              <div className="flex items-center space-x-2 mt-2 text-emerald-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Chave válida!</span>
              </div>
            )}
            
            {validationResult === 'invalid' && (
              <div className="flex items-center space-x-2 mt-2 text-red-400">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">Chave inválida. Verifique e tente novamente.</span>
              </div>
            )}
          </div>

          <button
            onClick={validateAndSaveApiKey}
            disabled={!apiKey.trim() || isValidating}
            className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 text-white py-3 rounded-lg font-medium transition-colors"
          >
            {isValidating ? 'Validando...' : 'Salvar e Continuar'}
          </button>

          <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
            <h3 className="font-medium text-emerald-300 mb-2">Como obter sua chave da API:</h3>
            <ol className="text-sm text-slate-300 space-y-1">
              <li>1. Acesse <a href="https://console.groq.com" target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center">console.groq.com <ExternalLink className="h-3 w-3 ml-1" /></a></li>
              <li>2. Faça login ou crie uma conta gratuita</li>
              <li>3. Vá para "API Keys" no menu</li>
              <li>4. Clique em "Create API Key"</li>
              <li>5. Copie a chave e cole aqui</li>
            </ol>
          </div>

          <div className="text-xs text-slate-400 text-center">
            Sua chave é armazenada localmente no seu navegador e nunca é compartilhada.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeySetup;