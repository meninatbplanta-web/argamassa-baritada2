import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Mountain, Building2, Stethoscope, Hammer, AlertTriangle } from 'lucide-react';

const BeloHorizontePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Belo Horizonte - MG | Atacado para Clínicas e Mineração";
    
    // Inject JSON-LD Schema for Local Business SEO (Belo Horizonte Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Belo Horizonte Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Belo Horizonte (MG). Atendimento especializado para a Área Hospitalar, Betim, Contagem e setor de mineração. Entrega rápida em Minas.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belo Horizonte",
        "addressRegion": "MG",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -19.9167,
        "longitude": -43.9345
      },
      "url": window.location.href,
      "telephone": "+5531999999999",
      "areaServed": ["Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Santa Luzia", "Sete Lagoas"],
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
          <Link to="/" className="hover:text-brand-orange">Minas Gerais</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Belo Horizonte - MG</span>
        </div>
      </nav>

      {/* Hero Section - Medical & Mining Hub */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* BH/Mountains abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572455044327-7348c1be7267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-green-900/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Mountain className="w-4 h-4" />
                Atendendo o 2º Maior Polo de Saúde do Brasil
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Belo Horizonte e RMBH</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Do Mater Dei à Usiminas. Conectamos você aos fornecedores que abastecem os maiores hospitais e indústrias de Minas Gerais.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Stethoscope className="w-5 h-5 text-brand-orange" />
                  <span>Especialistas na Área Hospitalar</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Hammer className="w-5 h-5 text-brand-orange" />
                  <span>Para Laboratórios de Mineração</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística Anel Rodoviário/BR-381</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Aprovado Vigilância Sanitária BH</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Belo Horizonte - MG" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for BH */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Referência em Proteção Radiológica nas Montanhas de Minas
              </h2>
              <p>
                Belo Horizonte não é apenas a capital dos bares, é um centro de referência nacional em medicina e engenharia. A concentração de hospitais na região de <strong>Santa Efigênia</strong> e <strong>Funcionários</strong> exige um fornecimento constante e confiável de argamassa baritada.
              </p>
              <p>
                Além da saúde, atendemos a robusta demanda industrial de <strong>Contagem</strong> e <strong>Betim</strong>, bem como os laboratórios de análise de minério em <strong>Nova Lima</strong>, que utilizam fontes radioativas em seus processos de qualidade e precisam de blindagem certificada.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística Descomplicada para Minas</h3>
              <p>
                Sabemos que o trânsito no Anel Rodoviário pode ser um desafio. Por isso, nossos parceiros possuem centros de distribuição estrategicamente localizados para garantir entregas rápidas na RMBH e despachos ágeis para o interior via BR-381 (Vale do Aço) e BR-040.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-blue text-lg mb-2">Vai construir no Vila da Serra?</h4>
                <p className="text-sm text-gray-700">
                  Temos soluções de alto padrão com entrega programada para obras em condomínios e torres comerciais em Nova Lima e Belvedere, respeitando horários restritos.
                </p>
              </div>
            </div>

            {/* Sidebar: Regions & Coverage */}
            <div className="md:col-span-5 space-y-6">
               <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    Regiões de Atendimento (RMBH)
                  </h3>
                  <div className="space-y-4">
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">BH Centro-Sul</span>
                        <p className="text-xs text-gray-500">Savassi, Funcionários, Santa Efigênia, Barro Preto, Belvedere.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Polo Industrial</span>
                        <p className="text-xs text-gray-500">Cidade Industrial (Contagem), Betim (Fiat/Stellantis), Santa Luzia.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Vetores de Expansão</span>
                        <p className="text-xs text-gray-500">Vila da Serra, Lagoa Santa, Pampulha, Venda Nova.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Segmentos Fortes em MG</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-green-600" />
                        <span>Hospitais (Felício Rocho/Mater Dei)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Hammer className="w-4 h-4 text-green-600" />
                        <span>Mineração (Análise de Solo)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-green-600" />
                        <span>Clínicas Odontológicas</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-green-600" />
                        <span>Proteção Radiológica Industrial</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: BH Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos em Belo Horizonte
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Hammer className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Setor de Mineração</h3>
              <p className="text-xs text-gray-600">Argamassa para salas de espectrometria e análise de minério.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Savassi</h3>
              <p className="text-xs text-gray-600">Reformas rápidas e limpas em prédios de alto padrão.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Área Hospitalar</h3>
              <p className="text-xs text-gray-600">Fornecimento contínuo para obras de ampliação hospitalar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Truck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Galpões Logísticos</h3>
              <p className="text-xs text-gray-600">Proteção para scanners de carga em Contagem e Betim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for BH */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - BH e Minas
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam no interior (Triângulo, Vale do Aço)?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. BH funciona como nosso hub para distribuição em todo o estado. Despachamos regularmente para Uberlândia, Juiz de Fora, Ipatinga e Governador Valadares através de transportadoras parceiras na BR-381 e BR-040.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Posso retirar o material em Contagem?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Temos parceiros com centros de distribuição na região do CEASA e Cidade Industrial, permitindo a retirada (FOB) para economizar no frete.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                O material é indicado para laboratórios de mineração?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Com certeza. Nossa argamassa baritada possui alta densidade e homogeneidade, sendo ideal para blindar salas que utilizam equipamentos de Raios-X para análise de fluorescência e difração em minérios.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Construindo em Belo Horizonte?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Garanta a proteção radiológica da sua obra com a qualidade que o mercado mineiro exige.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - BH E REGIÃO
          </button>
        </div>
      </section>

    </div>
  );
};

export default BeloHorizontePage;