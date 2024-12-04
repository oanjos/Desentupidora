import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Phone, Clock, CheckCircle2, MessageCircle, PhoneCall, Timer, CreditCard, DollarSign } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Header } from './components/Header';

// Initialize EmailJS
emailjs.init("G7NS1zSwonavgRhPe");

function App() {
  const whatsappNumber = "5508005912638";
  const phoneNumber = "08005912638";
  const formattedPhoneNumber = "0800 591 2638";
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hasWhatsapp: false,
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceTypes = [
    "Desentupimento de calhas e águas pluviais",
    "Desentupimento de pia de cozinha e caixa de gordura",
    "Desentupimento de privadas e caixa de esgoto",
    "Desentupimento de ralos",
    "Limpa fossa",
    "Limpeza Pós obra / colunas prediais",
    "Dedetização de pragas"
  ];

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.setAttribute('href', '/Icone_Titulo.png'); // Caminho para o novo ícone
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        message: `Nome: ${formData.name}
        Telefone: ${formData.phone}
        Tem WhatsApp: ${formData.hasWhatsapp ? 'Sim' : 'Não'}
        Tipo de Serviço: ${formData.serviceType}`
      };

      await emailjs.send(
        'service_54eoizd',
        'template_kjfh68h',
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        hasWhatsapp: false,
        serviceType: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <Header phoneNumber={phoneNumber} formattedPhoneNumber={formattedPhoneNumber} />
      <div>
        <Helmet>
          <title>D.D. Associados - Desentupidora e Detetizadora</title>
        </Helmet>
      </div>
      {/* Add margin-top to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <div 
          className="min-h-[500px] bg-cover bg-center relative" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Desentupimento Profissional
                <span className="block text-yellow-400 mt-2">a partir de R$79,90/metro</span>
              </h1>
              <p className="text-xl mb-8">Atendimento imediato em todo estado de São Paulo</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                <div className="flex items-center gap-2">
                  <Clock className="text-yellow-400" />
                  <span>Atendimento no local em até 40 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-yellow-400" />
                  <span>Visita gratuita</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="text-yellow-400" />
                  <span>Temos uma equipe disponível no seu bairro</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="text-yellow-400" />
                  <span>Melhores preços</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="text-yellow-400" />
                  <span>Parcelamento sem juros</span>
                </div>
              </div>

              <a 
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                <Phone />
                Solicitar Orçamento Grátis
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Desentupimento de calhas e águas pluviais",
                  image: "/img_Agua_pluviais_e_calhas.webp",
                  subtitle: "Evitamos alagamentos e garantimos o fluxo eficiente da água com serviços rápidos e eficazes"
                },
                {
                  title: "Desentupimento de pia de cozinha e caixa de gordura",
                  image: "/img_Caixa de gordura.png",
                  subtitle: "Removemos entupimentos com eficiência, garantindo o funcionamento ideal da pia de cozinha e da caixa de gordura"
                },
                {
                  title: "Desentupimento de privadas e caixa de esgoto",
                  image: "/img_Privadas.png",
                  subtitle: "Desobstruímos privadas e caixas de esgoto com rapidez, assegurando higiene e o funcionamento adequado do sistema"
                },
                {
                  title: "Desentupimento de ralos",
                  image: "/img_Ralos.png",
                  subtitle: "Desobstruímos ralos com eficiência, garantindo o fluxo adequado da água e evitando alagamentos"
                },
                {
                  title: "Limpa fossa",
                  image: "/img_Limpa Fossa.webp",
                  subtitle: "Realizamos limpeza de fossas com eficiência, garantindo higiene, segurança e o correto funcionamento do sistema de saneamento"
                },
                {
                  title: "Dedetização de pagas",
                  image: "/img_Dedetização.png",
                  subtitle: "Eliminamos pragas com técnicas eficazes, garantindo segurança, higiene e proteção para sua residência ou empresa"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call Now Section */}
        <div className="bg-red-600 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-8 rounded-lg text-xl transition-colors shadow-lg mb-2"
              >
                <PhoneCall className="animate-pulse" />
                Ligue Agora
              </a>
              <span className="text-white font-semibold text-lg">{formattedPhoneNumber}</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-12">Entraremos em contato</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.hasWhatsapp}
                      onChange={(e) => setFormData({...formData, hasWhatsapp: e.target.checked})}
                      className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Tem WhatsApp?</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de atendimento
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${
                  isSubmitting ? 'bg-gray-400' : 'bg-yellow-500 hover:bg-yellow-600'
                } text-black font-bold py-3 px-6 rounded-lg transition-colors relative`}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Contato'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center font-medium">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center font-medium">
                  Erro ao enviar mensagem. Por favor, tente novamente.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de um orçamento para desentupimento.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-20 transition-transform hover:scale-110"
        >
          <img
            src="/Icone_Whatsapp.png"
            alt="WhatsApp"
            className="w-20 h-20"
          />
        </a>
      </div>
    </div>
  );
}

export default App;