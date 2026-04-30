import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Network,
  Phone,
  PlayCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import "./styles.css";

const resumeHref = "/public/SRINJOY_ROY_CV.pdf";

const links = {
  email: "srinjoy.roy.work365@gmail.com",
  phone: "+91 62974 31381",
  linkedin: "https://www.linkedin.com/in/srinjoy-roy-22ab76287",
  github: "https://github.com/srinjoy356",
  instagram: "https://www.instagram.com/srinjoy356/",
  credentials:
    "https://drive.google.com/drive/u/0/folders/1KTIBZgnpQIGLYo5qjtemiju2AQ6IDZuJ",
};

const navItems = ["Impact", "Skills", "Projects", "Demos", "Contact"];

const achievements = [
  {
    metric: "National Winner",
    label: "Smart India Hackathon 2025",
    detail: "Led MetaMark, an AI compliance system for legal metrology validation.",
  },
  {
    metric: "1st Place",
    label: "HackHeritage 2024",
    detail: "Built ML-backed anomaly detection for pharma inventory supply chains.",
  },
  {
    metric: "Production ML",
    label: "MLOps and cloud delivery",
    detail: "CI/CD, Docker, monitoring, inference APIs, and cloud deployment.",
  },
  {
    metric: "Media",
    label: "Television recognition",
    detail: "Interviewed for national-level innovation and hackathon achievement.",
  },
];

const skills = [
  ["Programming", ["Python", "SQL", "C/C++", "Java", "JavaScript", "Bash", "R"]],
  ["Machine Learning", ["Scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "PyTorch", "Keras"]],
  ["Deep Learning and CV", ["OpenCV", "YOLOv5", "CNNs", "ViT", "Transfer Learning"]],
  ["NLP and GenAI", ["Transformers", "Embeddings", "HuggingFace", "BERT", "GPT", "RAG", "LangChain"]],
  ["GenAI Systems", ["Vector DBs", "Semantic Search", "Retrieval Pipelines", "AI Agents", "Tool Calling"]],
  ["MLOps", ["Docker", "Kubernetes", "MLflow", "Airflow", "CI/CD", "GitHub Actions"]],
  ["Data and Analytics", ["Pandas", "NumPy", "Spark", "PowerBI", "Tableau", "Matplotlib"]],
  ["Databases and Cloud", ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "AWS", "GCP", "Azure ML"]],
];

const projects = [
  {
    title: "MetaMark",
    tag: "National Winner",
    summary:
      "AI-powered legal metrology compliance engine for e-commerce listing validation.",
    impact:
      "Combined OCR, LLM rule validation, trust scoring, and forensic hardware signals to prevent listing-stage violations.",
    stack: ["OCR", "Gemini 2.5 Flash", "LangChain", "Compliance AI", "System Design"],
    links: [
      ["Demo", "https://youtu.be/xZJdHqtpcVk"],
      ["Winner post", "https://www.linkedin.com/posts/srinjoy-roy-22ab76287_sih2025-smartindiahackathon-iitkgp-activity-7407396867879321600-tuLz"],
    ],
  },
  {
    title: "Nirvana SmartChain",
    tag: "Pharma safety",
    summary:
      "Anti-counterfeiting pharma supply chain system for drug safety and inventory trust.",
    impact:
      "Built backend and ML inference workflows for anomaly detection, monitoring, and supply chain transparency.",
    stack: ["ML Inference", "Backend APIs", "Docker", "Cloud", "Monitoring"],
    links: [
      ["Demo", "https://youtu.be/SDcBaqv6fJY"],
      ["GitHub", "https://github.com/srinjoy356/SIH_Drug_Supplychain_Management"],
      ["Winner post", "https://www.linkedin.com/posts/srinjoy-roy-22ab76287_hackheritage2024-sih2024-teamwork-activity-7240360318911070208-vm6F"],
    ],
  },
  {
    title: "Phishing Website Detection",
    tag: "MLOps",
    summary:
      "End-to-end ML pipeline for phishing detection with automated training, evaluation, and deployment.",
    impact:
      "Implemented CI/CD with Docker, GitHub Actions, AWS inference, monitoring, and drift-aware operations.",
    stack: ["Python", "MLOps", "Docker", "AWS", "GitHub Actions"],
    links: [["GitHub", "https://github.com/srinjoy356/networksecurity"]],
  },
  {
    title: "Medical OCR and NLP Intelligence",
    tag: "Healthcare AI",
    summary:
      "OCR pipeline for noisy medical documents with NLP extraction for medicines, dosage, and patient metadata.",
    impact:
      "Optimized preprocessing with Tesseract and OpenCV for real-world healthcare document digitization.",
    stack: ["Tesseract", "OpenCV", "NLP", "FastAPI", "Python"],
    links: [["Feature", "https://www.linkedin.com/posts/srinjoy-roy-22ab76287_python-programming-coding-activity-7214915933214007296-f6eH/"]],
  },
  {
    title: "AgriX Nirvana",
    tag: "Blockchain traceability",
    summary:
      "Farm-to-fork agricultural supply chain transparency platform for authenticity, quality, and fair pricing.",
    impact:
      "Positioned blockchain-backed traceability around one of India's most pressing agricultural distribution problems.",
    stack: ["Blockchain", "Supply Chain", "Traceability", "Product Strategy"],
    links: [["Demo", "https://youtu.be/ppEzKKeZSAk"]],
  },
  {
    title: "Smart Green Campus",
    tag: "IoT and AI",
    summary:
      "Real-time campus sustainability platform for energy, water, and waste optimization.",
    impact:
      "Engineered WebSocket ingestion, AI analytics, and blockchain incentive mechanisms for sustainability tracking.",
    stack: ["WebSockets", "AI Analytics", "IoT", "Blockchain"],
    links: [["GitHub", "https://github.com/Sourjya-Saha/Smart-Green-Campus-Monitoring"]],
  },
];

const demos = [
  {
    title: "Introducing MetaMark",
    slug: "demo-metamark",
    type: "AI legal metrology compliance",
    url: "https://youtu.be/xZJdHqtpcVk",
    embedUrl: "https://www.youtube.com/embed/xZJdHqtpcVk",
  },
  {
    title: "Welcome to AgriX Nirvana",
    slug: "demo-agrix-nirvana",
    type: "Blockchain agriculture transparency",
    url: "https://youtu.be/ppEzKKeZSAk",
    embedUrl: "https://www.youtube.com/embed/ppEzKKeZSAk",
  },
  {
    title: "Nirvana SmartChain",
    slug: "demo-nirvana-smartchain",
    type: "Anti-counterfeiting pharma solution",
    url: "https://youtu.be/SDcBaqv6fJY",
    embedUrl: "https://www.youtube.com/embed/SDcBaqv6fJY",
  },
  {
    title: "OCR medical document intelligence",
    slug: "demo-medical-ocr",
    type: "LinkedIn technical walkthrough",
    url: "https://www.linkedin.com/posts/srinjoy-roy-22ab76287_python-programming-coding-activity-7214915933214007296-f6eH/",
  },
];

const experience = [
  {
    role: "Backend Developer and ML Engineer",
    org: "HackHeritage 2024, Team Code Nirvana",
    period: "2024",
    points: [
      "Led ML pipeline design for anomaly detection in drug inventory supply chains.",
      "Built backend services integrating ML inference and real-time monitoring.",
      "Deployed production models with CI/CD, Docker, and cloud infrastructure.",
    ],
  },
  {
    role: "Team Leader and AI/ML Architect",
    org: "Smart India Hackathon 2025",
    period: "2025",
    points: [
      "Architected OCR plus LLM compliance validation using Tesseract, Gemini, and LangChain.",
      "Implemented regulatory rule validation with real-time trust score generation.",
      "Owned model logic, system design, leadership, and final deployment.",
    ],
  },
];

const education = [
  {
    school: "Heritage Institute of Technology, Kolkata",
    detail: "B.Tech in Information Technology",
    period: "2023 - 2027",
    meta: "CGPA: 6.97",
  },
  {
    school: "Burdwan Municipal High School",
    detail: "Higher Secondary, Science",
    period: "2020 - 2022",
    meta: "89.7%",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeDemo, setActiveDemo] = React.useState(null);
  const [emailModalOpen, setEmailModalOpen] = React.useState(false);
  const [phoneModalOpen, setPhoneModalOpen] = React.useState(false);

  useEffect(() => {
    // Load EmailJS SDK once
    if (!window.emailjs) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const openDemoFromHash = () => {
      const slug = window.location.hash.replace("#", "");
      const demo = demos.find((item) => item.slug === slug);
      if (demo) {
        setActiveDemo(demo);
        return;
      }

      const target = document.getElementById(slug);
      if (target) {
        window.setTimeout(() => target.scrollIntoView({ block: "start" }), 0);
      }
    };

    openDemoFromHash();
    window.addEventListener("hashchange", openDemoFromHash);
    return () => window.removeEventListener("hashchange", openDemoFromHash);
  }, []);

  useEffect(() => {
    if (!activeDemo && !emailModalOpen && !phoneModalOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveDemo(null);
        setEmailModalOpen(false);
        setPhoneModalOpen(false);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDemo, emailModalOpen, phoneModalOpen]);

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero onOpenEmail={() => setEmailModalOpen(true)} />
        <Achievements />
        <Skills />
        <Projects onOpenDemo={setActiveDemo} />
        <Communication onOpenDemo={setActiveDemo} />
        <Experience />
        <Education />
        <Contact
          onOpenEmail={() => setEmailModalOpen(true)}
          onOpenPhone={() => setPhoneModalOpen(true)}
        />
      </main>
      <VideoModal demo={activeDemo} onClose={() => setActiveDemo(null)} />
      <EmailModal open={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
      <PhoneModal open={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Srinjoy Roy home">
        <span className="brand-mark">SR</span>
        <span>Srinjoy Roy</span>
      </a>
      <nav className={menuOpen ? "nav is-open" : "nav"} aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={resumeHref} download>
        <Download size={16} />
        Resume
      </a>
      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen((value) => !value)}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function Hero({ onOpenEmail }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">
          <Sparkles size={16} />
          AI/ML Engineer + Data Scientist
        </p>
        <h1>Srinjoy Roy builds production-grade ML systems that move from model to market.</h1>
        <p className="hero-copy">
          National hackathon winner specializing in NLP, computer vision, GenAI, compliance automation,
          and MLOps workflows for reliable real-world deployment.
        </p>
        <div className="hero-actions">
          <button className="button primary" type="button" onClick={onOpenEmail}>
            <Mail size={18} />
            Contact me
          </button>
          <a className="button secondary" href={resumeHref} download>
            <Download size={18} />
            Download resume
          </a>
          <a className="icon-link" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a className="icon-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a className="icon-link" href={links.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <aside className="signal-panel">
        <div className="panel-header">
          <BrainCircuit size={22} />
          <span>Role fit</span>
        </div>
        <div className="role-stack">
          {["Data Scientist", "Machine Learning Engineer", "Applied GenAI Engineer", "ML Intern"].map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
        <div className="status-card">
          <ShieldCheck size={20} />
          <div>
            <strong>Recruiter signal</strong>
            <p>End-to-end builder with leadership, demos, deployments, and measurable wins.</p>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section" id="impact" data-reveal>
      <SectionIntro
        icon={<Trophy size={20} />}
        label="Impact"
        title="National-level results backed by shipped systems."
        text="A concise view of the signals recruiters look for first: awards, leadership, technical ownership, and communication."
      />
      <div className="achievement-grid">
        {achievements.map((item) => (
          <article className="achievement-card" key={item.label}>
            <p className="metric">{item.metric}</p>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills" data-reveal>
      <SectionIntro
        icon={<Code2 size={20} />}
        label="Technical stack"
        title="ML, GenAI, data, and deployment skills in one operating system."
        text="Grouped for fast scanning while still showing the breadth required for applied AI roles."
      />
      <div className="skills-grid">
        {skills.map(([group, items]) => (
          <article className="skill-card" key={group}>
            <h3>{group}</h3>
            <div className="chip-row">
              {items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ onOpenDemo }) {
  return (
    <section className="section" id="projects" data-reveal>
      <SectionIntro
        icon={<Layers3 size={20} />}
        label="Selected projects"
        title="Applied AI projects with compliance, safety, OCR, and MLOps depth."
        text="Each project is framed around the problem, the engineering contribution, and proof links."
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-topline">
              <span>{project.tag}</span>
              <ArrowUpRight size={18} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <p className="impact-copy">{project.impact}</p>
            <div className="chip-row">
              {project.stack.map((item) => (
                <span className="chip subtle" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="link-row">
              {project.links.map(([label, url]) => (
                <ProjectLink key={url} label={label} url={url} onOpenDemo={onOpenDemo} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectLink({ label, url, onOpenDemo }) {
  const demo = demos.find((item) => item.url === url && item.embedUrl);

  if (demo) {
    return (
      <button className="text-link" type="button" onClick={() => onOpenDemo(demo)}>
        {label}
        <PlayCircle size={14} />
      </button>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {label}
      <ExternalLink size={14} />
    </a>
  );
}

function Communication({ onOpenDemo }) {
  return (
    <section className="section" id="demos" data-reveal>
      <SectionIntro
        icon={<PlayCircle size={20} />}
        label="Communication"
        title="Clear technical storytelling across demos and public posts."
        text="Recruiters can quickly verify presentation ability, product framing, and cross-functional communication."
      />
      <div className="demo-grid">
        {demos.map((demo) => (
          <button className="demo-card" key={demo.url} type="button" onClick={() => onOpenDemo(demo)}>
            <span className="demo-icon">
              <PlayCircle size={22} />
            </span>
            <div>
              <h3>{demo.title}</h3>
              <p>{demo.type}</p>
            </div>
            {demo.embedUrl ? <PlayCircle size={18} /> : <ExternalLink size={18} />}
          </button>
        ))}
      </div>
    </section>
  );
}

function VideoModal({ demo, onClose }) {
  if (!demo) {
    return null;
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">
              <PlayCircle size={16} />
              Demo playback
            </p>
            <h2 id="video-modal-title">{demo.title}</h2>
            <p>{demo.type}</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close video popup">
            <X size={22} />
          </button>
        </div>
        {demo.embedUrl ? (
          <div className="video-frame">
            <iframe
              src={`${demo.embedUrl}?autoplay=1&rel=0`}
              title={demo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="embed-fallback">
            <Microscope size={34} />
            <h3>LinkedIn posts cannot be reliably embedded here.</h3>
            <p>
              The popup keeps you on the portfolio and provides the original post as a verification link.
            </p>
            <a className="button primary" href={demo.url} target="_blank" rel="noreferrer">
              View OCR post
              <ExternalLink size={18} />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

function Experience() {
  return (
    <section className="section split-section" data-reveal>
      <div>
        <SectionIntro
          icon={<BriefcaseBusiness size={20} />}
          label="Experience"
          title="Leadership through high-pressure AI builds."
          text="Technical ownership across backend systems, model logic, system design, and final deployment."
        />
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-card" key={item.role}>
            <div>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <p>{item.org}</p>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={16} />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section compact-section" data-reveal>
      <SectionIntro
        icon={<GraduationCap size={20} />}
        label="Education"
        title="Academic foundation in information technology."
        text="Built on computer science fundamentals, analytics, and applied engineering practice."
      />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.school}>
            <span>{item.period}</span>
            <h3>{item.school}</h3>
            <p>{item.detail}</p>
            <strong>{item.meta}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ onOpenEmail, onOpenPhone }) {
  return (
    <footer className="section contact-section" id="contact" data-reveal>
      <div className="contact-top-row">
        <div>
          <p className="eyebrow">
            <MapPin size={16} />
            Kolkata, India
          </p>
          <h2>Ready for data science, ML engineering, and applied GenAI opportunities.</h2>
          <p>
            Open to roles where strong model thinking, backend delivery, and clear product communication matter.
          </p>
        </div>
        <div className="contact-actions">
          <button className="button primary" type="button" onClick={onOpenEmail}>
            <Mail size={18} />
            Email Srinjoy
          </button>
          <button className="button secondary" type="button" onClick={onOpenPhone}>
            <Phone size={18} />
            Call
          </button>
          <a className="button secondary" href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a className="button secondary" href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a className="button secondary" href={links.instagram} target="_blank" rel="noreferrer">
            <Instagram size={18} />
            Instagram
          </a>
        </div>
      </div>
      <div className="instagram-posts-section">
          <p className="eyebrow football-eyebrow">
            <Instagram size={16} />
            Beyond the code
          </p>
          <div className="instagram-posts-grid">
            <div className="instagram-post-item">
              <p className="instagram-post-caption">Playing football — one of my biggest hobbies</p>
              <div className="instagram-embed-wrapper">
                <iframe
                  src="https://www.instagram.com/p/DR68tP1ieAE/embed/"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  title="Srinjoy playing football"
                  className="instagram-embed-frame"
                />
              </div>
            </div>
            <div className="instagram-post-item">
              <p className="instagram-post-caption">SIH 2025 winning reel 🏆</p>
              <div className="instagram-embed-wrapper">
                <iframe
                  src="https://www.instagram.com/p/DSaBPS1EgGa/embed/"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  title="SIH 2025 winning reel"
                  className="instagram-embed-frame"
                />
              </div>
            </div>
            <div className="instagram-post-item">
              <p className="instagram-post-caption">Felicitated by Pralhad Joshi at Delhi</p>
              <div className="instagram-embed-wrapper">
                <iframe
                  src="https://www.instagram.com/p/DTNdoCgkgRn/embed/"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  title="Delhi felicitation ceremony SIH 2025"
                  className="instagram-embed-frame"
                />
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}

function EmailModal({ open, onClose }) {
  const [tab, setTab] = React.useState("compose"); // "compose" | "view"
  const [form, setForm] = React.useState({ from: "", subject: "", body: "" });
  const [status, setStatus] = React.useState("idle"); // "idle" | "sending" | "sent" | "error"
  const [copied, setCopied] = React.useState(false);

  if (!open) return null;

  const myEmail = links.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(myEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSend = async () => {
    if (!form.from || !form.subject || !form.body) return;
    setStatus("sending");
    try {
      // EmailJS — replace these three values with your own from emailjs.com
    const SERVICE_ID  = "service_mzaq8sd";
    const TEMPLATE_ID = "template_9rzi8tt";
    const PUBLIC_KEY  = "T8wplgRI_NvBpssK2";

      await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_email: form.from,
        reply_to:   form.from,
        subject:    form.subject,
        message:    form.body,
        to_email:   myEmail,
      }, PUBLIC_KEY);

      setStatus("sent");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  const canSend = form.from.trim() && form.subject.trim() && form.body.trim();

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="email-modal video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="email-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">
              <Mail size={16} />
              Get in touch
            </p>
            <h2 id="email-modal-title">Email Srinjoy</h2>
            <p>Send a message or copy the address — your choice.</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close email popup">
            <X size={22} />
          </button>
        </div>

        <div className="email-tabs">
          <button
            type="button"
            className={`email-tab ${tab === "compose" ? "active" : ""}`}
            onClick={() => setTab("compose")}
          >
            <Send size={15} />
            Compose
          </button>
          <button
            type="button"
            className={`email-tab ${tab === "view" ? "active" : ""}`}
            onClick={() => setTab("view")}
          >
            <Mail size={15} />
            View email
          </button>
        </div>

        <div className="email-body">
          {tab === "view" ? (
            <div className="email-address-view">
              <p className="email-addr-label">My email address</p>
              <div className="email-addr-row">
                <span className="email-addr-text">{myEmail}</span>
                <button type="button" className="copy-btn" onClick={handleCopy}>
                  <Copy size={16} />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="email-addr-note">
                You can also open your mail client directly:{" "}
                <a href={`mailto:${myEmail}`} className="email-direct-link">
                  Open in mail app
                </a>
              </p>
            </div>
          ) : status === "sent" ? (
            <div className="email-sent-state">
              <div className="sent-icon">✓</div>
              <h3>Message sent!</h3>
              <p>Your message was delivered directly to Srinjoy. Expect a reply soon.</p>
              <button type="button" className="button primary" onClick={() => { setStatus("idle"); setForm({ from: "", subject: "", body: "" }); }}>
                Compose another
              </button>
            </div>
          ) : status === "error" ? (
            <div className="email-sent-state">
              <div className="sent-icon" style={{background:"rgba(255,80,80,0.15)",borderColor:"rgba(255,80,80,0.4)",color:"#ff6b6b"}}>✕</div>
              <h3>Something went wrong</h3>
              <p>The message could not be sent. Please check your EmailJS configuration or try again.</p>
              <button type="button" className="button primary" onClick={() => setStatus("idle")}>
                Try again
              </button>
            </div>
          ) : (
            <div className="email-compose">
              <div className="email-to-row">
                <span className="email-field-label">To</span>
                <span className="email-to-value">{myEmail}</span>
              </div>
              <div className="email-field">
                <label className="email-field-label" htmlFor="email-from">Your email</label>
                <input
                  id="email-from"
                  className="email-input"
                  type="email"
                  placeholder="you@example.com"
                  value={form.from}
                  onChange={(e) => setForm((f) => ({ ...f, from: e.target.value }))}
                />
              </div>
              <div className="email-field">
                <label className="email-field-label" htmlFor="email-subject">Subject</label>
                <input
                  id="email-subject"
                  className="email-input"
                  type="text"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                />
              </div>
              <div className="email-field">
                <label className="email-field-label" htmlFor="email-body">Message</label>
                <textarea
                  id="email-body"
                  className="email-textarea"
                  placeholder="Write your message here..."
                  rows={6}
                  value={form.body}
                  onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
                />
              </div>
              <div className="email-actions">
                <button
                  type="button"
                  className={`button primary ${!canSend ? "btn-disabled" : ""}`}
                  onClick={handleSend}
                  disabled={!canSend || status === "sending"}
                >
                  <Send size={16} />
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
                <p className="email-disclaimer">
                  Sent directly from this site — no mail app needed.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function PhoneModal({ open, onClose }) {
  const [copied, setCopied] = React.useState(false);
  if (!open) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(links.phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="phone-modal video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="phone-modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <p className="eyebrow">
              <Phone size={16} />
              Phone
            </p>
            <h2 id="phone-modal-title">Call Srinjoy</h2>
            <p>Available for calls — reach out directly.</p>
          </div>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Close phone popup">
            <X size={22} />
          </button>
        </div>
        <div className="phone-body">
          <div className="phone-number-card">
            <Phone size={32} className="phone-icon-big" />
            <div>
              <p className="phone-label">Contact number</p>
              <p className="phone-number">{links.phone}</p>
              <p className="phone-note">India (IST, UTC+5:30)</p>
            </div>
          </div>
          <div className="phone-actions">
            <button type="button" className="button primary" onClick={handleCopy}>
              <Copy size={16} />
              {copied ? "Copied!" : "Copy number"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


function SectionIntro({ icon, label, title, text }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">
        {icon}
        {label}
      </p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = window.__portfolioRoot ?? createRoot(rootElement);
window.__portfolioRoot = root;
root.render(<App />);