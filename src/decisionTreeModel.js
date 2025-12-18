// src/decisionTreeModel.js

// -------------------- Obligations Catalog --------------------
// articles = "Paragraphen/Artikel" (Anzeige in Tooltips + Export)
// items = konkrete Anforderungen (Requirement-Chain)
export const obligationsCatalog = {
  AI_ACT_NOT_APPLICABLE: {
    label: 'AI Act nicht anwendbar',
    articles: ['AI Act (Scope/Definitionen)'],
    items: [
      'Haben Sie dokumentiert, warum kein KI-System i. S. d. AI Act vorliegt?',
      'Haben Sie sichergestellt, dass trotzdem interne Governance/IT-Sicherheit (inkl. DORA) geprüft wird?',
    ],
  },

  AI_PROHIBITED: {
    label: 'AI Act: Verbotene Praktiken',
    articles: ['AI Act: Verbotene Praktiken (Titel/Artikel je nach Fassung)'],
    items: [
      'Haben Sie die Nutzung gestoppt und das Deployment verhindert?',
      'Haben Sie eine Rechtsprüfung durchgeführt und einen Maßnahmenplan erstellt?',
      'Haben Sie relevante Stakeholder informiert (Compliance, Legal, IT-Security)?',
    ],
  },

  AI_HR_PROVIDER_OR_DEPLOYER: {
    label: 'AI Act: Hochrisiko (Provider/Deployer) – Anforderungen',
    articles: ['AI Act Art. 8–15 (High-Risk Requirements)'],
    items: [
      'Haben Sie ein Risikomanagementsystem über den gesamten Lebenszyklus etabliert (Art. 9)?',
      'Haben Sie Daten- und Data-Governance sichergestellt (Art. 10)?',
      'Haben Sie technische Dokumentation erstellt und halten Sie diese aktuell (Art. 11)?',
      'Haben Sie Logging und Record-Keeping sichergestellt (Art. 12)?',
      'Haben Sie Transparenzinformationen für Deployers bereitgestellt (Art. 13)?',
      'Haben Sie Human-Oversight-Maßnahmen implementiert (Art. 14)?',
      'Haben Sie Accuracy, Robustness und Cybersecurity nachweisbar erreicht (Art. 15)?',
    ],
  },

  AI_TRANSPARENCY_ART_50: {
    label: 'AI Act: Transparenzpflichten (Art. 50)',
    regulation: 'AI Act',
    articles: ['AI Act Art. 50 (Transparenzpflichten)'],
    items: [
      'Wird transparent kommuniziert, dass Nutzende mit einem KI-System interagieren?',
      'Werden KI-generierte Inhalte (z. B. Texte/Bilder/Audio) als solche gekennzeichnet, sofern erforderlich?',
      'Gibt es Informationen zu Zweck, Grenzen und erwarteter Nutzung des Systems für betroffene Nutzende?',
    ],
  },

  AI_CONFORMITY_AND_DOC: {
    label: 'AI Act: Konformitätsbewertung & Technische Dokumentation',
    regulation: 'AI Act',
    articles: ['AI Act Art. 16 ff., Art. 43 ff., Annex IV'],
    items: [
      'Wurde eine vollständige Konformitätsbewertung gemäß AI Act durchgeführt oder geplant?',
      'Wurde technische Dokumentation gemäß Annex IV erstellt und aktuell gehalten?',
      'Sind Rollen (Provider/Deployer) und Verantwortlichkeiten in der Dokumentation eindeutig beschrieben?',
      'Sind Prüf- und Freigabeprozesse für Änderungen am KI-System dokumentiert?',
    ],
  },

  AI_REGISTRATION_AND_CE: {
    label: 'AI Act: Registrierung & CE-Kennzeichnung',
    regulation: 'AI Act',
    articles: ['AI Act Art. 49 ff. (Registrierung, CE-Kennzeichnung)'],
    items: [
      'Wurde das KI-System – sofern erforderlich – im EU-Datenbankregister registriert?',
      'Wurde eine CE-Kennzeichnung für das KI-System oder das Produkt, in das es integriert ist, vorgenommen?',
      'Sind Registrierungs- und Kennzeichnungsunterlagen nachvollziehbar dokumentiert und revisionssicher abgelegt?',
    ],
  },

  AI_LIMITED_OR_MINIMAL: {
    label: 'AI Act: Begrenztes/Minimales Risiko (Governance-Baseline)',
    articles: ['AI Act (allg. Grundsätze)'],
    items: [
      'Haben Sie interne Governance- und Freigabeprozesse (Model Risk, Compliance, IT-Security) für den Einsatz definiert?',
      'Haben Sie dokumentiert, warum das System nicht als Hochrisiko eingestuft wird (inkl. Begründung/Scope)?',
      'Haben Sie Datenschutz- und Informationssicherheitsanforderungen (z. B. DLP, Logging, Zugriffskontrollen) umgesetzt?',
    ],
  },  

  DORA_BASE: {
    label: 'DORA: IKT-Risikomanagement (Baseline)',
    articles: ['DORA Art. 5–16 (Kapitel II)'],
    items: [
      'Haben Sie IKT-Governance und Verantwortlichkeiten definiert (Art. 5)?',
      'Haben Sie ein IKT-Risikomanagement-Framework etabliert (Art. 6)?',
      'Haben Sie IKT-Asset-Management, Schutzmaßnahmen und Resilienzmaßnahmen umgesetzt?',
      'Haben Sie BCM/Recovery/Backups regelmäßig getestet und dokumentiert?',
    ],
  },

  DORA_THIRDPARTY_STANDARD: {
    label: 'DORA: IKT-Drittanbieter (Standard)',
    articles: ['DORA Art. 28–30 (Kap. V, Sec. I)'],
    items: [
      'Haben Sie Drittanbieter-Risiken als Teil des IKT-Risikomanagements erfasst (Art. 28)?',
      'Haben Sie ein Register/eine Informationsübersicht zu IKT-Verträgen gepflegt?',
      'Haben Sie Vertragsanforderungen und eine Exit-Strategie definiert?',
    ],
  },

  DORA_THIRDPARTY_PLUS: {
    label: 'DORA: (Pot.) kritischer IKT-Drittanbieter (erweitert)',
    articles: ['DORA Art. 28–44 (Kapitel V)'],
    items: [
      'Haben Sie Konzentrationsrisiken geprüft und eine Multi-Vendor-Strategie dokumentiert?',
      'Haben Sie erweitertes Monitoring und eine Exit-Planung (inkl. Subdienstleister) implementiert?',
      'Haben Sie zusätzliche Anforderungen und Kooperationen mit Aufsicht/Lead Overseer berücksichtigt?',
    ],
  },

  DORA_DATA_PROTECTION_STRONG: {
    label: 'DORA: Datenfluss zu externer KI – starker Schutzpfad',
    articles: ['DORA Art. 5–16 (Kapitel II)'],
    items: [
      'Haben Sie Datenklassifizierung und einen Freigabeprozess für externe Verarbeitung definiert?',
      'Haben Sie Verschlüsselung/Tokenisierung, DLP und Monitoring aktiviert?',
      'Haben Sie vertraglich Datenlokation, Löschung, Auditrechte und Subprozessoren abgesichert?',
    ],
  },

  DORA_MONITORING_AI: {
    label: 'DORA: Dynamisches Modell – Monitoring/Change/Controls',
    articles: ['DORA Art. 5–16 (Kapitel II)'],
    items: [
      'Haben Sie einen verbindlichen Change-/Release-Prozess für Modelländerungen (Retraining/Finetuning) etabliert?',
      'Haben Sie Monitoring (Drift/Performance/Security) und Alerting implementiert?',
      'Haben Sie Incident-Runbooks und Eskalationswege für Modellfehler/Cyber-Ereignisse definiert?',
    ],
  },

  DORA_INCIDENT_MGMT: {
    label: 'DORA: IKT-Vorfallserfassung & Meldeprozesse',
    regulation: 'DORA',
    articles: ['DORA Art. 17–23 (Incident-Management & Reporting)'],
    items: [
      'Gibt es dokumentierte Prozesse zur Erfassung von IKT-/Cybervorfällen gemäß DORA?',
      'Sind Schwellenwerte und Kriterien für meldepflichtige Vorfälle definiert und kommuniziert?',
      'Existieren Meldeprozesse an Aufsichtsbehörden (z. B. ESAs/nationale Aufsicht) inkl. Fristen und Verantwortlichkeiten?',
    ],
  },

  DORA_TLPT: {
    label: 'DORA: Resilienztests inkl. TLPT',
    regulation: 'DORA',
    articles: ['DORA Art. 24–27 (IKT-Resilienztests, TLPT)'],
    items: [
      'Wurde bewertet, ob das KI-System bzw. seine Infrastruktur in den Scope von TLPT-Tests fällt?',
      'Sind regelmäßige IKT-Resilienztests für die betroffenen Komponenten geplant und dokumentiert?',
      'Sind Rollen, Testabdeckung und Nachverfolgung von Findings aus Resilienztests definiert?',
    ],
  },

  DORA_THIRDPARTY_DD: {
    label: 'DORA: Drittanbieter-Due-Diligence & Vertragspflichten',
    regulation: 'DORA',
    articles: ['DORA Art. 28–30, 31–44 (IKT-Drittanbieter)'],
    items: [
      'Wurde für alle IKT-Drittanbieter eine Due-Diligence-Prüfung durchgeführt und dokumentiert?',
      'Sind vertragliche Regelungen zu Exit-Strategien, Audit-Rechten und Sicherheits-SLAs implementiert?',
      'Werden IKT-Drittanbieter laufend überwacht (z. B. Performance, Security, Resilienz) und regelmäßig neu bewertet?',
    ],
  },

  DORA_BASE_LIGHT: {
    label: 'DORA: Baseline (proportional/light)',
    articles: ['DORA Art. 5–16 (Kapitel II)'],
    items: [
      'Haben Sie proportionale Mindestkontrollen dokumentiert?',
      'Haben Sie Basis-IT-Security und Governance sichergestellt?',
    ],
  },
};

// -------------------- Decision Tree --------------------

export const CONSISTENCY_LOCKS = {
  AI_HIGH_RISK: 'AI_HIGH_RISK',
};

export const decisionTree = {
  // --- AI Act (Kompakt) ---
  A1: {
    id: 'A1',
    type: 'question',
    label: 'Handelt es sich um ein KI-System nach Art. 3 AI Act?',
    yes: 'A2',
    no: 'A0',
    info:
      'Hier geht es um die Grundsatzfrage, ob das betrachtete System überhaupt unter die KI-Definition des AI Act fällt. ' +
      'Nur wenn dies bejaht wird, greifen die weiteren Pflichten des AI Act.',
    examples: [
      'Ein Machine-Learning-Modell, das automatisch Kreditrisiken bewertet → typischerweise KI-System.',
      'Ein statischer, rein regelbasierter Report ohne Lernkomponente → eher kein KI-System.',
      'Ein extern genutzter Foundation- oder LLM-Service, der in Prozesse eingebunden wird → kann ein KI-System sein.',
    ],
  },

  A0: {
    id: 'A0',
    type: 'leaf',
    label: 'Kein KI-System → AI Act nicht anwendbar.',
    obligations: ['AI_ACT_NOT_APPLICABLE'],
    next: 'END',
    info:
      'Wenn das System nicht unter die Definition eines KI-Systems im Sinne des AI Act fällt, gelten die spezifischen AI-Act-Pflichten nicht. ' +
      'Trotzdem sollten Governance, IT-Sicherheit und DORA-Anforderungen geprüft werden.',
    examples: [
      'Reine Datenvisualisierung ohne automatisierte Entscheidungslogik.',
      'Ein klassisches Workflow-Tool ohne ML/AI-Funktionalität.',
    ],
  },

  A2: {
    id: 'A2',
    type: 'question',
    label: 'Liegt eine potenziell verbotene Praxis vor (AI Act – Prohibited)?',
    yes: 'A2_ja',
    no: 'A3',
    info:
      'Hier wird geprüft, ob das KI-System in eine Kategorie fällt, die nach AI Act grundsätzlich unzulässig ist ' +
      '(z. B. bestimmte Social-Scoring-Systeme oder manipulative Anwendungen). ' +
      'Bei verbotenen Praktiken ist der Einsatz grundsätzlich nicht erlaubt.',
    examples: [
      'Ein System, das staatenübergreifendes Social Scoring von Bürgern vornimmt.',
      'Ein System, das verdeckt das Verhalten von Personen manipulierend beeinflusst, um Entscheidungen zu steuern.',
    ],
  },

  A2_ja: {
    id: 'A2_ja',
    type: 'leaf',
    label: 'Verbotene Praxis → Nutzung untersagen / Rechtsprüfung.',
    obligations: ['AI_PROHIBITED'],
    next: 'G_AI_PROHIBITED_REVIEW',
    info:
      'Wird eine verbotene Praxis festgestellt, darf das System grundsätzlich nicht betrieben werden. ' +
      'Es sind sofortige Maßnahmen erforderlich: Stopp des Deployments bzw. Betriebs und eine vertiefte Rechtsprüfung.',
    examples: [
      'Ein bereits pilotiertes Social-Scoring-System wird gestoppt und aus der Produktionsumgebung entfernt.',
      'Das Projekt wird an Legal & Compliance übergeben, um Alternativen oder einen Abbruch zu prüfen.',
    ],
  },

  A3: {
    id: 'A3',
    type: 'question',
    label: 'Hochrisiko-Einstufung nach AI Act (Verwendungszweck/Annex)?',
    yes: 'A3_HR',
    no: 'A3_NON_HR',
    info:
      'An dieser Stelle wird geprüft, ob das System als Hochrisiko-KI nach AI Act gilt (z. B. aufgrund des Annex, ' +
      'etwa bei Kreditwürdigkeitsprüfungen, Beschäftigungs- oder kritischer Infrastrukturprozessen). ' +
      'Das Ergebnis steuert, welche Anforderungspakete gelten.',
    examples: [
      'Kreditwürdigkeitsbewertung zur Vergabe von Verbraucherkrediten → typischer Hochrisiko-Fall.',
      'KI im HR-Bereich (z. B. automatisierte Bewerbervorauswahl) → potenziell Hochrisiko.',
      'Ein reines Chat-Assistenzsystem ohne Einfluss auf Entscheidungen → eher kein Hochrisiko.',
    ],
  },

  A3_HR: {
    id: 'A3_HR',
    type: 'leaf',
    label: 'Hochrisiko-KI → Hochrisiko-Anforderungspaket.',
    obligations: ['AI_HR_PROVIDER_OR_DEPLOYER', 'AI_CONFORMITY_AND_DOC','AI_REGISTRATION_AND_CE'],
    next: 'G_AI_HR_LOCK',
    info:
      'Das System ist als Hochrisiko-KI eingestuft. Damit greifen die umfangreichen Pflichten aus Art. 8–15 AI Act, ' +
      'u. a. Risikomanagement, Daten-Governance, technische Dokumentation, Logging, Human Oversight und Robustheit.',
    examples: [
      'Ein Scoring-Modell, das automatisiert Kreditentscheidungen trifft und damit Zugang zu Finanzprodukten steuert.',
      'Ein Modell, das über Annahme/Ablehnung von Bewerbenden entscheidet.',
    ],
  },

  A3_NON_HR: {
    id: 'A3_NON_HR',
    type: 'leaf',
    label: 'Kein Hochrisiko → Transparenz/Minimales Risiko prüfen.',
    obligations: ['AI_LIMITED_OR_MINIMAL', 'AI_TRANSPARENCY_ART_50'],
    next: 'D0',
    info:
      'Das System fällt nicht in eine Hochrisiko-Kategorie. Es können dennoch Transparenz- und interne Governance-Pflichten bestehen, ' +
      'insbesondere Kennzeichnungspflichten und allgemeine IT-/Risikomanagementvorgaben.',
    examples: [
      'Ein interner KI-Assistent zur Textunterstützung ohne direkten Einfluss auf Kundentransaktionen.',
      'Ein Empfehlungssystem für interne Wissensartikel.',
    ],
  },

  // -------------------- AI ACT: VALIDATION / REVIEW GATES --------------------

  /**
   * Gate: High-Risk Lock wird bestätigt und „festgeschrieben“.
   * Implementierung in App über validateNextNode: wenn Gate erreicht, wird Lock gesetzt.
   */
  G_AI_HR_LOCK: {
    id: 'G_AI_HR_LOCK',
    type: 'question',
    regulation: 'AI Act',
    label: 'Plausibilitätscheck: High-Risk Einstufung bestätigen und als verbindlich festschreiben?',
    yes: 'D0', 
    no: 'W_AI_HR_REVIEW',
    info: 'Dieser Gate-Knoten verhindert, dass High-Risk später implizit „heruntergestuft“ wird.',
    examples:
      'Wenn Unsicherheit besteht: Review/Eskalation durchführen (Legal/Compliance/Risk/ISB) und Begründung dokumentieren.',
  },

  G_AI_PROHIBITED_REVIEW: {
    id: 'G_AI_PROHIBITED_REVIEW',
    type: 'question',
    label: 'Review-Gate: Wurde der Einsatz gestoppt und eine Eskalation an Legal/Compliance dokumentiert?',
    yes: 'END',
    no: 'W_AI_PROHIBITED_ESCALATION',
    info: 'Sichert ab, dass verbotene Praktiken nicht „weitergeklickt“ werden können.',
    examples: 'No-Go, Management-Entscheid, Maßnahmenplan, Aufbewahrung der Entscheidungsdokumentation.',
  },

  W_AI_HR_REVIEW: {
    id: 'W_AI_HR_REVIEW',
    type: 'leaf',
    label: 'Warnung/Review: High-Risk Einstufung unsicher → Eskalation & Dokumentation erforderlich.',
    obligations: [],
    next: 'END',
    info: 'Dieser Knoten fordert formale Klärung (Legal/Compliance/Risk/ISB) vor weiterer Nutzung.',
    examples: 'Review-Protokoll, Klassifikationsbegründung, ggf. externe Beratung.',
  },

  W_AI_CONTRADICTION: {
    id: 'W_AI_CONTRADICTION',
    type: 'leaf',
    label: 'Widerspruch erkannt: Pfad ist inkonsistent → Review/Eskalation erforderlich.',
    obligations: [],
    next: 'END',
    info: 'Inkonsistente Antworten dürfen nicht zu einer stillen „Herunterstufung“ führen.',
    examples: 'Pfad prüfen, Entscheidungen re-validieren, Management/Compliance einschalten.',
  },

  W_AI_PROHIBITED_ESCALATION: {
    id: 'W_AI_PROHIBITED_ESCALATION',
    type: 'leaf',
    label: 'Eskalation erforderlich: Verbotene Praxis → Stop + Legal/Compliance Freigabe fehlt.',
    obligations: [],
    next: 'END',
    info: 'Ohne dokumentierte Eskalation darf kein weiterer Fortschritt erfolgen.',
    examples: 'Freigabevermerk, Ticket/Case-ID, Entscheidungsgremium.',
  },
  // --- DORA Start ---
  D0: {
    id: 'D0',
    type: 'question',
    label: 'Soll mit dem DORA-Teil gestartet werden?',
    yes: 'B1',
    no: 'END',
    info:
      'Hier wird entschieden, ob zusätzlich zum AI Act eine strukturierte DORA-Analyse durchgeführt werden soll. ' +
      'Insbesondere Finanzunternehmen müssen die IKT-Risiken und Resilienzanforderungen aus DORA berücksichtigen.',
    examples: [
      'Die Bank möchte neben der KI-Klassifikation direkt auch IKT-Risiken und Resilienz bewerten.',
      'Es liegt bereits eine DORA-Bewertung vor, sodass vorerst „Nein“ gewählt wird.',
    ],
  },

  // --- DORA Baum (Phase 1) ---
  B1: {
    id: 'B1',
    type: 'question',
    label: 'Unterstützt das KI-System eine kritische oder wichtige Funktion?',
    yes: 'B2',
    no: 'B3',
    info:
      'Diese Frage klärt, ob das KI-System in Prozessen eingesetzt wird, die für das Institut kritisch oder wichtig sind. ' +
      'Davon hängt ab, wie streng die IKT-Risikomanagement- und Resilienzanforderungen aus DORA ausgestaltet werden.',
    examples: [
      'Kritisch: Zahlungsverkehrssteuerung, Kreditvergabe, Markt- oder Liquiditätsrisikosteuerung.',
      'Nicht-kritisch: KI zur Unterstützung von interner Wissenssuche ohne direkten Einfluss auf Kernprozesse.',
    ],
  },

  B2: {
    id: 'B2',
    type: 'question',
    label: 'Hat das System direkten Einfluss auf operative/finanzielle Entscheidungen?',
    yes: 'B2_H',
    no: 'B2_M',
    info:
      'Die Frage differenziert innerhalb der kritischen/wichtigen Funktionen, ob das KI-System selbst direkt ' +
      'Entscheidungen trifft oder „nur“ unterstützt. Direkter Einfluss führt zu strengeren Kontrollanforderungen.',
    examples: [
      'Direkter Einfluss: KI gibt direkt Kreditentscheidung oder Limitvorschläge vor.',
      'Indirekt: KI liefert nur Vorschläge, die immer manuell geprüft werden.',
    ],
  },

  B2_H: {
    id: 'B2_H',
    type: 'leaf',
    label: 'Hohe Kritikalität → DORA Baseline + verstärkte Kontrollen.',
    obligations: ['DORA_BASE', 'DORA_TLPT'],
    next: 'B4',
    info:
      'Das System hat hohe Kritikalität und direkten Einfluss auf Entscheidungen. ' +
      'Es gilt mindestens die DORA-Baseline plus zusätzliche interne Kontrollen und Überwachung.',
    examples: [
      'Kreditentscheidungs-KI mit unmittelbarer Umsetzung im Kernbankensystem.',
      'Intraday-Liquiditätssteuerung, bei der KI-Vorschläge automatisiert ausgeführt werden.',
    ],
  },

  B2_M: {
    id: 'B2_M',
    type: 'leaf',
    label: 'Mittlere Kritikalität → proportionale DORA Baseline.',
    obligations: ['DORA_BASE_LIGHT'],
    next: 'B4',
    info:
      'Das System ist für wichtige Funktionen relevant, trifft aber keine vollautomatischen Entscheidungen. ' +
      'Die DORA-Baseline kann proportional und risikoangemessen umgesetzt werden.',
    examples: [
      'Scoring-Modell, dessen Ergebnisse durch Sachbearbeitende regelmäßig plausibilisiert werden.',
      'Monitoring-Dashboards, die Warnungen liefern, ohne automatische Aktionen auszulösen.',
    ],
  },

  B3: {
    id: 'B3',
    type: 'question',
    label: 'Wird KI lediglich unterstützend eingesetzt (ohne kritische Wirkung)?',
    yes: 'B3_N',
    no: 'B3_R',
    info:
      'Hier wird geprüft, ob das KI-System zwar eingesetzt wird, aber nur eine nachgeordnete, nicht kritische Rolle spielt. ' +
      'Trotzdem können grundlegende DORA-Anforderungen relevant sein.',
    examples: [
      'KI-gestützte Textbausteinvorschläge für interne Dokumentation.',
      'Ein Chatbot für interne IT-Support-Anfragen.',
    ],
  },

  B3_N: {
    id: 'B3_N',
    type: 'leaf',
    label: 'Nicht-kritische KI-Unterstützung.',
    obligations: ['DORA_BASE_LIGHT'],
    next: 'B4',
    info:
      'Die KI wird nur unterstützend und nicht in kritischen Kernprozessen eingesetzt. ' +
      'Es gelten grundsätzliche, aber weniger weitreichende IKT-Kontrollen.',
    examples: [
      'Tool zur automatischen Erstellung von Meeting-Notizen.',
      'Interne Empfehlungssysteme ohne direkte Kundenwirkung.',
    ],
  },

  B3_R: {
    id: 'B3_R',
    type: 'leaf',
    label: 'Unklar → konservative Einstufung prüfen & dokumentieren.',
    obligations: ['DORA_BASE', 'DORA_TLPT'],
    next: 'B4',
    info:
      'Wenn die Kritikalität unklar ist, sollte eine konservative Einstufung gewählt und sauber dokumentiert werden. ' +
      'Die DORA-Anforderungen werden eher strenger als zu lax ausgelegt.',
    examples: [
      'Neuartige KI-Anwendung, deren Auswirkung auf den Prozess noch nicht abschließend verstanden ist.',
      'Pilotprojekte mit begrenzter, aber potenziell wachsender Bedeutung.',
    ],
  },

  // --- DORA Phase 2: Drittanbieter ---
  B4: {
    id: 'B4',
    type: 'question',
    label: 'Wird das System (ganz/teilweise) von externem IKT-Dienstleister bereitgestellt?',
    yes: 'B5',
    no: 'B6',
    info:
      'Diese Frage klärt, ob das KI-System als externer Service (z. B. Cloud-/KI-Plattform) bezogen wird. ' +
      'Das bestimmt, welche DORA-Anforderungen an IKT-Drittanbieter gelten.',
    examples: [
      'Nutzung eines externen LLM-API-Services oder einer Hyperscaler-KI-Plattform.',
      'Komplett intern betriebenes Modell ohne externe IKT-Dienstleister (Antwort „Nein“).',
    ],
  },

  B5: {
    id: 'B5',
    type: 'question',
    label: 'Ist der Dienstleister potenziell kritischer IKT-Drittanbieter (z. B. Hyperscaler/KI-Plattform)?',
    yes: 'B5_C',
    no: 'B5_N',
    info:
      'Hier wird unterschieden, ob es sich um einen potenziell kritischen IKT-Drittanbieter handelt ' +
      '(z. B. große Cloud-Plattformen oder zentrale KI-Provider), auf die das Institut stark angewiesen ist.',
    examples: [
      'Einsatz eines globalen Hyperscalers als zentrale KI-Plattform.',
      'Spezialisierter Drittanbieter, der für einen kritischen KI-Service Single Point of Failure wäre.',
    ],
  },

  B5_C: {
    id: 'B5_C',
    type: 'leaf',
    label: 'Kritischer oder quasi-kritischer IKT-Drittanbieter.',
    obligations: ['DORA_THIRDPARTY_PLUS', 'DORA_THIRDPARTY_DD'],
    next: 'B7',
    info:
      'Bei (potenziell) kritischen IKT-Drittanbietern gelten erweiterte Anforderungen aus DORA, ' +
      'insbesondere zu Monitoring, Konzentrationsrisiken, Exit-Strategien und ggf. Aufsichtsinteraktion.',
    examples: [
      'Ein großer KI-Dienstleister, über den ein wesentlicher Teil der Kernprozesse läuft.',
      'Ein Cloud-Anbieter, der zentrale Datenhaltung und KI-Ausführung bündelt.',
    ],
  },

  B5_N: {
    id: 'B5_N',
    type: 'leaf',
    label: 'Nicht-kritischer IKT-Dienstleister (proportional).',
    obligations: ['DORA_THIRDPARTY_STANDARD', 'DORA_THIRDPARTY_DD'],
    next: 'B7',
    info:
      'Der IKT-Dienstleister wird nicht als kritisch eingestuft. Es gelten die „normalen“ DORA-Anforderungen ' +
      'für IKT-Drittanbieter, proportional zum Risiko.',
    examples: [
      'Externe KI-Komponente für nicht-entscheidungsrelevante Auswertungen.',
      'Dienstleister für vorverarbeitete Datenfeeds ohne direkten Kundenimpact.',
    ],
  },

  B6: {
    id: 'B6',
    type: 'leaf',
    label: 'Kein externer IKT-Dienstleister (volle interne Verantwortung).',
    obligations: ['DORA_BASE'],
    next: 'B7',
    info:
      'Das KI-System wird vollständig intern betrieben. Das Institut trägt die volle technische und organisatorische Verantwortung ' +
      'für Betrieb, Sicherheit und Resilienz.',
    examples: [
      'Eigenentwickeltes Modell, das auf eigener Infrastruktur (On-Prem) betrieben wird.',
      'Keine Nutzung externer Plattformen für Training oder Inferenz.',
    ],
  },

  // --- DORA Phase 3: Datenfluss ---
  B7: {
    id: 'B7',
    type: 'question',
    label: 'Werden produktive Kunden-/Transaktionsdaten oder kritische Informationen an externe KI gesendet?',
    yes: 'B7_S',
    no: 'B7_N',
    info:
      'Diese Frage fokussiert auf den Datenfluss: Werden sensible oder produktive Daten an externe KI-Dienste übermittelt? ' +
      'Davon hängen Anforderungen an Schutzmaßnahmen, Verschlüsselung und vertragliche Regelungen ab.',
    examples: [
      'Senden von Kundendaten an einen externen LLM-Service zur Textanalyse.',
      'Nutzung von Test- oder Dummy-Daten ohne Personenbezug (Antwort „Nein“).',
    ],
  },

  B7_S: {
    id: 'B7_S',
    type: 'leaf',
    label: 'Sensible Daten → starker Schutz-/Monitoring-Pfad.',
    obligations: ['DORA_DATA_PROTECTION_STRONG'],
    next: 'B8',
    info:
      'Werden produktive oder sensible Daten an externe KI übertragen, sind starke Schutzmaßnahmen erforderlich: ' +
      'Datenklassifizierung, Verschlüsselung, DLP, Logging und klare vertragliche Regelungen.',
    examples: [
      'Übermittlung von Transaktionsdaten an eine externe Anomalie-Erkennung.',
      'Verarbeitung von KYC-Daten über ein externes KI-Modul.',
    ],
  },

  B7_N: {
    id: 'B7_N',
    type: 'leaf',
    label: 'Keine/lediglich Testdaten → Standard-Sicherheitsmaßnahmen.',
    obligations: ['DORA_BASE_LIGHT'],
    next: 'B8',
    info:
      'Wenn keine produktiven oder kritischen Daten an externe KI übermittelt werden, reichen in der Regel ' +
      'Standard-Sicherheitsmaßnahmen aus. Eine Dokumentation der Annahmen bleibt dennoch wichtig.',
    examples: [
      'Nutzung rein synthetischer Daten für Experimente.',
      'Ausschließliche Offline-Tests ohne Live-Kundendaten.',
    ],
  },

  // --- DORA Phase 4: Modellveränderung ---
  B8: {
    id: 'B8',
    type: 'question',
    label: 'Verändert sich das Modell im Betrieb (Online-Learning, Finetuning, regelmäßiges Retraining)?',
    yes: 'B8_D',
    no: 'B8_S',
    info:
      'Hier wird geprüft, ob das Modell sich im Betrieb verändert (dynamisches Modell) oder statisch bleibt. ' +
      'Dynamische Modelle erfordern stärkere Change- und Monitoringprozesse.',
    examples: [
      'Regelmäßiges Retraining mit neuen Daten im Monatszyklus.',
      'Online-Learning, das Gewichte im laufenden Betrieb anpasst.',
      'Statische Modelle mit seltenen, klar geplanten Releases (Antwort „Nein“).',
    ],
  },

  B8_D: {
    id: 'B8_D',
    type: 'leaf',
    label: 'Dynamisches Modell → verstärktes Monitoring/Change/Controls.',
    obligations: ['DORA_MONITORING_AI', 'DORA_INCIDENT_MGMT'],
    next: 'END',
    info:
      'Bei dynamischen Modellen sind strukturierte Change-, Freigabe- und Monitoringprozesse zwingend: ' +
      'Drift-Überwachung, Performance-Checks, Dokumentation von Änderungen und klare Eskalationswege.',
    examples: [
      'Ein Fraud-Detection-Modell, das regelmäßig mit aktuellen Transaktionsdaten nachtrainiert wird.',
      'Ein Empfehlungssystem, das kontinuierlich Online-Learning nutzt.',
    ],
  },

  B8_S: {
    id: 'B8_S',
    type: 'leaf',
    label: 'Statisches Modell → normale Change-Prozesse (proportional).',
    obligations: ['DORA_BASE_LIGHT', 'DORA_INCIDENT_MGMT'],
    next: 'END',
    info:
      'Statische Modelle erfordern zwar ebenfalls Change- und Freigabeprozesse, diese können aber ' +
      'proportional und weniger häufig ausgestaltet werden.',
    examples: [
      'Ein einmal trainiertes Scorecard-Modell, das nur bei Bedarf (z. B. jährlich) aktualisiert wird.',
      'Ein statisches Regel-/ML-Modell mit klar definierten Release-Zyklen.',
    ],
  },

  // --- Endknoten ---
  END: {
    id: 'END',
    type: 'leaf',
    label: 'Analyse beendet.',
    obligations: [],
    info:
      'Der Entscheidungs- und Prüfpfad ist abgeschlossen. Ergebnisse können dokumentiert, exportiert ' +
      'und für interne Freigabeprozesse (z. B. Governance- oder Risk-Committees) genutzt werden.',
    examples: [
      'Export des Pfads und der fehlenden Anforderungen als PDF zur Ablage in der Modell-Dokumentation.',
      'Übergabe der Ergebnisse an das Modellrisikomanagement oder an das interne Kontrollsystem.',
    ],
  },
};

/**
 * Ableitung von Locks/Flags aus dem bisherigen Pfad/Antworten.
 * - High-Risk wird „gelockt“, sobald G_AI_HR_LOCK = yes beantwortet wurde.
 */
export function deriveConsistencyLocks({ answers, pathIds }) {
  const locks = new Set();

  if (answers?.G_AI_HR_LOCK === 'yes') {
    locks.add(CONSISTENCY_LOCKS.AI_HIGH_RISK);
  }

  // Optional: auch direkt aus A3=yes locken (strenger):
  // if (answers?.A3 === 'yes') locks.add(CONSISTENCY_LOCKS.AI_HIGH_RISK);

  void pathIds;
  return locks;
}

/**
 * Globale Validierungsregeln pro Transition.
 * Call this BEFORE you commit a nextId to path.
 *
 * Returns:
 *  - { nextId } normal
 *  - { nextId: 'W_AI_CONTRADICTION' } if inconsistent
 */
export function validateNextNode({ currentId, answer, nextId, answers, pathIds }) {
  const locks = deriveConsistencyLocks({ answers, pathIds });

  // Rule 1: Wenn High-Risk gelockt, darf nicht in Non-HR Pfade „entschärft“ werden.
  // Konkreter Konflikt: A3=no (führt zu A3_NON_HR) nachdem HR-Lock gesetzt wurde.
  if (locks.has(CONSISTENCY_LOCKS.AI_HIGH_RISK)) {
    const isTryingToDeescalate = (currentId === 'A3' && answer === 'no') || nextId === 'A3_NON_HR';

    if (isTryingToDeescalate) {
      return { nextId: 'W_AI_CONTRADICTION' };
    }
  }

  // Rule 2: Verbotene Praxis darf nicht ohne Review-Gate „weiter“ führen
  if (currentId === 'A2' && answer === 'yes' && nextId !== 'A2_ja') {
    return { nextId: 'W_AI_PROHIBITED_ESCALATION' };
  }

  return { nextId };
}

// -------------------- Requirements API --------------------
export function getRequirementChain(leafId) {
  const def = decisionTree[leafId];
  const reqs = [];
  const summaryId = `${leafId}__req__summary`;

  if (!def?.obligations?.length) return { reqs, summaryId };

  for (const pkgKey of def.obligations) {
    const pkg = obligationsCatalog[pkgKey];
    if (!pkg?.items?.length) continue;

    pkg.items.forEach((text, idx) => {
      reqs.push({
        id: `${leafId}__req__${pkgKey}__${idx}`,
        text,
        pkgKey,
        pkgLabel: pkg.label || pkgKey,
        articles: pkg.articles || [],
        leafId,
      });
    });
  }

  return { reqs, summaryId };
}

export function getNextInRequirementChain(currentReqId) {
  const [leafId] = currentReqId.split('__req__');
  const { reqs, summaryId } = getRequirementChain(leafId);
  const idx = reqs.findIndex((r) => r.id === currentReqId);
  const nextReqId = idx >= 0 && idx + 1 < reqs.length ? reqs[idx + 1].id : undefined;
  return { leafId, nextReqId, summaryId };
}

