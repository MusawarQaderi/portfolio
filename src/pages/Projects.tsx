import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { ExternalLink, Github } from 'lucide-react';

// TypeScript Interface für die Projekt-Struktur ohne Kategorie
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  websiteLink?: string; // Das '?' macht diesen Link optional
}

// Platzhalter für deine zukünftigen Projekte als einfaches Array
const PROJECTS: Project[] = [
  {
    title: "Platzhalter Projekt 1",
    description: "Dies ist ein Platzhalter für mein zukünftiges Projekt. Hier werde ich später die Details zu meiner Anwendung eintragen.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Node.js", "Docker"],
    githubLink: "#",
    websiteLink: "#"
  },
  {
    title: "Platzhalter Projekt 2",
    description: "Eine weitere Platzhalter-Beschreibung.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
    technologies: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
    githubLink: "#"
  }
];

export const Projects = () => {
  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="docker ps -a"
        description="Auflistung bereitgestellter Projekte und Anwendungen"
      />

      {/* Projects Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-bg-elevated/90 backdrop-blur-md border border-primary-500/50 px-10 py-8 rounded-2xl shadow-glow text-center max-w-md mx-4"
            >
              <h3 className="font-mono text-3xl font-bold text-primary-500 mb-3">Coming Soon</h3>
              <p className="text-neutral-300">
                Spannende Projekte sind aktuell in Arbeit und werden in Kürze hier veröffentlicht!
              </p>
            </motion.div>
          </div>

          {/* Blurred Projects Container */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 blur-md opacity-60 pointer-events-none select-none"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden group shadow-card"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-mono text-xl font-bold text-primary-500">
                    {project.title}
                  </h3>
                  <p className="text-neutral-200 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {PROJECTS.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="font-mono text-4xl text-neutral-600 mb-4">404</div>
              <div className="text-neutral-400">Keine Projekte gefunden.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Terminal-style project summary */}
      <section className="py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="space-y-4">
              <div className="text-accent-500">
                $ cat project_summary.txt
              </div>
              
              <div className="space-y-2 text-neutral-200">
                <div className="flex justify-between">
                  <span>Gesamtanzahl Projekte:</span>
                  <span className="text-primary-500">{PROJECTS.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Verwendete Technologien:</span>
                  <span className="text-primary-500">
                    {new Set(PROJECTS.flatMap(p => p.technologies)).size}+
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-700 text-sm text-neutral-400">
                <div className="flex items-center space-x-2">
                  <span className="text-accent-500">$ echo</span>
                  <span>"Jedes Projekt demonstriert die praxisnahe Umsetzung von Cloud-Native-Architektur und modernen Entwicklungspraktiken"</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-bg-elevated to-bg-surface border border-primary-500/20 p-12 rounded-2xl shadow-glow"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Interessiert an einer Zusammenarbeit?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              Diese Projekte zeigen meine Expertise und Fähigkeiten. 
              Lassen Sie uns besprechen, wie wir bei Ihrem nächsten Projekt zusammenarbeiten können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/MusawarQaderi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow"
              >
                <Github className="mr-2 h-5 w-5" />
                Alle Projekte ansehen
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Ein Projekt starten
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
