import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { CheckCircle2, MapPin, Truck, ShieldCheck, Phone, Warehouse } from 'lucide-react';

const ManausPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada em Manaus | Venda e Aplicação AM | Orçamento Rápido";
    
    // Inject JSON-LD Schema for Local Business SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Manaus",
      "image": "https://picsum.photos/1920/1080",
      "description": "Venda e aplicação de argamassa baritada em Manaus e região metropolitana. Proteção radiológica certificada para hospitais e clínicas no Amazonas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Manaus",
        "addressRegion": "AM",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -3.119028,
        "longitude": -60.021731
      },
      "url": window.location.href,
      "telephone": "+5592999999999",
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
          <Link to="/" className="hover:text-brand-orange">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Manaus - AM</span>
        </div>
      </nav>

      {/* Hero Section - High Conversion & SEO */}
      <section className="relative bg-brand-blue py-12 lg:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1580674684081-7617fbf3d745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                Atendimento Exclusivo Amazonas
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Manaus</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Fornecedores especializados em proteção radiológica com logística otimizada para Manaus e interior do Amazonas. Atendemos normas da CNEN para hospitais, clínicas odontológicas e indústrias do PIM.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span>Logística Fluvial e Aérea Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span>Certificado Laudo Radiométrico</span>
                </div>
                <div className="flex items-center gap-2">
                  <Warehouse className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span>Estoque Regulador Regional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span>Densidade 3.2 g/cm³ Garantida</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl">
              <LeadForm defaultCity="Manaus - AM" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block - Local Relevance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-2 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que comprar Argamassa Baritada em Manaus conosco?
              </h2>
              <p>
                A construção de salas de Raio-X em <strong>Manaus</strong> enfrenta desafios únicos, principalmente relacionados à logística e umidade. Nossa <strong>argamassa baritada</strong> é formulada para garantir máxima aderência e durabilidade mesmo no clima equatorial úmido do Amazonas.
              </p>
              <p>
                Diferente do chumbo em lençol, a argamassa oferece uma solução monolítica (sem emendas) que evita vazamento de radiação, sendo ideal para aprovação na Vigilância Sanitária de Manaus (DVISA).
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística para o Polo Industrial e Saúde</h3>
              <p>
                Sabemos que o frete para o Norte pode inviabilizar obras. Trabalhamos com parceiros que possuem rota consolidada para o <strong>Porto de Manaus</strong> e transporte aéreo para urgências, atendendo desde clínicas no bairro <strong>Adrianópolis</strong> até indústrias no <strong>Distrito Industrial</strong>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Aplicações Típicas no Amazonas</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Blindagem de Tomografia em Hospitais (Zona Centro-Sul e Leste).</li>
                <li>Salas de Raio-X Odontológico (Vieiralves e Ponta Negra).</li>
                <li>Ensaios Não Destrutivos (Gamagrafia) no Polo Industrial de Manaus.</li>
                <li>Clínicas Veterinárias em toda a capital amazonense.</li>
              </ul>
            </div>

            {/* Sidebar Local Info */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Regiões Atendidas
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li className="border-b border-blue-100 pb-1">Manaus (Todas as zonas)</li>
                  <li className="border-b border-blue-100 pb-1">Manacapuru</li>
                  <li className="border-b border-blue-100 pb-1">Itacoatiara</li>
                  <li className="border-b border-blue-100 pb-1">Parintins</li>
                  <li className="border-b border-blue-100 pb-1">Coari</li>
                  <li>Tefé (Via Fluvial)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-bold text-brand-orange mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Atendimento Urgente
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  Precisa de argamassa baritada com entrega imediata em Manaus para liberar sua sala na Vigilância?
                </p>
                <button 
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   className="w-full bg-brand-orange text-white font-bold py-2 rounded shadow hover:bg-brand-orangeHover transition"
                >
                  Pedir Cotação Agora
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Specs adapted for Search Intent */}
      <section className="py-16 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Especificações Técnicas (Conformidade CNEN)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-gray-700 rounded-lg">
              <div className="text-4xl font-bold text-brand-orange mb-2">3.2</div>
              <div className="text-sm uppercase tracking-wider">g/cm³ Densidade</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <div className="text-4xl font-bold text-brand-orange mb-2">25kg</div>
              <div className="text-sm uppercase tracking-wider">Sacos Padrão</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <div className="text-4xl font-bold text-brand-orange mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider">Sulfato de Bário</div>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <div className="text-4xl font-bold text-brand-orange mb-2">24h</div>
              <div className="text-sm uppercase tracking-wider">Cotação Manaus</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Rich Snippets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Dúvidas Frequentes sobre Argamassa Baritada em Manaus
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-4 cursor-pointer" open>
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Quanto custa o saco de argamassa baritada em Manaus?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                O preço em Manaus pode variar devido ao frete fluvial/aéreo. Em média, o custo é competitivo comparado ao chumbo. Solicite um orçamento no formulário acima para receber o valor atualizado com entrega inclusa para seu bairro.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam no interior do Amazonas?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Sim. Despachamos via balsa para municípios como Parintins, Itacoatiara, Manacapuru, Coari e Tefé. O material vai paletizado e protegido contra umidade.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual a espessura necessária para Raio-X Odontológico?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Geralmente recomenda-se entre 1.0cm e 1.5cm para periapicais comuns. No entanto, sempre exigimos o cálculo de blindagem feito por um físico médico credenciado.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Obras em Manaus não podem parar!</h2>
          <p className="text-xl mb-8">Garanta a proteção radiológica da sua clínica com quem entende da logística do Norte.</p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            SOLICITAR ORÇAMENTO MANAUS
          </button>
        </div>
      </section>

    </div>
  );
};

export default ManausPage;