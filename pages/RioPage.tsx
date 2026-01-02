import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Clock, Award, Building2, BadgeCheck } from 'lucide-react';

const RioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Rio de Janeiro - RJ | Preço de Fábrica e Entrega Rápida";
    
    // Inject JSON-LD Schema for Local Business SEO (RJ Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Rio de Janeiro",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada no Rio de Janeiro (RJ). Atendimento para Zona Sul, Barra, Centro, Zona Norte e Baixada Fluminense. Certificado CNEN.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rio de Janeiro",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -22.906847,
        "longitude": -43.172896
      },
      "url": window.location.href,
      "telephone": "+5521999999999",
      "areaServed": ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "São Gonçalo"],
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
          <Link to="/" className="hover:text-brand-orange">Estados</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Rio de Janeiro - RJ</span>
        </div>
      </nav>

      {/* Hero Section - Visual Impact & Local Authority */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Abstract background suggesting medical/tech */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-900/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-700 text-blue-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4 text-brand-orange" />
                Atendimento em todo o Grande Rio e Baixada
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada no <span className="text-brand-orange">Rio de Janeiro</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                O maior marketplace de proteção radiológica do RJ. Conectamos sua obra aos melhores fornecedores da Capital, Niterói e Baixada. 
                <span className="block mt-2 font-semibold text-white">Preço de atacado e entrega em até 24h.</span>
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <BadgeCheck className="w-5 h-5 text-green-400" />
                  <span>Atende Normas CNEN (Sede RJ)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Entrega Expressa RJ</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-brand-orange" />
                  <span>Orçamento em 5min</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl transform lg:translate-x-4">
              <LeadForm defaultCity="Rio de Janeiro - RJ" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Location Authority Block */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Main SEO Content */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Referência em Proteção Radiológica no Rio de Janeiro
              </h2>
              <p>
                O Rio de Janeiro é um polo de excelência médica e sede da Comissão Nacional de Energia Nuclear (CNEN). Por isso, a exigência por materiais de qualidade superior, como a <strong>argamassa baritada de alta densidade</strong>, é maior do que em qualquer outro estado.
              </p>
              <p>
                Nossa plataforma seleciona apenas fornecedores que atuam no RJ com laudos técnicos validados. Seja para uma clínica odontológica em <strong>Copacabana</strong>, um centro de imagem na <strong>Barra da Tijuca</strong> ou um hospital em <strong>Niterói</strong>, garantimos o material ideal para aprovação do seu projeto de blindagem.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Vantagens de comprar no RJ</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong>Conformidade Rigorosa:</strong> Material homologado para passar nas inspeções da Vigilância Sanitária Municipal do Rio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong>Logística Ágil:</strong> Entregas rápidas superando o trânsito da Linha Vermelha e Avenida Brasil. Atendemos emergências de obra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span><strong>Custo-Benefício:</strong> Menor custo de frete devido aos centros de distribuição na região Sudeste.</span>
                </li>
              </ul>
            </div>

            {/* Sidebar: Service Areas & Urgency */}
            <div className="md:col-span-5 space-y-8">
               <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                    Locais de Entrega Frequente
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 border-b pb-1">Zona Sul</div>
                      <ul className="text-gray-600 space-y-1">
                        <li>Copacabana</li>
                        <li>Botafogo</li>
                        <li>Leblon</li>
                        <li>Ipanema</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 border-b pb-1">Zona Oeste</div>
                      <ul className="text-gray-600 space-y-1">
                        <li>Barra da Tijuca</li>
                        <li>Recreio</li>
                        <li>Campo Grande</li>
                        <li>Jacarepaguá</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 border-b pb-1">Centro & Norte</div>
                      <ul className="text-gray-600 space-y-1">
                        <li>Centro</li>
                        <li>Tijuca</li>
                        <li>Méier</li>
                        <li>Ilha do Governador</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-gray-900 border-b pb-1">Grande Rio</div>
                      <ul className="text-gray-600 space-y-1">
                        <li>Niterói</li>
                        <li>Nova Iguaçu</li>
                        <li>Duque de Caxias</li>
                        <li>São Gonçalo</li>
                      </ul>
                    </div>
                  </div>
               </div>

               <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <h3 className="text-xl font-bold mb-2">Construtora ou Clínica?</h3>
                  <p className="text-blue-100 mb-6 text-sm">
                    Temos condições especiais para grandes volumes com entrega programada no Rio de Janeiro.
                  </p>
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="w-full bg-white text-blue-900 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Falar com Especialista RJ
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Local Applications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Quem atendemos no Rio de Janeiro</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="font-bold text-gray-900">Odontologia</h3>
              <p className="text-sm text-gray-500 mt-2">Clínicas no Centro e Zona Sul.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="font-bold text-gray-900">Hospitais</h3>
              <p className="text-sm text-gray-500 mt-2">Redes D'Or e hospitais universitários.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🐕</div>
              <h3 className="font-bold text-gray-900">Veterinária</h3>
              <p className="text-sm text-gray-500 mt-2">Centros de diagnóstico animal.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-gray-900">Construtoras</h3>
              <p className="text-sm text-gray-500 mt-2">Obras rápidas e retrofits comerciais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Rio de Janeiro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Dúvidas sobre Argamassa Baritada no RJ
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual o preço da argamassa baritada no Rio de Janeiro?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O preço no RJ costuma ser mais competitivo que em outras regiões devido à proximidade com centros de distribuição. O valor varia entre fornecedores, mas garantimos cobrir ofertas locais. Peça um orçamento grátis para receber 3 propostas.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam na Região dos Lagos ou Serrana?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Temos rotas semanais para Petrópolis, Teresópolis, Cabo Frio, Macaé e Campos dos Goytacazes. Para a capital e Grande Rio, a entrega pode ocorrer em até 24 horas úteis.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                O material é aceito pela Vigilância Sanitária do Rio?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Absolutamente. Fornecemos apenas argamassa baritada industrializada com densidade certificada (geralmente 3.2 g/cm³), acompanhada de laudo técnico para aprovação do seu projeto de blindagem junto aos órgãos competentes do RJ.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-12 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl font-medium mb-6 opacity-90">Não arrisque na fiscalização. Use material certificado.</p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange font-bold py-4 px-10 rounded-lg shadow-xl hover:bg-gray-100 transition transform hover:-translate-y-1 uppercase tracking-wide"
          >
            Cotar Argamassa no Rio Agora
          </button>
        </div>
      </section>

    </div>
  );
};

export default RioPage;