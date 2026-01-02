import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Umbrella, Anchor, Building2, Stethoscope, Factory } from 'lucide-react';

const BelemPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Belém - PA | Proteção Radiológica e Entrega Rápida";
    
    // SEO Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Venda de Argamassa Baritada em Belém e Ananindeua. Material resistente à umidade amazônica para clínicas no Umarizal e Nazaré. Logística fluvial para todo o Pará.');

    // Inject JSON-LD Schema for Local Business SEO (Belém Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Belém Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Belém (PA). Especialista em logística para o Norte, atendendo hospitais em Belém, Ananindeua, Barcarena e Castanhal.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belém",
        "addressRegion": "PA",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -1.4558,
        "longitude": -48.5044
      },
      "url": window.location.href,
      "telephone": "+5591999999999",
      "areaServed": ["Belém", "Ananindeua", "Marituba", "Castanhal", "Barcarena", "Santarém", "Macapá"],
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
          <Link to="/" className="hover:text-brand-orange">Norte</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Belém - PA</span>
        </div>
      </nav>

      {/* Hero Section - Logistics & Humidity Focus */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Amazon/River abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596544464525-452f0103756e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-green-900 via-blue-900 to-slate-900/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Umbrella className="w-4 h-4" />
                Resistente à Umidade Amazônica
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Belém e Ananindeua</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                A solução definitiva para proteção radiológica no Pará. Logística otimizada via transporte rodofluvial para atender clínicas, hospitais e o setor industrial.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Anchor className="w-5 h-5 text-brand-orange" />
                  <span>Envio Balsa (Macapá/Santarém)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Atende Grande Belém</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Aprovado Vigilância (DVISA-PA)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Factory className="w-5 h-5 text-brand-orange" />
                  <span>Polo Industrial (Barcarena)</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Belém - PA" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Belém */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Blindagem Segura para a Metrópole da Amazônia
              </h2>
              <p>
                Belém é o maior polo de saúde do Norte. A concentração de clínicas e hospitais de referência nos bairros do <strong>Umarizal</strong>, <strong>Nazaré</strong> e <strong>Marco</strong> exige materiais construtivos de alta qualidade.
              </p>
              <p>
                O maior desafio da região é o clima: calor intenso e alta umidade. Diferente do chumbo, que pode sofrer oxidação ou descolamento com o tempo se mal aplicado, nossa <strong>argamassa baritada</strong> cria uma barreira única com a parede, resistindo perfeitamente ao "inverno amazônico" sem perder a eficácia de blindagem.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística que Entende o Norte</h3>
              <p>
                Sabemos que frete para o Pará é caro e demorado. Por isso, trabalhamos com uma rede de distribuição que utiliza modais integrados (rodoviário até Belém e fluvial para o interior). Isso permite atender obras em <strong>Castanhal</strong>, <strong>Barcarena</strong> e até despachar para o Marajó com custos viáveis.
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-green-800 text-lg mb-2">Construindo em Ananindeua?</h4>
                <p className="text-sm text-gray-700">
                  Atendemos a rápida expansão da rede de saúde na BR-316. Entrega facilitada para clínicas e hospitais na região metropolitana.
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
                        <span className="font-bold text-gray-900 block text-sm mb-1">Belém (Centro Médico)</span>
                        <p className="text-xs text-gray-500">Umarizal (Doca), Nazaré, Batista Campos, Marco, São Brás.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Região Metropolitana</span>
                        <p className="text-xs text-gray-500">Ananindeua, Marituba, Benevides, Santa Bárbara.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Polos Industriais/Portuários</span>
                        <p className="text-xs text-gray-500">Barcarena (Vila dos Cabanos), Distrito Industrial de Icoaraci.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Interior (Via Transportadora)</span>
                        <p className="text-xs text-gray-500">Castanhal, Paragominas, Santarém (Balsa).</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações no Pará</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>Hospitais de Referência</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Factory className="w-4 h-4 text-blue-500" />
                        <span>Mineração e Alumínio</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Umbrella className="w-4 h-4 text-blue-500" />
                        <span>Clínicas Odontológicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span>Laboratórios de Análise</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: Belém Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos no Estado do Pará
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Umarizal</h3>
              <p className="text-xs text-gray-600">Obras de alto padrão nas torres comerciais da Doca e Wandenkolk.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Factory className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Indústria Barcarena</h3>
              <p className="text-xs text-gray-600">Proteção para salas de gamagrafia e controle de qualidade.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Hospitais Públicos</h3>
              <p className="text-xs text-gray-600">Atendimento a licitações e ampliações de rede no interior.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Odontologia</h3>
              <p className="text-xs text-gray-600">Kits fracionados para consultórios em toda a capital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Belém */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Belém e Região
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual o prazo de entrega para Belém?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Depende do estoque local. Mantemos parceria com distribuidores que possuem estoque regulador na região de Ananindeua. Caso venha de fábrica no Sudeste, o prazo rodoviário médio é de 7 a 12 dias. Solicite cotação para verificar disponibilidade imediata.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                A argamassa aguenta a umidade de Belém?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. A argamassa baritada é um material cimentício que se funde à alvenaria. Diferente de mantas de chumbo ou drywall sem tratamento, ela não sofre com descolamento ou oxidação causados pelo calor e umidade típicos da Amazônia, desde que pintada corretamente.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês despacham para Macapá ou Santarém?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Temos expertise na logística para o Norte. Entregamos o material paletizado e bem embalado nas transportadoras fluviais (balsas) que partem dos portos de Belém/Icoaraci com destino a Macapá, Santarém e Manaus.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Sua Obra no Pará Precisa de Rapidez?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Não espere meses pelo material. Cotamos com quem entende a logística da Amazônia.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - BELÉM & PA
          </button>
        </div>
      </section>

    </div>
  );
};

export default BelemPage;