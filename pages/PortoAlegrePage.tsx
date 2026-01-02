import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Building2, Stethoscope, Anchor, Factory, Umbrella } from 'lucide-react';

const PortoAlegrePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Porto Alegre - RS | Proteção Hospitalar e Industrial";
    
    // Inject JSON-LD Schema for Local Business SEO (Porto Alegre Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Porto Alegre Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Porto Alegre (RS). Atendimento especializado para Hospital Moinhos, Santa Casa e Indústria de Canoas/Gravataí. Logística Serra Gaúcha.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Porto Alegre",
        "addressRegion": "RS",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -30.0346,
        "longitude": -51.2177
      },
      "url": window.location.href,
      "telephone": "+5551999999999",
      "areaServed": ["Porto Alegre", "Canoas", "Gravataí", "Novo Hamburgo", "São Leopoldo", "Caxias do Sul"],
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
          <Link to="/" className="hover:text-brand-orange">Rio Grande do Sul</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Porto Alegre - RS</span>
        </div>
      </nav>

      {/* Hero Section - Resilience & Medical Hub */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Guaiba/City abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595521914985-802526e03109?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-slate-900 to-red-900/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-700 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <ShieldCheck className="w-4 h-4" />
                Excelência em Radioproteção no RS
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Porto Alegre e Serra</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Soluções técnicas para o complexo hospitalar gaúcho e para a reconstrução da indústria. Fornecedores com estoque local e logística adaptada para o RS.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Stethoscope className="w-5 h-5 text-brand-orange" />
                  <span>Padrão Moinhos de Vento</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Factory className="w-5 h-5 text-brand-orange" />
                  <span>Atende Polo Petroquímico</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística RS (BR-116/290)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Umbrella className="w-5 h-5 text-brand-orange" />
                  <span>Resistente à Umidade</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Porto Alegre - RS" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for POA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Segurança e Qualidade para a Capital dos Gaúchos
              </h2>
              <p>
                Porto Alegre possui um dos clusters de saúde mais respeitados da América Latina. O <strong>Hospital Moinhos de Vento</strong>, a <strong>Santa Casa</strong> e o <strong>Hospital de Clínicas</strong> estabelecem um padrão de exigência que demanda materiais de construção de primeira linha.
              </p>
              <p>
                Nossa plataforma conecta sua obra aos fornecedores de <strong>argamassa baritada</strong> que atendem essas especificações rigorosas. Material com laudo técnico para aprovação na Vigilância Sanitária de Porto Alegre e ideal para blindagem de salas de tomografia, hemodinâmica e radioterapia.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Apoio à Indústria e Reconstrução</h3>
              <p>
                Além da saúde, o Rio Grande do Sul tem uma força industrial imensa. Atendemos a região metropolitana (Canoas, Gravataí, Novo Hamburgo) e o Polo Petroquímico com argamassa para proteção de ensaios industriais.
              </p>
              <p>
                No atual cenário de <strong>reconstrução do estado</strong>, agilidade é crucial. Nossos parceiros possuem logística resiliente para garantir que o material chegue à sua obra, seja na capital, no Vale dos Sinos ou na Serra Gaúcha.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-blue text-lg mb-2">Clima e Umidade</h4>
                <p className="text-sm text-gray-700">
                  A argamassa baritada é superior ao chumbo em ambientes úmidos, pois adere à alvenaria criando uma barreira monolítica que não oxida. Ideal para o clima de Porto Alegre e região litorânea.
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
                        <span className="font-bold text-gray-900 block text-sm mb-1">Porto Alegre (Capital)</span>
                        <p className="text-xs text-gray-500">Moinhos de Vento, Centro Histórico, Menino Deus, Zona Sul, 4º Distrito.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Grande POA</span>
                        <p className="text-xs text-gray-500">Canoas, Gravataí (GM), Cachoeirinha, Alvorada, Viamão.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Vale dos Sinos & Serra</span>
                        <p className="text-xs text-gray-500">Novo Hamburgo, São Leopoldo, Caxias do Sul, Bento Gonçalves.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações no RS</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>Hospitais de Referência</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Factory className="w-4 h-4 text-blue-500" />
                        <span>Polo Metal-Mecânico</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Anchor className="w-4 h-4 text-blue-500" />
                        <span>Áreas Portuárias (Rio Grande)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span>Clínicas Veterinárias (Serra)</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: POA Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos no Rio Grande do Sul
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Moinhos</h3>
              <p className="text-xs text-gray-600">Reformas de alto padrão em consultórios e day hospitals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Factory className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Indústria Canoas</h3>
              <p className="text-xs text-gray-600">Proteção radiológica para ensaios não destrutivos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Hospitais Serra</h3>
              <p className="text-xs text-gray-600">Atendimento a Caxias do Sul e Bento Gonçalves.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Odontologia</h3>
              <p className="text-xs text-gray-600">Kits para raio-x em toda a região metropolitana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Porto Alegre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Porto Alegre e RS
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam na Serra Gaúcha (Caxias/Gramado)?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Porto Alegre e região metropolitana funcionam como hub logístico. Temos rotas frequentes via BR-116 para atender Caxias do Sul, Bento Gonçalves, Gramado e Canela com rapidez.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Como está a entrega após as enchentes?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nossos parceiros reorganizaram a logística utilizando rotas alternativas quando necessário. O abastecimento para obras essenciais de saúde e reconstrução industrial está normalizado na maior parte do estado.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Posso retirar o material?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Existem pontos de distribuição na região de Canoas e na entrada de Porto Alegre (zona norte) que permitem retirada (FOB), facilitando para quem tem transporte próprio.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Obra em Porto Alegre ou Interior?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Conte com a qualidade e seriedade que o Rio Grande do Sul merece.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - POA & RS
          </button>
        </div>
      </section>

    </div>
  );
};

export default PortoAlegrePage;