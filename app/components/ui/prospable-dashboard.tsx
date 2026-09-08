import {
  Briefcase,
  Clock,
  Inbox,
  Linkedin,
  Mail,
  MailCheck,
  Radar,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";

/**
 * Reproduction statique du tableau de bord Prospable, pour l'aperçu produit
 * de la partie II. Les chiffres sont ceux du mockup du produit ; le sélecteur
 * de fenêtre (Aujourd'hui / 7 jours / 30 jours) est purement décoratif.
 */

const messages = [
  { nom: "Alan L.", temps: "il y a 2 h", objet: "Re: Félicitations pour la levée", extrait: "Bonjour Julien, j'estime qu'on peut…" },
  { nom: "Caroline G.", temps: "il y a 21 h", objet: "Re: Caroline, génération de leads", extrait: "Bonjour Julien, merci pour votre…" },
];

const intentions = [
  { nom: "Elliott A.", temps: "il y a 2 heures", signal: "Décideur en poste depuis peu", ton: "vert", Icon: UserPlus },
  { nom: "Nicolas R.", temps: "il y a 5 heures", signal: "Décideur sur offre d'emploi", ton: "bleu", Icon: Briefcase },
];

const envois = [
  { nom: "Elliott A.", extrait: "Merci pour votre retour…", date: "8 sept.", etat: "Message", ton: "bleu", Icon: Linkedin },
  { nom: "Guillaume M.", extrait: "Guillaume, une question…", date: "8 sept.", etat: "Envoyé", ton: "vert", Icon: MailCheck },
];

export default function ProspableDashboard() {
  return (
    <div className="pd" aria-label="Aperçu du tableau de bord Prospable">
      <div className="pd-screen">
        <div className="pd-logo">Prospable</div>

        <div className="pd-stats">
          <div className="pd-stat">
            <span className="pd-ico pd-ico-bleu">
              <Users size={13} strokeWidth={2} />
            </span>
            <span className="pd-stat-label">Total prospects</span>
            <span className="pd-stat-value">804 / ∞</span>
          </div>

          <div className="pd-stat">
            <span className="pd-ico pd-ico-vert">
              <Mail size={13} strokeWidth={2} />
            </span>
            <span className="pd-stat-label">Emails envoyés ces 30 derniers jours</span>
            <span className="pd-stat-value">752 / ∞</span>
            <span className="pd-stat-sub">
              <span>
                <b className="pd-vert">0.8%</b>
                <i>rebond</i>
              </span>
              <span className="pd-right">
                <b className="pd-bleu">2.9%</b>
                <i>réponses</i>
              </span>
            </span>
          </div>

          <div className="pd-stat">
            <span className="pd-ico pd-ico-ambre">
              <Clock size={13} strokeWidth={2} />
            </span>
            <span className="pd-stat-label">En attente ou non en campagne</span>
            <span className="pd-stat-value">433</span>
            <span className="pd-stat-sub">
              <span>
                <b className="pd-ambre">123</b>
                <i>programmés</i>
              </span>
            </span>
          </div>

          <div className="pd-stat">
            <span className="pd-ico pd-ico-violet">
              <TrendingUp size={13} strokeWidth={2} />
            </span>
            <span className="pd-stat-label">Taux d&apos;envoi</span>
            <span className="pd-stat-value">46%</span>
          </div>
        </div>

        {/* Sélecteur décoratif : aucun comportement associé */}
        <div className="pd-tabs" aria-hidden="true">
          <span>Aujourd&apos;hui</span>
          <span>7 jours</span>
          <span className="is-on">30 jours</span>
        </div>

        <div className="pd-panels">
          <section className="pd-panel">
            <header>
              <span className="pd-ico pd-ico-bleu">
                <Inbox size={12} strokeWidth={2} />
              </span>
              <h4>Messages reçus</h4>
            </header>
            <ul>
              {messages.map((m) => (
                <li key={m.nom}>
                  <span className="pd-av" />
                  <span className="pd-row">
                    <span className="pd-row-top">
                      <b>{m.nom}</b>
                      <i>{m.temps}</i>
                    </span>
                    <span className="pd-row-sub">{m.objet}</span>
                    <span className="pd-row-sub pd-strong">{m.extrait}</span>
                  </span>
                  <span className="pd-unread" />
                </li>
              ))}
            </ul>
          </section>

          <section className="pd-panel">
            <header>
              <span className="pd-ico pd-ico-ambre">
                <Radar size={12} strokeWidth={2} />
              </span>
              <h4>Intentions détectées</h4>
              <span className="pd-badge pd-badge-ambre">27 aujourd&apos;hui</span>
            </header>
            <ul>
              {intentions.map((i) => (
                <li key={i.nom}>
                  <span className="pd-av" />
                  <span className="pd-row">
                    <span className="pd-row-top">
                      <b>{i.nom}</b>
                      <i>{i.temps}</i>
                    </span>
                    <span className={`pd-tag pd-tag-${i.ton}`}>
                      <i.Icon size={10} strokeWidth={2.2} />
                      {i.signal}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pd-panel">
            <header>
              <span className="pd-ico pd-ico-violet">
                <Mail size={12} strokeWidth={2} />
              </span>
              <h4>Envois</h4>
              <span className="pd-badge pd-badge-violet">117 aujourd&apos;hui</span>
            </header>
            <ul>
              {envois.map((e) => (
                <li key={e.nom}>
                  <span className="pd-av" />
                  <span className="pd-row">
                    <span className="pd-row-top">
                      <b>{e.nom}</b>
                      <span className={`pd-tag pd-tag-${e.ton}`}>
                        <e.Icon size={10} strokeWidth={2.2} />
                        {e.etat}
                      </span>
                    </span>
                    <span className="pd-row-bottom">
                      <span className="pd-row-sub">{e.extrait}</span>
                      <i>{e.date}</i>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
