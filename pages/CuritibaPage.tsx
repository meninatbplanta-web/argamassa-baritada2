import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Leaf, Building2, Stethoscope, Snowflake, Recycle } from 'lucide-react';

const CuritibaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Curitiba - PR | Solução Ecológica e Certificada";
    
    // Inject JSON-LD Schema for Local Business SEO (Curitiba Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Curitiba Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Curitiba (PR). A alternativa ecológica ao chumbo para clínicas no Batel e indústrias da CIC. Logística para PR e SC.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -25.4284,
        "longitude": -49.2733
      },
      "url": window.location.href,
      "telephone": "+5541999999999",
      "areaServed": ["Curitiba", "São José dos Pinhais", "Pinhais", "Araucária", "Campo Largo", "Colombo", "Joinville"],
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
          <Link to="/" className="hover:text-brand-orange">Sul</Link>
          <span>/</span>
          <span className="text-gray-900 font-bold">Argamassa Baritada Curitiba - PR</span>
        </div>
      </nav>

      {/* Hero Section - Eco & Cold Weather Focus */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Curitiba Botanic Garden/Parks abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568632234163-f0fa8003f699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-blue-900 to-slate-900"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Leaf className="w-4 h-4" />
                Solução Sustentável (Substitui o Chumbo)
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Curitiba e RMC</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Proteção radiológica moderna para a Capital Ecológica. Atendemos clínicas no Batel, Hospitais e a Indústria da CIC com material certificado e sem toxidade.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Recycle className="w-5 h-5 text-green-400" />
                  <span>100% Ecológica e Segura</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Snowflake className="w-5 h-5 text-brand-orange" />
                  <span>Resistente à Variação Térmica</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística PR e Norte SC</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Densidade 3.2 g/cm³</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Curitiba - PR" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Curitiba */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Qualidade Construtiva para o Mercado Mais Exigente do Sul
              </h2>
              <p>
                Curitiba é referência nacional em planejamento e saúde. Bairros como <strong>Batel</strong>, <strong>Bigorrilho (Champagnat)</strong> e <strong>Água Verde</strong> concentram um cluster médico de excelência que não aceita improvisos.
              </p>
              <p>
                A <strong>argamassa baritada</strong> é a escolha preferida dos engenheiros curitibanos por ser um material "verde" (ao contrário do lençol de chumbo, que é tóxico) e por oferecer isolamento acústico e térmico superior, ideal para o clima frio da capital paranaense.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Hub Logístico do Sul</h3>
              <p>
                Nossa atuação vai além de Curitiba. Atendemos com agilidade a região industrial de <strong>São José dos Pinhais</strong> e <strong>Araucária</strong>, além de servirmos como ponto de distribuição para o interior do Paraná (Ponta Grossa, Londrina) e Norte de Santa Catarina (Joinville).
              </p>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-green-700 text-lg mb-2">Sustentabilidade na Obra</h4>
                <p className="text-sm text-gray-700">
                  Nossa argamassa baritada não gera resíduos tóxicos no descarte futuro, alinhando sua obra às práticas ESG valorizadas pelas empresas e hospitais de Curitiba.
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
                        <span className="font-bold text-gray-900 block text-sm mb-1">Curitiba (Capital)</span>
                        <p className="text-xs text-gray-500">Batel, Bigorrilho, Centro Cívico, Ecoville, Água Verde, Santa Felicidade.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Região Metropolitana (RMC)</span>
                        <p className="text-xs text-gray-500">São José dos Pinhais (Aeroporto), Pinhais, Colombo, Araucária.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Rotas de Entrega</span>
                        <p className="text-xs text-gray-500">Ponta Grossa, Paranaguá e Joinville (SC).</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações Locais</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>Hospitais (Batel/Champagnat)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-500" />
                        <span>Indústria Automotiva (SJP)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-green-500" />
                        <span>Clínicas Eco-Friendly</span>
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

      {/* Segment Focus: Curitiba Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos em Curitiba
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Batel</h3>
              <p className="text-xs text-gray-600">Reformas de alto padrão com material limpo e sem cheiro.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Cidade Industrial (CIC)</h3>
              <p className="text-xs text-gray-600">Proteção para bunkers de ensaios em indústrias metalúrgicas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Hospitais RMC</h3>
              <p className="text-xs text-gray-600">Fornecimento para expansões em Campo Largo e Colombo.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Leaf className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Obras Verdes</h3>
              <p className="text-xs text-gray-600">Pontuação para certificação LEED e construções sustentáveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Curitiba */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Curitiba e PR
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em Santa Catarina (Joinville/Itajaí)?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Curitiba funciona como nosso hub logístico para o Norte de Santa Catarina. O frete para Joinville e região costuma ser muito acessível saindo da capital paranaense pela BR-376.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                A argamassa demora para secar no frio de Curitiba?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Em dias muito frios e úmidos, o tempo de cura pode ser ligeiramente maior do que no verão. Recomendamos planejar 1 ou 2 dias extras de secagem antes da pintura final para garantir o acabamento perfeito.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Posso retirar o material direto no fornecedor?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Temos parceiros com depósitos na região da Linha Verde e em São José dos Pinhais que permitem retirada (FOB), ideal para pequenas obras ou urgências.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vai construir em Curitiba?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Escolha a proteção radiológica que respeita o meio ambiente e a segurança da sua obra.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - CURITIBA
          </button>
        </div>
      </section>

    </div>
  );
};

export default CuritibaPage;