import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Sun, Anchor, Award, Building2, Stethoscope } from 'lucide-react';

const FortalezaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Fortaleza - CE | Proteção Radiológica para o Nordeste";
    
    // Inject JSON-LD Schema for Local Business SEO (Fortaleza Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Fortaleza Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Fortaleza (CE). Atendimento especializado para hospitais em Meireles, Aldeota e Centro. Logística rápida para todo o Ceará.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fortaleza",
        "addressRegion": "CE",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -3.71722,
        "longitude": -38.5434
      },
      "url": window.location.href,
      "telephone": "+5585999999999",
      "areaServed": ["Fortaleza", "Eusébio", "Caucaia", "Maracanaú", "Sobral", "Juazeiro do Norte"],
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
          <Link to="/" className="hover:text-brand-orange">Nordeste</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Fortaleza - CE</span>
        </div>
      </nav>

      {/* Hero Section - Sun/Heat & Logistics focus */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Coastal / Sunny background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564853034372-68045869480d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-blue-900 to-blue-800/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Sun className="w-4 h-4" />
                Material Resistente ao Calor
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Fortaleza e Ceará</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed max-w-xl">
                Conectamos sua clínica aos melhores fornecedores do Nordeste. Soluções de blindagem radiológica que suportam o clima local e atendem as normas da Vigilância Sanitária de Fortaleza.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística para todo CE</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Award className="w-5 h-5 text-brand-orange" />
                  <span>Certificação ANVISA</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Anchor className="w-5 h-5 text-brand-orange" />
                  <span>Atendimento Portuário/Industrial</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Alta Densidade Garantida</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Fortaleza - CE" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Local Relevance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proteção Radiológica de Ponta para a Capital do Ceará
              </h2>
              <p>
                Fortaleza consolidou-se como um dos principais polos médicos do Brasil. Regiões como <strong>Aldeota</strong>, <strong>Meireles</strong> e o entorno do <strong>Centro</strong> concentram hospitais e clínicas de alto padrão que exigem materiais construtivos de qualidade superior.
              </p>
              <p>
                Nossa plataforma resolve a principal dor de cabeça dos engenheiros e radiologistas no Nordeste: <strong>encontrar material certificado com logística viável</strong>. A <strong>argamassa baritada</strong> que nossos parceiros fornecem é formulada para garantir aderência perfeita e evitar fissuras, mesmo em temperaturas elevadas comuns no Ceará.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Por que usar Argamassa em vez de Chumbo?</h3>
              <p>
                Além de ser ecologicamente mais correta, a argamassa baritada oferece uma blindagem sem emendas (monolítica), o que é crucial para aprovação em vistorias rigorosas da SMS (Secretaria Municipal de Saúde). É a escolha ideal para salas de Raio-X, Tomografia e Mamografia em Fortaleza.
              </p>

              <div className="bg-orange-50 border-l-4 border-brand-orange p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-orange text-lg mb-2">Atenção Construtoras do Ceará</h4>
                <p className="text-sm text-gray-700">
                  Temos parcerias estratégicas para atender grandes volumes em obras no Eusébio, Porto das Dunas e Complexo do Pecém. Solicite cotação de atacado.
                </p>
              </div>
            </div>

            {/* Sidebar: Regions */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                    Áreas de Atendimento
                  </h3>
                  <div className="space-y-4">
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Fortaleza (Capital)</span>
                        <p className="text-xs text-gray-500">Aldeota, Meireles, Centro, Papicu, Cocó, Parquelândia, Messejana.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Região Metropolitana</span>
                        <p className="text-xs text-gray-500">Eusébio (Polo Farmacêutico), Caucaia, Maracanaú, Aquiraz.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Interior do Ceará</span>
                        <p className="text-xs text-gray-500">Sobral (Zona Norte), Juazeiro do Norte (Cariri), Iguatu.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Serviços Conectados</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Venda de Argamassa Baritada</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Indicação de Mão de Obra</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Vidros Plumbíferos (Parceiros)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Portas Radiológicas (Parceiros)</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Applications Grid customized for Fortaleza */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos no Ceará
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-b-4 border-brand-orange">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-blue mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Médicas</h3>
              <p className="text-xs text-gray-600">Torres comerciais no Harmony, BS Design e RioMar Trade Center.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-b-4 border-brand-orange">
              <Building2 className="w-8 h-8 mx-auto text-brand-blue mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Redes Hospitalares</h3>
              <p className="text-xs text-gray-600">Expansões de hospitais particulares e rede pública.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-b-4 border-brand-orange">
              <Anchor className="w-8 h-8 mx-auto text-brand-blue mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Indústria Pecém</h3>
              <p className="text-xs text-gray-600">Gamagrafia industrial e ensaios não destrutivos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-b-4 border-brand-orange">
              <Sun className="w-8 h-8 mx-auto text-brand-blue mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Odontologia</h3>
              <p className="text-xs text-gray-600">Pequenas reformas para Raio-X periapical em toda a cidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Fortaleza */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Dúvidas Frequentes - Fortaleza
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Quanto tempo demora a entrega para o Ceará?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Isso depende do estoque atual dos nossos parceiros. Alguns distribuidores mantêm estoque regulador na Região Metropolitana de Fortaleza, permitindo entrega rápida. Outros operam sob encomenda vinda do Sudeste. Ao preencher o formulário, conectaremos você à opção mais ágil disponível.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                A argamassa resiste à umidade de Fortaleza?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim, desde que a aplicação siga as normas técnicas (reboco, cura e pintura adequados). A argamassa baritada de qualidade cria uma barreira eficaz e durável, superior ao chumbo que pode oxidar com a maresia se não for bem isolado.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês indicam quem aplica a argamassa em Fortaleza?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nosso foco é a venda do material. Porém, muitos dos fornecedores parceiros possuem listas de pedreiros e empresas de engenharia especializadas em radiologia no Ceará para indicar após a compra.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sua Clínica no Ceará Precisa de Segurança?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Não improvise. Use material certificado e proteja seus pacientes e funcionários.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR COM FORNECEDORES NO CEARÁ
          </button>
        </div>
      </section>

    </div>
  );
};

export default FortalezaPage;