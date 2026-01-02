import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Sun, Building2, Stethoscope, Briefcase, Syringe } from 'lucide-react';

const GoianiaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Goiânia - GO | Setor Bueno e Marista | Entrega Rápida";
    
    // Inject JSON-LD Schema for Local Business SEO (Goiânia Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Goiânia Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Goiânia (GO). Atendimento especializado para clínicas no Setor Bueno, Marista e Oeste. Logística para Aparecida de Goiânia e Anápolis.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Goiânia",
        "addressRegion": "GO",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -16.6869,
        "longitude": -49.2648
      },
      "url": window.location.href,
      "telephone": "+5562999999999",
      "areaServed": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Trindade", "Senador Canedo", "Rio Verde"],
      "priceRange": "$$"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Breadcrumb SEO optimized */}
      <nav className="bg-white border-b border-gray-200 py-3 text-sm">
        <div className="container mx-auto px-4 flex items-center gap-2 text-gray-500">
          <Link to="/" className="hover:text-brand-orange">Início</Link>
          <span>/</span>
          <Link to="/" className="hover:text-brand-orange">Centro-Oeste</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Goiânia - GO</span>
        </div>
      </nav>

      {/* Hero Section - Aesthetics & Heat Resistance */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Goiânia/Cerrado Modern abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543716627-727829497554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900 via-blue-900 to-yellow-900/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Sun className="w-4 h-4" />
                Ideal para o Clima do Cerrado
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Goiânia e Aparecida</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                O material preferido das clínicas de alto padrão do Setor Bueno e Marista. Proteção radiológica certificada com entrega rápida em todo o Centro-Oeste.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Stethoscope className="w-5 h-5 text-brand-orange" />
                  <span>Clínicas de Estética e Saúde</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística via BR-153 (Anápolis)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Aprovado Vigilância (Goiânia)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Briefcase className="w-5 h-5 text-brand-orange" />
                  <span>Torres Comerciais (Orion/Nexus)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Goiânia - GO" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Goiânia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Escolha do Hub Médico do Centro-Oeste
              </h2>
              <p>
                Goiânia é referência nacional em medicina estética e tratamentos de saúde. A construção de torres médicas modernas no <strong>Setor Bueno</strong>, <strong>Setor Marista</strong> e <strong>Setor Oeste</strong> exige acabamentos de primeira linha e proteção radiológica que não falha.
              </p>
              <p>
                Nossa <strong>argamassa baritada</strong> é formulada para suportar a dilatação térmica típica do clima quente e seco de Goiás, evitando fissuras que poderiam vazar radiação. É a solução perfeita para salas de Raio-X, Tomografia e Mamografia que precisam de aprovação rápida na Vigilância Sanitária Municipal.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística Estratégica: Goiânia, Aparecida e Anápolis</h3>
              <p>
                Atuamos no coração logístico do Brasil. Com o suporte de centros de distribuição em <strong>Aparecida de Goiânia</strong> e no <strong>DAIA (Anápolis)</strong>, garantimos o abastecimento ágil não apenas para a capital, mas para cidades como Rio Verde, Jataí e Itumbiara, essenciais para o agronegócio.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-yellow-800 text-lg mb-2">Reformas em Edifícios Médicos</h4>
                <p className="text-sm text-gray-700">
                  Especialistas em logística vertical para o Complexo Orion, Órion Business, Nexus e edifícios tradicionais do Setor Aeroporto. Entrega programada para evitar transtornos.
                </p>
              </div>
            </div>

            {/* Sidebar: Regions & Coverage */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    Regiões de Atendimento
                  </h3>
                  <div className="space-y-4">
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Goiânia (Área Nobre)</span>
                        <p className="text-xs text-gray-500">Setor Bueno, Marista, Oeste, Nova Suíça, Jardim Goiás (Flamboyant).</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Polo Hospitalar</span>
                        <p className="text-xs text-gray-500">Setor Aeroporto, Setor Sul, Região da Praça Cívica.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Grande Goiânia</span>
                        <p className="text-xs text-gray-500">Aparecida de Goiânia (Polo Empresarial), Trindade, Senador Canedo.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Segmentos em Alta em GO</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Syringe className="w-4 h-4 text-pink-500" />
                        <span>Clínicas de Estética Avançada</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>Hospitais de Olhos e Ortopedia</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-green-500" />
                        <span>Indústria Farmacêutica (DAIA)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span>Odontologia Digital (Harmonização)</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: Goiania Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos em Goiás
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Bueno & Marista</h3>
              <p className="text-xs text-gray-600">Acabamento premium para clínicas de cirurgia plástica e dermatologia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Truck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Indústria (DAIA)</h3>
              <p className="text-xs text-gray-600">Proteção para laboratórios fabris em Anápolis e Aparecida.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Setor Aeroporto</h3>
              <p className="text-xs text-gray-600">Atendimento rápido para reformas no polo hospitalar tradicional.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Odontologia</h3>
              <p className="text-xs text-gray-600">Kits para consultórios em expansão na Grande Goiânia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Goiania */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Goiânia e Goiás
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em Anápolis e Rio Verde?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Goiânia funciona como nosso hub para todo o estado. Temos rotas semanais para Anápolis (DAIA), Rio Verde, Jataí e Catalão, atendendo a forte demanda do agronegócio e da indústria.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                A argamassa trinca no calor de Goiânia?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nossa argamassa possui aditivos que garantem elasticidade e aderência mesmo em baixíssima umidade relativa do ar, comum no Centro-Oeste. Seguindo o processo de cura úmida recomendado, a durabilidade é garantida por décadas.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Onde comprar argamassa baritada em Goiânia?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Através da nossa plataforma, conectamos você diretamente aos depósitos em Aparecida de Goiânia e distribuidores da capital, eliminando intermediários e garantindo preço de atacado.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sua Clínica em Goiânia Merece o Melhor</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Proteção radiológica de alta performance para o mercado mais exigente do Centro-Oeste.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - GOIÂNIA & GO
          </button>
        </div>
      </section>

    </div>
  );
};

export default GoianiaPage;