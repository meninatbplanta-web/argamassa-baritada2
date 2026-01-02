import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Building2, Clock, CheckCircle2, Factory, Wallet } from 'lucide-react';

const SaoPauloPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada São Paulo - SP | Cotação de Fábrica e Retira Imediata";
    
    // Inject JSON-LD Schema for Local Business SEO (São Paulo Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada São Paulo Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Maior marketplace de argamassa baritada em São Paulo (SP). Conecte-se a fabricantes na Capital, ABC, Guarulhos e Interior. Orçamentos rápidos para clínicas e hospitais.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.550520,
        "longitude": -46.633308
      },
      "url": window.location.href,
      "telephone": "+5511999999999",
      "areaServed": ["São Paulo", "Guarulhos", "São Bernardo do Campo", "Santo André", "Osasco", "Campinas", "Santos"],
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
          <Link to="/" className="hover:text-brand-orange">Sudeste</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada São Paulo - SP</span>
        </div>
      </nav>

      {/* Hero Section - Urgency & Volume */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Urban background / Bridge / Skyline */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543059080-f9b1272213d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-blue-900/70"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Truck className="w-4 h-4" />
                Maior Rede de Fornecedores de SP
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">São Paulo e Grande SP</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                Não perca tempo no trânsito procurando material. Conectamos sua obra aos estoques mais próximos na <strong>Capital, ABC, Guarulhos e Osasco</strong>. 
                <span className="block mt-2 font-semibold text-white">Compare preços de fabricantes locais em 5 minutos.</span>
              </p>
              
              <div className="flex flex-wrap gap-3 text-sm font-medium">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                  <Factory className="w-4 h-4 text-green-400" />
                  <span>Preço de Fábrica</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>Opções de Retira</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>Laudos Válidos SP</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="São Paulo - SP" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - SEO & Value Prop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cotação Inteligente para a Maior Metrópole do País
              </h2>
              <p>
                Em <strong>São Paulo</strong>, tempo é dinheiro. A logística de entrega pode ser um pesadelo se o fornecedor estiver do outro lado da cidade. Nossa plataforma resolve isso conectando você a uma rede de distribuidores de <strong>argamassa baritada</strong> estrategicamente posicionados nas Zonas Sul, Leste, Norte, Oeste e Centro.
              </p>
              <p>
                Seja para reformar uma clínica na <strong>Avenida Paulista</strong>, construir um centro de imagem no <strong>Tatuapé</strong> ou blindar uma sala em <strong>Moema</strong>, nossos parceiros entendem as restrições de horários e a urgência da capital paulista.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Diferenciais do Hub São Paulo</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Wallet className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Competitividade:</strong> Devido à alta oferta em SP, conseguimos conectar você a promoções e preços de atacado direto da fábrica.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong>Proximidade:</strong> Reduza o frete encontrando fornecedores com estoque no seu bairro ou município vizinho (ABC, Guarulhos, Osasco).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Conformidade Técnica:</strong> Parceiros habituados com as exigências rigorosas da COVISA-SP e CNEN.</span>
                </li>
              </ul>
            </div>

            {/* Sidebar: Zonal Coverage */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                    Cobertura Geográfica SP
                  </h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-sm">
                    <div>
                        <span className="font-bold text-gray-900 block mb-1">Zona Sul</span>
                        <ul className="text-gray-600 space-y-1 text-xs">
                            <li>Moema / V. Mariana</li>
                            <li>Santo Amaro</li>
                            <li>Morumbi</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block mb-1">Zona Leste</span>
                        <ul className="text-gray-600 space-y-1 text-xs">
                            <li>Tatuapé / Mooca</li>
                            <li>Itaquera</li>
                            <li>Vila Prudente</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block mb-1">Grande SP</span>
                        <ul className="text-gray-600 space-y-1 text-xs">
                            <li>Guarulhos</li>
                            <li>Osasco / Barueri</li>
                            <li>ABC Paulista</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block mb-1">Interior/Litoral</span>
                        <ul className="text-gray-600 space-y-1 text-xs">
                            <li>Campinas / Jundiaí</li>
                            <li>Santos / Baixada</li>
                            <li>S. José dos Campos</li>
                        </ul>
                    </div>
                  </div>
               </div>

               <div className="bg-blue-600 rounded-xl p-6 text-white shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                        <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Precisa Retirar Hoje?</h3>
                        <p className="text-blue-100 text-xs">Muitos parceiros oferecem "Retira" no balcão.</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4 border-t border-blue-500 pt-4">
                    Ideal para obras paradas ou pequenas quantidades para reparos. Consulte disponibilidade no formulário.
                  </p>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-full bg-white text-blue-900 font-bold py-2.5 rounded hover:bg-gray-100 transition-colors text-sm"
                  >
                    Consultar Estoque Imediato
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Segments Grid */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem compra Argamassa Baritada em SP?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all group">
              <Building2 className="w-10 h-10 mx-auto text-gray-400 group-hover:text-brand-orange mb-3 transition-colors" />
              <h3 className="font-bold text-gray-900 mb-2">Grandes Hospitais</h3>
              <p className="text-xs text-gray-500">Fornecimento contínuo para redes hospitalares na Paulista e Itaim.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all group">
              <ShieldCheck className="w-10 h-10 mx-auto text-gray-400 group-hover:text-brand-orange mb-3 transition-colors" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Odonto</h3>
              <p className="text-xs text-gray-500">Kits menores para salas de Panorâmica e Periapical.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all group">
              <Factory className="w-10 h-10 mx-auto text-gray-400 group-hover:text-brand-orange mb-3 transition-colors" />
              <h3 className="font-bold text-gray-900 mb-2">Indústria</h3>
              <p className="text-xs text-gray-500">Proteção para laboratórios de testes e gamagrafia no ABC.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all group">
              <Truck className="w-10 h-10 mx-auto text-gray-400 group-hover:text-brand-orange mb-3 transition-colors" />
              <h3 className="font-bold text-gray-900 mb-2">Revendas</h3>
              <p className="text-xs text-gray-500">Parcerias B2B para lojas de material de construção.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ São Paulo Specific */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Dúvidas Frequentes - São Paulo
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual o preço da argamassa em São Paulo?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Devido à alta concorrência e presença de fábricas na região, São Paulo possui um dos melhores preços do Brasil. O valor exato depende da quantidade e do local de entrega. Solicite uma cotação para receber 3 propostas comparativas.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Consigo retirar o material no mesmo dia?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Muitos de nossos parceiros possuem depósitos na Grande SP (Guarulhos, ABC, Osasco) que permitem retirada imediata (FOB) após confirmação do pedido, ideal para evitar taxas de entrega.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em prédios comerciais com restrição de horário?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nossos parceiros estão acostumados com a logística de SP. Basta informar no momento do contato se há restrição de horário, necessidade de caminhão pequeno (VUC) ou agendamento noturno para shoppings e edifícios comerciais.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sua Clínica em SP precisa de Proteção?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Conectamos você aos estoques mais próximos para garantir o melhor preço e rapidez.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR COM FORNECEDORES SP
          </button>
        </div>
      </section>

    </div>
  );
};

export default SaoPauloPage;