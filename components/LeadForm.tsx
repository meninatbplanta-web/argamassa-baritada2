import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

interface LeadFormProps {
  defaultCity?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ defaultCity = '' }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: defaultCity,
    email: '',
    quantity: '',
    observations: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: '',
        whatsapp: '',
        city: defaultCity, // Reset but keep city if provided
        email: '',
        quantity: '',
        observations: ''
      });
    }, 2000);
  };

  if (success) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-green-500 text-center animate-fade-in">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
        <p className="text-gray-600 mb-6">
          Recebemos seus dados com sucesso. Em breve, até 3 fornecedores qualificados entrarão em contato pelo WhatsApp.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="text-brand-orange font-semibold hover:underline"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-brand-orange">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Obtenha 3 Orçamentos
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        Preencha o formulário e receba propostas de fornecedores especializados em 5 minutos.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={3}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp *</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade *</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
            placeholder="Sua cidade"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
              placeholder="opcional"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Qtd. Estimada</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all"
              placeholder="Ex: 50m²"
            />
          </div>
        </div>

        <div>
          <label htmlFor="observations" className="block text-sm font-medium text-gray-700 mb-1">Observações</label>
          <textarea
            id="observations"
            name="observations"
            rows={3}
            value={formData.observations}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all resize-none"
            placeholder="Detalhes do projeto..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Receber 3 Orçamentos Grátis
            </>
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          Ao enviar, você concorda em receber contato via WhatsApp de parceiros certificados.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;