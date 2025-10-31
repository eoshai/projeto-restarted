import React from 'react';
import { Calendar, MessageSquare, Video, Star, MapPin, Clock } from 'lucide-react';

interface Psychologist {
  id: string;
  name: string;
  photo: string;
  specialties: string[];
  experience: string;
  location: string;
  rating: number;
  price: string;
  description: string;
  availableSlots: string[];
}

const psychologists: Psychologist[] = [
  {
    id: '1',
    name: 'Dra. Sarah Johnson',
    photo: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    specialties: ['Transtornos de Ansiedade', 'Depressão', 'Terapia Cognitivo-Comportamental'],
    experience: '8 anos',
    location: 'São Luís, MA',
    rating: 4.9,
    price: 'R$ 200/sessão',
    description: 'Especializada em ajudar indivíduos a superar ansiedade e depressão através de abordagens terapêuticas baseadas em evidências.',
    availableSlots: ['Hoje 14:00', 'Amanhã 10:00', 'Sexta 15:00']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    photo: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    specialties: ['Recuperação de Dependência', 'Terapia de Trauma', 'Aconselhamento Familiar'],
    experience: '12 anos',
    location: 'São Luís, MA',
    rating: 4.8,
    price: 'R$ 250/sessão',
    description: 'Experiente em recuperação de dependência e cuidados informados por trauma, ajudando indivíduos e famílias a se curar e reconstruir.',
    availableSlots: ['Hoje 16:00', 'Quarta 13:00', 'Quinta 11:00']
  },
  {
    id: '3',
    name: 'Dra. Emily Rodriguez',
    photo: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    specialties: ['Terapia de Relacionamento', 'Autoestima', 'Transições de Vida'],
    experience: '6 anos',
    location: 'São Luís, MA',
    rating: 4.7,
    price: 'R$ 180/sessão',
    description: 'Apaixonada por ajudar indivíduos a navegar relacionamentos e grandes mudanças de vida com confiança e clareza.',
    availableSlots: ['Amanhã 09:00', 'Sexta 14:00', 'Segunda 16:00']
  },
  {
    id: '4',
    name: 'Dr. David Thompson',
    photo: 'https://images.pexels.com/photos/5452273/pexels-photo-5452273.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    specialties: ['TEPT', 'Apoio a Veteranos', 'Terapia Baseada em Mindfulness'],
    experience: '15 anos',
    location: 'São Luís, MA',
    rating: 4.9,
    price: 'R$ 220/sessão',
    description: 'Especializado em recuperação de trauma, particularmente para veteranos e socorristas, usando abordagens baseadas em mindfulness.',
    availableSlots: ['Hoje 18:00', 'Quarta 15:00', 'Sábado 10:00']
  },
  {
    id: '5',
    name: 'Dr. Michael Jordan',
    photo: 'https://images.pexels.com/photos/5452298/pexels-photo-5452298.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    specialties: ['Aconselhamento de Adolescentes', 'TDAH', 'Estresse Acadêmico'],
    experience: '9 anos',
    location: 'São Luís, MA',
    rating: 4.8,
    price: 'R$ 190/sessão',
    description: 'Especializa-se em trabalhar com adolescentes e jovens adultos, ajudando-os a navegar pressões acadêmicas e desafios de saúde mental.',
    availableSlots: ['Amanhã 15:00', 'Quinta 17:00', 'Sexta 11:00']
  },
  {
    id: '6',
    name: 'Dr. James Wilson',
    photo: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    specialties: ['Terapia de Casais', 'Habilidades de Comunicação', 'Resolução de Conflitos'],
    experience: '11 anos',
    location: 'São Luís, MA',
    rating: 4.9,
    price: 'R$ 280/sessão',
    description: 'Especialista em terapia de casais e melhoria da comunicação, ajudando parceiros a construir relacionamentos mais fortes e saudáveis.',
    availableSlots: ['Hoje 17:00', 'Quarta 14:00', 'Sábado 13:00']
  }
];

const PsychologistsPage: React.FC = () => {
  const handleBooking = (psychologist: Psychologist, method: 'calendly' | 'whatsapp' | 'zoom') => {
    // In a real application, these would link to actual booking systems
    const bookingUrls = {
      calendly: `https://calendly.com/${psychologist.name.toLowerCase().replace(' ', '-')}`,
      whatsapp: `https://wa.me/+1234567890?text=Hi, I'd like to book a session with ${psychologist.name}`,
      zoom: `https://zoom.us/book-appointment/${psychologist.id}`
    };
    
    // For demo purposes, show an alert
    alert(`Agendamento com ${psychologist.name} via ${method.charAt(0).toUpperCase() + method.slice(1)}. Em um aplicativo real, isso redirecionaria para: ${bookingUrls[method]}`);
  };

  return (
    <div className="min-h-screen py-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Encontre Seu Terapeuta Ideal
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conecte-se com profissionais de saúde mental licenciados que se especializam em suas necessidades específicas. 
            Todos os nossos terapeutas são verificados e experientes em fornecer cuidados de qualidade.
          </p>
        </div>

        {/* Psychologists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {psychologists.map((psychologist) => (
            <div
              key={psychologist.id}
              className="bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-700 hover:border-slate-600"
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={psychologist.photo}
                  alt={psychologist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{psychologist.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-300">{psychologist.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-slate-400 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{psychologist.location}</span>
                </div>

                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Tempo de Experiência: {psychologist.experience}</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {psychologist.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-medium rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {psychologist.description}
                </p>

                {/* Price */}
                <div className="text-lg font-bold text-emerald-400 mb-4">
                  {psychologist.price}
                </div>

                {/* Available Slots */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-slate-300 mb-2">Horários disponíveis:</p>
                  <div className="space-y-1">
                    {psychologist.availableSlots.slice(0, 2).map((slot, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded mr-2"
                      >
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleBooking(psychologist, 'calendly')}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Agendar via Calendly</span>
                  </button>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleBooking(psychologist, 'whatsapp')}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => handleBooking(psychologist, 'zoom')}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-1"
                    >
                      <Video className="h-4 w-4" />
                      <span>Zoom</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Não tem certeza de qual terapeuta é ideal para você?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Estamos aqui para ajudá-lo a encontrar a combinação perfeita. Nosso companheiro de IA pode ajudá-lo a identificar 
            suas necessidades específicas e recomendar terapeutas que se especializam nessas áreas.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Obter Recomendações Personalizadas
          </button>
        </div>
      </div>
    </div>
  );
};

export default PsychologistsPage;