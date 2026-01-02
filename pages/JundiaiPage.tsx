import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Factory, Building2, Stethoscope, CheckCircle2, Cog } from 'lucide-react';

const JundiaiPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Jundiaí - SP | Proteção Radiológica e Entrega Rápida";
    
    // Inject JSON-LD Schema for Local Business SEO (Jundiaí Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Jundiaí Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Fornecimento de argamassa baritada em Jundiaí (SP). Atendimento para o Distrito Industrial, clínicas no Anhangabaú e região. Logística privilegiada (Anhanguera/Bandeirantes).",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jundiaí",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.1857,
        "longitude": -46.8978
      },
      "url": window.location.href,
      "telephone": "+5511999999999",
      "areaServed": ["Jundiaí", "Várzea Paulista", "Campo Limpo Paulista", "Itupeva", "Louveira", "Cabreúva", "Jarinu"],
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
          <span className="text-gray-900 font-bold">Argamassa Baritada Jundiaí - SP</span>
        </div>
      </nav>

      {/* Hero Section - Industrial & Medical Mix */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Jundiaí/Highway abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Truck className="w-4 h-4" />
                Entrega Expressa via Anhanguera/Bandeirantes
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Jundiaí e Região</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                A solução definitiva para proteção radiológica no Aglomerado Urbano de Jundiaí. Atendemos clínicas médicas, odontológicas e o setor industrial com rapidez e certificação.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Factory className="w-5 h-5 text-brand-orange" />
                  <span>Atende o Distrito Industrial</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Aprovado Vigilância (Jundiaí)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  <span>Estoque Próximo (SP/Campinas)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Cog className="w-5 h-5 text-brand-orange" />
                  <span>Para Ensaios Não Destrutivos</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Jundiaí - SP" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Jundiaí */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Líder em Blindagem para o Polo Logístico de SP
              </h2>
              <p>
                Jundiaí combina uma qualidade de vida excepcional com um setor industrial robusto e uma rede de saúde em plena expansão. Para atender a demanda de bairros como <strong>Anhangabaú</strong>, <strong>Vila Arens</strong> e <strong>Retiro</strong>, oferecemos argamassa baritada de alta performance.
              </p>
              <p>
                Nossa localização estratégica entre São Paulo e Campinas permite que nossos parceiros ofereçam <strong>os melhores prazos de entrega da região</strong>. Não deixe sua obra parada esperando material. Conectamos você a quem tem estoque pronto para envio imediato pelas rodovias Anhanguera ou Bandeirantes.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Soluções para Indústria e Saúde</h3>
              <p>
                Além das clínicas médicas e odontológicas, atendemos a forte demanda industrial de Jundiaí e Itupeva. Fornecemos material para proteção de salas de gamagrafia industrial e ensaios não destrutivos, comuns nas empresas multinacionais instaladas no <strong>Distrito Industrial</strong>.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-blue text-lg mb-2">Conformidade Técnica</h4>
                <p className="text-sm text-gray-700">
                  Todo material fornecido acompanha laudo técnico e nota fiscal, garantindo a aprovação do seu alvará na Prefeitura de Jundiaí e órgãos reguladores.
                </p>
              </div>
            </div>

            {/* Sidebar: Regions & Coverage */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    Aglomerado Urbano de Jundiaí
                  </h3>
                  <div className="space-y-4">
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Jundiaí (Centro e Bairros)</span>
                        <p className="text-xs text-gray-500">Anhangabaú, Vila Arens, Eloy Chaves, Retiro, Caxambu.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Cidades Vizinhas</span>
                        <p className="text-xs text-gray-500">Várzea Paulista, Campo Limpo Paulista, Itupeva, Louveira.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Polos Industriais</span>
                        <p className="text-xs text-gray-500">FazGran, Distrito Industrial, Parque Industrial de Itupeva.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações Locais</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>Clínicas Médicas (Anhangabaú)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Factory className="w-4 h-4 text-blue-500" />
                        <span>Indústrias (Gamagrafia)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-blue-500" />
                        <span>Logística (Galpões)</span>
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

      {/* Segment Focus: Jundiaí Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos em Jundiaí
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Factory className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Multinacionais</h3>
              <p className="text-xs text-gray-600">Proteção para laboratórios de qualidade e testes industriais.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Edifícios Comerciais</h3>
              <p className="text-xs text-gray-600">Reformas rápidas no The One, Golden Office e Paineiras.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Hospitais</h3>
              <p className="text-xs text-gray-600">Atendimento a demandas do Hospital São Vicente e Regional.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <CheckCircle2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Veterinária</h3>
              <p className="text-xs text-gray-600">Diagnóstico animal para a região rural e urbana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Jundiaí */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Jundiaí e AUJ
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em Itupeva e Várzea Paulista?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim, atendemos todo o Aglomerado Urbano de Jundiaí (AUJ). As entregas para Itupeva, Várzea, Campo Limpo e Louveira seguem a mesma logística rápida da sede em Jundiaí.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Quanto tempo demora a entrega em Jundiaí?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Graças ao acesso privilegiado pelas rodovias, muitas entregas são feitas em até 24 horas úteis. Para materiais em estoque, a agilidade é total.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                O material serve para uso industrial?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Temos argamassa baritada com densidade adequada para aplicações industriais e laboratoriais, comuns no parque industrial da região. Consulte sempre seu físico responsável para definir a espessura.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Reformando em Jundiaí?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Receba orçamentos de fornecedores que conhecem a região e entregam rápido.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - JUNDIAÍ
          </button>
        </div>
      </section>

    </div>
  );
};

export default JundiaiPage;