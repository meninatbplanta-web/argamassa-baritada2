import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import { ShieldCheck, MapPin, Truck, Sun, Anchor, Droplets, Stethoscope, Wind, Building2 } from 'lucide-react';

const NatalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Argamassa Baritada Natal - RN | Resistente à Maresia | Entrega Rápida";
    
    // Inject JSON-LD Schema for Local Business SEO (Natal Specific)
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Argamassa Baritada Natal Hub",
      "image": "https://picsum.photos/1920/1080",
      "description": "Distribuição de argamassa baritada em Natal (RN). Proteção radiológica ideal para cidades litorâneas, resistente à maresia. Atendemos Tirol, Petrópolis, Parnamirim e Mossoró.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Natal",
        "addressRegion": "RN",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -5.79448,
        "longitude": -35.211
      },
      "url": window.location.href,
      "telephone": "+5584999999999",
      "areaServed": ["Natal", "Parnamirim", "Mossoró", "São Gonçalo do Amarante", "Caicó", "Macau"],
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
          <span className="text-gray-900 font-bold">Argamassa Baritada Natal - RN</span>
        </div>
      </nav>

      {/* Hero Section - Coastal Durability Focus */}
      <section className="relative bg-brand-blue py-12 lg:py-24 text-white overflow-hidden">
        {/* Natal/Dunes/Ponta Negra abstract background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571239859239-0c6703576f3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900 via-blue-900 to-blue-800/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                <Droplets className="w-4 h-4" />
                Resistente à Maresia Potiguar
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Argamassa Baritada em <span className="text-brand-orange">Natal e Mossoró</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                A melhor alternativa ao chumbo para o litoral. Material que não oxida, ideal para clínicas no Tirol, Petrópolis e hospitais em Parnamirim.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Sun className="w-5 h-5 text-brand-orange" />
                  <span>Alta Durabilidade no Calor</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Truck className="w-5 h-5 text-brand-orange" />
                  <span>Logística RN (BR-101/304)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-brand-orange" />
                  <span>Aprovado SUVISA-RN</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <Wind className="w-5 h-5 text-brand-orange" />
                  <span>Atende Indústria Eólica</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl lg:translate-x-4">
              <LeadForm defaultCity="Natal - RN" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Strategic for Natal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* SEO Text Block */}
            <div className="md:col-span-7 prose prose-lg text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proteção Radiológica Inteligente para a Cidade do Sol
              </h2>
              <p>
                Natal possui um desafio construtivo único: a alta salinidade do ar. O uso de lençol de chumbo tradicional exige cuidados extremos de impermeabilização para evitar a oxidação e vazamento de radiação a longo prazo.
              </p>
              <p>
                A <strong>argamassa baritada</strong> é a solução técnica superior para o Rio Grande do Norte. Por ser um material cimentício de alta densidade, ela se integra à alvenaria e não sofre com a corrosão da maresia, garantindo a segurança de clínicas no <strong>Tirol</strong>, <strong>Petrópolis</strong> e <strong>Lagoa Nova</strong> por décadas.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Logística de Ponta a Ponta: Capital e Interior</h3>
              <p>
                Nossa rede de fornecedores atende não apenas a Grande Natal e Parnamirim, mas possui logística consolidada via BR-304 para chegar a <strong>Mossoró</strong> (Polo de Petróleo e Gás) e ao Seridó (Caicó, Currais Novos).
              </p>

              <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 mt-8 rounded-r-lg">
                <h4 className="font-bold text-cyan-800 text-lg mb-2">Atenção Indústria de Energia</h4>
                <p className="text-sm text-gray-700">
                  Fornecemos material para blindagem de salas de gamagrafia industrial, essencial para as empresas de energia eólica e manutenção offshore instaladas no RN.
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
                        <span className="font-bold text-gray-900 block text-sm mb-1">Natal (Polo Médico)</span>
                        <p className="text-xs text-gray-500">Tirol, Petrópolis, Lagoa Nova, Capim Macio, Candelária.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Grande Natal</span>
                        <p className="text-xs text-gray-500">Parnamirim (Centro/Nova Parnamirim), São Gonçalo do Amarante, Macaíba.</p>
                    </div>
                    <div>
                        <span className="font-bold text-gray-900 block text-sm mb-1">Oeste Potiguar</span>
                        <p className="text-xs text-gray-500">Mossoró (Capital do Oeste), Assú, Apodi.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-4">Aplicações no RN</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                        <Stethoscope className="w-4 h-4 text-blue-500" />
                        <span>Clínicas Médicas (Tirol)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Anchor className="w-4 h-4 text-blue-500" />
                        <span>Offshore/Petróleo (Mossoró)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Wind className="w-4 h-4 text-blue-500" />
                        <span>Parques Eólicos (Manutenção)</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-500" />
                        <span>Odontologia (Zona Sul)</span>
                    </li>
                  </ul>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Segment Focus: Natal Ecosystem */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Quem atendemos no Rio Grande do Norte
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Stethoscope className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Clínicas Tirol</h3>
              <p className="text-xs text-gray-600">Material ideal para reformas em prédios antigos e novos centros médicos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Anchor className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Indústria Mossoró</h3>
              <p className="text-xs text-gray-600">Proteção para bunkers de ensaios industriais e setor petrolífero.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <ShieldCheck className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Odontologia</h3>
              <p className="text-xs text-gray-600">Kits para consultórios em Parnamirim e Zona Norte de Natal.</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow border-t-4 border-brand-blue">
              <Building2 className="w-8 h-8 mx-auto text-brand-orange mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Hospitais</h3>
              <p className="text-xs text-gray-600">Atacado para expansões da Liga e hospitais privados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Natal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Perguntas Frequentes - Natal e RN
          </h2>
          <div className="space-y-4">
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Vocês entregam em Mossoró e Caicó?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sim. Natal funciona como hub de distribuição. Temos parceiros logísticos que realizam a rota da BR-304 diariamente, abastecendo Mossoró, Assú e região do Seridó com fretes competitivos.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                A argamassa baritada protege contra a maresia?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Indiretamente, sim. Ao contrário do chumbo em manta, que pode oxidar rapidamente se exposto à umidade salina de Natal, a argamassa é um material inerte. Após aplicada e pintada, ela oferece uma barreira extremamente durável e livre de manutenção corrosiva.
              </p>
            </details>
            <details className="group bg-gray-50 rounded-lg p-5 cursor-pointer border border-gray-100">
              <summary className="font-bold text-gray-900 list-none flex justify-between items-center">
                Onde comprar argamassa baritada em Natal?
                <span className="text-brand-orange group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Através da nossa plataforma, conectamos você aos estoques locais na Grande Natal, permitindo entrega rápida ou até retirada (dependendo do volume), evitando a longa espera de materiais vindos do Sul/Sudeste.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vai construir em Natal ou Mossoró?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Garanta proteção radiológica durável, ideal para o nosso litoral.
          </p>
          <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="bg-white text-brand-orange hover:bg-gray-100 font-bold py-4 px-12 rounded-lg shadow-lg transition transform hover:-translate-y-1"
          >
            COTAR AGORA - NATAL & RN
          </button>
        </div>
      </section>

    </div>
  );
};

export default NatalPage;