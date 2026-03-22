export const HERO_CONTENT = "Ich entwickle skalierbare Cloud-Systeme und automatisiere Deployments mit modernen DevOps-Tools. Mein Fokus liegt auf Cloud-Infrastruktur, Automatisierung und praxisnahen Projekten mit Python, AWS und Docker.";

export const ABOUT_TEXT = "Mein Weg in die IT begann mit der Entscheidung, mich gezielt in Richtung Cloud und DevOps zu entwickeln. Aktuell mache ich eine Umschulung zum Fachinformatiker und baue parallel ein praxisorientiertes Skillset in den Bereichen Cloud-Infrastruktur, Automatisierung und Deployment auf. Ich arbeite mit Technologien wie Python, AWS und Docker und beschäftige mich intensiv mit CI/CD-Prozessen, Linux und modernen DevOps-Tools. Mein Fokus liegt darauf, reale Probleme zu lösen, Anwendungen in die Cloud zu bringen und Systeme Schritt für Schritt effizienter und skalierbarer zu gestalten.";

export const SKILLS = [
  // Cloud
  { name: 'AWS (EC2, S3, IAM)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 40 },
  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 40 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 30 },
  // DevOps & Automation
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 70 },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 70 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 40 },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 40 },
  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 40 },
  // Infrastructure as Code
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 30 },
  // Development
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development', level: 40 },
  // Cloud Security
  { name: 'IAM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'security', level: 35 },
  // Networking
  { name: 'HTTP/DNS/TCP/IP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'networking', level: 35 },
  // Database
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 30 },
];

export const PROJECTS = [
  { title: 'DevOps-Projekt 1 — CI/CD Pipeline Automation', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', description: 'Ein Projekt zur Automatisierung von CI/CD Pipelines mit GitHub Actions und Docker. Containerisierte Anwendungen und automatisierte Deployments mit modernen DevOps-Tools.', technologies: ['GitHub Actions', 'Docker', 'CI/CD', 'Automation'], category: 'devops', githubLink: 'https://github.com/MusawarQaderi', websiteLink: '', },
  { title: 'Cloud Infrastructure as Code — AWS Terraform Setup', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', description: 'Infrastruktur-Automation auf AWS mit Terraform. Definition von EC2-Instanzen, S3-Buckets und VPC als Code für wiederholbare und skalierbare Cloud-Deployments.', technologies: ['Terraform', 'AWS', 'Infrastructure as Code', 'EC2', 'S3'], category: 'devops', githubLink: 'https://github.com/MusawarQaderi', websiteLink: '', },
  { title: 'Python Automatisierungsskript — Systemverwaltung', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', description: 'Python-basierte Automatisierungsskripte für System- und Konfigurationsmanagement. Fokus auf praktische Aufgaben und Effizienzsteigerung in Cloud-Umgebungen.', technologies: ['Python', 'Automation', 'Linux', 'System Administration'], category: 'fullstack', githubLink: 'https://github.com/MusawarQaderi', websiteLink: '', },
  { title: 'Kubernetes-Deployment — Container-Orchestrierung', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', description: 'Praktische Erfahrung mit Kubernetes zur Orchestrierung und Verwaltung von containerisierten Anwendungen. Deployment, Skalierung und Monitoring von Workloads.', technologies: ['Kubernetes', 'Docker', 'Container Orchestration', 'Deployment'], category: 'devops', githubLink: 'https://github.com/MusawarQaderi', websiteLink: '', },
  { title: 'Docker-Containerisierung — Microservices-Architektur', image: 'https://images.unsplash.com/photo-1586717791821-3f44527f3e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', description: 'Containerisierung von Anwendungen mit Docker. Erstellung von Multi-Container-Setups und Microservices-Architekturen für produktionsreife Deployments.', technologies: ['Docker', 'Containers', 'Microservices', 'Docker Compose'], category: 'devops', githubLink: 'https://github.com/MusawarQaderi', websiteLink: '', },
  { title: 'Linux System Administration — Server-Setup', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', description: 'Grundlagen der Linux-Systemverwaltung mit Fokus auf Server-Setup, Benutzer- und Dateiverwaltung sowie Sicherheit. Praktische Anwendung von Bash-Scripting für Automatisierung.', technologies: ['Linux', 'Bash', 'System Administration', 'Server Setup'], category: 'fullstack', githubLink: 'https://github.com/MusawarQaderi', websiteLink: '', },
];

export const CONTACT = {
  address: 'Hamburg, Deutschland',
  phoneNo: '+49 176 XXXXXXXX',
  email: 'musawar.qaderi@gmail.com',
  social: {
    github: 'https://github.com/MusawarQaderi',
    linkedin: 'https://www.linkedin.com/in/musawar-q-73b9862a7/',
    instagram: 'https://www.instagram.com/musawer.q/',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  security: SKILLS.filter(skill => skill.category === 'security'),
  networking: SKILLS.filter(skill => skill.category === 'networking'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};
export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
