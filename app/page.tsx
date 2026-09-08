import { CalendarDays, Linkedin, Mail } from "lucide-react";
import ProspableDashboard from "./components/ui/prospable-dashboard";
import ShootingproShowcase from "./components/ui/shootingpro-showcase";
import SectionWatermark from "./components/ui/section-watermark";
import YoutubeFeed from "./components/ui/youtube-feed";

export default function Home() {
  return (
    <>
      {/* ─────────────────────  COVER  ───────────────────── */}
      <section className="profile-cover" id="cover">
        <div className="profile-cover-head">
          <span>Développeur 5 ans d'expérience</span>
          <span>Ingénieur en IA appliquée</span>
          <span>Avignon, France</span>
        </div>

        <div className="profile-cover-stage">
          <div className="profile-cover-title">
            <div className="profile-eyebrow">Faisons connaissance</div>
            <h1 className="profile-h1">
              <span>Julien</span>
              <span style={{ color: "var(--accent)" }}>Lucas.</span>
            </h1>
            <ul className="profile-cover-pills">
              <li className="profile-cover-pill">Ingénierie en IA appliquée</li>
              <li className="profile-cover-pill">
                Développeur 5 ans en startups et scaleups
              </li>
              <li className="profile-cover-pill">
                Développement de produits IA
              </li>
            </ul>
            <p className="profile-tagline">
              Cinq ans à coder pour des startups. Aujourd'hui je construis des{" "}
              <strong>
                systèmes IA à forte valeur ajouté (agents IA, RAG agentique, LLM)
              </strong>
              , trois produits en prod.
            </p>
            <a href="#contact" className="cover-cta">
              <span>Discuter d&apos;un projet</span>
              <span className="cover-cta-arrow" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
          <figure className="profile-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/julienlucas-c.jpg" alt="Julien Lucas, Avignon, 2026" />
            <figcaption>
              <span>Julien Lucas</span>
              <span>salut maman</span>
            </figcaption>
          </figure>
        </div>

        <div className="profile-cover-foot">
          <span>Merci Claude Code pour le design</span>
          <span>Faites défiler ↓</span>
        </div>
      </section>

      {/* ─────────────────  I. PRESENT TENSE  ───────────────── */}
      <section
        className="profile-movement profile-tone-soft intro"
        id="aujourdhui"
      >
        <SectionWatermark>01</SectionWatermark>
        <div className="profile-inner intro-inner">
          <div className="profile-meta">
            <span>Partie I</span>
            <span>/</span>
            <span>Aujourd'hui</span>
          </div>

          <div className="intro-head">
            <div>
              <h2 className="intro-h2">
                Ce que j'ai
                <br />
                construis en IA<span className="accent">.</span>
              </h2>
            </div>
            <div>
              <p className="intro-lede">
                Trois produits IA en production, construits seul — du modèle
                jusqu'à la facturation. À côté, j'accompagne en freelance des
                équipes qui veulent passer de la démo au système qui tourne
                vraiment : agents, RAG, fine-tuning. Le tout depuis un petit
                appart à Avignon.
              </p>
            </div>
          </div>

          <div className="chapter-index">
            <div className="chapter-group-label">Mes produits en prod</div>
            <a href="#produit-shootingpro" className="chapter-row">
              <span className="chapter-num">01</span>
              <span className="chapter-title">Shootingpro.co</span>
              <span className="chapter-tag">Portraits IA</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#produit-closechat" className="chapter-row">
              <span className="chapter-num">02</span>
              <span className="chapter-title">Closechat.co</span>
              <span className="chapter-tag">Agent de setting WhatsApp</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#produit-prospable" className="chapter-row">
              <span className="chapter-num">03</span>
              <span className="chapter-title">Prospable.com</span>
              <span className="chapter-tag">
                Cold email IA sur signaux d'achat
              </span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <div className="chapter-group-label">Le reste du temps</div>
            <a
              href="https://www.linkedin.com/in/julien-lucas-jl/"
              target="_blank"
              rel="noopener noreferrer"
              className="chapter-row"
            >
              <span className="chapter-num">04</span>
              <span className="chapter-title">Missions freelance</span>
              <span className="chapter-tag">Agents · RAG · Fine-tuning</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a href="#youtube" className="chapter-row">
              <span className="chapter-num">05</span>
              <span className="chapter-title">Chaîne YouTube</span>
              <span className="chapter-tag">Vulgarisation</span>
              <span className="chapter-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────  II. PRODUITS (aperçu)  ───────────────── */}
      <div className="products" id="mes-produits">
        <SectionWatermark>02</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="cluster-header">
            <div className="profile-meta">
              <span>Partie II</span>
              <span>/</span>
              <span>Mes produits</span>
            </div>
            <h2 className="cluster-h2">
              Trois systèmes IA fiables en prod
              <span className="accent">.</span>
            </h2>
            <p className="cluster-lede">
              Chacun est parti d'un problème que j'avais sous les yeux, et
              chacun tourne aujourd'hui en production — modèle, back, front,
              paiement, monitoring. Construits seul, de bout en bout.
            </p>
          </div>

          <section className="product-section" id="produit-shootingpro">
            <span className="product-watermark" aria-hidden="true">
              01
            </span>
            <div className="product-grid">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">01</span>
                  <span className="tag">Portraits IA</span>
                </span>
                <h3 className="product-name">Shootingpro.co</h3>
                <p className="product-tagline">
                  Quelques selfies en entrée, une série de portraits
                  professionnels en sortie — LinkedIn, CV, presse. Modèles Flux
                  fine-tunés en LoRA, sur un pipeline d'inférence GPU.
                </p>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">Flux 1</div>
                    <div className="product-stat-label">Fine-tuné en LoRA</div>
                  </div>
                  <div>
                    <div className="product-stat-value">2025</div>
                    <div className="product-stat-label">
                      Mon premier produit IA
                    </div>
                  </div>
                </div>
                <a
                  href="https://shootingpro.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-cta"
                >
                  Visiter le site <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="product-visual product-live">
                <ShootingproShowcase />
              </div>
            </div>
          </section>

          <section className="product-section" id="produit-closechat">
            <span className="product-watermark" aria-hidden="true">
              02
            </span>
            <div className="product-grid product-grid-reversed">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">02</span>
                  <span className="tag">Agent de setting WhatsApp</span>
                </span>
                <h3 className="product-name">Closechat.co</h3>
                <p className="product-tagline">
                  Un agent branché sur l'API WhatsApp Cloud qui qualifie les
                  leads entrants, encaisse les objections et pose le RDV
                  directement dans le calendrier du commercial.
                </p>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">24/7</div>
                    <div className="product-stat-label">
                      Qualification des leads
                    </div>
                  </div>
                  <div>
                    <div className="product-stat-value">WhatsApp API</div>
                    <div className="product-stat-label">
                      Intégrations API, agendas, CRM
                    </div>
                  </div>
                </div>
                <a
                  href="https://closechat.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-cta"
                >
                  Visiter le site <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="product-visual pv-1">
                <div className="pv-num">Produit 02 · 2026</div>
                <div className="pv-name">
                  Closechat
                  <br />
                  IA<span style={{ color: "var(--accent-light)" }}>.</span>
                </div>
                <div className="pv-foot">
                  <span>closechat.co</span>
                  <span>En prod</span>
                </div>
              </div>
            </div>
          </section>

          <section className="product-section" id="produit-prospable">
            <span className="product-watermark" aria-hidden="true">
              03
            </span>
            <div className="product-grid">
              <div className="product-meta">
                <span className="product-eyebrow">
                  <span className="count">03</span>
                  <span className="tag">Cold email IA sur signaux d'achat</span>
                </span>
                <h3 className="product-name">Prospable.com</h3>
                <p className="product-tagline">
                  Signaux d'intention détectés sur LinkedIn, prospects enrichis,
                  cold emails écrits selon le signal. Pipeline asynchrone Celery
                  + Redis, chauffe des boîtes en continu.
                </p>
                <div className="product-stats">
                  <div>
                    <div className="product-stat-value">
                      Signaux d'achats Linkedin
                    </div>
                    <div className="product-stat-label">Des leads</div>
                  </div>
                  <div>
                    <div className="product-stat-value">Infra email</div>
                    <div className="product-stat-label">Hyper complète</div>
                  </div>
                </div>
                <a
                  href="https://prospable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-cta"
                >
                  Visiter le site <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="product-visual product-live">
                <ProspableDashboard />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ─────────────────  II. THE FIRST LINE  ───────────────── */}
      <section className="profile-bleed profile-bleed-dark" id="parcours">
        <SectionWatermark>03</SectionWatermark>
        <div className="profile-bleed-grid">
          <div className="profile-bleed-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/jaimebien/IMG_7128.jpg" alt="Julien, hiver" />
            <div className="profile-bleed-cap">
              2026 · entre deux séssions de Claude
            </div>
          </div>
          <div className="profile-bleed-txt">
            <div className="profile-eb">Partie III / Mon CV</div>
            <h3 className="profile-h3">
              Cinq startups et scaleups.{" "}
              <span className="profile-em">
                Intérim, telecom, épargne, e-learning
              </span>
            </h3>
            <div className="bleed-cv" id="scale-ups">
              <dl className="profile-tick">
                <dt>iziwork</dt>
                <dd>2020 — 2021</dd>
                <dt>Reezocar</dt>
                <dd>2021</dd>
                <dt>Sewan</dt>
                <dd>2021</dd>
                <dt>Corum l'Épargne</dt>
                <dd>2022</dd>
                <dt>Smartch (Lead)</dt>
                <dd>2022 — 2023</dd>
                <dt>Total</dt>
                <dd className="profile-accent-word">5 ans</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  FUNFACT: HOW I LEARNED IT  ───────────────── */}
      <section
        className="profile-funfact profile-funfact-split profile-tone-mid"
        id="certifications"
      >
        <SectionWatermark>04</SectionWatermark>
        <div className="profile-funfact-split-inner">
          <figure className="profile-funfact-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/jaimebien/IMG_7181.jpg"
              alt="Vue dégagée, fin de journée"
            />
            <figcaption>1 an de fondamentaux IA · 2 certifications</figcaption>
          </figure>
          <div className="profile-funfact-content">
            <div className="profile-funfact-label">
              Partie IV / Les certifications
            </div>
            <h3 className="profile-funfact-title">Deux certifications IA</h3>
            <div className="cert-list">
              <article className="cert-item">
                <div className="cert-item-head">
                  <span className="cert-item-org">
                    Coursera × DeepLearning.AI
                  </span>
                  <span className="cert-item-date">nov. 2025 — janv. 2026</span>
                </div>
                <h4 className="cert-item-title">
                  <a
                    href="https://www.coursera.org/account/accomplishments/professional-cert/KMOYDJ75NIVJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Spécialisation PyTorch pour le Deep Learning
                    <span className="cert-item-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </h4>
                <p className="cert-item-body">
                  Vision par ordinateur et architectures CNN, NLP, fine-tuning,
                  optimisation de modèles, PyTorch Lightning et Optuna,
                  déploiements ONNX et MLflow.
                </p>
              </article>
              <article className="cert-item">
                <div className="cert-item-head">
                  <span className="cert-item-org">Coursera × IBM</span>
                  <span className="cert-item-date">juin 2025 — sept. 2025</span>
                </div>
                <h4 className="cert-item-title">
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/YHXXPPZ0KKZM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AI Engineering Professional Certificate — RAG et IA
                    agentique
                    <span className="cert-item-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </h4>
                <p className="cert-item-body">
                  Agents IA, RAG, MM-RAG, RAG agentique, et fine-tuning de
                  modèles en DPO, PPO, LoRA, QLoRA, instruction-tuning et PEFT.
                </p>
              </article>
            </div>
            <p className="profile-funfact-body">
              J'ai eu envie d'aller plus loin que le dev "classique". Je voulais
              comprendre les architectures d'agents, les modèles depuis la
              backprop jusqu'au RAG agentique évalué hardcore, parce qu'on ne
              construit pas en confiance ce qu'on n'a pas démonté.
            </p>
            <div className="cert-logos">
              <span className="cert-logos-label">Certifié par</span>
              <div className="cert-logos-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ibm.svg"
                  alt="IBM"
                  className="cert-logo cert-logo-ibm"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/deeplearning.png"
                  alt="DeepLearning.AI"
                  className="cert-logo cert-logo-dl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────  VI. POCS / CASE STUDIES  ───────────────── */}
      <section
        className="profile-movement profile-tone-soft profile-no-dropcap"
        id="pocs"
      >
        <SectionWatermark>05</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="poc-layout">
            <div className="poc-layout-main">
              <div className="profile-meta">
                <span>Partie V</span>
                <span>/</span>
                <span>Études de cas</span>
              </div>
              <h2 className="profile-h2">
                Quatre POCs. <span className="profile-em">De la R&D</span>
              </h2>
              <div className="poc-list">
                <a
                  href="https://docchat-agentic-rag.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poc-list-item"
                >
                  <span className="poc-list-num">N° 01 · RAG</span>
                  <h3 className="poc-list-title">
                    RAG agentique sur documents relevés (techniques et autres)
                  </h3>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="https://mm-rag-styleanalyzer.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poc-list-item"
                >
                  <span className="poc-list-num">N° 02 · Multimodal</span>
                  <h3 className="poc-list-title">
                    MM-RAG : recommandation de tenues par image
                  </h3>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="https://pneumodiag.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poc-list-item"
                >
                  <span className="poc-list-num">N° 03 · Vision</span>
                  <h3 className="poc-list-title">
                    Diagnostic de pneumonies depuis une radio
                  </h3>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="https://fakefinder-nanobananapro.up.railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poc-list-item"
                >
                  <span className="poc-list-num">N° 04 · Deepfake</span>
                  <h3 className="poc-list-title">
                    Différenciateur images réelles vs IA (NanoBanana, Flux,
                    Midjourney)
                  </h3>
                  <span className="poc-list-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </div>
            <figure className="poc-layout-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/jaimebien/IMG_7160.jpg"
                alt="Coucher de soleil dans le Vaucluse"
              />
              <figcaption>Vaucluse · fin 2024</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ─────────────────  VII. YOUTUBE  ───────────────── */}
      <section
        className="profile-movement profile-tone-paper profile-no-dropcap"
        id="youtube"
      >
        <SectionWatermark>06</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie VI</span>
            <span>/</span>
            <span>Sur YouTube</span>
          </div>
          <h2 className="profile-h2">
            J'ai vulgarisé sur Youtube, 12000 abonnés
          </h2>
          <YoutubeFeed />
          <div style={{ marginTop: 32 }}>
            <a
              href="https://www.youtube.com/@JulienLucas"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              S'abonner à la chaîne →
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────  IX. LINKEDIN OUTRO  ───────────────── */}
      <section
        className="profile-movement profile-tone-deep profile-cta-section profile-no-dropcap"
        id="contact"
      >
        <SectionWatermark>07</SectionWatermark>
        <div className="profile-inner-wide">
          <div className="profile-meta">
            <span>Partie VII</span>
            <span>/</span>
            <span>Me contacter</span>
          </div>
          <h2 className="profile-h2">
            Un problème à résoudre&nbsp;?{" "}
            <span className="profile-em">Parlons-en.</span>
          </h2>

          <div className="li-bill">
            <div className="li-bill-num">
              13K<sup>+ abonnés sur Linkedin</sup>
            </div>
            <div className="li-bill-right">
              <span className="li-bill-eyebrow">
                Ingénieur IA freelance · Avignon · Mobile
              </span>
              <h3 className="li-bill-h">
                Agents, RAG, fine-tuning. <em>Dites-moi ce qui bloque.</em>
              </h3>

              <ul className="ct-list">
                <li>
                  <a
                    href="https://www.linkedin.com/in/julien-lucas-jl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-item ct-item-primary"
                  >
                    <span className="ct-ico">
                      <Linkedin size={17} strokeWidth={1.9} />
                    </span>
                    <span className="ct-body">
                      <span className="ct-chan">LinkedIn</span>
                      <span className="ct-val">in/julien-lucas-jl</span>
                      <span className="ct-note">
                        Le plus simple pour engager la conversation.
                      </span>
                    </span>
                    <span className="ct-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@julienlucas.com" className="ct-item">
                    <span className="ct-ico">
                      <Mail size={17} strokeWidth={1.9} />
                    </span>
                    <span className="ct-body">
                      <span className="ct-chan">Email</span>
                      <span className="ct-val">contact@julienlucas.com</span>
                      <span className="ct-note">
                        Pour un contexte détaillé, un cahier des charges.
                      </span>
                    </span>
                    <span className="ct-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.lemcal.com/@julienlucas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-item"
                  >
                    <span className="ct-ico">
                      <CalendarDays size={17} strokeWidth={1.9} />
                    </span>
                    <span className="ct-body">
                      <span className="ct-chan">Réserver un créneau</span>
                      <span className="ct-val">
                        app.lemcal.com/@julienlucas
                      </span>
                      <span className="ct-note">
                        30 minutes pour cadrer votre besoin.
                      </span>
                    </span>
                    <span className="ct-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
