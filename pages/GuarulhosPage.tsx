import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Factory, Building2, Plane, Clock, Wallet } from 'lucide-react';

const GuarulhosPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Guarulhos - SP | Preço de Fábrica e Entrega Imediata";
    
    // Inject JSON-LD Schema for Local Business SEO (Guarulhos Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Guarulhos Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Guarulhos (SP). Atendimento industrial em Cumbica e hospitalar no Centro/Maia. Logística rápida via Dutra e Fernão Dias.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Guarulhos",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.4515,
        "longitude": -46.5333
      },
      "url": window.location.href,
      "telephone": "+5511999999999",
      "areaServed": ["Guarulhos", "Arujá", "Itaquaquecetuba", "Santa Isabel", "Zona Norte SP"],
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
          <Link to="/" className="hover:text-brand-orange">São Paulo</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Guarulhos - SP</span>
        </div>
      </nav>

      {/* Hero Section - Logistics & Industrial Focus */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Airport/Industrial abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-blue-800/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Plane className="w-4 h-4" />
                Entrega Rápida em Toda Grande SP
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Guarulhos</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Fornecimento direto da fábrica para a 2ª maior cidade de SP. Atendimento especializado para o polo industrial de Cumbica e setor hospitalar do Centro e Maia.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Factory className="w-5 h-5 text-brand-orange" />
                  <span>Ideal para Indústria (Cumbica)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística via Dutra/Ayrton Senna</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Wallet className="w-5 h-5 text-brand-orange" />
                  <span>Preço Competitivo de Atacado</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Certificado Vigilância Sanitária</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Guarulhos - SP" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Guarulhos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proteção Radiológica com a Melhor Logística de SP
              </h2>
              <p>
                Guarulhos não é apenas o aeroporto; é um gigante industrial e logístico. A demanda por <strong>argamassa baritada</strong> na região vai desde grandes indústrias em <strong>Cumbica</strong> e <strong>Bonsucesso</strong> (para salas de ensaios não destrutivos) até clínicas de alto padrão nos bairros <strong>Maia</strong> e <strong>Vila Augusta</strong>.
              </p>
              <p>
                Nossa plataforma conecta você aos estoques estrategicamente posicionados nas margens da <strong>Via Dutra</strong> e <strong>Rodovia Fernão Dias</strong>. Isso significa que, ao comprar conosco, você garante prazos de entrega reduzidos e frete mais barato do que trazer material do interior.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Soluções para Todos os Tamanhos</h3>
              <p>
                Seja você um dentista montando um consultório no <strong>Centro</strong> ou uma construtora levantando um hospital na <strong>Região dos Pimentas</strong>, temos a quantidade certa. Vendemos desde 5 sacos para pequenas reformas até cargas fechadas paletizadas para grandes obras.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-blue text-lg mb-2">Urgência na Obra?</h4>
                <p className="text-sm text-gray-700">
                  Aproveite a proximidade logística. Muitos de nossos parceiros conseguem realizar entregas em Guarulhos no mesmo dia (pedido até as 10h) ou liberam para retirada imediata.
                </p>
              </div>
            </div>

            {/* Sidebar: Regions & Coverage */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    Regiões Atendidas (GRU)
                  </h3>
                  <div className="space-y-4">
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Centro Expandido</span>
                        <p className="text-xs text-gray-500">Centro, Maia, Vila Augusta, Gopoúva, Macedo.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Região Industrial</span>
                        <p className="text-xs text-gray-500">Cumbica, Cidade Satélite, Bonsucesso, Porto da Igreja.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Bairros Residenciais</span>
                        <p className="text-xs text-gray-500">Pimentas, Taboão, Cocaia, Vila Galvão.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Cidades Vizinhas</span>
                        <p className="text-xs text-gray-500">Arujá, Santa Isabel, Itaquaquecetuba.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações Típicas</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Factory className="w-4 h-4 text-blue-500" />
                        <span>Indústria (Gamagrafia)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span>Hospitais & Clínicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-blue-500" />
                        <span>Logística Aeroportuária</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span>Odontologia Digital</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: Guarulhos Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos em Guarulhos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Factory className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Setor Industrial</h3>
              <p className="text-xs text-gray-600">Proteção para bunkers de testes e laboratórios em Cumbica.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Médicas</h3>
              <p className="text-xs text-gray-600">Reformas no Bosque Maia e Vila Augusta com obra limpa.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Plane className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Logística</h3>
              <p className="text-xs text-gray-600">Atendimento rápido a galpões logísticos e áreas de carga.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Odontologia</h3>
              <p className="text-xs text-gray-600">Kits econômicos para consultórios em toda a cidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Guarulhos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Guarulhos
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em Arujá e Itaquaquecetuba?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Atendemos toda a região do Alto Tietê (Arujá, Itaquá, Santa Isabel) com a mesma agilidade de Guarulhos, aproveitando o acesso fácil pela Rodovia Dutra e Ayrton Senna.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Posso retirar o material pessoalmente?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Dependendo do fornecedor parceiro selecionado na cotação, a retirada pode ser feita em depósitos na divisa Guarulhos/SP (Zona Norte) ou diretamente na fábrica. Solicite essa opção no formulário.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                O material tem laudo para a Prefeitura de Guarulhos?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Fornecemos argamassa baritada com densidade mínima de 3.2 g/cm³, acompanhada de laudo técnico e ART (quando solicitado junto ao serviço de aplicação), documentos essenciais para aprovação na Vigilância Sanitária local.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Construindo em Guarulhos?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Aproveite a logística privilegiada e garanta o melhor preço da Grande SP.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - GUARULHOS
          </button>
        </div>
      </section>

    </div>
  );
};

export default GuarulhosPage;