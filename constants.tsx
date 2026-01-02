import { ShieldCheck, DollarSign, Wrench, Hospital, BriefcaseMedical, Factory, Microscope, Calculator, MapPin, Building2, HardHat, CheckCircle2 } from 'lucide-react';
import { Testimonial, FAQItem, City, ServiceCard, Feature } from './types';

export const CITIES: City[] = [
  { name: 'São Paulo', slug: 'sao-paulo', state: 'SP' },
  { name: 'Rio de Janeiro', slug: 'rio-de-janeiro', state: 'RJ' },
  { name: 'Brasília', slug: 'brasilia', state: 'DF' },
  { name: 'Salvador', slug: 'salvador', state: 'BA' },
  { name: 'Fortaleza', slug: 'fortaleza', state: 'CE' },
  { name: 'Belo Horizonte', slug: 'belo-horizonte', state: 'MG' },
  { name: 'Manaus', slug: 'manaus', state: 'AM' },
  { name: 'Curitiba', slug: 'curitiba', state: 'PR' },
  { name: 'Recife', slug: 'recife', state: 'PE' },
  { name: 'Goiânia', slug: 'goiania', state: 'GO' },
  { name: 'Belém', slug: 'belem', state: 'PA' },
  { name: 'Porto Alegre', slug: 'porto-alegre', state: 'RS' },
  { name: 'Guarulhos', slug: 'guarulhos', state: 'SP' },
  { name: 'Campinas', slug: 'campinas', state: 'SP' },
  { name: 'São Luís', slug: 'sao-luis', state: 'MA' },
  { name: 'Maceió', slug: 'maceio', state: 'AL' },
  { name: 'Natal', slug: 'natal', state: 'RN' },
  { name: 'Campo Grande', slug: 'campo-grande', state: 'MS' },
  { name: 'João Pessoa', slug: 'joao-pessoa', state: 'PB' },
  { name: 'Teresina', slug: 'teresina', state: 'PI' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Carlos Silva",
    role: "Diretor Clínico",
    company: "Hospital Santa Cruz - SP",
    text: "Conseguimos 3 orçamentos em menos de 2 horas. Escolhemos o melhor fornecedor e economizamos 30% no projeto de blindagem da nossa sala de tomografia.",
    rating: 5
  },
  {
    id: 2,
    name: "Dra. Ana Paula",
    role: "Proprietária",
    company: "Clínica Odontológica Sorriso - Campinas",
    text: "Processo rápido e fornecedores qualificados. A aplicação foi feita em 3 dias e já estamos operando com toda segurança.",
    rating: 5
  },
  {
    id: 3,
    name: "Eng. Roberto Costa",
    role: "Engenheiro Civil",
    company: "Construtora Alicerce - RJ",
    text: "Excelente suporte técnico. Os fornecedores nos ajudaram com o projeto de proteção radiológica e garantiram conformidade com as normas.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "O que é argamassa baritada?",
    answer: "Argamassa baritada é um revestimento especial composto por cimento, areia e barita (sulfato de bário), utilizado para proteção contra radiação ionizante em ambientes médicos e industriais."
  },
  {
    question: "Onde a argamassa baritada deve ser aplicada?",
    answer: "Deve ser aplicada em salas com equipamentos de raio-X, tomografia, mamografia, radioterapia, etc. É usada em paredes, tetos e pisos."
  },
  {
    question: "Qual a espessura necessária?",
    answer: "A espessura varia de 1cm a 5cm dependendo do tipo de equipamento. Raio-X odontológico: 1-2cm. Raio-X médico: 2-3cm. Tomografia: 3-4cm."
  },
  {
    question: "Quanto custa o m²?",
    answer: "O custo médio varia de R$ 80 a R$ 150 por m² (material + aplicação), dependendo da região e espessura."
  },
  {
    question: "Substitui o chumbo?",
    answer: "Sim, em muitos casos é mais vantajosa: mais econômica, fácil de aplicar, não oxida e atende as normas da CNEN."
  },
  {
    question: "Preciso de projeto técnico?",
    answer: "Sim, é obrigatório ter projeto de proteção radiológica elaborado por físico médico ou responsável técnico habilitado."
  }
];

export const FEATURES: Feature[] = [
  {
    title: "Proteção Certificada",
    description: "Atende normas CNEN NN 3.01 e Portaria 453/98 para proteção radiológica.",
    icon: ShieldCheck
  },
  {
    title: "Economia e Praticidade",
    description: "Mais econômica que chumbo, fácil aplicação e manutenção simplificada.",
    icon: DollarSign
  },
  {
    title: "Versatilidade",
    description: "Ideal para hospitais, clínicas e indústrias. Aplicação em paredes e tetos.",
    icon: Wrench
  }
];

export const SERVICE_CARDS: ServiceCard[] = [
  { title: "Hospitais e Clínicas", icon: Hospital, slug: "hospital" },
  { title: "Clínicas Odontológicas", icon: BriefcaseMedical, slug: "clinica-odontologica" },
  { title: "Clínicas Veterinárias", icon: CheckCircle2, slug: "clinica-veterinaria" }, // Using CheckCircle2 as generic medical/vet
  { title: "Indústrias", icon: Factory, slug: "industria" },
  { title: "Laboratórios", icon: Microscope, slug: "laboratorio" },
  { title: "Calculadora", icon: Calculator, slug: "calculadora" },
];