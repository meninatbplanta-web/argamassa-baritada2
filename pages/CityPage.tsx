import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { CITIES, FEATURES } from '../constants';
import { ChevronRight, MapPin, Building2, Star } from 'lucide-react';

const CityPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Extract slug from URL pattern: argamassa-baritada-em-[slug]
  const cleanSlug = citySlug?.replace('argamassa-baritada-em-', '');
  const city = CITIES.find(c => c.slug === cleanSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cleanSlug]);

  if (!city) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="container mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Argamassa Baritada em {city.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-white/20">
                <MapPin className="w-4 h-4 text-brand-orange" />
                Atendimento em {city.name} e Região
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Argamassa Baritada em {city.name}: <span className="text-brand-orange">Proteção Radiológica Profissional</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                Obtenha 3 orçamentos de fornecedores especializados em {city.name} em apenas 5 minutos. Atendemos hospitais, clínicas e indústrias.
              </p>
              
              <div className="flex gap-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-blue bg-gray-300 overflow-hidden">
                            <img src={`https://picsum.photos/100/100?random=${i}`} alt="User" />
                        </div>
                    ))}
                 </div>
                 <div className="flex flex-col justify-center">
                    <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <span className="text-sm text-blue-100">Mais de 120 orçamentos em {city.name}</span>
                 </div>
              </div>

            </div>
            <div>
              <LeadForm defaultCity={city.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content (Spintax Simulation) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Por Que Escolher Argamassa Baritada em {city.name}?
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Em <strong>{city.name}</strong>, a demanda por argamassa baritada tem crescido significativamente devido ao aumento de clínicas, hospitais e laboratórios que utilizam equipamentos de diagnóstico por imagem. A necessidade de conformidade com as normas da CNEN torna essencial a contratação de fornecedores qualificados.
            </p>
            <p className="mt-4">
              Fornecedores especializados em {city.name} oferecem aplicação profissional e garantida. Seja para uma pequena sala de raio-X odontológico ou um grande complexo de radioterapia, encontrar parceiros locais reduz custos de logística e agiliza a execução da obra.
            </p>
            <p className="mt-4">
              O custo médio da argamassa baritada em {city.name} é competitivo, variando conforme a espessura necessária (determinada pelo projeto de blindagem). Utilizar mão de obra local certificada garante que seu projeto atenda todas as exigências da vigilância sanitária municipal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <feature.icon className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Aplicações Comuns em {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Hospitais</h3>
                <p className="text-sm text-gray-500">Proteção para salas de Tomografia e Hemodinâmica.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Star className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Clínicas Odontológicas</h3>
                <p className="text-sm text-gray-500">Blindagem eficiente para Raio-X Periapical e Panorâmico.</p>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <MapPin className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Veterinárias</h3>
                <p className="text-sm text-gray-500">Soluções para diagnóstico por imagem animal.</p>
            </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <Building2 className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Indústrias</h3>
                <p className="text-sm text-gray-500">Gamagrafia e ensaios não destrutivos em {city.name}.</p>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-brand-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Precisa de Argamassa Baritada em {city.name}?</h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-12 rounded-lg shadow-xl text-lg"
          >
            Solicitar Orçamento Agora
          </button>
        </div>
      </section>
    </div>
  );
};

export default CityPage;