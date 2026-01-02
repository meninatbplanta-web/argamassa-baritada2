import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CITIES } from '../constants';
import LeadForm from '../components/LeadForm';
import { MapPin, Search, ChevronRight, Building2, Globe2 } from 'lucide-react';

const LocationsHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Onde Comprar Argamassa Baritada | Cidades Atendidas no Brasil";
    
    // SEO Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Encontre fornecedores de argamassa baritada em sua cidade. Atendimento em São Paulo, Rio, BH, Brasília e todo o Brasil. Cotação rápida online.');
  }, []);

  // Helper to categorize states into regions
  const getRegion = (state: string) => {
    const regions: Record<string, string[]> = {
      'Sudeste': ['SP', 'RJ', 'MG', 'ES'],
      'Sul': ['PR', 'RS', 'SC'],
      'Centro-Oeste': ['DF', 'GO', 'MS', 'MT'],
      'Nordeste': ['BA', 'CE', 'PE', 'MA', 'AL', 'RN', 'PB', 'PI', 'SE'],
      'Norte': ['AM', 'PA', 'TO', 'RO', 'AC', 'RR', 'AP']
    };

    for (const [region, states] of Object.entries(regions)) {
      if (states.includes(state)) return region;
    }
    return 'Outros';
  };

  // Filter cities based on search
  const filteredCities = CITIES.filter(city => 
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered cities by region
  const groupedCities = filteredCities.reduce((acc, city) => {
    const region = getRegion(city.state);
    if (!acc[region]) acc[region] = [];
    acc[region].push(city);
    return acc;
  }, {} as Record<string, typeof CITIES>);

  // Pre-defined order for regions
  const regionOrder = ['Sudeste', 'Sul', 'Centro-Oeste', 'Nordeste', 'Norte'];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center gap-2 text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-bold">Cidades Atendidas</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-brand-blue py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 px-4 py-1.5 rounded-full text-brand-orange text-sm font-bold uppercase tracking-wide mb-6">
            <Globe2 className="w-4 h-4" />
            Cobertura Nacional
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Encontre Argamassa Baritada Perto de Você
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Conectamos sua obra aos melhores fornecedores em todas as regiões do Brasil. Selecione sua cidade para ver prazos de entrega e condições locais.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Digite o nome da sua cidade ou estado..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 shadow-xl focus:ring-4 focus:ring-brand-orange/50 outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Main Content: City Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {filteredCities.length === 0 ? (
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600">Cidade não encontrada na lista principal</h3>
              <p className="text-gray-500 mb-6">Mas não se preocupe, atendemos todo o território nacional.</p>
              <button 
                 onClick={() => document.getElementById('lead-form-section')?.scrollIntoView({ behavior: 'smooth' })}
                 className="bg-brand-orange text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-orangeHover"
              >
                Solicitar Cotação Assim Mesmo
              </button>
            </div>
          ) : (
            <div className="grid gap-12">
              {regionOrder.map(region => {
                const cities = groupedCities[region];
                if (!cities) return null;

                return (
                  <div key={region} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                      <MapPin className="w-6 h-6 text-brand-orange" />
                      Região {region}
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {cities.map(city => (
                        <Link 
                          key={city.slug}
                          to={`/argamassa-baritada-em-${city.slug}`}
                          className="group flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-brand-blue hover:text-white transition-all duration-300 border border-transparent hover:border-brand-blue/20"
                        >
                          <div>
                            <span className="font-bold block">{city.name}</span>
                            <span className="text-xs text-gray-500 group-hover:text-blue-200">{city.state}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-white transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* Render 'Outros' or remaining regions if dynamic */}
              {Object.keys(groupedCities).filter(r => !regionOrder.includes(r)).map(region => (
                 <div key={region} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">{region}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {groupedCities[region].map(city => (
                        <Link 
                          key={city.slug}
                          to={`/argamassa-baritada-em-${city.slug}`}
                          className="group flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-brand-blue hover:text-white transition-all duration-300"
                        >
                          <div>
                            <span className="font-bold block">{city.name}</span>
                            <span className="text-xs text-gray-500 group-hover:text-blue-200">{city.state}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-white" />
                        </Link>
                      ))}
                    </div>
                 </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* General Lead Form Section */}
      <section id="lead-form-section" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Não encontrou sua cidade na lista?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nossa rede de logística atende <strong>100% do território nacional</strong>. Mesmo que sua cidade não esteja listada acima, conseguimos despachar via transportadora parceira.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <Building2 className="w-6 h-6 text-brand-blue" />
                    <span className="text-gray-700">Atendimento a Zonas Rurais e Interior</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                    <Building2 className="w-6 h-6 text-brand-blue" />
                    <span className="text-gray-700">Envio para Obras em Locais Remotos</span>
                </li>
              </ul>
            </div>
            <div>
               <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer Text */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 prose prose-sm text-gray-500 max-w-none text-center">
            <p>
                O Argamassa Baritada Marketplace é a principal plataforma para conectar clínicas, hospitais e indústrias aos fabricantes de proteção radiológica. 
                Nossa presença em todas as capitais e principais polos industriais garante que você receba material com laudo técnico e nota fiscal, 
                essencial para a aprovação do seu projeto de blindagem junto à CNEN e Vigilância Sanitária local.
            </p>
        </div>
      </section>

    </div>
  );
};

export default LocationsHub;