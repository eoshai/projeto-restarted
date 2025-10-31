import React from 'react';
import { Clock, User, ArrowRight, Heart, Brain, Shield, Sun, Users } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  publishDate: string;
  category: string;
  image: string;
  icon: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Entendendo a Ansiedade: Sinais, Sintomas e Estratégias de Enfrentamento',
    excerpt: 'Aprenda a reconhecer sintomas de ansiedade e descubra técnicas práticas para gerenciar pensamentos e sentimentos ansiosos em sua vida diária.',
    content: 'A ansiedade afeta milhões de pessoas em todo o mundo, mas é controlável com as ferramentas e compreensão certas...',
    author: 'Dra. Sarah Johnson',
    readTime: '6 min de leitura',
    publishDate: '2025-09-11',
    category: 'Saúde Mental',
    image: 'https://tse1.mm.bing.net/th/id/OIP.LHLQSpSyPwz9V7f_4-wVQgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: '2',
    title: 'Libertando-se do Vício: Uma Jornada para a Recuperação',
    excerpt: 'A recuperação do vício é uma jornada desafiadora, mas alcançável. Descubra os passos, recursos e sistemas de apoio que podem ajudar.',
    content: 'A recuperação do vício é uma jornada pessoal que requer coragem, comprometimento e apoio...',
    author: 'Dr. Michael Chen',
    readTime: '8 min de leitura',
    publishDate: '2025-09-11',
    category: 'Dependência',
    image: 'https://th.bing.com/th/id/R.34992701130ff18921b5b8cddf1e80db?rik=jUYMTUmHlwqFDQ&riu=http%3a%2f%2fpsiquiatrajaquelinebifano.com.br%2fwp-content%2fuploads%2f2023%2f08%2ffuncionamento-do-vicio-1024x683.jpg&ehk=l%2b5J5uzePWIOG8GcPJhLrByIYHi0sD7ath3dUsevWaQ%3d&risl=&pid=ImgRaw&r=0',
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: '3',
    title: 'Rituais Diários de Autocuidado para Melhor Saúde Mental',
    excerpt: 'Pequenas práticas diárias podem fazer uma grande diferença em seu bem-estar mental. Aprenda rotinas simples de autocuidado que se adequam a qualquer estilo de vida.',
    content: 'O autocuidado não é egoísmo—é essencial para manter uma boa saúde mental e bem-estar geral...',
    author: 'Dra. Emily Rodriguez',
    readTime: '5 min de leitura',
    publishDate: '2025-09-12',
    category: 'Autocuidado',
    image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: '4',
    title: 'Gerenciando a Depressão: Ajuda Profissional e Estratégias Pessoais',
    excerpt: 'A depressão é tratável. Entenda melhor a condição e aprenda sobre tratamentos profissionais e estratégias de autoajuda.',
    content: 'A depressão é mais do que se sentir triste ou passar por uma fase difícil—é uma condição séria de saúde mental...',
    author: 'Dra. Lisa Park',
    readTime: '7 min de leitura',
    publishDate: '2025-09-11',
    category: 'Saúde Mental',
    image: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Sun className="h-5 w-5" />
  },
  {
    id: '5',
    title: 'Construindo Relacionamentos Saudáveis: Comunicação e Limites',
    excerpt: 'Relacionamentos saudáveis são construídos sobre confiança, respeito e boa comunicação. Aprenda como estabelecer limites e se comunicar efetivamente.',
    content: 'Relacionamentos são uma parte essencial da experiência humana, mas requerem trabalho e compreensão...',
    author: 'Dr. James Wilson',
    readTime: '6 min de leitura',
    publishDate: '2025-09-11',
    category: 'Relacionamentos',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: '6',
    title: 'Estresse no Trabalho: Reconhecendo e Gerenciando o Esgotamento Profissional',
    excerpt: 'O estresse no trabalho e o esgotamento são cada vez mais comuns. Aprenda a reconhecer os sinais e implementar estratégias para um equilíbrio mais saudável entre trabalho e vida.',
    content: 'O esgotamento é um estado de exaustão emocional, física e mental causado pela exposição prolongada a situações estressantes...',
    author: 'Dr. David Thompson',
    readTime: '8 min de leitura',
    publishDate: '2025-09-11',
    category: 'Bem-estar',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: '7',
    title: 'Mindfulness e Meditação: Técnicas Práticas para o Dia a Dia',
    excerpt: 'Descubra como incorporar práticas de mindfulness em sua rotina diária para reduzir o estresse e aumentar o bem-estar mental.',
    content: 'O mindfulness é uma prática poderosa que pode transformar nossa relação com o estresse e a ansiedade...',
    author: 'Dra. Ana Silva',
    readTime: '5 min de leitura',
    publishDate: '2025-09-11',
    category: 'Mindfulness',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Sun className="h-5 w-5" />
  },
  {
    id: '8',
    title: 'Superando a Síndrome do Impostor: Reconhecendo Seu Valor',
    excerpt: 'A síndrome do impostor afeta muitas pessoas. Aprenda a reconhecer os sinais e desenvolver estratégias para superar esses sentimentos.',
    content: 'A síndrome do impostor é um padrão psicológico onde as pessoas duvidam de suas conquistas...',
    author: 'Dr. Carlos Mendes',
    readTime: '7 min de leitura',
    publishDate: '2025-09-11',
    category: 'Autoestima',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: '9',
    title: 'Sono e Saúde Mental: A Importância do Descanso Adequado',
    excerpt: 'O sono tem um impacto direto na nossa saúde mental. Entenda como melhorar a qualidade do seu sono para um bem-estar geral.',
    content: 'O sono é fundamental para nossa saúde mental e física, mas muitas vezes é negligenciado...',
    author: 'Dra. Mariana Costa',
    readTime: '6 min de leitura',
    publishDate: '2025-09-16',
    category: 'Bem-estar',
    image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: '10',
    title: 'Lidando com o Luto: Processo de Cura e Aceitação',
    excerpt: 'O luto é um processo natural mas desafiador. Aprenda sobre as fases do luto e como navegar por esse período difícil.',
    content: 'O luto é uma resposta natural à perda, mas cada pessoa vivencia esse processo de forma única...',
    author: 'Dr. Roberto Lima',
    readTime: '8 min de leitura',
    publishDate: '2025-09-14',
    category: 'Luto',
    image: 'https://images.pexels.com/photos/3771118/pexels-photo-3771118.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Heart className="h-5 w-5" />
  },
  {
    id: '11',
    title: 'Terapia Online vs Presencial: Qual Escolher?',
    excerpt: 'Compare as vantagens e desvantagens da terapia online e presencial para tomar a melhor decisão para sua situação.',
    content: 'Com o avanço da tecnologia, a terapia online se tornou uma opção viável e popular...',
    author: 'Dra. Fernanda Oliveira',
    readTime: '5 min de leitura',
    publishDate: '2025-08-05',
    category: 'Terapia',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Users className="h-5 w-5" />
  },
  {
    id: '12',
    title: 'Exercícios Físicos e Saúde Mental: A Conexão Corpo-Mente',
    excerpt: 'Descubra como a atividade física regular pode melhorar significativamente sua saúde mental e bem-estar emocional.',
    content: 'A relação entre exercício físico e saúde mental é bem documentada pela ciência...',
    author: 'Dr. Pedro Santos',
    readTime: '6 min de leitura',
    publishDate: '2025-09-10',
    category: 'Bem-estar',
    image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Sun className="h-5 w-5" />
  }
];

const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = React.useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen py-8 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 mb-8 font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Voltar para todos os artigos</span>
          </button>

          <article className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-700">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">
                  {selectedPost.icon}
                  <span>{selectedPost.category}</span>
                </span>
                <div className="flex items-center text-slate-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white mb-4">
                {selectedPost.title}
              </h1>

              <div className="flex items-center space-x-4 mb-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <span>•</span>
                <span>{new Date(selectedPost.publishDate).toLocaleDateString()}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  {selectedPost.content}
                </p>
                
                {/* Expanded content would go here */}
                <div className="bg-blue-900/30 border-l-4 border-blue-400 p-6 my-8">
                  <p className="text-blue-200">
                    <strong>Nota Importante:</strong> Este artigo é apenas para fins educacionais e não deve substituir conselhos médicos profissionais. Se você está lutando com problemas de saúde mental, consulte um profissional de saúde qualificado.
                  </p>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-8">Pontos Principais</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
                  <li>Entender sua condição é o primeiro passo para a cura</li>
                  <li>Ajuda profissional está disponível e é eficaz</li>
                  <li>Pequenas práticas diárias podem fazer uma diferença significativa</li>
                  <li>A recuperação é possível com o apoio e comprometimento certos</li>
                </ul>
                
                <div className="bg-emerald-900/30 rounded-lg p-6 mt-8 border border-emerald-700/50">
                  <h4 className="text-lg font-semibold text-emerald-200 mb-3">Pronto para Dar o Próximo Passo?</h4>
                  <p className="text-emerald-300 mb-4">
                    Se este artigo ressoou com você, considere conversar com um de nossos terapeutas qualificados que podem fornecer orientação e apoio personalizados.
                  </p>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Encontrar um Terapeuta
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Recursos e Insights de Saúde Mental
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Artigos especializados e orientação prática sobre saúde mental, recuperação de dependência, 
            autocuidado e bem-estar geral de profissionais licenciados.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Saúde Mental', icon: Brain, color: 'blue' },
            { name: 'Autocuidado', icon: Heart, color: 'pink' },
            { name: 'Bem-estar', icon: Sun, color: 'yellow' },
            { name: 'Terapia', icon: Users, color: 'green' }
          ].map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="p-4 rounded-xl bg-slate-700/50 hover:bg-slate-700/70 transition-colors text-emerald-300 font-medium flex items-center justify-center space-x-2 border border-slate-600"
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-slate-700 hover:border-slate-600"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="inline-flex items-center space-x-1 px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium">
                    {post.icon}
                    <span>{post.category}</span>
                  </span>
                  <div className="flex items-center text-slate-400 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white mb-3 leading-tight">
                  {post.title}
                </h2>

                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-medium text-sm">Ler Artigo</span>
                    <ArrowRight className="h-4 w-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Mantenha-se Atualizado sobre Saúde Mental</h3>
          <p className="mb-6 opacity-90">
            Receba os artigos, dicas e recursos mais recentes entregues em sua caixa de entrada semanalmente.
          </p>
          <div className="max-w-md mx-auto flex space-x-3">
            <input
              type="email"
              placeholder="Digite seu email"
              className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;