import React from 'react';
import { Phone, MessageSquare, Globe, X } from 'lucide-react';

interface EmergencyModalProps {
  onClose: () => void;
}

const EmergencyModal: React.FC<EmergencyModalProps> = ({ onClose }) => {
  const emergencyResources = [
    {
      country: 'Brasil',
      resources: [
        { name: 'Centro de Valorização da Vida (CVV)', contact: '188', type: 'phone' },
        { name: 'CAPS (Centro de Atenção Psicossocial)', contact: 'Unidade CAPS local', type: 'local' },
        { name: 'Central de Atendimento à Mulher', contact: '180', type: 'phone' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-red-600">Recursos de Apoio de Emergência</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800 font-medium mb-2">
              🚨 Se você está em perigo imediato ou tendo pensamentos de autolesão:
            </p>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• Ligue para os serviços de emergência (192, 193, 190) imediatamente</li>
              <li>• Vá para o pronto-socorro mais próximo</li>
              <li>• Ligue para uma das linhas de crise abaixo</li>
              <li>• Fique com alguém de sua confiança até a ajuda chegar</li>
            </ul>
          </div>

          <div className="space-y-6">
            {emergencyResources.map((country, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {country.country}
                </h3>
                <div className="space-y-3">
                  {country.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                      <div className="flex-shrink-0">
                        {resource.type === 'phone' && <Phone className="h-5 w-5 text-blue-600" />}
                        {resource.type === 'text' && <MessageSquare className="h-5 w-5 text-green-600" />}
                        {resource.type === 'local' && <Globe className="h-5 w-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{resource.name}</p>
                        <p className="text-gray-600 text-sm">{resource.contact}</p>
                      </div>
                      {resource.type === 'phone' && (
                        <a
                          href={`tel:${resource.contact.replace(/[^\d]/g, '')}`}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                        >
                          Ligar Agora
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Apoio Adicional:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Entre em contato com um amigo de confiança, membro da família ou conselheiro</li>
              <li>• Contate seu médico de cuidados primários</li>
              <li>• Visite o departamento de emergência de um hospital local</li>
              <li>• Ligue para um centro de crise de saúde mental local</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;