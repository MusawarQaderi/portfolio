import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Cloud, GraduationCap, Briefcase, School, Calendar, MapPin, Code, Zap } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: '2026 - heute',
      title: 'Umschulung - Fachinformatiker für Systemintegration',
      company: 'CBM Projektmanagement GmbH',
      description:
        'Praxisorientierter Aufbau von Fähigkeiten im Bereich Cloud und DevOps mit Fokus auf Automatisierung, Deployment und Cloud-Infrastruktur. Arbeit mit Python, AWS, Docker sowie Grundlagen in CI/CD und Linux.',
      icon: Cloud,},
    {
      year: '2023 - 2025',
      title: 'Studium - Informatik',
      company: 'Universität Hamburg',
      description: 'Grundlagen in Informatik, Softwareentwicklung und IT-Systemen. Anschließend Fokus auf praxisorientierte Ausbildung im Bereich Cloud und DevOps.',
      icon: GraduationCap,
    },
     {
      year: '2018 - 2025',
      title: 'Lagerist',
      company: 'CPS Copier Products and Supplies GmbH',
      description: 'Organisation und Abwicklung von Lagerprozessen, inklusive Kommissionierung, Wareneingang und Versandvorbereitung. Bearbeitung von Aufträgen sowie Sicherstellung termingerechter Auslieferungen. Unterstützung bei der Fehleranalyse und Anpassung von Druckerzubehör (z. B. Austausch von Toner-Chips) zur Gewährleistung der Funktionsfähigkeit.',
      icon: Briefcase,
    },
     {
      year: '2018',
      title: 'Abitur',
      company: 'Geschwister-Scholl-Stadtteilschule Hamburg',
      description: 'Grundlagen in Informatik, Softwareentwicklung und IT-Systemen. Anschließend Fokus auf praxisorientierte Ausbildung im Bereich Cloud und DevOps.',
      icon: School,
    },
  ];

  const philosophyPoints = [
  {
    icon: Zap,
    title: 'Praxisorientiertes Lernen',
    description: 'Ich entwickle meine Fähigkeiten durch reale Projekte in Cloud, DevOps und Automatisierung.',
  },
  {
    icon: Code,
    title: 'Automatisierung & Deployment',
    description: 'Ich lege Wert darauf, Prozesse zu automatisieren und Anwendungen strukturiert und reproduzierbar zu deployen.',
  },
  {
    icon: MapPin,
    title: 'Cloud-Infrastruktur',
    description: 'Ich fokussiere mich auf den Aufbau und das Verständnis moderner Cloud-Systeme und Infrastruktur.',
  },
];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Einblick in meinen Werdegang und meine Arbeitsweise im Bereich Cloud und DevOps"
      />

    {/* Bio Section */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      {/* Bio Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:col-span-7 space-y-8"
      >
        <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
          <div className="font-mono text-lg mb-6">
            <span className="text-accent-500">$</span>
            <span className="text-primary-500"> cat</span>
            <span className="text-neutral-400"> bio.txt</span>
          </div>

          <div className="space-y-4 text-neutral-200 leading-relaxed">
            <Typewriter
              text="Hallo, ich bin Musawar Qaderi und entwickle mich gezielt im Bereich Cloud und DevOps."
              delay={30}
              className="text-primary-500 font-semibold block mb-4"
            />

            <p>
              Mein Weg in die IT begann mit dem Interesse an Systemen und Software,
              mit dem klaren Ziel, mich auf Cloud und DevOps zu spezialisieren.
            </p>

            <p>
              Aktuell mache ich eine Umschulung zum Fachinformatiker und baue parallel
              ein praxisorientiertes Skillset in den Bereichen Cloud-Infrastruktur,
              Automatisierung und Deployment auf.
            </p>

            <p>
              Ich arbeite mit Technologien wie Python, AWS und Docker und beschäftige mich
              mit Linux, CI/CD-Prozessen und modernen DevOps-Tools, um Anwendungen effizient
              und reproduzierbar in die Cloud zu bringen.
            </p>

            <p className="text-primary-500 font-medium">
              Mein Fokus liegt darauf, reale Projekte umzusetzen, Prozesse zu automatisieren
              und Schritt für Schritt skalierbare Cloud-Systeme aufzubauen.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-5 space-y-6"
      >
        <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
          <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
            Profilübersicht
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Status</span>
              <span className="text-primary-500 font-mono">In Ausbildung</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Fokus</span>
              <span className="text-primary-500 font-mono">Cloud / DevOps</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Lernstack</span>
              <span className="text-primary-500 font-mono">Python, AWS, Docker</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-neutral-400">Ziel</span>
              <span className="text-primary-500 font-mono">Cloud Engineer</span>
            </div>
          </div>
        </div>

        <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
          <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
            Schwerpunkte
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Cloud Architecture', 'CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Microservices'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Werdegang
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Mein Weg in Richtung Cloud, DevOps und moderne IT-Infrastruktur
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium mb-3">{item.company}</div>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Arbeitsweise
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Grundprinzipien, nach denen ich lerne, arbeite und technische Lösungen entwickle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-200 mb-4">{point.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
