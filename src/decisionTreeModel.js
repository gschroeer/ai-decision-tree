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
      'Erfüllt das KI-System die Transparenzpflichten gemäß Art. 50 (z. B. Offenlegung, dass ein System KI-basiert ist)?',
      'Werden betroffene Nutzerinnen und Nutzer klar darüber informiert, dass sie mit einem KI-System interagieren?',
      'Haben Sie dokumentiert, in welchen Kanälen und Prozessen die Transparenzhinweise bereitgestellt werden?',
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
    label: 'AI Act: Begrenztes/Minimales Risiko',
    articles: ['AI Act: Transparenzpflichten (z. B. Art. 50 je nach Fassung)'],
    items: [
      'Haben Sie die relevanten Transparenzpflichten geprüft (z. B. Kennzeichnung/Information)?',
      'Haben Sie sichergestellt, dass interne Policies greifen (Model Risk, IT-Security)?',
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
const P = (x, y) => ({ x, y });

// 👉 DORA rechts neben AI Act (Offset in X)
let DORA_OFFSET_X = 2200;
const PD = (x, y) => P(x + DORA_OFFSET_X, y);

export const decisionTree = {
  // --- AI Act (Kompakt) ---
  A1: {
    id: 'A1',
    type: 'question',
    label: 'Handelt es sich um ein KI-System nach Art. 3 AI Act?',
    yes: 'A2',
    no: 'A0',
    position: P(0, 0),
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
    position: P(-420, 160),
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
    position: P(0, 160),
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
    next: 'D0',
    position: P(-420, 320),
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
    position: P(0, 320),
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
    next: 'D0',
    position: P(420, 480),
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
    position: P(0, 480),
    info:
      'Das System fällt nicht in eine Hochrisiko-Kategorie. Es können dennoch Transparenz- und interne Governance-Pflichten bestehen, ' +
      'insbesondere Kennzeichnungspflichten und allgemeine IT-/Risikomanagementvorgaben.',
    examples: [
      'Ein interner KI-Assistent zur Textunterstützung ohne direkten Einfluss auf Kundentransaktionen.',
      'Ein Empfehlungssystem für interne Wissensartikel.',
    ],
  },

  // --- DORA Start ---
  D0: {
    id: 'D0',
    type: 'question',
    label: 'Soll mit dem DORA-Teil gestartet werden?',
    yes: 'B1',
    no: 'END',
    position: PD(-420, 640),
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
    position: PD(-420, 800),
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
    position: PD(-700, 960),
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
    position: PD(-860, 1120),
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
    position: PD(-540, 1120),
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
    position: PD(-140, 960),
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
    position: PD(-300, 1120),
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
    position: PD(20, 1120),
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
    position: PD(-420, 1320),
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
    label:
      'Ist der Dienstleister potenziell kritischer IKT-Drittanbieter (z. B. Hyperscaler/KI-Plattform)?',
    yes: 'B5_C',
    no: 'B5_N',
    position: PD(-140, 1480),
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
    position: PD(20, 1640),
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
    position: PD(340, 1640),
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
    position: PD(-700, 1480),
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
    label:
      'Werden produktive Kunden-/Transaktionsdaten oder kritische Informationen an externe KI gesendet?',
    yes: 'B7_S',
    no: 'B7_N',
    position: PD(-420, 1840),
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
    position: PD(-140, 2000),
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
    position: PD(180, 2000),
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
    label:
      'Verändert sich das Modell im Betrieb (Online-Learning, Finetuning, regelmäßiges Retraining)?',
    yes: 'B8_D',
    no: 'B8_S',
    position: PD(-420, 2200),
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
    position: PD(-140, 2360),
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
    position: PD(180, 2360),
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
    position: P(-420, 2520),
    info:
      'Der Entscheidungs- und Prüfpfad ist abgeschlossen. Ergebnisse können dokumentiert, exportiert ' +
      'und für interne Freigabeprozesse (z. B. Governance- oder Risk-Committees) genutzt werden.',
    examples: [
      'Export des Pfads und der fehlenden Anforderungen als PDF zur Ablage in der Modell-Dokumentation.',
      'Übergabe der Ergebnisse an das Modellrisikomanagement oder an das interne Kontrollsystem.',
    ],
  },
};

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

// -------- Blueprint / Layout --------
const GRID_Y = 140;
const STEP_X = 280;
const MIN_DX = 240;
const MIN_DY = 110;

// Ab wann wir zusätzlich in X ausweichen, wenn Y zu groß wird
const MAX_Y = 4200;
const MAX_TRIES = 400;

function isCollision(a, b) {
  return Math.abs(a.x - b.x) < MIN_DX && Math.abs(a.y - b.y) < MIN_DY;
}

function computeBinarySubtreeLayout(rootId, anchor) {
  // Binary layout via yes/no edges, classic: No=links, Yes=rechts.
  const visited = new Set();
  function dfs(id) {
    if (!id || visited.has(id)) return;
    const n = decisionTree[id];
    if (!n) return;
    visited.add(id);
    if (n.type === 'question') {
      dfs(n.no);
      dfs(n.yes);
    }
  }
  dfs(rootId);

  let cursor = 0;
  const xIndex = {};
  const level = {};
  function dfsLayout(id, depth = 0) {
    const n = decisionTree[id];
    if (!n) return;
    level[id] = depth;
    if (n.type === 'question' && n.no) dfsLayout(n.no, depth + 1);
    xIndex[id] = cursor++;
    if (n.type === 'question' && n.yes) dfsLayout(n.yes, depth + 1);
  }
  dfsLayout(rootId, 0);

  const xs = Object.values(xIndex);
  const mid = xs.length ? (Math.min(...xs) + Math.max(...xs)) / 2 : 0;

  let maxDepth = 0;
  for (const d of Object.values(level)) maxDepth = Math.max(maxDepth, d);

  const positions = {};
  visited.forEach((id) => {
    positions[id] = {
      x: anchor.x + ((xIndex[id] ?? 0) - mid) * STEP_X,
      y: anchor.y + (level[id] ?? 0) * GRID_Y,
    };
  });

  return { positions, maxDepth };
}

// ======================
// 🔹 Auto-Spacing Calibration für DORA-Bereich
// ======================
function computeDynamicDoraOffset(positions, aiNodes, baseOffset = 2200, minGap = 400) {
  // finde die rechte Kante aller AI-Nodes
  let maxRight = -Infinity;
  for (const id of aiNodes) {
    const pos = positions.get(id);
    if (!pos) continue;
    // schätze Nodebreite grob mit 360px
    const rightEdge = pos.x + 360;
    if (rightEdge > maxRight) maxRight = rightEdge;
  }

  // falls keine AI-Nodes gesetzt → nutze Standard-Offset
  if (maxRight === -Infinity) return baseOffset;

  // neue DORA-Start-Position = rechte Kante + Mindestabstand
  const dynamicOffset = maxRight + minGap;

  // Sicherheit: nie kleiner als Baseline
  return Math.max(dynamicOffset, baseOffset);
}

function computeDoraPhasedLayoutFromD0Anchor(d0Pos) {
  // DORA startet bei D0: B1 direkt darunter, danach Achsen B4/B7/B8 jeweils darunter.
  const stageRoots = ['B1', 'B4', 'B7', 'B8'];
  const baseX = d0Pos.x;

  let baseY = d0Pos.y + GRID_Y;
  const out = {};

  for (const rootId of stageRoots) {
    if (!decisionTree[rootId]) continue;
    const { positions, maxDepth } = computeBinarySubtreeLayout(rootId, { x: baseX, y: baseY });
    Object.assign(out, positions);
    baseY = baseY + (maxDepth + 1) * GRID_Y;
  }

  return out;
}

/**
 * Erzeugt Knoten & Kanten (inkl. Positionen, aktive Edges) für die aktuell besuchten IDs.
 * Optional: debugLayout=true -> console.warn bei Layout-Kollisionen.
 */
export function buildGraphBlueprint({ visitedIds, answers, continued, expanded, debugLayout = false }) {
  void continued;

  // --- globale Layout-Parameter ---
  const placed = [];
  const occupied = new Set();
  const positions = new Map();
  const nodes = [];
  const edges = [];

  const seen = new Set(visitedIds);
  const stepOf = (id) => visitedIds.indexOf(id) + 1;
  const expandedSet = expanded ? new Set(expanded) : new Set();

  // --- grid setup ---
  const slotKey = (x, y) => `${Math.round(x / STEP_X)}:${Math.round(y / GRID_Y)}`;

  // =====================================================
  // 🔹 Cluster Setup: eigene Kollisionsräume für AI + DORA
  // =====================================================
  const clusterPools = {
    AI: { placed: [], occupied: new Set() },
    DORA: { placed: [], occupied: new Set() },
  };

  const getClusterOf = (id) => (id.startsWith('B') || id === 'D0' ? 'DORA' : 'AI');

  // =====================================================
  // 🔹 Helper: Collision-Avoidance pro Cluster
  // =====================================================
  function avoidCollision(pos, id = '?', { lockX = false } = {}) {
    const cluster = getClusterOf(id);
    const { placed: placedC, occupied: occC } = clusterPools[cluster];

    const startX = pos.x;
    const startY = pos.y;
    let x = startX;
    let y = startY;

    for (let attempt = 0; attempt < MAX_TRIES; attempt++) {
      const key = slotKey(x, y);

      let conflict = null;
      if (occC.has(key)) {
        conflict = placedC.find((p) => slotKey(p.x, p.y) === key) || null;
      } else {
        conflict = placedC.find((p) => isCollision({ x, y }, p)) || null;
      }

      if (!conflict) {
        occC.add(key);
        placedC.push({ id, x, y });
        return { x, y };
      }

      if (debugLayout) {
        console.warn(`Layout conflict: ${id} overlaps with ${conflict.id}`);
      }

      // immer erst vertikal verschieben
      y += GRID_Y;
      if (!lockX && y > MAX_Y) {
        x += STEP_X;
        y = startY;
      }
    }

    placedC.push({ id, x, y });
    return { x, y };
  }

  // =====================================================
  // 🔹 Helper: Baumverzweigung (Ja/Nein-Spreizung)
  // =====================================================
  function computeBranchPosition(parentPos, side = 'yes', depth = 1) {
    const dx = side === 'yes' ? STEP_X * 0.8 : -STEP_X * 0.8;
    const dy = GRID_Y * depth;
    return { x: parentPos.x + dx, y: parentPos.y + dy };
  }

  // =====================================================
  // 🔹 Helper: Dynamische DORA-Abstands-Kalibrierung
  // =====================================================
  function computeDynamicDoraOffset(positions, aiNodes, baseOffset = 2200, minGap = 400) {
    let maxRight = -Infinity;
    for (const id of aiNodes) {
      const pos = positions.get(id);
      if (!pos) continue;
      const rightEdge = pos.x + 360;
      if (rightEdge > maxRight) maxRight = rightEdge;
    }
    if (maxRight === -Infinity) return baseOffset;
    return Math.max(maxRight + minGap, baseOffset);
  }

  // =====================================================
  // 🔹 PASS 1: Grundknoten (AI + DORA Entry)
  // =====================================================
  for (const id of visitedIds) {
    const def = decisionTree[id];
    if (!def) continue;

    const pos = avoidCollision(def.position ?? { x: 0, y: 0 }, id);

    positions.set(id, pos);
    nodes.push({
      id,
      kind: def.type,
      position: pos,
      meta: {
        label: def.label,
        obligationKeys: def.obligations,
        nextId: def.next,
        answer: answers[id],
        step: stepOf(id),
      },
    });
  }

  // =====================================================
  // 🔹 PASS 2: Requirements (rechts neben Leaf; Summary darunter)
  // =====================================================
  const REQ_OFFSET_X = STEP_X * 2.6; // mehr horizontaler Abstand
  for (const leafId of expandedSet) {
    const def = decisionTree[leafId];
    if (!def) continue;

    const { reqs, summaryId } = getRequirementChain(leafId);
    const leafPos = positions.get(leafId) ?? (def.position ?? { x: 0, y: 0 });

    const baseX = leafPos.x + REQ_OFFSET_X;
    const baseY = leafPos.y;

    reqs.forEach((r, idx) => {
      if (!seen.has(r.id)) return;

      const pos = avoidCollision({ x: baseX, y: baseY + idx * GRID_Y }, r.id, { lockX: true });
      positions.set(r.id, pos);
      nodes.push({
        id: r.id,
        kind: 'req',
        position: pos,
        meta: {
          label: r.text,
          pkgLabel: r.pkgLabel,
          articles: r.articles,
          answer: answers[r.id],
          step: stepOf(r.id),
        },
      });
    });

    if (seen.has(summaryId)) {
      const pos = avoidCollision(
        { x: baseX, y: baseY + (reqs.length + 1.5) * GRID_Y },
        summaryId,
        { lockX: true }
      );
      positions.set(summaryId, pos);
      nodes.push({
        id: summaryId,
        kind: 'summary',
        position: pos,
        meta: { step: stepOf(summaryId) },
      });
    }
  }

  // =====================================================
  // 🔹 Dynamische DORA-Positionierung nach AI-Layout
  // =====================================================
  const aiNodeIds = [...positions.keys()].filter((id) => id.startsWith('A'));
  DORA_OFFSET_X = computeDynamicDoraOffset(positions, aiNodeIds, 2200, 400);
  if (debugLayout) {
    console.info(`[Layout] Dynamischer DORA Offset gesetzt auf: ${DORA_OFFSET_X}px`);
  }

  // =====================================================
  // 🔹 PASS 3: DORA-Baum phasenweise, stabil
  // =====================================================
  if (seen.has('D0')) {
    const d0Pos = positions.get('D0') ?? (decisionTree.D0?.position ?? { x: 0, y: 0 });
    const rawDora = computeDoraPhasedLayoutFromD0Anchor({
      x: d0Pos.x + DORA_OFFSET_X,
      y: d0Pos.y,
    });

    const doraIds = visitedIds
      .filter((id) => id.startsWith('B') && rawDora[id])
      .sort((a, b) => rawDora[a].y - rawDora[b].y || rawDora[a].x - rawDora[b].x);

    let shiftY = 0;
    const collidesWithPlaced = () => {
      for (const id of doraIds) {
        const base = rawDora[id];
        const testPos = { x: base.x, y: base.y + shiftY };
        for (const p of clusterPools.DORA.placed) {
          if (isCollision(testPos, p)) return true;
        }
      }
      return false;
    };
    while (collidesWithPlaced()) shiftY += GRID_Y;

    for (const id of doraIds) {
      const def = decisionTree[id];
      if (!def) continue;

      const base = rawDora[id];
      const pos = avoidCollision(
        { x: base.x, y: base.y + shiftY },
        id,
        { lockX: true }
      );

      positions.set(id, pos);
      nodes.push({
        id,
        kind: def.type === 'question' ? 'question' : 'leaf',
        position: pos,
        meta: {
          label: def.label,
          obligationKeys: def.obligations,
          nextId: def.next,
          answer: answers[id],
          step: stepOf(id),
        },
      });
    }
  }

  // 🔹 Edges (optional)
  for (const id of visitedIds) {
    const def = decisionTree[id];
    if (!def) continue;

    if (def.yes && positions.has(def.yes))
      edges.push({ id: `${id}-yes`, source: id, target: def.yes });
    if (def.no && positions.has(def.no))
      edges.push({ id: `${id}-no`, source: id, target: def.no });
    if (def.next && positions.has(def.next))
      edges.push({ id: `${id}-next`, source: id, target: def.next });
  }

 // ---- Requirements Edges ----
 for (const leafId of expandedSet) {
  const { reqs, summaryId } = getRequirementChain(leafId);

  if (reqs.length) {
    const first = reqs[0].id;
    if (seen.has(leafId) && seen.has(first)) {
      edges.push({ id: `${leafId}-check-${first}`, source: leafId, target: first, label: 'Check' });
    }
  }

  reqs.forEach((r, idx) => {
    const next = reqs[idx + 1];
    if (next && seen.has(r.id) && seen.has(next.id)) {
      edges.push({ id: `${r.id}-yes-${next.id}`, source: r.id, target: next.id, label: 'Ja' });
      edges.push({ id: `${r.id}-no-${next.id}`, source: r.id, target: next.id, label: 'Nein' });
    } else if (!next && seen.has(r.id) && seen.has(summaryId)) {
      edges.push({ id: `${r.id}-yes-${summaryId}`, source: r.id, target: summaryId, label: 'Ja' });
      edges.push({ id: `${r.id}-no-${summaryId}`, source: r.id, target: summaryId, label: 'Nein' });
    }
  });

  const nextId = decisionTree[leafId]?.next;
  if (nextId && seen.has(summaryId) && seen.has(nextId)) {
    edges.push({ id: `${summaryId}-next-${nextId}`, source: summaryId, target: nextId, label: 'Weiter' });
  }
}

// ---- Active edges entlang visited Pfad ----
const activeIds = new Set();
for (let i = 0; i < visitedIds.length - 1; i++) {
  const a = visitedIds[i];
  const b = visitedIds[i + 1];
  const n = decisionTree[a];

  if (n?.type === 'question') {
    if (n.yes === b && answers[a] === 'yes') activeIds.add(`${a}-yes-${b}`);
    if (n.no === b && answers[a] === 'no') activeIds.add(`${a}-no-${b}`);
  } else if (a.includes('__req__')) {
    const ans = answers[a];
    if (ans === 'yes') activeIds.add(`${a}-yes-${b}`);
    if (ans === 'no') activeIds.add(`${a}-no-${b}`);
  } else {
    if (n?.next === b) activeIds.add(`${a}-next-${b}`);
    const { reqs } = getRequirementChain(a);
    if (reqs?.[0]?.id === b) activeIds.add(`${a}-check-${b}`);
  }
}
edges.forEach((e) => {
  e.active = activeIds.has(e.id);
});

// ---- missingByLeaf (für Summary/Export) ----
const missingByLeaf = {};
for (const leafId of expandedSet) {
  const { reqs } = getRequirementChain(leafId);
  missingByLeaf[leafId] = reqs.filter((r) => answers[r.id] !== 'yes');
}

return { nodes, edges, missingByLeaf };
}

