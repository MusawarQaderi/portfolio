import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, ExternalLink, CheckCircle } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    thema: '',
    nachricht: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte gebe eine gültige E-Mail an';
    }

    if (!formData.thema.trim()) {
      newErrors.thema = 'Thema ist erforderlich';
    }

    if (!formData.nachricht.trim()) {
      newErrors.nachricht = 'Nachricht ist erforderlich';
    } else if (formData.nachricht.trim().length < 10) {
      newErrors.nachricht = 'Nachricht muss eine Mindestlänge von 10 Zeichen haben';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data for Web3Forms API
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("access_key", "365d3bf2-3eff-4844-a5cc-ab67429f27d2");
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("thema", formData.thema);
      formDataToSubmit.append("nachricht", formData.nachricht);

      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });

      if (!response.ok) {
        throw new Error("Beim Senden ist ein Fehler aufgetreten");
      }

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        
        // Reset form after success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', thema: '', nachricht: '' });
        }, 3000);
      } else {
        throw new Error("Das Formular konnte nicht gesendet werden");
      }
    } catch (error) {
      // Handle network or other errors
      setErrors(prev => ({ ...prev, nachricht: "Senden fehlgeschlagen. Versuche es später nochmal." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`,
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: 'Standort',
      value: CONTACT.address,
      href: '#',
      color: 'text-purple-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Instagram',
      url: CONTACT.social.instagram,
      icon: Instagram,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="ping contact.server"
        description="Verbindung zum Kommunikationsendpunkt wird hergestellt"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="mb-8">
                  <h2 className="font-mono text-2xl font-bold text-primary-500 mb-4">
                    Nachricht senden
                  </h2>
                  <div className="font-mono text-sm text-accent-500">
                    <span>$</span>
                    <span className="text-primary-500 ml-2">cat nachricht_vorlage.txt</span>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={64} className="text-primary-500 mx-auto mb-4" />
                    <h3 className="font-mono text-xl font-semibold text-primary-500 mb-2">
                      Nachricht erfolgreich gesendet!
                    </h3>
                    <Typewriter
                      text="> Nachricht gesendet. Antwort wird innerhalb der nächsten 24 Stunden erfolgen."
                      delay={50}
                      className="text-neutral-400 text-sm"
                    />
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="block font-mono text-sm text-accent-500 mb-2">
                        <span className="text-primary-500 mr-2">&gt;</span>
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-bg-elevated border ${errors.name ? 'border-red-500' : 'border-neutral-700'} rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                        placeholder="Dein Name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block font-mono text-sm text-accent-500 mb-2">
                        <span className="text-primary-500 mr-2">&gt;</span>
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-bg-elevated border ${errors.email ? 'border-red-500' : 'border-neutral-700'} rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                        placeholder="deine.email@beispiel.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="block font-mono text-sm text-accent-500 mb-2">
                        <span className="text-primary-500 mr-2">&gt;</span>
                        thema
                      </label>
                      <input
                        type="text"
                        name="thema"
                        value={formData.thema}
                        onChange={handleChange}
                        className={`w-full bg-bg-elevated border ${errors.thema ? 'border-red-500' : 'border-neutral-700'} rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
                        placeholder="Worum handelt sich die Anfrage?"
                      />
                      {errors.thema && (
                        <p className="text-red-500 text-sm mt-2">{errors.thema}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block font-mono text-sm text-accent-500 mb-2">
                        <span className="text-primary-500 mr-2">&gt;</span>
                        nachricht
                      </label>
                      <textarea
                        name="nachricht"
                        value={formData.nachricht}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full bg-bg-elevated border ${errors.nachricht ? 'border-red-500' : 'border-neutral-700'} rounded-md px-4 py-3 text-neutral-200 placeholder-neutral-600 font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none`}
                        placeholder="Erzähle mir über dein Projekt oder Anfrage..."
                      />
                      {errors.nachricht && (
                        <p className="text-red-500 text-sm mt-2">{errors.nachricht}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-lg font-mono font-bold text-lg transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                          : 'bg-primary-500 text-bg-surface hover:bg-primary-700 shadow-glow hover:shadow-card-hover'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
                          <span>SENDET...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send size={20} />
                          <span> NACHRICHT SENDEN </span>
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Contact Methods */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Kontakt
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={method.label} className="flex items-center space-x-4">
                        <div className={`p-3 bg-bg-surface rounded-lg ${method.color}`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-200">{method.label}</div>
                          <div className="text-sm text-neutral-400">{method.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Verfügbarkeit
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                    <span className="font-mono text-sm text-neutral-200">Verfügbar für neue Projekte</span>
                  </div>
                  <div className="text-sm text-neutral-400">
                    <div className="mb-2">Antwortzeit: Innerhalb der nächsten 24 Stunden</div>
                    <div>Zeitzone: Europe/Berlin (UTC+1 / UTC+2)</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
                  Kontakt aufnehmen
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center p-4 bg-bg-surface rounded-lg text-neutral-400 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card`}
                      >
                        <IconComponent size={24} className="mb-2" />
                        <span className="text-xs font-mono">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal-style footer message */}
      <section className="py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="text-accent-500 mb-4">
              $ echo "Danke für deinen Besuch!"
            </div>
            <div className="space-y-2 text-neutral-200">
              <p>Ich bin immer offen für neue Möglichkeiten und interessante Projekte im Bereich Cloud und DevOps.</p>
              <p className="text-primary-500">
                Wenn du motivierte Unterstützung suchst, freue ich mich über eine Nachricht.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-700 text-sm text-neutral-400">
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>Verbindung hergestellt. Warte auf eingehende Nachricht...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
