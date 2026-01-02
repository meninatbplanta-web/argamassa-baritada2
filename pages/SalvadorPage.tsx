import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Sun, Anchor, Activity, Building2, UserCheck } from 'lucide-react';

const SalvadorPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Salvador - BA | Cotação para Clínicas e Hospitais na Bahia";
    
    // Inject JSON-LD Schema for Local Business SEO (Salvador Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Salvador & Bahia Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Fornecedores de argamassa baritada em Salvador (BA). Proteção radiológica para Caminho das Árvores, Barra, Itaigara e Polo de Camaçari. Entrega em toda Bahia.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Salvador",
        "addressRegion": "BA",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -12.9777,
        "longitude": -38.5016
      },
      "url": window.location.href,
      "telephone": "+5571999999999",
      "areaServed": ["Salvador", "Lauro de Freitas", "Camaçari", "Feira de Santana", "Vitória da Conquista", "Simões Filho"],
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
          <span className="text-gray-900 font-bold">Argamassa Baritada Salvador - BA</span>
        </div>
      </nav>

      {/* Hero Section - Local Culture & Efficiency */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Salvador background abstract */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-blue-900/90 to-orange-900/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <ShieldCheck className="w-4 h-4" />
                Referência em Proteção Radiológica na Bahia
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Salvador e Região</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Do Caminho das Árvores ao Polo Industrial de Camaçari, conectamos sua obra aos fornecedores com o melhor custo-benefício e logística ágil para a Bahia.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Entrega em RMS e Interior</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <UserCheck className="w-5 h-5 text-brand-orange" />
                  <span>Aprovado SUVISA-BA</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Activity className="w-5 h-5 text-brand-orange" />
                  <span>Alta Densidade (3.2 g/cm³)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Anchor className="w-5 h-5 text-brand-orange" />
                  <span>Resistente à Maresia</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Salvador - BA" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Salvador */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Escolha Certa para Clínicas e Hospitais Soteropolitanos
              </h2>
              <p>
                Salvador possui um mercado de saúde vibrante e exigente. A expansão de centros médicos em regiões como <strong>Itaigara</strong>, <strong>Brotas</strong> e a <strong>Avenida Tancredo Neves</strong> demanda materiais de construção que aliem segurança radiológica e durabilidade.
              </p>
              <p>
                Nossa plataforma conecta você a distribuidores de <strong>argamassa baritada</strong> preparados para atender as especificidades da capital baiana, incluindo a necessidade de materiais resistentes à umidade e salinidade típicas da nossa orla.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística Integrada Bahia</h3>
              <p>
                Sabemos que a logística na Bahia é fundamental. Nossos parceiros possuem rotas otimizadas não apenas para a capital, mas para hubs importantes como <strong>Feira de Santana</strong> (o maior entroncamento rodoviário do Norte-Nordeste) e <strong>Vitória da Conquista</strong>.
              </p>

              <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-brand-blue text-lg mb-2">Conformidade com a SUVISA</h4>
                <p className="text-sm text-gray-700">
                  Evite dores de cabeça na fiscalização. Trabalhamos com fornecedores cujos materiais possuem laudos técnicos aceitos pela Vigilância Sanitária da Bahia (DIVISA/SUVISA).
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
                        <span className="font-bold text-gray-900 block text-sm mb-1">Salvador (Capital)</span>
                        <p className="text-xs text-gray-500">Caminho das Árvores, Pituba, Brotas, Barra, Comércio, Cajazeiras.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Região Metropolitana (RMS)</span>
                        <p className="text-xs text-gray-500">Lauro de Freitas, Camaçari (Polo), Simões Filho.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Interior da Bahia</span>
                        <p className="text-xs text-gray-500">Feira de Santana, Ilhéus, Itabuna, Jequié, Alagoinhas.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações Comuns</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span>Clínicas Odontológicas (Raio-X)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span>Centros de Diagnóstico por Imagem</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span>Indústria Química/Petroquímica</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-blue-500" />
                        <span>Hospitais Veterinários</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos na Bahia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Empresariais Médicos</h3>
              <p className="text-xs text-gray-600">Salas no Salvador Trade, CEO e Vitraux.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Anchor className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Polo Industrial</h3>
              <p className="text-xs text-gray-600">Proteção para ensaios não destrutivos em Camaçari.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Activity className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Redes Hospitalares</h3>
              <p className="text-xs text-gray-600">Expansão de leitos e salas de tomografia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Populares</h3>
              <p className="text-xs text-gray-600">Soluções econômicas para Cajazeiras e Subúrbio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Salvador */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Salvador
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em Lauro de Freitas e Camaçari?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim, a Região Metropolitana de Salvador (RMS) é atendida diariamente. Para Camaçari e Lauro de Freitas, as condições de frete costumam ser muito competitivas devido à proximidade com os centros logísticos de Simões Filho.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                A argamassa suporta a maresia de Salvador?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. A argamassa baritada é um material cimentício que, após a cura e pintura adequada, torna-se inerte e resistente. É uma excelente opção frente ao chumbo em lençol, que exige cuidados extras de isolamento para não oxidar em áreas litorâneas como a Barra e o Rio Vermelho.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Qual o prazo médio de entrega para o interior da Bahia?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Para cidades maiores como Feira de Santana, Vitória da Conquista e Ilhéus, o prazo costuma ser rápido (2 a 5 dias úteis, dependendo do estoque). Para cidades mais distantes no Oeste Baiano, consulte o prazo específico no momento da cotação.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Construindo Salas de Raio-X na Bahia?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Não perca tempo procurando. Receba orçamentos de quem realmente entrega em Salvador.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - SALVADOR & BA
          </button>
        </div>
      </section>

    </div>
  );
};

export default SalvadorPage;